import CostCalculator from "@/components/calculator/CostCalculator";

const Calculator = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CostCalculator />
      </div>
    </div>
  );
};

export default Calculator;