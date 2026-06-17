import { useParams } from "react-router-dom";

export default function TransactionDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Transaction Detail</h1>
      <p>ID: {id}</p>
    </div>
  );
}