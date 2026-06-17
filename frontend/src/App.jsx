import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TransactionDetail from "./pages/TransactionDetail";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transactions/:id" element={<TransactionDetail />} />
        </Routes>
      </div>
    </div>
  );
}