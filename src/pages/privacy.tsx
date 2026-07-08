export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-black/50 text-sm">Last updated: June 2026</p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="text-black/70 text-sm leading-relaxed">
          Snappy is a browser extension that helps users capture, beautify, and
          share screenshots. We are committed to protecting your privacy. This
          policy explains what data we collect and how we use it.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Data we collect</h2>
        <p className="text-black/70 text-sm leading-relaxed">
          Snappy only processes screenshot images that you explicitly capture
          using the extension. If you choose to generate a shareable link, the
          screenshot image is uploaded to secure cloud storage (Supabase) and
          automatically deleted after 3 days. We do not collect any personally
          identifiable information, browsing history, or page content beyond the
          screenshot you choose to capture.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Data we do not collect</h2>
        <ul className="text-black/70 text-sm leading-relaxed flex flex-col gap-1.5 list-disc list-inside">
          <li>No personally identifiable information</li>
          <li>No browsing history or web activity</li>
          <li>No authentication credentials</li>
          <li>No financial or payment information</li>
          <li>No location data</li>
          <li>No background monitoring of any kind</li>
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Shareable links</h2>
        <p className="text-black/70 text-sm leading-relaxed">
          When you click "Get Link", your beautified screenshot is uploaded to
          Supabase Storage. The image is accessible via a unique URL for 3 days,
          after which it is automatically deleted. No account is required and no
          personal data is associated with the upload.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Third party services</h2>
        <p className="text-black/70 text-sm leading-relaxed">
          Snappy uses Supabase for cloud storage of shared screenshots only.
          Supabase's privacy policy can be found at{" "}
          <a
            href="https://supabase.com/privacy"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            supabase.com/privacy
          </a>
          .
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="text-black/70 text-sm leading-relaxed">
          If you have any questions about this privacy policy, please reach out
          via the Chrome Web Store listing page.
        </p>
      </section>
    </main>
  );
}
