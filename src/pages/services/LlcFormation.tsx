const LlcFormation = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto text-gray-700">
      <h1 className="text-4xl font-bold mb-6 text-blue-900 text-center">
        Understanding and Forming an LLC
      </h1>

      <p className="mb-6">
        A Limited Liability Company (LLC) is a flexible business structure that combines the liability
        protection of a corporation with the tax simplicity of a sole proprietorship or partnership.
        Created under state law, an LLC can be owned by one or more individuals or entities, known as members.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Why Form an LLC?</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Limited Liability Protection:</strong> Your personal assets are shielded from business debts
          and legal claims, similar to corporate protection.
        </li>
        <li>
          <strong>Tax Flexibility:</strong> LLCs are typically taxed through pass-through taxation, avoiding
          corporate double taxation. You can also choose corporate taxation if it benefits you.
        </li>
        <li>
          <strong>Fewer Formalities:</strong> No mandatory board meetings or extensive recordkeeping like a corporation.
        </li>
        <li>
          <strong>Ownership Flexibility:</strong> Unlimited members allowed—can include individuals, corporations,
          other LLCs, or foreign entities.
        </li>
        <li>
          <strong>Credibility:</strong> An LLC adds professionalism and can build trust with clients, vendors,
          and investors.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Steps to Start an LLC</h2>
      <ol className="list-decimal list-inside space-y-3 mb-6">
        <li>
          <strong>Choose a Name:</strong> Must be unique in your state and include “LLC” or “Limited Liability Company.”
        </li>
        <li>
          <strong>Select Your State:</strong> Form in your home state or in business-friendly states like Delaware or Nevada.
        </li>
        <li>
          <strong>File Articles of Organization:</strong> Submit this to your state to officially form your LLC.
        </li>
        <li>
          <strong>Appoint a Registered Agent:</strong> This person or entity accepts legal documents for the LLC.
        </li>
        <li>
          <strong>Create an Operating Agreement:</strong> Outlines management, member responsibilities, and profit sharing.
        </li>
        <li>
          <strong>Obtain an EIN:</strong> Required by the IRS for taxes, employees, and bank accounts.
        </li>
        <li>
          <strong>Secure Local Permits:</strong> Depending on your business, you may need city or county licenses.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Types of LLCs</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Single-Member LLC:</strong> One owner with full control and simple tax reporting.
        </li>
        <li>
          <strong>Multi-Member LLC:</strong> Multiple owners share profits and decision-making.
        </li>
        <li>
          <strong>Series LLC:</strong> Multiple protected divisions under one LLC.
        </li>
        <li>
          <strong>Professional LLC (PLLC):</strong> For licensed professionals such as doctors, lawyers, or accountants.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Is an LLC Right for You?</h2>
      <p className="mb-6">
        An LLC is ideal for entrepreneurs who want personal asset protection, tax flexibility, and a
        straightforward structure with fewer formalities. It’s a great choice for small to medium-sized
        businesses, joint ventures, and investment partnerships.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <p className="mb-2 font-semibold">For help forming your LLC, contact:</p>
        <p><strong>DegyUS Consulting Inc</strong></p>
        <p>5105 Tollview Dr, Suite 246, Rolling Meadows, IL 60008</p>
        <p>Email: <strong>degyusconsulting@gmail.com</strong></p>
        <p>Phone: <strong>(224) 830-3555</strong> | <strong>(814) 883-0073</strong></p>
      </div>
    </div>

  );
};

export default LlcFormation;