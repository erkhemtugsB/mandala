const Bookkeeping = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-700">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">
        Prospect Licensing Payroll Services
      </h1>

      <div className="mb-10 text-lg space-y-6">
        <p>
          Prospect Licensing can help you with employee payroll by offering the following services:
        </p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <h2 className="text-2xl font-semibold mb-2">Employee Payroll Processing</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Calculating wages or salaries based on hours worked, fixed rates, or other agreed-upon terms.</li>
              <li>Deducting taxes, social security contributions, and other withholdings from employees’ pay.</li>
            </ul>
          </li>

          <li>
            <h2 className="text-2xl font-semibold mb-2">Tax Filing and Compliance</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Ensuring accurate calculation and timely submission of payroll taxes to government authorities.</li>
              <li>Staying updated on tax laws and regulations to ensure compliance.</li>
            </ul>
          </li>

          <li>
            <h2 className="text-2xl font-semibold mb-2">Direct Deposit and Payroll Distribution</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Facilitating direct deposit of employees’ paychecks into their bank accounts.</li>
              <li>Preparing and distributing physical paychecks if required.</li>
            </ul>
          </li>

          <li>
            <h2 className="text-2xl font-semibold mb-2">Recordkeeping</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Maintaining detailed records of employee earnings, deductions, and other payroll-related information.</li>
              <li>Generating pay stubs and providing employees with records of their earnings.</li>
            </ul>
          </li>

          <li>
            <h2 className="text-2xl font-semibold mb-2">Compliance Reporting</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Preparing and filing reports required by government agencies, such as W-2 forms and other year-end statements.</li>
            </ul>
          </li>

          <li>
            <h2 className="text-2xl font-semibold mb-2">Time and Attendance Tracking</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Recording and tracking employee working hours, overtime, and absences.</li>
            </ul>
          </li>
        </ol>

        <p>
          By outsourcing payroll services, businesses can focus on their core activities while leaving the complexities of payroll management to experts. This can save time, reduce the risk of errors, and help maintain compliance with ever-changing tax and labor laws.
        </p>
      </div>
    </div>

  );
};

export default Bookkeeping;