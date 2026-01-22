const CompanyProfile = () => (
  <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-5">
    <h2 className="text-xl font-bold text-gray-100 mb-4">Company Profile</h2>
    <div className="space-y-4">
      <p className="text-gray-300">
        TYCORUN is a leading manufacturer of electric vehicles specializing in commercial-grade electric motorcycles and scooters. With over 10 years of experience in the industry, we serve customers worldwide with reliable, cost-effective solutions for last-mile delivery and urban transportation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
          <h3 className="font-bold text-blue-400 mb-2">Production Capacity</h3>
          <p className="text-gray-200">50,000+ units per month</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
          <h3 className="font-bold text-green-400 mb-2">R&D Team</h3>
          <p className="text-gray-200">Over 50 engineers</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
          <h3 className="font-bold text-purple-400 mb-2">Export Markets</h3>
          <p className="text-gray-200">Over 50 countries</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-gray-200 mb-2">Quality Certifications</h3>
        <p className="text-gray-300">We hold ISO 9001 certification and our products are CE, TÜV, EPA, DOT approved for international markets.</p>
      </div>
    </div>
  </div>
);

export default CompanyProfile;

