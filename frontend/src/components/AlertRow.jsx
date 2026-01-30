import { deleteAlert, updateAlert } from "../api/alertApi";

function AlertRow({ alert, onChange }) {
  const handleStatusUpdate = async () => {
    const newStatus =
      alert.status === "Active" ? "Booked" : "Active";

    await updateAlert(alert._id, { status: newStatus });
    onChange();
  };

  const handleDelete = async () => {
    if (confirm("Delete this alert?")) {
      await deleteAlert(alert._id);
      onChange();
    }
  };

  return (
    <tr>
      <td>{alert.country}</td>
      <td>{alert.city}</td>
      <td>{alert.visaType}</td>
      <td>{alert.status}</td>
      <td>
        <button onClick={handleStatusUpdate}>
          Toggle Status
        </button>
        <button className="danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default AlertRow;