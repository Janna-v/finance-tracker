export default function Card({ title, value, color }) {
  return (
    <div className={`p-4 rounded ${color} shadow-lg shadow-blue-500/50`}>
      <h3 className="opacity-70  text-white p-4 font-bold text-2xl">{title}</h3>
      <p className="text-2xl font-bold  text-white">{value}</p>
    </div>
  );
}