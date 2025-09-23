const Labor = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Business Consultation & Labor</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Business Consultation Services: We help businesses navigate complex labor and operational challenges, offering strategies to optimize efficiency and compliance. With years of experience guiding startups, small businesses, and established companies, our goal is to provide clear, actionable advice that supports sustainable growth and smooth workforce management.
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
          To get started with our business consultation or labor support services, please provide the following:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Workforce Planning – Guidance on hiring, scheduling, and employee management</li>
          <li>Labor Compliance – Ensuring your business meets state and federal regulations</li>
          <li>Operational Efficiency – Streamlining processes for better productivity</li>
          <li>Conflict Resolution – Mediation and guidance for workplace issues</li>
          <li>Business Strategy – Tailored advice for growth, expansion, and profitability</li>
          <li>Payroll & Benefits Support – Assistance with setup, management, and reporting</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can bring your documents to our office Monday thru Friday, 9 am thru 5 pm, or Saturday 10 am thru 1 pm,
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

export default Labor;
