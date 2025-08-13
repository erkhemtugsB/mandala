const UcrRegistration = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-blue-900 text-center">
        Unified Carrier Registration (UCR) Information
      </h1>

      <p className="text-gray-700 mb-6 text-lg">
        The Unified Carrier Registration (UCR) fees are determined by the number of commercial motor vehicles (CMVs) in your fleet. Below is the current general fee structure. Fees may change annually, so always verify the latest schedule before registering.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="table-auto w-full border border-gray-300 text-gray-700">
          <thead className="bg-blue-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Number of Vehicles</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Annual Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">0–2 vehicles</td>
              <td className="border border-gray-300 px-4 py-2">$46</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">3–5 vehicles</td>
              <td className="border border-gray-300 px-4 py-2">$138</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">6–20 vehicles</td>
              <td className="border border-gray-300 px-4 py-2">$276</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">21–100 vehicles</td>
              <td className="border border-gray-300 px-4 py-2">$963</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">101–1,000 vehicles</td>
              <td className="border border-gray-300 px-4 py-2">$4,592</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1,001+ vehicles</td>
              <td className="border border-gray-300 px-4 py-2">$44,836</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-3 text-blue-800">Consequences of Not Registering</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
        <li><strong>Fines and Penalties:</strong> Missing the UCR registration deadline can result in fines for each unregistered vehicle, creating significant costs.</li>
        <li><strong>Inability to Operate:</strong> Vehicles may be denied entry at state borders and could be prevented from operating in interstate commerce.</li>
        <li><strong>Legal and Operational Issues:</strong> Non-compliance can cause major legal and operational problems for motor carriers, brokers, freight forwarders, and leasing companies.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-blue-800">Benefits of UCR Registration</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
        <li><strong>Compliance with Federal Law:</strong> Ensures your business operates legally in interstate and international commerce.</li>
        <li><strong>Access to State Roads:</strong> Required to operate legally across state lines and use public highways.</li>
        <li><strong>Avoiding Penalties:</strong> Timely registration prevents unnecessary fines.</li>
        <li><strong>Support for Highway Safety:</strong> Contributes to safety and infrastructure programs.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-blue-800">UCR Registration Updates and Renewals</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Annual Renewal:</strong> Must be renewed each year via the UCR Portal.</li>
        <li><strong>Fleet Updates:</strong> Report added or removed vehicles promptly to avoid penalties.</li>
        <li><strong>Late Registration:</strong> May result in late fees, but registration after the deadline is still possible.</li>
      </ul>


      <div className="mt-16 bg-blue-900 rounded-2xl p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Need Expert Guidance?</h3>
        <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
          Our experienced team can help you navigate the complexities of trucking regulations and optimize your business operations.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          Start Filing
        </a>
      </div>
    </div>


  );
};

export default UcrRegistration;