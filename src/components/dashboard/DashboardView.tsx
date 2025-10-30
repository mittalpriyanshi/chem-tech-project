import { useState, useEffect } from "react";
import EmissionMetrics from "./EmissionMetrics.tsx";
import FilterControls from "./FilterControls.tsx";
// Import placeholder components
import EmissionsMap from "./EmissionsMap.tsx";
import SectorChart from "./SectorChart.tsx";

const DashboardView = () => {
  const [masterData, setMasterData] = useState(null);
  const [availableStates, setAvailableStates] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedState, setSelectedState] = useState("National");
  const [metricData, setMetricData] = useState([]);
  
  // Fetch master data on component load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/emissions-data.json');
        const data = await response.json();
        setMasterData(data);
        // Get a list of available states from the data
        setAvailableStates(Object.keys(data.states));
      } catch (error) {
        console.error("Failed to fetch emissions data:", error);
      }
    };
    fetchData();
  }, []);

  // Re-calculate and format data when filters change
  useEffect(() => {
    if (!masterData) return;

    const dataForSelection = (selectedState === "National")
      ? masterData.national[selectedYear]
      : masterData.states[selectedState]?.[selectedYear];

    if (!dataForSelection) {
      setMetricData([]);
      return;
    }
    
    // Format the data for the EmissionMetrics component
    const totalMetric = {
      title: "Total CO₂ Emissions",
      value: dataForSelection.total.value,
      change: dataForSelection.total.change,
      trend: dataForSelection.total.change.startsWith('+') ? 'up' : 'down',
      icon: "TrendingUp",
      color: "climate-red"
    };

    const sectorMetrics = Object.keys(dataForSelection.sectors).map(key => ({
      title: key.charAt(0).toUpperCase() + key.slice(1).replace("ccus", "CCUS Captured"),
      value: dataForSelection.sectors[key].value,
      change: dataForSelection.sectors[key].change,
      trend: dataForSelection.sectors[key].change.startsWith('+') ? 'up' : 'down',
      icon: dataForSelection.sectors[key].icon,
      color: dataForSelection.sectors[key].color,
    }));

    setMetricData([totalMetric, ...sectorMetrics]);

  }, [masterData, selectedYear, selectedState]);

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-2">India Emissions Dashboard</h1>
      <p className="text-muted-foreground mb-6">
        An interactive overview of CO₂ emissions by sector and state.
      </p>

      <FilterControls 
        onYearChange={setSelectedYear} 
        onStateChange={setSelectedState}
        availableStates={availableStates}
      />

      {/* <EmissionMetrics metrics={metricData} /> */}

      {/* Placeholders for the visual components */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
            <EmissionsMap onStateClick={setSelectedState} />
        </div>
        <div className="lg:col-span-2">
            <SectorChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
