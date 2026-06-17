import { useEffect, useState } from "react";
import { getDashboard } from "../api/transactions";

export function useDashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    getDashboard().then(setDashboard);
  }, []);

  return dashboard;
}