import React from "react";
import { FaCheck } from "react-icons/fa";

export function Playbooks() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-bold mb-6">Keep your team aligned</h1>

          <p className="text-lg text-gray-600 mb-2">
            Build a library of sales best practices and resources.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            Unlock this and more with Sales Hub Professional.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium">
              Talk to Sales
            </button>

            <button className="border px-6 py-3 rounded-md font-medium">
              Start 14-day trial
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-3">
            No commitment or credit card required.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white shadow-lg rounded-lg p-4 border">
          <div className="flex justify-between items-center border-b pb-2 mb-3">
            <h2 className="font-semibold">Playbook</h2>
            <span className="cursor-pointer">✕</span>
          </div>

          <h3 className="font-medium mb-2">Discovery call</h3>

          <div className="border p-3 rounded mb-3">
            <p className="text-sm mb-2">Why should someone buy our products?</p>
            <textarea
              className="w-full border rounded p-2 text-sm"
              rows={3}
              placeholder="Notes"
            ></textarea>
          </div>

          <div className="border p-3 rounded mb-3">
            <p className="text-sm mb-2">
              What does your budget for this year look like?
            </p>
            <textarea
              className="w-full border rounded p-2 text-sm"
              rows={3}
              placeholder="Notes"
            ></textarea>
          </div>

          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Log note
          </button>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Set up your team for success with sales enablement content when and
          where they need it
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center text-left">
          {/* IMAGE PLACEHOLDER */}
          <div className="bg-gray-200 h-64 rounded"></div>

          {/* TEXT */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Equip your team with handy sales playbooks
            </h3>

            <p className="text-gray-600 mb-4">
              Build sales enablement content for anything your team needs to win
              the day, from product sheets to pricing guidelines.
            </p>

            <p className="text-gray-600 mb-4">
              On a discovery call? Pull up a call script to ask the right
              questions.
            </p>

            <p className="text-gray-600">
              No more files saved to your desktop. With playbooks tool, your
              sales collateral is just a click away.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Get your new hires up to speed faster
          </h3>

          <p className="text-gray-600 mb-4">
            Playbooks help managers arm new team members with knowledge right
            from the start.
          </p>

          <p className="text-gray-600">
            New hires can instantly access mentorship, coaching, and insights to
            sell like top performers.
          </p>
        </div>

        {/* RIGHT TABLE MOCK */}
        <div className="bg-white border rounded shadow p-4">
          <div className="h-40 bg-gray-100 rounded"></div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div className="bg-gray-200 h-64 rounded"></div>

        {/* TEXT */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Know your playbooks are effective and up-to-date
          </h3>

          <p className="text-gray-600 mb-4">
            Sales teams invest time creating playbooks. Make sure that content
            is being used effectively.
          </p>

          <p className="text-gray-600">
            Reporting dashboards show which collateral is used most often.
          </p>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Close Deals</h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Feature</th>
                <th className="p-3">Free</th>
                <th className="p-3">Professional</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-3">Deal pipeline</td>
                <td className="text-center">1</td>
                <td className="text-center">15</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Documents</td>
                <td className="text-center">5</td>
                <td className="text-center">5000</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Meeting scheduling</td>
                <td className="text-center">1</td>
                <td className="text-center">1000</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Reporting dashboards</td>
                <td className="text-center">10</td>
                <td className="text-center">75</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Playbooks</td>
                <td className="text-center">—</td>
                <td className="text-center">
                  <FaCheck className="mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
