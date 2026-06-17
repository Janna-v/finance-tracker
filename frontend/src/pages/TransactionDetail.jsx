import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function TransactionDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [transaction, setTransaction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState(null);
    
    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                setLoading(true);
                
                const res = await fetch(
                    `http://localhost:8000/transactions/${id}`
                );
                
                const data = await res.json();
                setTransaction(data);
                
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        
        fetchTransaction();
    }, [id]);
    
    useEffect(() => {
        if (transaction) {
            setForm(transaction);
        }
    }, [transaction]);
    
    const handleUpdate = async () => {
        console.log("FORM ATTUALE:", form);
        console.log("TIPO AMOUNT:", typeof form?.amount);
        console.log("DATA:", form?.date);

        
        try {
            const { id, ...cleanForm } = form;

const payload = {
  ...cleanForm,
  amount: Number(cleanForm.amount),
  date: cleanForm.date?.split("T")[0]
};

console.log("PAYLOAD CHE INVIO:", payload);
console.log("STRINGIFY:", JSON.stringify(payload));
            const res = await fetch(
                `http://localhost:8000/transactions/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(form)
                }
            );
            
            const data = await res.json();
            
            setTransaction(data);
            setEditMode(false);
            
        } catch (err) {
           console.log(err.response?.data);
        }
    };
    
    if (loading) return <div>Loading...</div>;
    if (!transaction) return <div>Not found</div>;
    
    return (
  <div className="p-4 bg-white rounded shadow">

    <h1 className="text-xl font-bold mb-4">
      Transaction #{transaction.id}
    </h1>

    {!editMode ? (
      <>
        <p>Type: {transaction.type}</p>
        <p>Amount: {transaction.amount}</p>
        <p>Category: {transaction.category}</p>
        <p>Description: {transaction.description}</p>
        <p>Date: {transaction.date}</p>

        <button
          onClick={() => setEditMode(true)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Edit
        </button>
      </>
    ) : (
      <>
        <input
          className="border p-2 block mb-2"
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
        />

        <input
          className="border p-2 block mb-2"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        <input
          className="border p-2 block mb-2"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          className="border p-2 block mb-2"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button
          onClick={handleUpdate}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Save
        </button>

        <button
          onClick={() => setEditMode(false)}
          className="mt-2 ml-2 px-4 py-2 bg-gray-400 text-white rounded"
        >
          Cancel
        </button>
      </>
    )}

  </div>
);
}