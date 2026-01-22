import Link from "next/link";

const quickSpec = [
  { label: "MOQ", value: "50 units / model" },
  { label: "Partnership", value: "OEM / ODM / SKD / CKD" },
  { label: "Certifications", value: "EEC / COC / DOT" },
  { label: "Incoterms", value: "FOB / CIF" },
];

const requirementCards = [
  {
    title: "Market Requirements",
    items: ["Target region", "Certification needs", "Channel type"],
  },
  {
    title: "Order Planning",
    items: ["Annual volume", "MOQ target", "Delivery schedule"],
  },
  {
    title: "Program Scope",
    items: ["OEM/ODM branding", "SKD/CKD option", "After-sales support"],
  },
];

const advantages = [
  "Factory-direct pricing with scalable capacity",
  "OEM/ODM customization and compliance support",
  "QC-driven production with export documentation",
  "After-sales parts planning and service support",
];

const faqs = [
  {
    question: "What is your MOQ?",
    answer:
      "Standard MOQ starts at 50 units per model, with pilot orders available for qualified partners.",
  },
  {
    question: "Do you offer OEM and ODM?",
    answer:
      "Yes. We provide branding, trims, documentation, and compliance support for regional markets.",
  },
  {
    question: "Do you support SKD/CKD?",
    answer:
      "Yes. SKD/CKD programs are available to reduce duties and localize assembly.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
            <div className="max-w-3xl" data-aos="fade-up">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
                <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent text-sm uppercase tracking-widest font-mono">
                  Contact
                </span>
              </div>
              <h1 className="font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl">
                OEM / ODM Partnership Inquiry
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Share your market, volume, and compliance needs. We will align
                on models, pricing, and production timelines.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Typical response time: 24-48 business hours.
              </p>
            </div>
            <div
              className="grid gap-3 rounded-2xl border border-gray-800 bg-gray-900/40 p-6"
              data-aos="fade-left"
            >
              {quickSpec.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-gray-800/60 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="text-xs uppercase tracking-widest text-gray-500">
                    {item.label}
                  </span>
                  <span className="text-sm text-gray-300">{item.value}</span>
                </div>
              ))}
              <Link
                href="/product"
                className="mt-2 text-sm text-blue-400 hover:text-blue-300"
              >
                View OEM catalog -&gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <form
              className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8"
              data-aos="fade-up"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="form-input w-full"
                    placeholder="TYCORUN Motorcycles"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input w-full"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input w-full"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input w-full"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="application"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Partnership Type
                  </label>
                  <select
                    id="application"
                    name="application"
                    className="form-select w-full"
                  >
                    <option>Distributor</option>
                    <option>Importer</option>
                    <option>OEM / ODM</option>
                    <option>Fleet Operator</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Target Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    className="form-input w-full"
                    placeholder="PO in 60 days"
                  />
                </div>
                <div>
                  <label
                    htmlFor="range"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Target Market
                  </label>
                  <input
                    id="range"
                    name="range"
                    type="text"
                    className="form-input w-full"
                    placeholder="EU / LATAM / MENA"
                  />
                </div>
                <div>
                  <label
                    htmlFor="speed"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Annual Volume
                  </label>
                  <input
                    id="speed"
                    name="speed"
                    type="text"
                    className="form-input w-full"
                    placeholder="500 / 1,000 / 5,000 units"
                  />
                </div>
                <div>
                  <label
                    htmlFor="charging"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Certification Needs
                  </label>
                  <input
                    id="charging"
                    name="charging"
                    type="text"
                    className="form-input w-full"
                    placeholder="EEC/COC / DOT"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Order Size
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    className="form-input w-full"
                    placeholder="50 / 200 / 500 units"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="environment"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Requirements Summary
                </label>
                <textarea
                  id="environment"
                  name="environment"
                  rows={4}
                  className="form-textarea w-full"
                  placeholder="Models, trims, compliance, packaging, after-sales support"
                />
              </div>
              <div className="mt-6">
                <label
                  htmlFor="attachment"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Attach spec or drawing (optional)
                </label>
                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  className="form-input w-full"
                />
              </div>
              <button
                type="submit"
                className="btn mt-8 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Submit OEM Inquiry
              </button>
            </form>

            <div className="space-y-6" data-aos="fade-left">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Minimum Info Needed
                </div>
                <ul className="mt-4 space-y-3 text-sm text-gray-300">
                  <li>Target region and certification requirements</li>
                  <li>Annual volume and first PO size</li>
                  <li>OEM/ODM or SKD/CKD preference</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Engagement Notes
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  NDA available on request. We can align on pricing, compliance,
                  and delivery schedules from day one.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Direct Contact
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-300">
                  <p>hello@tycorun.com</p>
                  <p>+1 (415) 555-0199</p>
                  <p>San Jose, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
          <div className="grid gap-6 md:grid-cols-3" data-aos="fade-up">
            {requirementCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6"
              >
                <h3 className="font-nacelle text-lg text-gray-100">
                  {card.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
            <div data-aos="fade-up">
              <h2 className="font-nacelle text-3xl font-semibold text-gray-100">
                Why partners choose TYCORUN
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {advantages.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6"
              data-aos="fade-left"
            >
              <div className="text-xs uppercase tracking-widest text-gray-500">
                Response Workflow
              </div>
              <ol className="mt-4 space-y-3 text-sm text-gray-300">
                <li>1. Review market, volume, and certification needs</li>
                <li>2. Confirm models, pricing, and packaging</li>
                <li>3. Issue samples or begin production</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
          <div className="grid gap-6 md:grid-cols-3" data-aos="fade-up">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6"
              >
                <h3 className="font-nacelle text-lg text-gray-100">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
