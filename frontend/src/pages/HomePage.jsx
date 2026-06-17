import Card from "../components/Card";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";
import Pagination from "../components/Pagination";
import { useDashboard } from "../hooks/useDashboard";
import { useTransactions } from "../hooks/useTransactions";

export default function HomePage() {
  const dashboard = useDashboard();
  const { transactions, page, setPage, totalPages } = useTransactions();

  return (
    <>
      <TransactionForm />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Income" value={dashboard?.income ?? 0} color="bg-sky-900" />
        <Card title="Expense" value={dashboard?.expense ?? 0} color="bg-sky-800" />
        <Card title="Balance" value={dashboard?.balance ?? 0} color="bg-sky-700" />
      </div>

      <TransactionsList transactions={transactions} />

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
}