const Create1099 = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Create 1099 and W-2 Forms</h1>
      
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            As a business owner, you are responsible for providing correct income statements to your workers and contractors each year. 
            Whether you need to issue W-2s for employees or 1099s for independent contractors, I can prepare and file these forms accurately 
            with the IRS and ensure your team receives their copies on time.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://www.experian.com/blogs/ask-experian/wp-content/uploads/tax-forms.jpg.webp"
            alt="1099 and W-2 Forms"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">What We Offer</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>W-2 Forms for Employees – Preparation and electronic filing with the Social Security Administration (SSA)</li>
          <li>1099-NEC / 1099-MISC Forms – For independent contractors, freelancers, and vendors</li>
          <li>E-File & Paper Filing Options – Ensuring compliance with IRS and Washington State deadlines</li>
          <li>Year-End Reporting – Reconciliation of payroll and contractor records before filing</li>
          <li>Corrections & Amendments – Fixing errors on previously issued forms</li>
          <li>Guidance for New Businesses – Helping you understand your responsibilities and deadlines</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can bring your information to our office Monday thru Friday, 9 am thru 5 pm, and Saturday 10 am thru 1 pm,
          fax it at <span className="font-semibold">(206)-787-0100</span>,
          or email it to <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a>.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Address:</span> 58490 Mukilteo Speedway, Mukilteo, WA 98275, Suite 203
        </p>
      </div>
    </div>
  );
};

export default Create1099;
