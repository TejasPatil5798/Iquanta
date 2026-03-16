import { useEffect, useState } from "react";
import {
  getContacts,
  createContact,
} from "../../api/contactsApi";

export function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const fetchContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleSubmit = async () => {
    await createContact(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
    });

    setShowForm(false);

    fetchContacts();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Contacts</h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Create Contact
        </button>
      </div>

      {showForm && (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6 border">
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="border p-2 rounded"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
            />
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-white shadow rounded-lg border">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Mobile Number</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact: any) => (
              <tr key={contact._id} className="border-t">
                <td className="p-3">{contact.name}</td>
                <td className="p-3">{contact.email}</td>
                <td className="p-3">{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}