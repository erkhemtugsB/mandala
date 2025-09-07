const Power = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">The Power of Consent</h1>

      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Consent is more than permission—it’s about respect, trust, and choice. 
            Whether in healthcare, education, or personal relationships, the power of consent 
            allows people to make informed decisions and feel empowered in their lives. 
            By fostering environments where consent is clearly understood and honored, 
            we build stronger connections and safer communities.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://media.istockphoto.com/id/1021543918/photo/stacked-documents-and-eyeglasses.jpg?s=612x612&w=0&k=20&c=Ze3nA-v1PYd41wsn-bSdbjj3HhtqQ2AOTswgladtmms="
            alt="People showing mutual respect"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      {/* List Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          Practicing the power of consent involves:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Clear Communication – Asking before assuming and respecting answers</li>
          <li>Active Listening – Understanding the needs and comfort of others</li>
          <li>Boundaries – Recognizing and honoring personal limits</li>
          <li>Transparency – Providing full information before seeking agreement</li>
          <li>Empowerment – Giving people the confidence to say “yes” or “no” without fear</li>
          <li>Respect – Valuing each decision as valid and important</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Consent applies everywhere—in workplaces, classrooms, friendships, and families. 
          It’s about creating mutual trust and building relationships where everyone feels safe and heard.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Remember:</span> Consent is ongoing, 
          it can be withdrawn at any time, and it must always be freely given.
        </p>
      </div>
    </div>
  );
};

export default Power;
