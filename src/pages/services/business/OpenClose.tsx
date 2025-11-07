const OpenClose = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Open/Close Business Services</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Expert Business Consultation: We help businesses of all sizes optimize operations, streamline processes, and increase profitability. With over 15 years of experience in business strategy and financial planning, our team provides actionable advice tailored to your unique goals. Whether you’re starting a new venture or scaling an existing business, we guide you through every step with clear, reliable insights.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://media.istockphoto.com/id/506603586/photo/notary-pen-lying-on-testament.jpg?s=612x612&w=0&k=20&c=aV3qJjyMPcGqcorQ7EYDRSsLA3FYLbcsmMRS7YtCU8k="
            alt="Business Meeting"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          Services we offer to help your business succeed:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Business Strategy Planning – Customized plans to grow your business efficiently</li>
          <li>Financial Analysis & Budgeting – Track expenses, profits, and plan for future growth</li>
          <li>Market Research & Competitor Analysis – Identify opportunities and stay ahead of competitors</li>
          <li>Startup Consultation – Guidance for new business formation, licensing, and setup</li>
          <li>Operational Improvement – Streamline workflow, reduce waste, and boost productivity</li>
          <li>Risk Management – Assess risks and create mitigation strategies for your business</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Schedule a consultation Monday through Friday, 9 am to 6 pm, or Saturday 10 am to 2 pm.
          Contact us by phone at <span className="font-semibold">(425) 480-4548 or (206)-555-0123</span> or email
          <a href="mailto:info@businessconsult.com" className="text-blue-600 hover:underline">info@businessconsult.com</a>.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Address:</span> 123 Business Blvd, Suite 400, Seattle, WA 98101
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

export default OpenClose;
