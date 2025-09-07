const OtherDocuments = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Other Document Services</h1>
      
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            We assist clients with a wide range of document preparation and submission services. 
            Whether you’re applying for official records, notarizing important papers, or organizing 
            personal files, our team ensures accuracy and professionalism. Since 2007, we’ve supported 
            individuals and businesses with documentation needs, offering clear guidance and reliable 
            service every step of the way. 
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://images.summitmedia-digital.com/realliving/resize/images/2020/03/23/documents-970x546.webp"
            alt="Document Signing"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      {/* Document List Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          If you need help with other documents, please prepare the following:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Notary Services – For contracts, affidavits, and sworn statements</li>
          <li>Translation & Certification – Document translation with certified seals</li>
          <li>Immigration Forms – Assistance with common USCIS applications</li>
          <li>Business Filings – Help with licenses, permits, and registration paperwork</li>
          <li>Affidavits & Declarations – Proper formatting and notarization</li>
          <li>Copy & Fax Services – Secure and reliable document handling</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can bring your documents to our office Monday thru Friday, 9 am – 5 pm, and Saturday 10 am – 1 pm,
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

export default OtherDocuments;
