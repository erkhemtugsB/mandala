const IrpNewRegistration = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* What is IRP */}
      <h1 className="text-4xl font-bold mb-6 text-blue-900">What is IRP?</h1>
      <div className="flex flex-col md:flex-row md:items-start mb-10">
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="/truck-white.jpg"
            alt="Commercial Truck"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
        <div className="md:w-1/2 w-full text-gray-700 text-lg">
          <p className="mb-6">
            The International Registration Plan (IRP) is a program for registering commercial vehicles traveling in multiple jurisdictions within the United States and Canada. It’s an agreement among U.S. states, the District of Columbia, and Canadian provinces, designed to promote and facilitate the interstate and international movement of commercial vehicles.
          </p>
          <p>
            Under the IRP, commercial vehicles that operate across state or provincial lines are required to register with their base jurisdiction and pay fees based on the percentage of travel in each jurisdiction. This registration system simplifies the process for carriers operating across multiple jurisdictions by allowing them to obtain a single registration instead of having to register separately in each jurisdiction they operate.
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-gray-700 text-lg mb-10">
        <p className="mb-6">
          The fees collected through the IRP are distributed among the jurisdictions based on the proportion of travel in each jurisdiction. This helps ensure that each jurisdiction receives appropriate revenue for maintaining its transportation infrastructure.
        </p>
        <p className="mb-6">
          The IRP aims to streamline administrative processes, reduce paperwork, and facilitate the efficient movement of commercial vehicles while ensuring that jurisdictions receive appropriate revenues for road maintenance and improvements.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-10">
        <img
          src="/man-pen.jpg"
          alt="Penalties for IRP violations"
          className="rounded-lg shadow-lg object-cover w-full h-72 md:h-96"
        />
      </div>

      {/* Why is it important */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Why is it important?</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>
            <span className="font-semibold">Simplification for Carriers:</span> Reduces administrative burden by allowing one registration for multiple jurisdictions.
          </li>
          <li>
            <span className="font-semibold">Facilitates Interstate and International Commerce:</span> Streamlines movement of commercial vehicles for efficiency and cost savings.
          </li>
          <li>
            <span className="font-semibold">Fair Distribution of Fees:</span> Allocates revenue based on travel, ensuring infrastructure funding fairness.
          </li>
          <li>
            <span className="font-semibold">Enforcement of Safety Regulations:</span> Allows for audits and inspections to ensure compliance.
          </li>
          <li>
            <span className="font-semibold">Promotion of Compliance:</span> Encourages proper registration and tax payment, reducing evasion.
          </li>
        </ul>
        <p className="mt-4 text-gray-700 text-lg">
          Overall, the IRP plays a crucial role in facilitating commercial vehicle movement, promoting safety and compliance, and ensuring fair financial contributions to transportation infrastructure.
        </p>
      </div>

      {/* Required Documents */}
      <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
      <p className="mb-4">
        If you would like to apply for a new IRP account, you will have to provide the following documents:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Copy of your CDL or driver’s CDL if applicant does not have a valid CDL, plus a copy of your DL</li>
        <li>Copy of the Articles of Incorporation (if registering under a corporate name)</li>
        <li>SS# (if individual) or EIN# (if Corporation or LLC)</li>
        <li>Proof of ownership (Title, form ST-556, or Bill of Sale from a dealer)</li>
        <li>HWY Use Tax (Form 2290) – if vehicle was purchased more than 60 days ago</li>
        <li>
          <span className="font-semibold">Proof of address</span> – 4 documents with name and current address (not older than 60 days), including mandatory phone bill.
        </li>
        <li>Prospective employer – name, address, phone#, Safety Carrier DOT#, Safety Carrier TIN#</li>
      </ul>

      {/* Contact Info */}
      <p className="mb-10">
        Bring documents to our office Mon–Fri 9am–5pm, Sat 10am–1pm,
        fax <span className="font-semibold">(224) 830-3555</span>, or email{" "}
        <a href="mailto:degyusconsulting@gmail.com" className="text-blue-600 underline">
          degyusconsulting@gmail.com
        </a>.
      </p>

      {/* Penalties */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-red-700">Penalties: What happens without IRP?</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>
            <span className="font-semibold">Fines:</span> Drivers or operators may face fines for operating without proper registration, which vary by jurisdiction and severity.
          </li>
          <li>
            <span className="font-semibold">Vehicle Impoundment:</span> Vehicles may be impounded until proper registration is obtained or penalties are paid.
          </li>
          <li>
            <span className="font-semibold">Suspension of Operations:</span> Regulatory authorities may suspend carrier or vehicle operations, disrupting business.
          </li>
          <li>
            <span className="font-semibold">Points on CDL:</span> Drivers may receive points or other penalties affecting their ability to operate commercial vehicles.
          </li>
          <li>
            <span className="font-semibold">Legal Action:</span> In severe cases, drivers or operators may face civil or criminal charges.
          </li>
        </ul>
        <p className="mt-4 text-gray-700 text-lg">
          It’s crucial for commercial vehicle operators to maintain proper registration and comply with all regulations to avoid these penalties.
        </p>
      </div>

      {/* Dates */}
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Dates</h1>
      <div className="flex flex-col md:flex-row md:items-start mb-10">
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="/pin-date.jpg"
            alt="Calendar"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
        <div className="md:w-1/2 w-full text-gray-700 text-lg">
          <p className="mb-6">
            The validity period for International Registration Plan (IRP) registration typically follows the calendar year, meaning it is valid from January 1st to December 31st of a given year. However, the specific validity dates may vary slightly depending on the jurisdiction or the date the registration is processed. Most states have different validity dates.

          </p>
          <p>
            It’s important for carriers to ensure that their IRP registration is renewed annually before the expiration date to avoid any penalties or disruptions to their operations. Renewal deadlines and processes may vary by jurisdiction, so carriers should be aware of the requirements in the jurisdictions where they operate.
          </p>
        </div>
      </div>

      {/* Services Included */}
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Services: What do they include?</h1>
      <div className="flex flex-col md:flex-row md:items-start mb-10">
        <div className="md:w-2/3 w-full text-gray-700 text-lg pr-0 md:pr-8">
          <p className="mb-6">
            We provide comprehensive assistance to trucking companies and independent owner-operators
            with various aspects of International Registration Plan (IRP) registration and compliance.
            Here’s an elaboration on the types of services we provide:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <span className="font-semibold">IRP Account Setup:</span> we help clients set up their
              initial IRP accounts, ensuring all necessary paperwork and documentation are completed
              accurately and submitted to the appropriate authorities. This includes assisting clients
              in determining their base jurisdiction for registration purposes.
            </li>
            <li>
              <span className="font-semibold text-blue-900">Adding Additional Vehicles:</span> As clients
              expand their fleets or acquire new vehicles, we assist them in adding these vehicles to
              their existing IRP accounts. This involves completing the required registration forms and
              ensuring compliance with jurisdictional requirements.
            </li>
          </ul>
        </div>

        <div className="md:w-1/3 w-full mt-6 md:mt-0">
          <img
            src="/sign-woman.jpg"
            alt="Filling out IRP registration form"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>


      {/* Two hands */}
      <div className="flex flex-col md:flex-row md:items-start mb-10">
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="/two-hands.jpg"
            alt="Hands"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
        <div className="md:w-1/2 w-full text-gray-700 text-lg">
          <p className="mb-4">
            Transfer of Registration: When clients need to transfer an existing IRP registration from one vehicle to another, we facilitate this process. This may involve updating registration details, submitting transfer paperwork, and ensuring seamless continuity of registration.
          </p>
          <p className="mb-4">
            Renewal Assistance: we provide timely reminders and assistance to clients for renewing their IRP registrations each year. This includes managing renewal paperwork, updating registration information as needed, and ensuring compliance with renewal deadlines to avoid penalties.
          </p>
          <p className="mb-4">
            Compliance Consulting: we offer expert guidance and consulting services to help clients understand and comply with IRP regulations and requirements. This may include advising clients on jurisdictional rules, maintaining accurate records, and addressing compliance issues as they arise.
          </p>
        </div>
      </div>


      {/* Speaking hands */}
      <div className="flex flex-col md:flex-row md:items-start mb-10">

        <div className="md:w-1/2 w-full text-gray-700 text-lg">
          <p className="mb-4">
            Customer Support and Representation: we serve as a dedicated point of contact for clients, providing ongoing customer support and representation for all their IRP-related needs. This includes addressing inquiries, resolving issues with regulatory authorities, and advocating on behalf of clients as needed.
          </p>
          <p className="mb-4">
            Training and Education: we offer training and educational resources to help clients stay informed about IRP regulations, compliance best practices, and updates within the industry.
          </p>

        </div>

        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-8">
          <img
            src="/speaking.jpg"
            alt="Speaker"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-gray-700 text-lg mb-10">
        <p className="mb-6">
          Overall, we serve as a trusted partner for trucking companies and independent owner-operators, offering comprehensive assistance with all aspects of IRP registration, compliance, and ongoing support. By leveraging our expertise and resources, clients can streamline their operations, maintain regulatory compliance, and focus on their core business activities.

        </p>
      </div>





    </div>

  );
};

export default IrpNewRegistration;
