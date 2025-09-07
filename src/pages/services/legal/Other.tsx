const Other = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Other Document Services</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            We provide assistance with a wide range of important documents for individuals and businesses. Our goal is to simplify paperwork, ensure accuracy, and help you meet all regulatory requirements efficiently. Whether you need guidance on licenses, registrations, or official forms, we are here to make the process smooth and stress-free.  
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://st4.depositphotos.com/15971766/22010/i/450/depositphotos_220100076-stock-photo-stacks-documents-files-black-clip.jpg"
            alt="Business Documents"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          To process your documents, please provide the following items:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Business Licenses – Ensure your business is legally registered</li>
          <li>Vehicle Registrations – Assistance with title and registration updates</li>
          <li>Permit Applications – Local, state, or federal permits for various operations</li>
          <li>Identity Documents – Passports, driver’s licenses, and government IDs</li>
          <li>Official Correspondence – Help with letters, notices, or official forms</li>
          <li>Corporate Filings – Annual reports, LLC paperwork, or amendments</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can submit your documents in person Monday through Friday, 9 am to 5 pm, or Saturday, 10 am to 1 pm,
          fax them to <span className="font-semibold">(206)-787-0100</span>,
          or email to <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a>.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Address:</span> 58490 Mukilteo Speedway, Mukilteo, WA 98275, Suite 203
        </p>
      </div>
    </div>
  );
};

export default Other;
