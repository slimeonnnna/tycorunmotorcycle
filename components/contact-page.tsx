import Link from "next/link";

const quickSpec = [
  { label: "Ride Focus", value: "City + Light Adventure" },
  { label: "Range Target", value: "120 to 180 km" },
  { label: "Charge Time", value: "45 to 90 min (20-80%)" },
  { label: "Test Rides", value: "Available" },
];

const requirementCards = [
  {
    title: "Rider Profile",
    items: ["Commute distance", "Road conditions", "Riding experience"],
  },
  {
    title: "Performance Targets",
    items: ["Top speed", "Real-world range", "Charging access"],
  },
  {
    title: "Business Context",
    items: ["Timeline", "Volume or fleet size", "Region"],
  },
];

const advantages = [
  "Rider-first tuning for smooth torque delivery",
  "Integrated powertrain and chassis design",
  "Safety systems designed for daily use",
  "Fleet and partner support when you scale",
];

const faqs = [
  {
    question: "How do I book a test ride?",
    answer:
      "Share your location and preferred model, and we will arrange the next available demo slot.",
  },
  {
    question: "What range should I expect?",
    answer:
      "Most city riders see 120 to 180 km per charge depending on speed, load, and terrain.",
  },
  {
    question: "Do you support fleet or dealer partnerships?",
    answer:
      "Yes. We provide fleet configurations, service planning, and volume options for partners.",
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
                Test Ride & Partnerships
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Tell us about your riding goals or partnership needs. We will
                match you with the right model and timeline.
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
                View models and specs -&gt;
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
                    Company (optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="form-input w-full"
                    placeholder="Tycorun Motorcycles"
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
                    Interest Type
                  </label>
                  <select
                    id="application"
                    name="application"
                    className="form-select w-full"
                  >
                    <option>Personal Ride</option>
                    <option>Fleet</option>
                    <option>Dealer</option>
                    <option>Press</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Preferred Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    className="form-input w-full"
                    placeholder="Test ride this month"
                  />
                </div>
                <div>
                  <label
                    htmlFor="range"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Range Target
                  </label>
                  <input
                    id="range"
                    name="range"
                    type="text"
                    className="form-input w-full"
                    placeholder="120 to 180 km"
                  />
                </div>
                <div>
                  <label
                    htmlFor="speed"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Top Speed Target
                  </label>
                  <input
                    id="speed"
                    name="speed"
                    type="text"
                    className="form-input w-full"
                    placeholder="110 to 130 km/h"
                  />
                </div>
                <div>
                  <label
                    htmlFor="charging"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Charging Access
                  </label>
                  <input
                    id="charging"
                    name="charging"
                    type="text"
                    className="form-input w-full"
                    placeholder="Home outlet / fast charger"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    className="form-input w-full"
                    placeholder="1 / 5 / Fleet"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="environment"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Riding Conditions
                </label>
                <textarea
                  id="environment"
                  name="environment"
                  rows={4}
                  className="form-textarea w-full"
                  placeholder="Commute distance, road quality, hills, weather"
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
                Submit Request
              </button>
            </form>

            <div className="space-y-6" data-aos="fade-left">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Minimum Info Needed
                </div>
                <ul className="mt-4 space-y-3 text-sm text-gray-300">
                  <li>Commute distance and riding style</li>
                  <li>Range and speed expectations</li>
                  <li>Charging access and timeline</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Engagement Notes
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  NDA available on request. We can align on demo schedules,
                  compliance needs, and regional requirements from day one.
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
                Why riders choose Tycorun
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
                <li>1. Review riding needs and usage profile</li>
                <li>2. Recommend models and options</li>
                <li>3. Schedule demo or partnership discussion</li>
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
