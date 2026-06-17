import { useEffect, useState } from "react";
import { getTransactions } from "../api/transactions";

export function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const safePage = Number.isFinite(page) ? page : 0;
        const offset = safePage * limit;

        console.log("FETCH PAGE:", safePage, "OFFSET:", offset);

        const res = await getTransactions(limit, offset);

        console.log("BACKEND RESPONSE:", res);

        // Il tuo backend restituisce un array direttamente
        setTransactions(Array.isArray(res) ? res : []);

        // Per ora il backend non restituisce totalPages
        setTotalPages(1);

      } catch (err) {
        console.error("FETCH ERROR:", err);
        setTransactions([]);
      }
    };

    fetchData();
  }, [page]);

  return {
    transactions,
    page,
    setPage,
    totalPages
  };
}