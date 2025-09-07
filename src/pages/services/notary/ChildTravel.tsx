const ChildTravel = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Child Travel Consent Form</h1>

      {/* Intro section */}
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            A Child Travel Consent Form is a document that provides legal permission for a minor to travel
            domestically or internationally with one parent, another family member, or a trusted adult.
            This form ensures that border authorities, airlines, and other officials know the child has
            authorization to travel. Since 2007, we’ve assisted families in preparing clear, compliant,
            and professionally written consent forms to avoid unexpected travel issues. Our goal is to make
            travel smoother, safer, and stress-free for parents and guardians. 
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://www.minitime.com/wp-content/uploads/wpallimport/files/Single-Parent-Think-Passport--Paperwork-eed8c4404dfc4970bbb1e75865c5c074.jpg"
            alt="Child Travel"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      {/* List of details */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          To complete a Child Travel Consent Form, you will need to provide the following details:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Full names and birthdates of the child(ren)</li>
          <li>Travel details – destinations, dates, and airlines (if applicable)</li>
          <li>Names and contact information of accompanying adult(s)</li>
          <li>Notarized signature of parent(s) or legal guardian(s)</li>
          <li>Emergency contact information</li>
          <li>Any special instructions (medical needs, restrictions, etc.)</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can fill out the form in our office Monday thru Friday, 9 am – 5 pm, and Saturday 10 am – 1 pm,
          fax your documents to <span className="font-semibold">(206)-787-0100</span>,
          or email us at <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a>.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Office Address:</span> 58490 Mukilteo Speedway, Mukilteo, WA 98275, Suite 203
        </p>
      </div>
    </div>
  );
};

export default ChildTravel;
