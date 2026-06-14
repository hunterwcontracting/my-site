export default function TermsAndConditions() {
  return (
    <main style={{ backgroundColor: "#0E0E10", minHeight: "100vh" }} className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#F5F4F0" }}>Terms and Conditions</h1>
        <p className="text-sm mb-12" style={{ color: "#8A8A8A" }}>Effective Date: 2 June 2026</p>

        <div className="space-y-10">

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>1. Introduction</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              These Terms and Conditions govern your use of the FrontDeskAgency website and the AI Receptionist Services provided by FrontDeskAgency Limited. By accessing our website or purchasing our services, you agree to these Terms. These Terms work together with the signed AI Receptionist Services Agreement and Privacy and Data Processing Agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>2. Our Services</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              We offer AI-powered virtual receptionist services, including 24/7 call answering, appointment booking, voicemail transcription, spam screening, after-hours messaging, basic CRM notes, and related features. Full service descriptions are available on our website and in the signed Services Agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>3. Pricing Plans</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#8A8A8A" }}>
              All prices are in NZD, exclusive of 15% GST. Prices are effective January 2026 and subject to change with notice.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse" style={{ color: "#8A8A8A" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #2a2a32" }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#F5F4F0" }}>Plan</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#F5F4F0" }}>Monthly Price</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#F5F4F0" }}>Minutes</th>
                    <th className="text-left py-3 font-semibold" style={{ color: "#F5F4F0" }}>Setup Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #2a2a32" }}>
                    <td className="py-3 pr-4">Starter</td>
                    <td className="py-3 pr-4">$179.99</td>
                    <td className="py-3 pr-4">300 / month</td>
                    <td className="py-3">$1,000</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #2a2a32" }}>
                    <td className="py-3 pr-4">Professional</td>
                    <td className="py-3 pr-4">$349.99</td>
                    <td className="py-3 pr-4">1,200 / month</td>
                    <td className="py-3">$599</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Enterprise</td>
                    <td className="py-3 pr-4">Custom Quote</td>
                    <td className="py-3 pr-4">Unlimited</td>
                    <td className="py-3">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-relaxed mt-4" style={{ color: "#8A8A8A" }}>
              Annual billing available with 15% discount. Overage rates: Starter $0.42/min, Professional $0.30/min. A free 14-day trial is available on all plans (no credit card required).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>4. Payment and Billing</h2>
            <ul className="list-disc list-inside space-y-1" style={{ color: "#8A8A8A" }}>
              <li className="text-sm">Invoices are due within 14 days</li>
              <li className="text-sm">Late payments incur 2% per month compounding interest</li>
              <li className="text-sm">We may suspend the service if payment is overdue by more than 30 days</li>
              <li className="text-sm">Annual plans are billed in full upfront and are non-refundable for the paid period</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>5. Term and Renewal</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              Services commence on the Effective Date in your signed agreement and run for an initial 12-month term. Plans automatically renew for successive 12-month periods unless you provide at least 30 days written notice of non-renewal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>6. Cancellation and Termination</h2>
            <ul className="list-disc list-inside space-y-1" style={{ color: "#8A8A8A" }}>
              <li className="text-sm">You may cancel anytime in writing. The service remains active until the end of the current paid period</li>
              <li className="text-sm">No refunds for unused time in annual plans. Setup fees are non-refundable</li>
              <li className="text-sm">We may terminate immediately for material breach not remedied within 14 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>7. Client Obligations</h2>
            <ul className="list-disc list-inside space-y-1" style={{ color: "#8A8A8A" }}>
              <li className="text-sm">Provide accurate KYC documents as required</li>
              <li className="text-sm">Inform callers (where appropriate) that calls may be handled by AI and may be recorded</li>
              <li className="text-sm">Comply with the Privacy Act 2020 and Unsolicited Electronic Messages Act 2007 when using customer data</li>
              <li className="text-sm">Not use the service for unlawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>8. Intellectual Property</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              All AI technology, voice agents, and platform features remain our property. You own your business and customer data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>9. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              To the maximum extent permitted by the Fair Trading Act 1986 and Contract and Commercial Law Act 2017, our total liability is limited to the fees paid by you in the preceding 12 months. We are not liable for indirect or consequential loss. This does not limit liability that cannot legally be excluded.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>10. Governing Law</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              Governed by New Zealand law. Disputes are subject to the exclusive jurisdiction of New Zealand courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>11. Entire Agreement</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              These Terms, together with your signed Services Agreement and Privacy and Data Processing Agreement, form the entire agreement between the parties.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}