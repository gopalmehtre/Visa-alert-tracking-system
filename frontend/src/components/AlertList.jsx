import AlertRow from "./AlertRow";

function AlertList({ alerts, onChange }) {
  if (alerts.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No alerts found.
      </p>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Country</th>
            <th className="p-3 text-left">City</th>
            <th className="p-3 text-left">Visa</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <AlertRow
              key={alert._id}
              alert={alert}
              onChange={onChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertList;