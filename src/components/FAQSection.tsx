import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

type FAQ = { q: string; a: string };

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
      <SectionWrapper>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl bg-bg-white p-5 shadow-sm">
              <h3 className="font-heading text-sm font-bold text-text">{faq.q}</h3>
              <p className="mt-2 text-sm text-text-light">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
