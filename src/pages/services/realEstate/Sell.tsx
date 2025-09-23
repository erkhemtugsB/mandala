const Sell = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Home Selling Services</h1>
      
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Selling a home is a big decision—and the right guidance can make all the difference. 
            At Mandala Comprehensive Service, I help homeowners sell quickly and at the best price 
            by combining local market knowledge, professional marketing, and step-by-step support 
            from listing to closing.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://sqy7rm.media.zestyio.com/Buying-a-Home_-Everything-You-Need-to-Know.jpg?width=1080&height=1080&fit=crop"
            alt="Home for Sale"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      {/* Services */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          What I Offer
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Home Valuation & Pricing Strategy – Comparative Market Analysis (CMA) to set the right asking price</li>
          <li>Professional Marketing – MLS listing, online exposure, open houses, and targeted advertising</li>
          <li>Staging Guidance – Tips to make your home show its best to buyers</li>
          <li>Negotiation Expertise – Protecting your interests and maximizing your profit</li>
          <li>Offer Review & Contracts – Careful handling of all legal paperwork and deadlines</li>
          <li>Closing Support – Coordinating inspections, appraisals, and final documents</li>
          <li>Local Experience – Knowledge of Snohomish County, Seattle, and surrounding real estate markets</li>
        </ul>

        {/* Contact Info */}
        <p className="mt-4 text-gray-700">
          Ready to sell your home? Reach out to us today. 
          You can call us at <span className="font-semibold">(425) 480-5448 or (206)-787-0100</span>, 
          or email at <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a>.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Office Address:</span> 58490 Mukilteo Speedway, Mukilteo, WA 98275, Suite 203
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

export default Sell;
