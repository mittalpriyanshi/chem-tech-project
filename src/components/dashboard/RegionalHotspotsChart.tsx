import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
	Bar,
	BarChart,
	CartesianGrid,
	LabelList,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const stateData = [
	{ state: 'Gujarat', emissions: 285 },
	{ state: 'Maharashtra', emissions: 267 },
	{ state: 'Odisha', emissions: 234 },
	{ state: 'Jharkhand', emissions: 198 },
	{ state: 'Chhattisgarh', emissions: 176 },
	{ state: 'Uttar Pradesh', emissions: 162 },
];

const RegionalHotspotsChart = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Regional Hotspots (Top States)</CardTitle>
			</CardHeader>
			<CardContent className="h-[400px]">
				<div className="h-full w-full">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							layout="vertical"
							data={stateData}
							margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis type="number" tick={{ fontSize: 12 }} domain={[0, 'dataMax + 40']} label={{ value: 'Mt CO₂', position: 'insideBottomRight', offset: -4 }} />
							<YAxis type="category" dataKey="state" width={120} tick={{ fontSize: 12 }} />
							<Tooltip formatter={(v: number) => `${v} Mt`} />
							<Bar dataKey="emissions" name="Emissions (Mt)" fill="hsl(var(--accent))" radius={[0,4,4,0]}>
								<LabelList dataKey="emissions" position="right" formatter={(v: number) => `${v}`} className="text-xs" />
							</Bar>
						</BarChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default RegionalHotspotsChart;
