import Link from "next/link";

const quickSpec = [
  { label: "Chemistry", value: "NMC / LFP" },
  { label: "Voltage", value: "12V - 800V" },
  { label: "Prototype Lead", value: "7-10 days" },
  { label: "MOQ", value: "Flexible" },
];

const requirementCards = [
  {
    title: "Electrical Requirements",
    items: ["Voltage window", "Capacity (Ah / kWh)", "Peak current"],
  },
  {
    title: "Mechanical Constraints",
    items: ["Envelope dimensions", "Mounting points", "Connector type"],
  },
  {
    title: "Compliance and Safety",
    items: ["UN 38.3", "IEC 62133", "IP rating"],
  },
];

const advantages = [
  "Rapid prototyping with design-for-manufacture review",
  "Custom BMS firmware and protocol integration",
  "Thermal modeling and enclosure validation",
  "Compliance planning and certification support",
];

const faqs = [
  {
    question: "How fast do you respond to inquiry forms?",
    answer:
      "We typically respond within 24-48 business hours with a technical follow-up and NDA if required.",
  },
  {
    question: "Do you support small prototype runs?",
    answer:
      "Yes. We offer flexible prototyping and can scale into pilot and production volumes.",
  },
  {
    question: "Can you work with our existing BMS protocol?",
    answer:
      "We integrate with CAN, CANOpen, J1939, RS-485, and can build custom firmware drivers.",
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
                Custom Battery Inquiry
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Share your electrical, mechanical, and compliance needs. We will
                translate them into a buildable pack architecture and timeline.
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
                View product architecture -&gt;
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
                    placeholder="Slimeon Industrial"
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
                    Application
                  </label>
                  <select
                    id="application"
                    name="application"
                    className="form-select w-full"
                  >
                    <option>Robotics</option>
                    <option>Medical</option>
                    <option>Aerospace</option>
                    <option>Industrial</option>
                    <option>Logistics</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    className="form-input w-full"
                    placeholder="Prototype in 6 weeks"
                  />
                </div>
                <div>
                  <label
                    htmlFor="voltage"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Required Voltage
                  </label>
                  <input
                    id="voltage"
                    name="voltage"
                    type="text"
                    className="form-input w-full"
                    placeholder="48V nominal"
                  />
                </div>
                <div>
                  <label
                    htmlFor="capacity"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Capacity
                  </label>
                  <input
                    id="capacity"
                    name="capacity"
                    type="text"
                    className="form-input w-full"
                    placeholder="120Ah / 5.8kWh"
                  />
                </div>
                <div>
                  <label
                    htmlFor="current"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Peak Current
                  </label>
                  <input
                    id="current"
                    name="current"
                    type="text"
                    className="form-input w-full"
                    placeholder="200A"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Target Quantity
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    className="form-input w-full"
                    placeholder="Prototype / Pilot / Production"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="environment"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Environment and Constraints
                </label>
                <textarea
                  id="environment"
                  name="environment"
                  rows={4}
                  className="form-textarea w-full"
                  placeholder="Temperature range, IP rating, shock/vibration, enclosure notes"
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
                Submit Inquiry
              </button>
            </form>

            <div className="space-y-6" data-aos="fade-left">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Minimum Info Needed
                </div>
                <ul className="mt-4 space-y-3 text-sm text-gray-300">
                  <li>Voltage window and capacity target</li>
                  <li>Duty cycle and peak current profile</li>
                  <li>Physical envelope and mounting constraints</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Engagement Notes
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  NDA available on request. We can align with your compliance and
                  certification plan from day one.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Direct Contact
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-300">
                  <p>engineering@slimeon.com</p>
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
                Why teams choose Slimeon
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
                <li>1. Review requirements and system constraints</li>
                <li>2. Define pack architecture and BMS strategy</li>
                <li>3. Prototype and validate with your team</li>
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
