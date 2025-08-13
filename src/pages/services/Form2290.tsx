const Form2290 = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto text-gray-700">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Highway Use Tax (HUT) & IRS Form 2290</h1>

      <p className="mb-6">
        The Highway Use Tax (HUT) is a federal tax required for individuals or businesses operating heavy vehicles on U.S. public highways. It is reported annually using IRS Form 2290, also known as the Heavy Vehicle Use Tax (HVUT). This tax applies to vehicles with a gross weight of 55,000 pounds or more, and helps fund the maintenance and construction of the nation’s roadways.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Who Needs to File Form 2290?</h2>
      <p className="mb-4">
        You must file Form 2290 and pay the highway use tax if you own and operate a vehicle with a gross weight of 55,000 pounds or more, including:
      </p>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Trucks</li>
        <li>Tractors</li>
        <li>Trailers</li>
        <li>Buses</li>
      </ul>
      <p className="mb-6">
        This applies to both new and used vehicles meeting the weight requirement and operated on public highways.
      </p>

      <h2 className="text-2xl font-semibold mb-4">When to File</h2>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>
          <strong>New Vehicles:</strong> File within 30 days of purchase.
        </li>
        <li>
          <strong>Annual Filing:</strong> The tax year runs from July 1 to June 30. Filing is due the last day of the month following the month the vehicle was first used, typically August 31.
        </li>
      </ul>
      <p className="mb-6">
        Late filings can result in penalties of 4.5% of the tax due per month plus interest.
      </p>

      <h2 className="text-2xl font-semibold mb-4">How to File Form 2290</h2>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Gather vehicle information (VIN, gross weight, and payment details).</li>
        <li>File electronically via the IRS e-file system (recommended) or mail a paper form.</li>
        <li>Pay the tax (options include electronic payment, check, or money order).</li>
        <li>Receive your IRS-stamped Schedule 1 as proof of payment—needed for vehicle registration.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Exemptions</h2>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Vehicles used exclusively for agriculture.</li>
        <li>Government-owned vehicles.</li>
        <li>Emergency vehicles (e.g., fire trucks, ambulances).</li>
        <li>Logging vehicles meeting IRS criteria.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Amending Form 2290</h2>
      <p className="mb-6">
        If you need to correct a VIN, change the gross weight, or update vehicle use, file an amended return either electronically or by paper.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Benefits of Filing On Time</h2>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Avoid costly penalties and interest.</li>
        <li>Maintain compliance with IRS requirements.</li>
        <li>Ensure vehicle registration is not delayed.</li>
        <li>Support U.S. highway infrastructure projects.</li>
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

export default Form2290;