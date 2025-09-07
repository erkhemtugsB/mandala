const Wills = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Wills & Estate Planning</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Wills & Estate Planning: We help individuals and families plan their estates to ensure their wishes are respected. With years of experience in legal documentation and estate management, our goal is to make the process simple, clear, and stress-free. Whether it’s creating a will, establishing trusts, or planning for guardianship, we guide you step by step.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://www.lsmo.org/sites/lsmo.org/files/styles/featured_image/public/last%20will.jpg?itok=kseX0-yp"
            alt="Wills and Legal Documents"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          To prepare your will or update your estate plan, please have the following ready:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Personal Information – Full names, dates of birth, and contact details for yourself and beneficiaries</li>
          <li>Asset List – Properties, bank accounts, investments, and valuable personal items</li>
          <li>Debts & Liabilities – Mortgages, loans, and other obligations</li>
          <li>Executor & Guardian Details – The person(s) you trust to manage your estate or care for minors</li>
          <li>Special Instructions – Any specific wishes for gifts, donations, or arrangements</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can bring your documents to our office Monday thru Friday, 9 am thru 5 pm, and Saturday 10 am thru 1 pm, 
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

export default Wills;
