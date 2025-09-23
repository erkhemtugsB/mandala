const Secretary = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Business Consultation Services</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Business Consultation Secretary: We provide professional consultation and administrative support to small businesses and startups. Since 2007, I’ve been assisting business owners in streamlining operations, improving compliance, and optimizing workflow. My focus is on offering clear, actionable guidance, especially for new entrepreneurs navigating complex regulations or managing multiple responsibilities. 
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://media.istockphoto.com/id/506603586/photo/notary-pen-lying-on-testament.jpg?s=612x612&w=0&k=20&c=aV3qJjyMPcGqcorQ7EYDRSsLA3FYLbcsmMRS7YtCU8k="
            alt="Business Consultation"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          As part of our business consultation services, we can assist with:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Business Planning – Structuring your business and defining short-term and long-term goals</li>
          <li>Document Preparation – Drafting contracts, proposals, and internal policies</li>
          <li>Compliance Assistance – Ensuring your business meets all local, state, and federal requirements</li>
          <li>Meeting Coordination – Scheduling, organizing, and documenting key meetings</li>
          <li>Financial Tracking Support – Monitoring expenses, invoices, and budget reports</li>
          <li>Client Communication – Managing emails, calls, and professional correspondence</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can reach us Monday through Friday from 9 am to 5 pm, or Saturday from 10 am to 1 pm. 
          Call us at <span className="font-semibold">(425) 480-5448 or (206)-787-0100</span>, 
          or email <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a> for appointments or inquiries.
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

export default Secretary;
