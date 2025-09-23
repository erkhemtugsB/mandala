const Event = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  */}
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Event Insurance</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-10">
        <div className="md:w-1/2 w-full text-gray-700 text-lg flex items-center">
          <p className="mb-6">
            Planning an event takes time, energy, and investment. But unexpected things can happen—weather changes,
            accidents, cancellations, or property damage. Event insurance protects you and your organization from
            financial loss, so you can focus on hosting a safe and successful event.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="https://time.ly/wp-content/uploads/2024/06/marketing-team-working-on-project-1.jpg"
            alt="Event Insurance"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4">
          What We Cover:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>General Liability Coverage – Protects you if someone is injured or property is damaged during your event</li>
          <li>Event Cancellation Coverage – Helps recover costs if your event is postponed or canceled due to covered reasons</li>
          <li>Property & Equipment Coverage – Protection for rented sound systems, tents, or other event equipment</li>
          <li>Vendor & Performer Coverage – Extends protection for participants such as food vendors, musicians, and contractors</li>
          <li>Special Event Insurance – Options for cultural celebrations, sports tournaments, weddings, community festivals, and corporate events</li>
        </ul>
        <p className="mt-4 text-gray-700">
          To learn more about coverage options or request a quote, you can visit our office Monday thru Friday, 9 am – 5 pm,
          and Saturday 10 am – 1 pm, call us at <span className="font-semibold">(425) 480-5448 or (206)-787-0100</span>,
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

export default Event;
