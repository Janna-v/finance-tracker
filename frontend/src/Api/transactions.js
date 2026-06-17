export async function getTransactions(limit, offset) {
  const res = await fetch(
    `http://localhost:8000/transactions?limit=${limit}&offset=${offset}`
  );

  return res.json();
}

export const createTransaction = (payload) => {
  return fetch("http://localhost:8000/transactions/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then((res) => res.json());
};



export async function getDashboard() {
  const res = await fetch("http://localhost:8000/transactions/dashboard");
  return res.json();
}