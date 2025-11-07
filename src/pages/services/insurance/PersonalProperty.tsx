const PersonalProperty = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Personal Property Insurance</h1>
      
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        {/* Left Side Text */}
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Personal Property: Auto, Home, Condo, Renters — Protecting your home, car, and personal belongings is one of the smartest investments you can make. 
            At Mandala Comprehensive Service, I offer insurance options that give you peace of mind—so no matter what happens, you and your family are covered.
          </p>
        </div>
        
        {/* Right Side Image */}
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdpWAbbyfEvHgAh1209NjzLQ2F_EHyOyrOg&s"
            alt="Property Insurance"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      {/* Coverage Options */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">Our Coverage Options</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Homeowners Insurance – Protects your house and everything inside</li>
          <li>Renters Insurance – Affordable coverage for personal belongings in a rental</li>
          <li>Condo Insurance – Tailored coverage for condo owners</li>
          <li>Landlord Policies – Protection for rental property owners</li>
          <li>Valuable Items Coverage – Extra protection for jewelry, antiques, or collectibles</li>
          <li>Liability Coverage – Protects you if someone is injured on your property</li>
        </ul>
        
        <p className="mt-4 text-gray-700">
          You can contact our office Monday thru Friday, 9 am thru 5 pm, and Saturday 10 am thru 1 pm,
          call us at <span className="font-semibold">(425) 480-4548 or (206)-787-0100</span>,
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

export default PersonalProperty;
