const Annual = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Business Consultation & Annual Services</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Our business consultation services are designed to help companies of all sizes streamline operations, stay compliant, and maximize growth. Since 2007, we’ve guided startups, small businesses, and established companies through annual reporting, tax planning, and strategic decision-making. Our goal is to provide clear, actionable advice—especially for businesses navigating complex regulations or expansion challenges.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://st4.depositphotos.com/15971766/22010/i/450/depositphotos_220100076-stock-photo-stacks-documents-files-black-clip.jpg"
            alt="Business Consultation"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          Our annual business services include:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Annual Financial Review – Assessing performance and planning for the year ahead</li>
          <li>Tax Planning & Compliance – Minimizing liability while staying fully compliant</li>
          <li>Business Registration & Licensing – Ensuring all permits and registrations are up to date</li>
          <li>Strategic Growth Consultation – Helping your business expand efficiently</li>
          <li>Payroll & Employee Reporting – Handling W-2s, 1099s, and state filings</li>
          <li>Regulatory Filings – Annual reports, state compliance, and federal submissions</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can visit our office Monday thru Friday, 9 am thru 5 pm, or Saturday 10 am thru 1 pm.
          Documents can also be faxed to <span className="font-semibold">(206)-787-0100</span> or emailed to
          <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline"> mandalacs2020@gmail.com</a>.
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

export default Annual;
