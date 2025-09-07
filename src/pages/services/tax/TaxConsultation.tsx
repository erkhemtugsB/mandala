const TaxConsultation = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Tax Consultation Services</h1>
      
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Tax rules can be complicated, and every person or business has a unique situation. 
            My tax consultation services are designed to give you personalized advice so you can 
            make informed financial decisions, reduce tax liability, and plan ahead with confidence.
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

      {/* Services List */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">What We Offer</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Personal Tax Consultations – Guidance on deductions, credits, dependents, and major life changes (marriage, divorce, new baby, home purchase, retirement, etc.)</li>
          <li>Business Tax Consultations – Choosing the right entity (LLC, S-Corp, Corporation), tax planning for growth, and industry-specific strategies</li>
          <li>IRS Problem Solving – Support with tax notices, audits, payment plans, and penalty relief</li>
          <li>Future Planning – Advice on estimated tax payments, retirement contributions, and investment planning</li>
        </ul>
        
        {/* Contact Info */}
        <p className="mt-4 text-gray-700">
          You can schedule a consultation by visiting our office Monday thru Friday, 9 am thru 5 pm, and Saturday 10 am thru 1 pm, 
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

export default TaxConsultation;
