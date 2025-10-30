import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const EmissionsMap = ({ onStateClick }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>State-wise Emissions Map</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px] flex items-center justify-center bg-muted/20 rounded-b-lg">
        <p className="text-muted-foreground">Interactive Map Placeholder</p>
      </CardContent>
    </Card>
  );
};

export default EmissionsMap;
