const Immigration = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Immigration Services</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Immigration Support: We provide step-by-step assistance with a wide range of immigration matters, helping individuals and families navigate the U.S. immigration system. Since 2007, we’ve been dedicated to guiding newcomers through applications, forms, and legal requirements. Our mission is to deliver clear, trustworthy guidance—especially for those who face language or cultural barriers—so they can focus on building their future with confidence.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://thumbs.dreamstime.com/b/social-security-permanent-resident-card-united-states-america-green-us-flag-background-immigration-concept-32314798.jpg"
            alt="Immigration Documents"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          If you are applying for immigration benefits, you may need to provide the following documents:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Green Card Applications – Guidance for family-based and employment-based petitions</li>
          <li>Citizenship / Naturalization – Preparing Form N-400 and interview support</li>
          <li>Work Permits – Employment authorization applications (EAD)</li>
          <li>Family Petitions – Helping reunite spouses, children, and relatives</li>
          <li>Visa Extensions & Status Changes – Student, visitor, or work visa assistance</li>
          <li>USCIS & Consular Notices – Responding to requests, denials, or interviews</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can bring your documents to our office Monday thru Friday, 9 am to 5 pm, and Saturday 10 am to 1 pm,
          fax them at <span className="font-semibold">(206)-787-0100</span>,
          or email them to <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a>.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Address:</span> 58490 Mukilteo Speedway, Mukilteo, WA 98275, Suite 203
        </p>
      </div>
    </div>
  );
};

export default Immigration;
