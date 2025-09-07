const Consult = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Loan Preparation Services</h1>
      
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Applying for a loan can feel overwhelming, and many applications get denied simply because documents are incomplete or finances aren’t presented properly. At Mandala Comprehensive Service, I prepare you before you apply—so you walk into the bank or lender confident and ready. My clients benefit from a 100% approval success rate because we make sure everything is in order first.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://cdn-res.keymedia.com/cms/images/us/073/0270_637868285147419129.jpg"
            alt="Loan Application"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          What I Offer
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Tax Return Review – Examining prior-year tax returns to ensure they are correct and lender-ready</li>
          <li>Financial Check-Up – Reviewing income, expenses, and credit profile to identify any issues before applying</li>
          <li>Document Preparation – Organizing the paperwork lenders will ask for (W-2s, 1099s, bank statements, profit &amp; loss, etc.)</li>
          <li>Loan Matching Guidance – Helping you understand which loan products (home, auto, personal, or business) you may qualify for</li>
          <li>Red Flag Fixing – Addressing potential concerns before they become reasons for denial</li>
          <li>Step-by-Step Guidance – Walking you through the process until approval</li>
        </ul>
      </div>

      {/* Why It Matters Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          Why It Matters
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Increases your chance of loan approval dramatically</li>
          <li>Saves time and stress by avoiding mistakes</li>
          <li>Builds trust with lenders when your application is clean and complete</li>
          <li>Helps you get better terms and interest rates</li>
        </ul>
      </div>

      {/* Our Advantage Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          Our Advantage
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Strong background in tax and finance</li>
          <li>Experience helping both individuals and business owners</li>
          <li>Support in English and Mongolian for clear communication</li>
          <li>Proven 100% approval success rate with prepared clients</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can schedule an appointment at our office Monday thru Friday, 9 am – 5 pm, and Saturday 10 am – 1 pm,
          call us at <span className="font-semibold">(206)-787-0100</span>,
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

export default Consult;
