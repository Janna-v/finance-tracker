import { useState } from "react";
import { createTransaction } from "../api/transactions";

export default function TransactionForm({ onCreated }) {
  
  const [form, setForm] = useState({
    type: "income",
    amount: "",
    category: "",
    description: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      ...form,
      amount: parseFloat(form.amount),
      date: new Date().toISOString().split("T")[0]
    };

    createTransaction(payload).then(() => {
      setForm({
        type: "income",
        amount: "",
        category: "",
        description: ""
      });

      onCreated?.();
    });
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow space-y-2">
      
      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="border p-2 w-full"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        placeholder="amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="border p-2 w-full"
      />

      <input
        placeholder="category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="border p-2 w-full"
      />

      <input
        placeholder="description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="border p-2 w-full"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}