const Buy = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Home Buying Services</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Buying a home is more than just a financial investment—it’s about finding the right place for your future. 
            At Mandala Comprehensive Service, I work closely with clients to make the home buying process clear, stress-free, 
            and tailored to your goals. Whether you’re a first-time buyer or looking for your next property, I’ll help you every step of the way.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2021/05/GettyImages-905902144.jpg"
            alt="Home Buying"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          What I Offer
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>First-Time Homebuyer Support – Step-by-step guidance for those new to the process</li>
          <li>Property Search Assistance – Access to MLS listings and personalized recommendations</li>
          <li>Financing Guidance – Connecting you with trusted lenders to explore mortgage options</li>
          <li>Negotiation Expertise – Helping you secure the best price and terms</li>
          <li>Offer & Contract Preparation – Professional handling of all paperwork and deadlines</li>
          <li>Local Knowledge – Specialized insight into Snohomish County, Seattle, and surrounding areas</li>
          <li>Community Focus – Support in both English and Mongolian to make sure nothing gets lost in translation</li>
        </ul>

        <h3 className="text-xl font-bold text-yellow-600 mt-8 mb-4">
          Why Work With Me
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Licensed in Real Estate since 2016</li>
          <li>Experience in both residential and investment property purchases</li>
          <li>Strong background in taxes and legal knowledge to help you understand the full picture</li>
          <li>Committed to helping families and community members achieve the dream of homeownership</li>
        </ul>

        <p className="mt-6 text-gray-700">
          You can schedule a consultation Monday thru Friday, 9 am – 5 pm, and Saturday 10 am – 1 pm, 
          by calling <span className="font-semibold">(206)-787-0100</span>, 
          or emailing <a href="mailto:mandalacs2020@gmail.com" className="text-blue-600 hover:underline">mandalacs2020@gmail.com</a>.
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

export default Buy;
