const PersonalTax = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Personal Tax Services</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Personal Tax Services: We provide comprehensive tax services to individuals, ensuring compliance with all tax regulations while maximizing deductions and credits. Since 2007, I’ve been licensed in tax preparation, with years of experience helping families, students, and self-employed individuals. My goal is to provide clear, reliable guidance—especially for those facing language or system barriers. 
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://media.istockphoto.com/id/1469972260/photo/2022-blank-1040-us-tax-form-with-calculator-and-keyboard-on-office-desk.jpg?s=612x612&w=0&k=20&c=pVTPyzFX8rxqhCB1I768RiOAZkK75jfHhEkT4fMYy_E="
            alt="Tax Form"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>


      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          If you would like to add a truck to your existing IRP account, you will have to provide the following documents:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Tax Planning – Helping you plan ahead to reduce your tax bill next year</li>
          <li>Amended Returns (1040X) – Correct mistakes or update old returns</li>
          <li>Multi-State Returns – For people who moved or work in more than one state</li>
          <li>IRS & State Notices – Responding to tax letters or penalty issues</li>
          <li>Self-Employment / Freelance Income – Schedule C preparation and expense tracking</li>
          <li>1099 & W-2 Support – Reporting all income correctly</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can bring the documents to our office Monday thru Friday, 9 am thru 5 pm, and Saturday 10 am thru 1 pm,
          fax them at <span className="font-semibold">(425) 480-4548 or (206)-787-0100</span>,
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

export default PersonalTax;