const IrpTransfer = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-blue-900">IRP Addition</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Transfer of Registration: When clients need to transfer an existing IRP registration from one vehicle to another, we facilitate this process. This may involve updating registration details, submitting transfer paperwork, and ensuring seamless continuity of registration.

          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="/man-woman.jpg"
            alt="Man-Woman"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>


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




    </div>
  );
};

export default IrpTransfer;