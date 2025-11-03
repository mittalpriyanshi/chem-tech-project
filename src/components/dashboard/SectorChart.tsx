import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const sampleData = [
	{ sector: 'Power', emissions: 1024 },
	{ sector: 'Industry', emissions: 890 },
	{ sector: 'Transport', emissions: 320 },
	{ sector: 'Buildings', emissions: 340 },
	{ sector: 'Agriculture', emissions: 210 },
	{ sector: 'CCUS Captured', emissions: 12.4 },
];

const SectorChart = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Sector Emissions Breakdown</CardTitle>
			</CardHeader>
			<CardContent className="h-[400px]">
				<div className="h-full w-full">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart data={sampleData} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="sector" tick={{ fontSize: 12 }} interval={0} height={50} angle={-10} dy={10} />
							<YAxis tick={{ fontSize: 12 }} label={{ value: 'Mt CO₂', angle: -90, position: 'insideLeft' }} />
							<Tooltip formatter={(v: number) => `${v} Mt`} />
							<Legend />
							<Bar dataKey="emissions" name="Emissions (Mt)" fill="hsl(var(--primary))" radius={[4,4,0,0]} />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default SectorChart;
