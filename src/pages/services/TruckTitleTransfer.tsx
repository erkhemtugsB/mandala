const TruckTitleTransfer = () => {
  return (
    <div className="mt-6 p-16">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">What is a Title Transfer?</h2>
      <p className="text-gray-700 mb-4">
        A semi-truck title transfer refers to the legal process of transferring ownership of a semi-truck from one party to another.
        This process is necessary when buying or selling a semi-truck, gifting it, inheriting it, or making other changes in ownership.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">General Steps in a Semi-Truck Title Transfer:</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <span className="font-semibold">Obtain the title:</span> The current owner must have the original title of the semi-truck.
          If the title is lost or missing, a duplicate must be requested from the appropriate state or regional authorities.
        </li>
        <li>
          <span className="font-semibold">Complete the title transfer form:</span> Both seller and buyer fill out a transfer form,
          providing details like make, model, year, VIN, and odometer reading.
        </li>
        <li>
          <span className="font-semibold">Provide necessary documentation:</span> This may include a bill of sale, proof of insurance,
          and identification for both parties.
        </li>
        <li>
          <span className="font-semibold">Pay transfer fees:</span> Fees vary by jurisdiction and must be paid to process the transfer.
        </li>
        <li>
          <span className="font-semibold">Submit paperwork:</span> All forms and documents must be sent to the correct authorities for processing.
        </li>
        <li>
          <span className="font-semibold">Receive new title:</span> Once approved, the new owner will receive a title in their name.
        </li>
      </ul>

      <p className="mt-4 text-gray-700">
        Following all required steps and local regulations is essential to ensure a smooth, legal semi-truck title transfer and avoid
        any legal or registration issues.
      </p>

      {/* Why is it Important Section */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Why is it Important?</h2>
        <p className="text-gray-700 mb-4">
          Transferring the title of a semi-truck (or any vehicle) is important for several reasons:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Legal ownership:</span> The title serves as legal proof of ownership.
            Transferring the title ensures that the new owner has legal rights to the semi-truck.
          </li>
          <li>
            <span className="font-semibold">Liability:</span> It removes the seller’s liability for the vehicle.
          </li>
          <li>
            <span className="font-semibold">Registration and insurance:</span> Required for registration and insurance in the new owner’s name.
          </li>
          <li>
            <span className="font-semibold">Avoiding legal complications:</span> Prevents disputes, unpaid fines, or ownership issues.
          </li>
          <li>
            <span className="font-semibold">Resale value:</span> Maintains or increases resale value with a clear ownership history.
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          Completing the title transfer promptly and correctly protects both the buyer and seller, ensuring smooth vehicle ownership.
        </p>
      </div>
    </div>
  );
};

export default TruckTitleTransfer;
