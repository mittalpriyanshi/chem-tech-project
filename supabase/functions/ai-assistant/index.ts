import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
	"Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
	if (req.method === "OPTIONS") {
		return new Response(null, { headers: corsHeaders });
	}

	if (req.method !== "POST") {
		return new Response(
			JSON.stringify({ error: "Method not allowed" }),
			{ status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
		);
	}

	try {
		const contentType = req.headers.get("content-type") || "";
		if (!contentType.includes("application/json")) {
			return new Response(
				JSON.stringify({ error: "Content-Type must be application/json" }),
				{ status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
			);
		}

		let body: unknown = null;
		try {
			body = await req.json();
		} catch (_) {
			return new Response(
				JSON.stringify({ error: "Invalid JSON body" }),
				{ status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
			);
		}

		const message = (body as { message?: unknown })?.message;
		if (typeof message !== "string" || message.trim() === "") {
			return new Response(
				JSON.stringify({ error: "Missing or invalid 'message' in request body" }),
				{ status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
			);
		}

		const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
		if (!GEMINI_API_KEY) {
			return new Response(
				JSON.stringify({ error: "GEMINI_API_KEY is not configured" }),
				{ status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
			);
		}

		const upstream = await fetch(
			"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" + GEMINI_API_KEY,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] }),
			}
		);

		if (!upstream.ok) {
			const errText = await upstream.text().catch(() => "");
			return new Response(
				JSON.stringify({ error: "Gemini request failed", status: upstream.status, details: errText }),
				{ status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
			);
		}

		let data: any = {};
		try {
			data = await upstream.json();
		} catch (_) {
			data = {};
		}

		const answer: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

		return new Response(
			JSON.stringify({ answer }),
			{ status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
		);
	} catch (err) {
		const message = err instanceof Error ? err.message : "Unknown error";
		return new Response(
			JSON.stringify({ error: message }),
			{ status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
		);
	}
});