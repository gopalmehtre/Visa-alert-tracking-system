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

    try {
      await createAlert(form);
      setForm({ country: "", city: "", visaType: "Tourist" });
      onSuccess();
    } catch (error) {
      alert("Failed to create alert");
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>Create Alert</h3>

      <input
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
        required
      />

      <input
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
        required
      />

      <select name="visaType" value={form.visaType} onChange={handleChange}>
        <option value="Tourist">Tourist</option>
        <option value="Business">Business</option>
        <option value="Student">Student</option>
      </select>

      <button type="submit">Add Alert</button>
    </form>
  );
}

export default AlertForm;
