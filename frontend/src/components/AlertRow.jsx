import { deleteAlert, updateAlert } from "../api/alertApi";

function AlertRow({ alert, onChange }) {
  const toggleStatus = async () => {
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
    <tr className="border-t">
      <td className="p-3">{alert.country}</td>
      <td className="p-3">{alert.city}</td>
      <td className="p-3">{alert.visaType}</td>
      <td className="p-3">
        <span
          className={`px-2 py-1 rounded text-sm ${
            alert.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {alert.status}
        </span>
      </td>
      <td className="p-3 space-x-2">
        <button
          onClick={toggleStatus}
          className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
        >
          Change Status
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default AlertRow;
