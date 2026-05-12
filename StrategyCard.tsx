type Props = {
  title: string;
  description: string;
};

export default function StrategyCard({
  title,
  description
}: Props) {
  return (
    <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-900">
      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>

      <p className="text-zinc-400">
        {description}
      </p>
    </div>
  );
}
