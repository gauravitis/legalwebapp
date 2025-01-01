import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: false
});

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="flex items-center justify-center text-[#4B6BFB] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <h1 className="ml-3 text-3xl md:text-4xl font-bold text-[#4B6BFB]">Adv. Ajay Kumar Singh</h1>
              </div>
              <p className="text-lg md:text-xl text-[#4B6BFB] font-medium mb-4">Building Trust, Protecting Dreams</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">RESOLVING RERA PROPERTY CHALLENGES</h2>
              <div className="space-y-2 text-gray-600">
                <p>Payment Refunds, Possession, Compensation for Delays, and Property Cancellation related Legal Matters.</p>
                <p>Building Plans, Construction Quality, Project Completion related legal matters.</p>
                <p>Complaints, Appeals, and RERA Compliance.</p>
              </div>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="/consultation"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
                >
                  Schedule Consultation
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                alt="Lady Justice Statue"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RERA Advocacy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                  alt="Modern Real Estate Building"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg transform hover:scale-105 transition duration-500"
                  priority
                />
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Trusted RERA Advocate: Resolving Property Issues, from Refunds to Possession and Compensation Claims
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The Indian real estate sector has grown exponentially, fueled by rapid urbanization and economic progress. 
                  With this expansion comes the need for clear regulations to protect homebuyers and ensure accountability among developers. 
                  The Real Estate (Regulation and Development) Act (RERA) stands as a cornerstone for promoting transparency and fairness in this dynamic industry.
                </p>
                <p>
                  As a dedicated RERA advocate, I specialize in addressing a wide range of property-related challenges. 
                  Whether you're seeking a refund, possession of your property, or compensation for delays, I provide expert legal guidance to safeguard your interests. 
                  My extensive experience in RERA matters enables me to navigate complex legal and regulatory frameworks, offering clients practical and effective solutions.
                </p>
                <p>
                  My services are designed to be client-focused and cost-effective. From filing RERA complaints to ensuring compliance, 
                  I am committed to simplifying the process for you. Whether your concerns involve legal disputes, financial matters, 
                  or professional advice on real estate issues, I provide comprehensive support to help you achieve your goals.
                </p>
                <p>
                  Let me be your trusted partner in resolving property challenges and securing your rightful interests under RERA. 
                  Together, we'll work toward a successful resolution, every step of the way.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/consultation"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4B6BFB] hover:bg-blue-700 transition duration-300"
                >
                  Schedule a Consultation
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Court Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Consumer Court "an Alternate To RERA"
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Under the Consumer Protection Act 1986, dissatisfied buyers have the option to 
                  seek redressal through consumer courts, which provide an alternative forum for 
                  addressing issues of service deficiency by builders. We assist the clients in filing 
                  consumer cases against the builder to claim refunds, possession, interest, and 
                  compensation.
                </p>
                <p>
                  This can be done simultaneously with a pending RERA case, 
                  provided that the same relief is not claimed in both cases. The act establishes three 
                  distinct bodies at the district, state, and national levels, enabling buyers to pursue 
                  compensation such as refunds with interest, penalty for delays, litigation costs, 
                  and more. The jurisdiction of the consumer court in which the case should be filed 
                  will depend on the quantum of relief sought:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>For claims up to 1 crore, the case can be filed in the District Commission.</li>
                  <li>For claims between 1 crore and 10 crores, the case can be filed in the State Commission.</li>
                  <li>For claims exceeding 10 crores, the case can be filed in the National Commission.</li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/consultation"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4B6BFB] hover:bg-blue-700 transition duration-300"
                >
                  Discuss Your Case
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl bg-[#00BCD4]">
                <Image
                  src="/images/consumer-rights.svg"
                  alt="Consumer Rights and Protection"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-8 transform hover:scale-105 transition duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Adv. Ajay Kumar Singh</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience in property law and RERA cases, I have helped hundreds of clients navigate
              complex legal challenges and achieve favorable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Years Experience */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-blue-50 mb-4">
                  <svg className="w-8 h-8 text-[#4B6BFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600 mt-2">Years Experience</div>
              </div>
            </div>

            {/* Satisfied Clients */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-blue-50 mb-4">
                  <svg className="w-8 h-8 text-[#4B6BFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 mt-2">Satisfied Clients</div>
              </div>
            </div>

            {/* RERA Cases */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-blue-50 mb-4">
                  <svg className="w-8 h-8 text-[#4B6BFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900">300+</div>
                <div className="text-sm text-gray-600 mt-2">RERA Cases</div>
              </div>
            </div>

            {/* Success Rate */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-blue-50 mb-4">
                  <svg className="w-8 h-8 text-[#4B6BFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600 mt-2">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Legal Services</h2>
            <p className="text-lg md:text-xl text-[#4B6BFB] font-medium mb-6">Building Trust, Protecting Dreams</p>
            <p className="text-lg text-gray-600">
              Comprehensive legal solutions for all your property-related matters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RERA Compliance */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#4B6BFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">RERA Compliance</h3>
              <p className="text-gray-600">
                Expert guidance on RERA regulations and compliance for builders and buyers.
              </p>
            </div>

            {/* Property Disputes */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#4B6BFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Disputes</h3>
              <p className="text-gray-600">
                Resolution of property disputes including ownership, boundary, and tenant issues.
              </p>
            </div>

            {/* Legal Documentation */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#4B6BFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Documentation</h3>
              <p className="text-gray-600">
                Comprehensive legal documentation services for property transactions.
              </p>
            </div>

            {/* Real Estate Transactions */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#4B6BFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Estate Transactions</h3>
              <p className="text-gray-600">
                Legal assistance in buying, selling, and leasing of residential and commercial properties.
              </p>
            </div>

            {/* Property Litigation */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#4B6BFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Litigation</h3>
              <p className="text-gray-600">
                Strong representation in property-related court cases and litigation.
              </p>
            </div>

            {/* Legal Consultation */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#4B6BFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Consultation</h3>
              <p className="text-gray-600">
                Expert legal advice on property matters and real estate investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section id="expertise" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Areas of Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4B6BFB]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">RERA Regulations & Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4B6BFB]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Real Estate Transactions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4B6BFB]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Legal Due Diligence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4B6BFB]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Construction Agreements</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4B6BFB]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Property Documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4B6BFB]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Property Dispute Resolution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4B6BFB]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Title Investigation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4B6BFB]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Lease & Rental Agreements</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Legal Documentation"
                  width={1200}
                  height={800}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-8">
                  <p className="text-gray-600">
                    With extensive experience in property law and RERA cases across Delhi NCR, we provide expert legal solutions tailored to your specific needs. Our deep understanding of local regulations and property markets ensures the best possible outcomes for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Legal Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="RERA Updates"
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">RERA</div>
                <h3 className="text-xl font-semibold mb-2">Latest RERA Updates 2024</h3>
                <p className="text-gray-600 mb-4">Key changes and amendments in RERA regulations that property buyers and sellers should know.</p>
                <Link href="/blog/rera-updates-2024" className="text-[#4B6BFB] hover:underline">Read More →</Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80"
                alt="Property Rights"
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">Property Law</div>
                <h3 className="text-xl font-semibold mb-2">Understanding Property Rights</h3>
                <p className="text-gray-600 mb-4">A comprehensive guide to property rights and ownership laws in India.</p>
                <Link href="/blog/understanding-property-rights" className="text-[#4B6BFB] hover:underline">Read More →</Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Legal Documentation"
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">Documentation</div>
                <h3 className="text-xl font-semibold mb-2">Essential Legal Documents</h3>
                <p className="text-gray-600 mb-4">Important legal documents required for property transactions and their significance.</p>
                <Link href="/blog/essential-legal-documents" className="text-[#4B6BFB] hover:underline">Read More →</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4B6BFB] hover:bg-blue-600 transition duration-300"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with us for expert legal guidance on your property matters. We're here to help protect your interests.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/consultation"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
