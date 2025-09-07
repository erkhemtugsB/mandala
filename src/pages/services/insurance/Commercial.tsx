const Commercial = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Commercial Trucking Insurance</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            We specialize in providing tailored insurance solutions for commercial trucking businesses. 
            Whether you operate a single truck or manage a fleet, we ensure you’re fully protected on the road. 
            Our goal is to give you peace of mind by safeguarding your vehicles, cargo, and compliance obligations 
            while keeping premiums competitive and coverage reliable.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://insura4you.com/wp-content/uploads/2021/12/5-Commercial-Truck-Insurance-for-New-Drivers.jpg"
            alt="Commercial Trucking Insurance"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          Our trucking insurance coverage includes:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Primary Liability – Protects against damages or injuries caused by your trucks</li>
          <li>Physical Damage Coverage – Covers repairs or replacement of your vehicles</li>
          <li>Motor Truck Cargo Insurance – Protects the goods you transport</li>
          <li>Non-Trucking Liability (Bobtail Insurance) – Coverage when driving your truck off-duty</li>
          <li>Trailer Interchange Coverage – Protects trailers in your possession but owned by others</li>
          <li>Federal & State Compliance Support – Helping you meet FMCSA and WA state requirements</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Contact us today to review your coverage needs and get a personalized quote. We’re available 
          Monday thru Friday, 9 am to 5 pm, and Saturday 10 am to 1 pm. 
          You can also reach us by phone at <span className="font-semibold">(206)-787-0100</span>, 
          or email us at <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a>.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Office Address:</span> 58490 Mukilteo Speedway, Mukilteo, WA 98275, Suite 203
        </p>
      </div>
      <br></br>
      <a
        href="/contact"
        className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center"
      >
        Contact Us
      </a>
    </div>
  );
};

export default Commercial;
