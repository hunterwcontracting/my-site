export default function PrivacyPolicy() {
  return (
    <main style={{ backgroundColor: "#0E0E10", minHeight: "100vh" }} className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#F5F4F0" }}>Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: "#8A8A8A" }}>Effective Date: 2 June 2026</p>

        <div className="space-y-10">

          <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
            FrontDeskAgency (operated by Hayden James Beaven, Sole Trader trading as FrontDeskAgency) is committed to protecting the privacy of our clients and their customers in full compliance with the Privacy Act 2020 (NZ), including the Information Privacy Principles (IPPs) and the Privacy Amendment Act 2025.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>1. Information We Collect</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#8A8A8A" }}>We collect the following types of personal information:</p>
            <h3 className="text-sm font-semibold mb-2" style={{ color: "#F5F4F0" }}>Client Business Information (KYC / Verification)</h3>
            <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: "#8A8A8A" }}>
              <li className="text-sm">Business registration details (e.g. New Zealand Companies Register extract)</li>
              <li className="text-sm">Proof of address documents (tax notice, utility bill, lease, title deed, bank statement, etc.)</li>
              <li className="text-sm">Phone numbers and related verification materials</li>
            </ul>
            <h3 className="text-sm font-semibold mb-2" style={{ color: "#F5F4F0" }}>Call Data</h3>
            <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: "#8A8A8A" }}>
              <li className="text-sm">Call recordings (if enabled)</li>
              <li className="text-sm">Transcripts, logs, caller numbers, booking details, enquiries, and issues</li>
              <li className="text-sm">End-customer personal information collected during AI-handled calls (including names, phone numbers, email addresses, and booking preferences)</li>
            </ul>
            <h3 className="text-sm font-semibold mb-2" style={{ color: "#F5F4F0" }}>Website and Technical Data</h3>
            <ul className="list-disc list-inside space-y-1" style={{ color: "#8A8A8A" }}>
              <li className="text-sm">IP address, browser type, device information, pages visited, and usage statistics</li>
              <li className="text-sm">Enquiries submitted through our website contact forms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>2. Purposes of Collection</h2>
            <ul className="list-disc list-inside space-y-1" style={{ color: "#8A8A8A" }}>
              <li className="text-sm">Verifying your identity and legitimate control of phone numbers (KYC / telecom compliance)</li>
              <li className="text-sm">Delivering the AI receptionist service (24/7 call answering, automated booking, payment holds, spam screening, etc.)</li>
              <li className="text-sm">Storing customer contact data in Airtable for your marketing and promotional use</li>
              <li className="text-sm">Providing support, troubleshooting, analytics, reports, and dashboard access</li>
              <li className="text-sm">AI training, quality assurance, and service improvement</li>
              <li className="text-sm">Security, fraud prevention, and meeting legal/telecom obligations</li>
              <li className="text-sm">Responding to website enquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>3. How We Collect Information</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              Directly from you during signup and service setup. Indirectly from your customers when our AI handles calls on your behalf. Where personal information is collected indirectly, we take reasonable steps to notify individuals (where practicable) that their call is being managed by an AI system operated by FrontDeskAgency for the Client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>4. Use and Disclosure</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#8A8A8A" }}>
              We use and disclose personal information only for the purposes for which it was collected, or with your consent, or as required by law. We do not sell, rent, or disclose Call Data or customer contact information to third parties for marketing or unrelated purposes. Disclosure may occur to:
            </p>
            <ul className="list-disc list-inside space-y-1" style={{ color: "#8A8A8A" }}>
              <li className="text-sm">Trusted service providers (e.g. Twilio, Airtable, AWS, Stripe) under strict data processing agreements</li>
              <li className="text-sm">Courts, regulators, or law enforcement when legally compelled</li>
              <li className="text-sm">Professional advisers where necessary for our legitimate interests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>5. Security and Storage</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              All data is stored on encrypted AWS servers in Sydney and Frankfurt with encryption at rest and in transit. We maintain reasonable technical and organisational security measures consistent with Privacy Principle 5. If a privacy breach occurs that is likely to cause serious harm, we will notify the Office of the Privacy Commissioner and affected individuals as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>6. Retention of Personal Information</h2>
            <ul className="list-disc list-inside space-y-1" style={{ color: "#8A8A8A" }}>
              <li className="text-sm">Call recordings (if enabled): 6 months (default)</li>
              <li className="text-sm">Call logs and transcripts: 24 months</li>
              <li className="text-sm">Client KYC / business verification documents: Duration of the relationship + 7 years</li>
              <li className="text-sm">Customer contact data in Airtable: Retained until you request deletion or the service agreement is terminated</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>7. Access, Correction and Data Subject Rights</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              You and your customers have the right to access personal information we hold, request correction of inaccurate information, and request deletion (subject to legal retention requirements). Requests should be made in writing. We will respond within 10 working days where reasonably practicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>8. Cross-Border Disclosure</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              Personal information may be transferred to and stored in Australia and Germany. We ensure appropriate safeguards are in place through contractual measures or other approved mechanisms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>9. Marketing Use of Customer Data</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              Email addresses and contact details collected during calls are stored for your direct marketing purposes only. As the data controller for this information, you are solely responsible for ensuring your marketing activities comply with the Unsolicited Electronic Messages Act 2007 and the Privacy Act 2020.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>10. Changes to This Privacy Policy</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              We may update this Privacy Policy from time to time. Material changes will be notified on our website and, where appropriate, by email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#A855F7" }}>11. Contact Us</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
              Privacy Officer: Hayden James Beaven, FrontDeskAgency<br />
              Email: staff@frontdesk-agent.com<br />
              Phone: 020 4019 5202<br /><br />
              You also have the right to complain to the Office of the Privacy Commissioner at privacy.org.nz.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}