import { useEffect, useState } from "react";
import AlertForm from "./components/AlertForm";
import AlertList from "./components/AlertList";
import { getAlerts } from "./api/alertApi";

function App() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAlerts = async () => {
    try {
      setLoading(true);
      const data = await getAlerts();
      setAlerts(data);
    } catch (error) {
      console.error("Failed to fetch alerts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <div className="container">
      <h1>Visa Slot Alerts</h1>

      <AlertForm onSuccess={fetchAlerts} />

      {loading ? (
        <p>Loading alerts...</p>
      ) : (
        <AlertList alerts={alerts} onChange={fetchAlerts} />
      )}
    </div>
  );
}

export default App;