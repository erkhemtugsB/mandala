import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface ServiceData {
  title: string;
  category: string;
  description: string;
  benefits: string[];
  requirements: string[];
  process: string[];
  timeline: string;
  pricing: string;
}

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  const serviceData: Record<string, ServiceData> = {
    'irp-new-registration': {
      title: 'IRP NEW Registration',
      category: 'IRP Registration Services',
      description: 'Get your new International Registration Plan (IRP) registration to legally operate your commercial vehicles across multiple jurisdictions. Our expert team handles all the paperwork and ensures compliance with interstate regulations.',
      benefits: [
        'Legal operation across multiple states',
        'Simplified registration process',
        'Expert guidance through complex requirements',
        'Fast processing and approval',
        'Ongoing compliance support'
      ],
      requirements: [
        'Valid DOT number',
        'Proof of insurance',
        'Vehicle identification documents',
        'Business registration documents',
        'Completed application forms'
      ],
      process: [
        'Initial consultation and document review',
        'Prepare and submit IRP application',
        'Handle jurisdiction requirements',
        'Process payment and fees',
        'Receive IRP credentials and plates'
      ],
      timeline: '7-14 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'irp-addition': {
      title: 'IRP Addition',
      category: 'IRP Registration Services',
      description: 'Add new vehicles to your existing IRP registration quickly and efficiently. We handle all the paperwork to expand your fleet operations.',
      benefits: [
        'Quick vehicle additions to existing registration',
        'Maintain compliance across jurisdictions',
        'Streamlined process for fleet expansion',
        'Expert handling of all documentation'
      ],
      requirements: [
        'Existing IRP registration',
        'Vehicle identification documents',
        'Proof of insurance for new vehicle',
        'Updated fleet information'
      ],
      process: [
        'Review existing IRP registration',
        'Prepare addition documentation',
        'Submit to appropriate jurisdictions',
        'Process fees and payments',
        'Receive updated credentials'
      ],
      timeline: '5-10 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'irp-transfer': {
      title: 'IRP Transfer',
      category: 'IRP Registration Services',
      description: 'Transfer your IRP registration between jurisdictions or update ownership information with our professional assistance.',
      benefits: [
        'Seamless jurisdiction transfers',
        'Maintain continuous registration',
        'Expert guidance through transfer process',
        'Minimize downtime and complications'
      ],
      requirements: [
        'Current IRP registration',
        'Transfer documentation',
        'Updated business information',
        'Proof of new jurisdiction requirements'
      ],
      process: [
        'Evaluate transfer requirements',
        'Prepare transfer documentation',
        'Submit to relevant jurisdictions',
        'Handle fee transfers and payments',
        'Complete transfer process'
      ],
      timeline: '10-15 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'irp-renewal': {
      title: 'IRP Renewal',
      category: 'IRP Registration Services',
      description: 'Renew your IRP registration on time to avoid penalties and maintain continuous operation across jurisdictions.',
      benefits: [
        'Avoid late penalties and fees',
        'Maintain continuous operation',
        'Updated mileage calculations',
        'Compliance with current regulations'
      ],
      requirements: [
        'Current IRP registration',
        'Updated mileage records',
        'Current insurance documentation',
        'Fleet information updates'
      ],
      process: [
        'Review current registration status',
        'Calculate updated fees and mileage',
        'Prepare renewal documentation',
        'Submit renewal application',
        'Receive renewed credentials'
      ],
      timeline: '7-10 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'irp-45-day-temporary': {
      title: 'IRP 45-Day Temporary Registration',
      category: 'IRP Registration Services',
      description: 'Get temporary IRP registration for immediate operation while your permanent registration is being processed.',
      benefits: [
        'Immediate operation capability',
        'Bridge gap during permanent processing',
        'Full interstate operation rights',
        'Quick turnaround time'
      ],
      requirements: [
        'DOT number',
        'Proof of insurance',
        'Vehicle documentation',
        'Temporary registration application'
      ],
      process: [
        'Submit temporary registration request',
        'Process immediate documentation',
        'Issue temporary credentials',
        'Begin permanent registration process',
        'Transition to permanent registration'
      ],
      timeline: '1-3 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'trailer-registration-title-transfer': {
      title: 'Trailer Registration & Title Transfer',
      category: 'IRP Registration Services',
      description: 'Handle trailer registration and title transfers efficiently to keep your equipment legally compliant and operational.',
      benefits: [
        'Legal trailer operation',
        'Proper title documentation',
        'Compliance with state regulations',
        'Professional handling of transfers'
      ],
      requirements: [
        'Current title documentation',
        'Bill of sale (if applicable)',
        'Registration documents',
        'Identification documents'
      ],
      process: [
        'Review title and registration documents',
        'Prepare transfer paperwork',
        'Submit to appropriate agencies',
        'Process fees and taxes',
        'Receive new title and registration'
      ],
      timeline: '5-10 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'truck-title-transfer': {
      title: 'Truck Title Transfer',
      category: 'IRP Registration Services',
      description: 'Professional truck title transfer services to ensure proper ownership documentation and legal compliance.',
      benefits: [
        'Legal ownership transfer',
        'Proper documentation',
        'Compliance with state laws',
        'Expert handling of complex transfers'
      ],
      requirements: [
        'Current title',
        'Bill of sale',
        'Identification documents',
        'Lien information (if applicable)'
      ],
      process: [
        'Verify title documentation',
        'Prepare transfer documents',
        'Submit to DMV/state agency',
        'Process fees and taxes',
        'Receive new title'
      ],
      timeline: '7-14 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'ifta-registration-renewal': {
      title: 'IFTA Registration & Renewal',
      category: 'IFTA Filing Services',
      description: 'Get registered for International Fuel Tax Agreement (IFTA) or renew your existing registration to maintain compliance.',
      benefits: [
        'Simplified fuel tax reporting',
        'Multi-jurisdiction compliance',
        'Professional registration handling',
        'Ongoing support and guidance'
      ],
      requirements: [
        'DOT number',
        'Business registration',
        'Vehicle information',
        'Fuel purchase records'
      ],
      process: [
        'Complete IFTA application',
        'Submit registration documents',
        'Process registration fees',
        'Receive IFTA credentials',
        'Set up quarterly reporting'
      ],
      timeline: '7-10 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'ifta-quarterly-filings': {
      title: 'IFTA Quarterly Tax Return Filings',
      category: 'IFTA Filing Services',
      description: 'Professional quarterly IFTA tax return preparation and filing to ensure compliance and avoid penalties.',
      benefits: [
        'Accurate tax calculations',
        'Timely filing to avoid penalties',
        'Professional preparation',
        'Audit support and documentation'
      ],
      requirements: [
        'Fuel purchase receipts',
        'Mileage records',
        'IFTA registration',
        'Vehicle operation logs'
      ],
      process: [
        'Collect and review fuel records',
        'Calculate taxes owed/refunds',
        'Prepare quarterly return',
        'Submit to IFTA jurisdictions',
        'Provide filing confirmation'
      ],
      timeline: '3-5 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'ky-nm-ny-quarterly-filings': {
      title: 'KY, NM, NY Quarterly Filings',
      category: 'IFTA Filing Services',
      description: 'Specialized quarterly filing services for Kentucky, New Mexico, and New York jurisdictions.',
      benefits: [
        'State-specific expertise',
        'Accurate jurisdiction filings',
        'Compliance with state requirements',
        'Professional handling'
      ],
      requirements: [
        'State-specific fuel records',
        'Mileage documentation',
        'Registration information',
        'Previous filing history'
      ],
      process: [
        'Review state-specific requirements',
        'Prepare jurisdiction filings',
        'Submit to state agencies',
        'Process payments',
        'Provide filing confirmations'
      ],
      timeline: '3-5 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'ct-quarterly-filings': {
      title: 'CT Quarterly Filings',
      category: 'IFTA Filing Services',
      description: 'Connecticut-specific quarterly fuel tax filing services with expert knowledge of state requirements.',
      benefits: [
        'Connecticut compliance expertise',
        'Accurate state filings',
        'Timely submission',
        'Professional support'
      ],
      requirements: [
        'Connecticut fuel records',
        'Mileage logs',
        'Registration documents',
        'Previous CT filings'
      ],
      process: [
        'Review Connecticut requirements',
        'Prepare state filing',
        'Submit to CT authorities',
        'Process state fees',
        'Confirm filing completion'
      ],
      timeline: '3-5 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'or-quarterly-filings': {
      title: 'OR Quarterly Filings',
      category: 'IFTA Filing Services',
      description: 'Oregon-specific quarterly fuel tax filing services with comprehensive state compliance support.',
      benefits: [
        'Oregon compliance expertise',
        'State-specific calculations',
        'Professional filing service',
        'Ongoing support'
      ],
      requirements: [
        'Oregon fuel records',
        'Detailed mileage logs',
        'Registration information',
        'Previous OR filings'
      ],
      process: [
        'Review Oregon requirements',
        'Calculate state taxes',
        'Prepare OR filing',
        'Submit to state',
        'Provide confirmation'
      ],
      timeline: '3-5 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'corporations': {
      title: 'Corporation Formation',
      category: 'Company Formation & Registration',
      description: 'Professional corporation formation services to establish your trucking business with proper legal structure and protection.',
      benefits: [
        'Limited liability protection',
        'Professional business structure',
        'Tax advantages',
        'Enhanced credibility',
        'Easier access to capital'
      ],
      requirements: [
        'Business name selection',
        'Articles of incorporation',
        'Registered agent information',
        'Director and officer details',
        'Corporate bylaws'
      ],
      process: [
        'Business name search and reservation',
        'Prepare incorporation documents',
        'File with state authorities',
        'Obtain corporate records',
        'Set up corporate structure'
      ],
      timeline: '10-15 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'llc-formation': {
      title: 'LLC Formation',
      category: 'Company Formation & Registration',
      description: 'Limited Liability Company formation services providing flexibility and protection for your trucking business.',
      benefits: [
        'Personal asset protection',
        'Flexible management structure',
        'Tax flexibility',
        'Simplified compliance',
        'Professional credibility'
      ],
      requirements: [
        'LLC name selection',
        'Articles of organization',
        'Registered agent',
        'Operating agreement',
        'Member information'
      ],
      process: [
        'Name availability check',
        'Prepare formation documents',
        'File with state',
        'Create operating agreement',
        'Obtain LLC records'
      ],
      timeline: '7-10 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'ein-registration': {
      title: 'EIN Registration',
      category: 'Company Formation & Registration',
      description: 'Employer Identification Number (Tax ID) registration for your trucking business to handle taxes and banking.',
      benefits: [
        'Federal tax identification',
        'Business banking capability',
        'Employee hiring ability',
        'Professional business identity',
        'IRS compliance'
      ],
      requirements: [
        'Business formation documents',
        'Responsible party information',
        'Business structure details',
        'Contact information'
      ],
      process: [
        'Complete EIN application',
        'Submit to IRS',
        'Receive EIN confirmation',
        'Set up tax accounts',
        'Provide documentation'
      ],
      timeline: '1-3 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'motor-carrier-authority': {
      title: 'Motor Carrier Authority Registration',
      category: 'Company Formation & Registration',
      description: 'Obtain motor carrier operating authority to legally transport goods and operate your trucking business.',
      benefits: [
        'Legal operating authority',
        'Interstate commerce capability',
        'Access to freight opportunities',
        'Regulatory compliance',
        'Professional credentials'
      ],
      requirements: [
        'DOT number',
        'Business registration',
        'Insurance documentation',
        'Safety management plan',
        'Designated process agent'
      ],
      process: [
        'Prepare authority application',
        'Submit to FMCSA',
        'Process application fees',
        'Complete safety requirements',
        'Receive operating authority'
      ],
      timeline: '15-30 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'dot-number-registration': {
      title: 'DOT Number Registration and Updates',
      category: 'Company Formation & Registration',
      description: 'Department of Transportation number registration and updates for commercial vehicle operations.',
      benefits: [
        'Federal compliance requirement',
        'Legal commercial operation',
        'Safety program participation',
        'Interstate authority eligibility',
        'Professional identification'
      ],
      requirements: [
        'Business information',
        'Vehicle details',
        'Insurance documentation',
        'Safety management information',
        'Contact details'
      ],
      process: [
        'Complete DOT registration',
        'Submit to FMCSA',
        'Process registration',
        'Receive DOT number',
        'Set up compliance monitoring'
      ],
      timeline: '1-3 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'broker-authority': {
      title: 'Broker Authority Registration',
      category: 'Company Formation & Registration',
      description: 'Freight broker authority registration to arrange transportation services between shippers and carriers.',
      benefits: [
        'Freight brokerage operations',
        'Additional revenue streams',
        'Transportation arrangement authority',
        'Professional broker credentials',
        'Market expansion opportunities'
      ],
      requirements: [
        'Broker surety bond',
        'Designated process agent',
        'Business registration',
        'Financial responsibility',
        'Safety fitness requirements'
      ],
      process: [
        'Prepare broker application',
        'Obtain surety bond',
        'Submit to FMCSA',
        'Complete requirements',
        'Receive broker authority'
      ],
      timeline: '20-30 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'illinois-intrastate-authority': {
      title: 'Illinois Intrastate Authority Registration',
      category: 'Company Formation & Registration',
      description: 'Illinois-specific intrastate operating authority for commercial transportation within the state.',
      benefits: [
        'Illinois intrastate operations',
        'State compliance',
        'Local transportation authority',
        'Professional credentials',
        'Regulatory compliance'
      ],
      requirements: [
        'Illinois business registration',
        'Insurance documentation',
        'Vehicle information',
        'Safety requirements',
        'Application forms'
      ],
      process: [
        'Complete Illinois application',
        'Submit to state authorities',
        'Process state fees',
        'Meet safety requirements',
        'Receive intrastate authority'
      ],
      timeline: '10-15 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'hwy-use-taxes-2290': {
      title: 'HWY Use Taxes (Form 2290)',
      category: 'Tax Filing Services',
      description: 'Federal Heavy Vehicle Use Tax (Form 2290) filing for commercial vehicles over 55,000 pounds.',
      benefits: [
        'Federal tax compliance',
        'Legal vehicle operation',
        'Avoid penalties and interest',
        'Professional tax preparation',
        'Timely filing service'
      ],
      requirements: [
        'Vehicle identification numbers',
        'Vehicle weights',
        'First use dates',
        'Business tax information',
        'Previous year filings'
      ],
      process: [
        'Collect vehicle information',
        'Calculate tax liability',
        'Prepare Form 2290',
        'Submit to IRS',
        'Provide stamped schedule'
      ],
      timeline: '1-3 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'boc-3-filing': {
      title: 'BOC-3 Filing',
      category: 'Tax Filing Services',
      description: 'Designation of Process Agent (BOC-3) filing for motor carriers and freight brokers.',
      benefits: [
        'Federal compliance requirement',
        'Legal service of process',
        'Professional representation',
        'Regulatory compliance',
        'Nationwide coverage'
      ],
      requirements: [
        'DOT or MC number',
        'Business information',
        'Process agent designation',
        'Contact information'
      ],
      process: [
        'Prepare BOC-3 form',
        'Designate process agents',
        'Submit to FMCSA',
        'Process filing',
        'Provide confirmation'
      ],
      timeline: '1-2 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'ucr-registration': {
      title: 'UCR Registration Filing',
      category: 'Tax Filing Services',
      description: 'Unified Carrier Registration (UCR) filing for interstate motor carriers, brokers, and freight forwarders.',
      benefits: [
        'Interstate operation compliance',
        'Unified registration system',
        'Professional filing service',
        'Avoid penalties',
        'Streamlined process'
      ],
      requirements: [
        'DOT or MC number',
        'Fleet size information',
        'Business type classification',
        'Previous UCR filings'
      ],
      process: [
        'Determine registration requirements',
        'Calculate UCR fees',
        'Submit registration',
        'Process payment',
        'Provide confirmation'
      ],
      timeline: '1-3 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'payroll': {
      title: 'Payroll Services',
      category: 'Tax Filing Services',
      description: 'Comprehensive payroll processing services for trucking companies including tax withholdings and reporting.',
      benefits: [
        'Accurate payroll processing',
        'Tax compliance',
        'Direct deposit services',
        'Payroll tax filings',
        'Employee records management'
      ],
      requirements: [
        'Employee information',
        'Pay rates and schedules',
        'Tax withholding elections',
        'Bank account information',
        'Payroll policies'
      ],
      process: [
        'Set up payroll system',
        'Process payroll runs',
        'Handle tax withholdings',
        'File payroll taxes',
        'Provide payroll reports'
      ],
      timeline: 'Ongoing service',
      pricing: 'Contact us for competitive pricing'
    },
    'cdl-english-training': {
      title: 'CDL English Proficiency Training',
      category: 'Training Services',
      description: 'English language proficiency test preparation training for CDL drivers to meet federal requirements.',
      benefits: [
        'Meet federal requirements',
        'Improve communication skills',
        'Professional instruction',
        'Flexible scheduling',
        'Certification preparation'
      ],
      requirements: [
        'Current CDL or CDL permit',
        'Basic English understanding',
        'Training schedule availability',
        'Learning materials'
      ],
      process: [
        'Assess current proficiency',
        'Develop training plan',
        'Conduct training sessions',
        'Practice test preparation',
        'Certification testing'
      ],
      timeline: '2-4 weeks',
      pricing: 'Contact us for competitive pricing'
    },
    'irp-ifta-dot-audits': {
      title: 'IRP, IFTA, DOT Audits',
      category: 'Miscellaneous Services',
      description: 'Professional audit support and representation for IRP, IFTA, and DOT compliance audits.',
      benefits: [
        'Expert audit representation',
        'Compliance documentation',
        'Penalty minimization',
        'Professional guidance',
        'Audit resolution'
      ],
      requirements: [
        'Audit notification documents',
        'Business records',
        'Registration documents',
        'Tax filings',
        'Operational records'
      ],
      process: [
        'Review audit requirements',
        'Prepare documentation',
        'Represent during audit',
        'Address audit findings',
        'Resolve compliance issues'
      ],
      timeline: 'Varies by audit scope',
      pricing: 'Contact us for competitive pricing'
    },
    'scac-registration': {
      title: 'SCAC Registration',
      category: 'Miscellaneous Services',
      description: 'Standard Carrier Alpha Code (SCAC) registration for transportation companies and freight identification.',
      benefits: [
        'Unique carrier identification',
        'EDI transaction capability',
        'Professional freight handling',
        'Industry standard compliance',
        'Enhanced business credibility'
      ],
      requirements: [
        'Business registration',
        'Transportation authority',
        'Company information',
        'Desired SCAC code'
      ],
      process: [
        'Check SCAC availability',
        'Submit registration application',
        'Process with NMFTA',
        'Receive SCAC assignment',
        'Provide documentation'
      ],
      timeline: '5-10 business days',
      pricing: 'Contact us for competitive pricing'
    },
    'bookkeeping': {
      title: 'Bookkeeping Services',
      category: 'Miscellaneous Services',
      description: 'Professional bookkeeping services for trucking companies including financial record management and reporting.',
      benefits: [
        'Accurate financial records',
        'Tax preparation support',
        'Financial reporting',
        'Cash flow management',
        'Professional record keeping'
      ],
      requirements: [
        'Business financial documents',
        'Bank statements',
        'Receipts and invoices',
        'Payroll records',
        'Tax documents'
      ],
      process: [
        'Set up accounting system',
        'Record financial transactions',
        'Reconcile accounts',
        'Prepare financial reports',
        'Provide ongoing support'
      ],
      timeline: 'Ongoing service',
      pricing: 'Contact us for competitive pricing'
    },
    'notary-public': {
      title: 'Notary Public Services',
      category: 'Miscellaneous Services',
      description: 'Professional notary public services for document authentication and legal verification needs.',
      benefits: [
        'Document authentication',
        'Legal verification',
        'Professional notarization',
        'Convenient service',
        'Compliance support'
      ],
      requirements: [
        'Valid identification',
        'Documents to be notarized',
        'Signing parties present',
        'Notarization fees'
      ],
      process: [
        'Verify identity',
        'Review documents',
        'Witness signatures',
        'Apply notary seal',
        'Complete notarization'
      ],
      timeline: 'Same day service',
      pricing: 'Contact us for competitive pricing'
    }
  };

  const service = serviceData[serviceSlug || ''];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The requested service could not be found.</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Return Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <span className="text-gray-900">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Service Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/#services" 
            className="inline-flex items-center space-x-2 text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </Link>
          <div className="mb-4">
            <span className="bg-blue-800 text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
              {service.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>
      </div>

      {/* Service Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3">
                  {service.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <span className="text-gray-700">{step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Service Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Timeline</h4>
                  <p className="text-gray-600">{service.timeline}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Pricing</h4>
                  <p className="text-gray-600">{service.pricing}</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-blue-900 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Contact us today for a free consultation and personalized quote for your {service.title.toLowerCase()} needs.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-300" />
                  <div>
                    <p className="text-sm">(224) 830-3555</p>
                    <p className="text-sm">(814) 883-0073</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-300" />
                  <p className="text-sm">degyusconsulting@gmail.com</p>
                </div>
              </div>
              <Link 
                to="/#consultation" 
                className="block w-full bg-yellow-500 text-blue-900 text-center px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Related Services */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="space-y-2">
                <Link to="/services/dot-number-registration" className="block text-blue-600 hover:text-blue-800 text-sm">
                  DOT Number Registration
                </Link>
                <Link to="/services/motor-carrier-authority" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Motor Carrier Authority
                </Link>
                <Link to="/services/ifta-registration-renewal" className="block text-blue-600 hover:text-blue-800 text-sm">
                  IFTA Registration
                </Link>
                <Link to="/services/hwy-use-taxes-2290" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Form 2290 Filing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicePage;