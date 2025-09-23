const Bonds = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Business Bond Services</h1>

      {/* Intro section */}
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Customized Plans – We provide tailored bond coverage based on your industry, whether retail, services, or
            contractors. In Washington, contractors are required to carry a surety bond in order to be licensed and operate
            legally. At Mandala Comprehensive Service, I help contractors and small business owners secure the bonds they
            need quickly and affordably, so they can stay compliant and keep working without delays.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://ellerhorst.com/wp-content/uploads/2023/07/Contract-Bonds-1024x664.jpg"
            alt="Bond Services"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      {/* Services section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          Types of Bonds We Provide
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Contractor License Bonds – Required by Washington State L&I for general and specialty contractors</li>
          <li>Performance Bonds – Guarantees that projects will be completed according to contract terms</li>
          <li>Payment Bonds – Ensures subcontractors and suppliers are paid on time</li>
          <li>Bid Bonds – Required when bidding on public projects to show financial reliability</li>
          <li>Other Surety Bonds – Tailored bonding options depending on your project or business needs</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can bring the required documents to our office Monday thru Friday, 9 am thru 5 pm, and Saturday 10 am thru 1 pm,
          fax them at <span className="font-semibold">(425) 480-5448 or (206)-787-0100</span>,
          or email them to <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a>.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Address:</span> 58490 Mukilteo Speedway, Mukilteo, WA 98275, Suite 203
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

export default Bonds;
