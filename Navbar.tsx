export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-black text-white">
      <h1 className="text-2xl font-bold">Liquiditys</h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
      </div>
    </nav>
  );
}
