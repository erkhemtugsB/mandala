const Divorce = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Divorce & Family Law Services</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Divorce Services: We provide compassionate and professional legal support to individuals navigating divorce, child custody, and related family law matters. With years of experience, we guide clients through every step, ensuring their rights are protected and outcomes are fair. Our goal is to simplify the process, offering clarity and support during a challenging time.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://t3.ftcdn.net/jpg/02/93/64/72/360_F_293647295_gWNkVuKJIaGkWQ1i69WEFk3IcZKPDAck.jpg"
            alt="Divorce Concept"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          To start your divorce or family law process, you may need the following:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Divorce Filing Assistance – Guidance on paperwork and filing procedures</li>
          <li>Child Custody & Support – Help with custody arrangements and support agreements</li>
          <li>Property Division – Ensuring equitable distribution of assets</li>
          <li>Spousal Support / Alimony – Assistance with calculating and negotiating payments</li>
          <li>Mediation Services – Resolving disputes amicably outside court</li>
          <li>Legal Representation – Full support in court if needed</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can visit our office Monday thru Friday, 9 am thru 5 pm, or Saturday 10 am thru 1 pm,  
          call us at <span className="font-semibold">(425) 480-4548 or (206)-555-1234</span>,  
          or email <a href="mailto:info@familylawservices.com" className="text-blue-600 hover:underline">info@familylawservices.com</a>.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Address:</span> 123 Family Law Ave, Suite 101, Mukilteo, WA 98275
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

export default Divorce;
