const ScacRegistration = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-700">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">What is SCAC?</h1>
      <p className="mb-6 text-lg">
        The Standard Carrier Alpha Code (SCAC) is a unique four-letter identifier assigned to transportation companies, primarily motor carriers, operating within the U.S. It is widely used for shipment documentation, customs processing, and other logistics-related activities.
      </p>
      <p className="mb-6 text-lg">
        SCAC codes are vital for businesses transporting goods across state lines or internationally, as they help streamline operations, improve shipment tracking, and enhance communication between all parties involved in the shipping process.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-900">Why Do You Need an SCAC Code?</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>
          <span className="font-semibold">Industry Standard for Identification:</span> SCAC provides a unique identifier for each transportation company, used by shippers, customs officials, and logistics partners to identify carriers, freight forwarders, and other transport entities.
        </li>
        <li>
          <span className="font-semibold">Required for Electronic Systems:</span> Many automated freight payment systems, bill of lading forms, and customs clearance procedures require a valid SCAC code, especially for interstate and international shipments.
        </li>
        <li>
          <span className="font-semibold">Customs and Regulatory Compliance:</span> For international shipping, including to and from Canada or Mexico, the SCAC code is necessary for customs filings and regulatory compliance, helping ensure smooth processing through customs.
        </li>
        <li>
          <span className="font-semibold">Tracking and Reporting:</span> SCAC codes facilitate shipment tracking, invoicing, and reporting for carriers and businesses alike, simplifying logistics management.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-900">Who Needs an SCAC Code?</h2>
      <p className="mb-6 text-lg">
        Typically, the following types of businesses are required to obtain an SCAC code:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>Motor Carriers operating commercial vehicles across state or international borders.</li>
        <li>Freight Forwarders who consolidate shipments for transportation.</li>
        <li>Brokers facilitating arrangements between shippers and carriers.</li>
        <li>Leasing Companies providing vehicles to carriers, brokers, or forwarders.</li>
        <li>Third-Party Logistics (3PL) Providers managing transportation and logistics for clients.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-900">How to Register for an SCAC Code</h2>
      <ol className="list-decimal list-inside space-y-4 text-lg mb-6">
        <li>
          <span className="font-semibold">Complete the Registration Form:</span> Provide basic information about your business, including legal name, contact details, and transportation services.
        </li>
        <li>
          <span className="font-semibold">Submit to NMFTA:</span> Send the completed form along with the applicable fee to the National Motor Freight Traffic Association (NMFTA) for processing.
        </li>
        <li>
          <span className="font-semibold">Receive Your SCAC Code:</span> Upon approval, NMFTA will assign a unique four-letter SCAC code for your business.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4 text-blue-900">SCAC Code Fees</h2>
      <p className="mb-6 text-lg">
        The fees vary by business type but generally include:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
        <li>Initial Registration Fee: Approximately $80–$100 for new SCAC codes.</li>
        <li>Annual Renewal Fee: Typically $70–$100 to keep the registration active each year.</li>
      </ul>
      <p className="mb-6 text-lg">
        For the latest fee information, visit the NMFTA website.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-900">Uses of the SCAC Code</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
        <li><span className="font-semibold">Shipping Documentation:</span> Used on bills of lading, invoices, and manifests to identify the carrier.</li>
        <li><span className="font-semibold">Customs Processing:</span> Required for customs paperwork when shipping internationally.</li>
        <li><span className="font-semibold">Electronic Data Interchange (EDI):</span> Facilitates automated freight data exchange among shippers and carriers.</li>
        <li><span className="font-semibold">Freight Billing and Payment:</span> Ensures accurate freight payment and cost allocation.</li>
        <li><span className="font-semibold">Tracking Shipments:</span> Enables shipment tracking and issue resolution.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-900">Validity and Renewal</h2>
      <p className="mb-6 text-lg">
        SCAC codes are permanent but require annual renewal to remain active and valid within freight and customs systems.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-red-700">Consequences of Not Having an SCAC Code</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
        <li><span className="font-semibold">Shipment Processing Delays:</span> Lack of an SCAC may prevent use of automated freight payment and customs systems.</li>
        <li><span className="font-semibold">Customs Non-Compliance:</span> Potential fines and border delays if shipping internationally without a valid SCAC.</li>
        <li><span className="font-semibold">Operational Inefficiencies:</span> Difficulty tracking shipments and maintaining regulatory compliance.</li>
      </ul>

      <p className="text-lg mb-10">
        DegyUS Consulting Inc assists businesses in navigating SCAC registration and compliance to ensure smooth operations across state and international lines.
      </p>
    </div>

  );
};

export default ScacRegistration;