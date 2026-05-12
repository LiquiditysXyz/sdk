export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-zinc-900 text-white text-center px-6">
      <h1 className="text-6xl font-bold mb-6">
        Autonomous Liquidity Engine
      </h1>

      <p className="max-w-2xl text-zinc-400 text-lg mb-8">
        Claim Pump.fun creator fees and route them through
        programmable strategies like buybacks, burns,
        LP injections, and treasury payouts.
      </p>

      <button className="px-8 py-4 rounded-xl bg-white text-black font-semibold">
        Launch App
      </button>
    </section>
  );
}
