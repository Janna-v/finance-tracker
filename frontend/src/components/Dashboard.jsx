export default function Dashboard({ dashboard }) {
  if (!dashboard) return null;

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Dashboard</h2>

      <p>Income: {dashboard.income}€</p>
      <p>Expense: {dashboard.expense}€</p>
      <p>Balance: {dashboard.balance}€</p>

      <h3>Top Categories</h3>
      {dashboard.top_categories.map((c, index) => (
        <p key={index}>
          {c.category}: {c.total}€
        </p>
      ))}
    </div>
  );
}