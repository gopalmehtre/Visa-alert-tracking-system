import AlertRow from "./AlertRow";

function AlertList({ alerts, onChange }) {
  if (alerts.length === 0) {
    return <p>No alerts found.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Country</th>
          <th>City</th>
          <th>Visa</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {alerts.map((alert) => (
          <AlertRow key={alert._id} alert={alert} onChange={onChange} />
        ))}
      </tbody>
    </table>
  );
}

export default AlertList;
