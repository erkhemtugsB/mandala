const TrailerRegistration = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mt-8">
        <h3 className="text-xl font-bold text-blue-600 mb-4">
          If you would like to add a truck to your existing IRP account, you will have to provide the following documents:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Copy of your current IRP registration (for any truck you have registered)</li>
          <li>Proof of ownership (Title, form ST-556 or Bill of Sale from a dealer)</li>
          <li>HWY Use Tax (Form 2290) – if vehicle was purchased more than 60 days ago</li>
          <li>Unit# of the new truck (a random number you pick)</li>
          <li>Safety Carrier DOT#, Safety Carrier TIN#</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can bring the documents to our office Monday thru Friday, 9 am thru 5 pm, and Saturday 10 am thru 1 pm,
          fax them at <span className="font-semibold">(224) 830-3555</span> or <span className="font-semibold">(814) 883-0073</span>,
          or email them to <a href="mailto:degyusconsulting@gmail.com" className="text-blue-600 hover:underline">degyusconsulting@gmail.com</a>.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Address:</span> 5105 Tollview Dr, Suite 246, Rolling Meadows, IL 60008
        </p>
      </div>

      <br />
      <br />
      <br />

      {/*  */}
      <h2 className="text-4xl font-bold mb-6 text-blue-900">Trailer Registration
        What is a semi-trailer registration?</h2>

      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <div>
            <p className="mb-4">
              Semi-trailer registration refers to the process of registering a semi-trailer with the appropriate state or regional authorities. This registration is necessary to legally operate a semi-trailer on public roads. When registering a semi-trailer, the owner typically provides information about the trailer, such as its make, model, year, weight, and vehicle identification number (VIN).
            </p>
            <p className="mb-4">
              The registration process may also involve paying registration fees, providing proof of insurance, and obtaining license plates or decals that must be displayed on the semi-trailer. The registration period and renewal requirements can vary depending on the jurisdiction and the specific regulations in place.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="/woman-paper.jpg"
            alt="Woman with Paper"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Why is it important? What happens without it?
        </h1>
        <p>
          It’s important to keep the registration current and comply with all applicable regulations to avoid penalties or fines for operating an unregistered or improperly registered semi-trailer.
        </p>
      </div>


      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">
          What service do we provide?
        </h1>
        <p>
          Prospect Licensing can help you register your semi-trailer and get the title of the vehicle transferred to the new owner’s name. We can issue a 90-day temporary registration the same day to help you send the vehicle on the road while waiting for the original to be issued.
        </p>
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-6 text-blue-900">Dates</h1>
            <p>
              Semi trailer registrations are usually permanent and they do not need to be renewed.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl font-bold mb-6 text-blue-900">Fees</h1>
            <p>
              The fee for Semi-trailer registrations in Illinois is currently $19, one time fee, does not need to be renewed. Please inquire about other states.
            </p>
          </div>
        </div>
      </div>




    </div>
  );
};

export default TrailerRegistration;