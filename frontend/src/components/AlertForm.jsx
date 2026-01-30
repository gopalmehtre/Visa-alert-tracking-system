import { useState } from "react";
import { createAlert } from "../api/alertApi";

function AlertForm({ onSuccess }) {
  const [form, setForm] = useState({
    country: "",
    city: "",
    visaType: "Tourist",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAlert(form);
    setForm({ country: "", city: "", visaType: "Tourist" });
    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-6 mb-8"
    >
      <h2 className="text-xl font-semibold mb-4">Create Alert</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />

        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />

        <select
          name="visaType"
          value={form.visaType}
          onChange={handleChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option>Tourist</option>
          <option>Business</option>
          <option>Student</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Alert
      </button>
    </form>
  );
}

export default AlertForm;