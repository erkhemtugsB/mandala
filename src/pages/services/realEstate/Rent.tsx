const Rent = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Rental Services</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Finding the right rental can be stressful, whether you’re new to the area or just looking for a fresh start. 
            At <span className="font-semibold">Mandala Comprehensive Service</span>, I help connect tenants with safe, affordable homes 
            and assist landlords with professional rental support. My goal is to make the rental process clearer and smoother 
            for both sides, with the extra benefit of multilingual communication in English and Mongolian.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://bkvenergy.com/wp-content/uploads/2024/10/how-to-buy-a-house-in-texas.webp"
            alt="Rental Agreement"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">What We Offer for Renters</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Rental Search Assistance – Helping you find available homes, condos, or apartments that fit your needs and budget</li>
          <li>Application Guidance – Support with preparing rental applications and required documents</li>
          <li>Lease Review – Explaining rental agreements in clear, simple language so you understand your rights and obligations</li>
          <li>Credit & Income Support – Guidance on what landlords look for and how to strengthen your rental profile</li>
          <li>Multilingual Help – Clear communication in English and Mongolian to avoid misunderstandings</li>
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">What We Offer for Landlords</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Listing & Marketing – Professional exposure to attract quality tenants</li>
          <li>Tenant Screening – Background and credit checks for peace of mind</li>
          <li>Lease Preparation – Clear, compliant agreements that protect both parties</li>
          <li>Property Management Support – Guidance with rent collection, inspections, and maintenance coordination</li>
          <li>Legal & Tax Knowledge – Extra support from my background in taxes and contracts</li>
        </ul>
        <p className="mt-4 text-gray-700">
          You can reach us at <span className="font-semibold">(425) 480-5448 or (206)-787-0100</span>,
          or email us at <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a>.
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

export default Rent;
