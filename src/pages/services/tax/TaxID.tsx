const TaxID = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Tax ID & ITIN Services</h1>

      {/* Intro section with image */}
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Tax ID or ITIN Applications: If you don’t qualify for a Social Security Number but still
            need to file taxes, open a bank account, or comply with IRS requirements, you may need an
            Individual Taxpayer Identification Number (ITIN). I can help you apply for or renew your ITIN
            so you stay compliant and receive the tax benefits you’re entitled to. Since 2007, I’ve worked
            with families, students, and business owners to navigate these processes with confidence.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ZB1Qk_FG9fyHxCd60SiP6OEjyP2iDur8fw&s"
            alt="ITIN Application Form"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      {/* Services list */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">What We Offer</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>New ITIN Applications (Form W-7) – Complete preparation and filing</li>
          <li>ITIN Renewals – Ensuring your ITIN stays valid so you can continue to file taxes and claim credits</li>
          <li>EIN (Employer Identification Number) Applications – For businesses, LLCs, or sole proprietors needing a tax ID</li>
          <li>Support with IRS Notices – Guidance if the IRS requires additional information or documentation</li>
          <li>Create 1099 and W-2 Forms – Accurate preparation and filing so your employees and contractors get the right forms on time</li>
        </ul>

        {/* Contact info */}
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

export default TaxID;
