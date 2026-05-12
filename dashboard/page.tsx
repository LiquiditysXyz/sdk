import StrategyCard from "@/components/StrategyCard";

export default function Dashboard() {
  const strategies = [
    {
      title: "Buyback",
      description: "Automatically buy tokens from market."
    },
    {
      title: "LP Injection",
      description: "Add liquidity to DEX pools."
    },
    {
      title: "Burn",
      description: "Reduce token supply automatically."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Liquiditys Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {strategies.map((item, index) => (
          <StrategyCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
