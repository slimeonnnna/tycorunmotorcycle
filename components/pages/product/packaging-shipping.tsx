const PackagingShipping = () => (
  <div className="space-y-6 rounded-2xl border border-gray-800 bg-gray-900/40 p-5">
    <h2 className="text-xl font-bold text-gray-100">Packaging & Shipping Information</h2>
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-700/70 bg-gray-900/60 p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-blue-500/80"></span>
          <i className="fas fa-box text-blue-400 text-sm" aria-hidden="true"></i>
          <h3 className="font-bold text-gray-200">Packaging Details</h3>
        </div>
        <table className="w-full border-collapse text-sm">
          <tbody>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                Dimensions
              </th>
              <td className="py-2 text-right text-gray-200">180 × 70 × 110 cm (CBU Standard)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                Gross Weight
              </th>
              <td className="py-2 text-right text-gray-200">125 kg per unit</td>
            </tr>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                Protection Level
              </th>
              <td className="py-2 text-right text-gray-200">Steel Frame + 7-layer Carton (Inside)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                Safety Features
              </th>
              <td className="py-2 text-right text-gray-200">Moisture-proof wrap & shock-absorbing foam</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-2xl border border-gray-700/70 bg-gray-900/60 p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-emerald-400/80"></span>
          <i className="fas fa-truck-loading text-emerald-300 text-sm" aria-hidden="true"></i>
          <h3 className="font-bold text-gray-200">Container Loading Efficiency</h3>
        </div>
        <table className="w-full border-collapse text-sm">
          <tbody>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                CBU Mode (Fully Assembled)
              </th>
              <td className="py-2 text-right text-gray-200">20GP: 20 Units</td>
            </tr>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                CBU Mode (Fully Assembled)
              </th>
              <td className="py-2 text-right text-blue-300">40HQ: 45 Units (Optimized)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                SKD/CKD Mode (Cost Saving)
              </th>
              <td className="py-2 text-right text-gray-200">40HQ: 75+ Units (Contact for layout plan)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-2xl border border-gray-700/70 bg-gray-900/60 p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-blue-500/90"></span>
          <i className="fas fa-shield-alt text-blue-500/90 text-sm" aria-hidden="true"></i>
          <h3 className="font-bold text-gray-200">Logistics & Compliance</h3>
        </div>
        <table className="w-full border-collapse text-sm">
          <tbody>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                Lead Time
              </th>
              <td className="py-2 text-right text-gray-200">15-25 days (Production)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                Battery Compliance
              </th>
              <td className="py-2 text-right text-gray-200">MSDS / UN38.3 Certified</td>
            </tr>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                Incoterms
              </th>
              <td className="py-2 text-right text-gray-200">EXW, FOB, CIF, DDP</td>
            </tr>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                Loading Ports
              </th>
              <td className="py-2 text-right text-gray-200">Ningbo / Shanghai (Priority)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                Payment Terms
              </th>
              <td className="py-2 text-right text-gray-200">30% deposit, balance before shipment</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default PackagingShipping;

