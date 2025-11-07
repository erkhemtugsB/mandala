const GeneralNotary = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Notary Services</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Some documents require a notary to be valid and legally binding. At Mandala Comprehensive Service, I provide
            reliable and convenient notary services to ensure your documents are properly witnessed, signed, and certified.
            Whether for personal, business, or legal purposes, I make the process simple and stress-free, with clear
            explanations in both English and Mongolian. 
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://images.summitmedia-digital.com/realliving/resize/images/2020/03/23/documents-970x546.webp"
            alt="Notary Service"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          What We Notarize
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Legal Documents (contracts, affidavits, agreements)</li>
          <li>Real Estate Documents (deeds, leases, loan forms)</li>
          <li>Power of Attorney & Healthcare Directives</li>
          <li>Estate Planning Documents (wills, trusts)</li>
          <li>School & Travel Permission Forms</li>
          <li>Business & Financial Documents (partnership agreements, banking forms)</li>
          <li>Immigration & International Forms</li>
        </ul>

        <h3 className="text-xl font-bold text-yellow-600 mt-8 mb-4">
          Why Choose My Notary Service
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Licensed and experienced with attention to detail</li>
          <li>Fast and convenient appointments</li>
          <li>Clear explanations in both English and Mongolian</li>
          <li>Trusted by families, businesses, and community members</li>
        </ul>

        <p className="mt-6 text-gray-700">
          You can schedule an appointment at our office Monday thru Friday, 9 am thru 5 pm, and Saturday 10 am thru 1 pm,
          call us at <span className="font-semibold">(425) 480-4548 or (206)-787-0100</span>,
          or email us at <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a>.
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

export default GeneralNotary;
