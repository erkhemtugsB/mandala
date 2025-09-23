const BusinessTax = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Business Tax Services</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Business Tax Return Preparation: We assist corporations, partnerships, and small businesses with federal and state returns. 
            Whether you’re filing as a corporation, S corporation, partnership, or sole proprietor, we provide accurate, compliant, 
            and timely filings. With years of experience working with businesses of all sizes, I aim to simplify the process and ensure 
            you meet IRS and state requirements while keeping your tax burden as low as legally possible. 
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://media.istockphoto.com/id/1469972260/photo/2022-blank-1040-us-tax-form-with-calculator-and-keyboard-on-office-desk.jpg?s=612x612&w=0&k=20&c=pVTPyzFX8rxqhCB1I768RiOAZkK75jfHhEkT4fMYy_E="
            alt="Business Tax Forms"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          Our Business Tax Services Include:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Corporations (Form 1120)</li>
          <li>S Corporations (Form 1120S)</li>
          <li>Partnerships (Form 1065)</li>
          <li>Sole Proprietors (Schedule C)</li>
          <li>Payroll Tax Filings – Quarterly and annual (Form 941, 940, W-2, 1099)</li>
          <li>Sales & Excise Tax Reporting – WA Department of Revenue filings and compliance</li>
          <li>Bookkeeping & Financial Statements – Profit & loss and balance sheets</li>
          <li>Estimated Tax Payments – Quarterly payments to avoid year-end surprises</li>
          <li>Amended Business Returns – Correcting or updating prior-year filings</li>
          <li>
            Tax ID or ITIN Applications – Assistance with applying for or renewing ITINs if you don’t 
            qualify for a Social Security Number, ensuring compliance with IRS requirements.
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can bring your documents to our office Monday thru Friday, 9 am to 5 pm, and Saturday 10 am to 1 pm,
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

export default BusinessTax;
