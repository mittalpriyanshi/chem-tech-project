import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SectorChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sector Emissions Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px] flex items-center justify-center bg-muted/20 rounded-b-lg">
        <p className="text-muted-foreground">Dynamic Chart Placeholder</p>
      </CardContent>
    </Card>
  );
};

export default SectorChart;
