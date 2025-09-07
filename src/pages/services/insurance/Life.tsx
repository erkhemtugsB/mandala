const Life = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Life Insurance Services</h1>
      
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Life insurance is one of the most important ways to protect your family’s financial future. 
            It ensures that your loved ones are supported in the event of the unexpected. 
            At Mandala Comprehensive Service, I work closely with trusted life insurance professionals 
            to help you find the right plan for your needs and budget.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://www.capitolbenefits.com/wp-content/uploads/sites/26/2024/01/Life-Insurance-at-Various-Life-Stages.jpg"
            alt="Life Insurance"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          What We Offer
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Term Life Insurance – Affordable coverage for a set period of time (10, 20, or 30 years)</li>
          <li>Whole Life Insurance – Permanent coverage with added cash value benefits</li>
          <li>Universal Life Insurance – Flexible long-term coverage that adjusts with your needs</li>
          <li>Family Protection Plans – Policies tailored to provide for children and dependents</li>
          <li>Final Expense Insurance – Covers funeral and end-of-life costs, easing the burden on loved ones</li>
          <li>Business & Key Person Insurance – Protects small businesses if a key owner or partner passes away</li>
        </ul>

        <p className="mt-4 text-gray-700">
          To learn more or schedule a consultation, you can visit our office Monday thru Friday, 9 am – 5 pm, and Saturday 10 am – 1 pm.  
          You can also reach us by fax at <span className="font-semibold">(206)-787-0100</span>,  
          or email us at <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a>.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Address:</span> 58490 Mukilteo Speedway, Mukilteo, WA 98275, Suite 203
        </p>
      </div>
    </div>
  );
};

export default Life;
