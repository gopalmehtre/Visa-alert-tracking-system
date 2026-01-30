import { useEffect, useState } from "react";
import AlertForm from "./components/AlertForm";
import AlertList from "./components/AlertList";
import { getAlerts } from "./api/alertApi";

function App() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAlerts = async () => {
    setLoading(true);
    const data = await getAlerts();
    setAlerts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Visa Slot Alerts
        </h1>

        <AlertForm onSuccess={fetchAlerts} />

        {loading ? (
          <p className="text-center mt-6">Loading alerts...</p>
        ) : (
          <AlertList alerts={alerts} onChange={fetchAlerts} />
        )}
      </div>
    </div>
  );
}

export default App;