import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ArrowRight } from "lucide-react";
import { DPDP_FORM_URL } from "../../config/dpdpForm";

// ─── Style consts (never write style=... inline literals) ─────────────────
const headingFont = { fontFamily: "Days One, sans-serif" };
// Explicit color overrides so React-Router <Link> never falls back to browser-default blue
const btnWhite = { fontFamily: "Days One, sans-serif", color: "white" };
const btnBlack = { fontFamily: "Days One, sans-serif", color: "black" };

// Hero background image (path relative to /public)
const heroBgStyle = {
  backgroundImage: "url('/images/home/dpdp.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface Card {
  title: string;
  description: string;
}
interface Offering extends Card {
  no: string;
}
interface IconCard extends Card {
  icon: string;
}
interface EngagementModel extends Card {
  badge: string;
  popular?: boolean;
}

// ─── Static content ───────────────────────────────────────────────────────────
const whyNow: Card[] = [
  {
    title: "₹250 crore exposure",
    description:
      "Non-compliance can attract penalties of up to ₹250 crore — verify exact legal wording before relying on figures.",
  },
  {
    title: "Procurement expectations",
    description:
      "Clients and partners increasingly require DPDP assurances before onboarding vendors.",
  },
  {
    title: "Customer trust",
    description:
      "Privacy has become a brand differentiator and a buying criterion.",
  },
];
const whoNeeds: Card[] = [
  {
    title: "Data Fiduciaries",
    description:
      "Any person or organisation that determines the purpose and means of processing personal data.",
  },
  {
    title: "Significant Data Fiduciaries",
    description:
      "Entities handling high-volume or sensitive data, with enhanced obligations like DPIAs, audits and a DPO.",
  },
  {
    title: "Data Processors",
    description:
      "Entities processing personal data on behalf of a Data Fiduciary under a binding contract.",
  },
];
const offerings: Offering[] = [
  {
    no: "01",
    title: "Gap Assessment & Readiness Review",
    description:
      "Assess current privacy maturity, identify compliance gaps and prepare a remediation roadmap.",
  },
  {
    no: "02",
    title: "Data Mapping & Inventory",
    description:
      "Map personal data, systems, departments, vendors, collection points and processing purposes.",
  },
  {
    no: "03",
    title: "Consent Management Framework",
    description:
      "Review notice, consent, withdrawal and consent-record processes for customer and user journeys.",
  },
  {
    no: "04",
    title: "Privacy Policy Drafting",
    description:
      "Draft or update privacy notices, website policies and multilingual versions where required.",
  },
  {
    no: "05",
    title: "Data Principal Rights Management",
    description:
      "Build workflows for access, correction, grievance, erasure and nomination requests.",
  },
  {
    no: "06",
    title: "DPIA & Privacy Risk Assessment",
    description:
      "Assess privacy risks for high-risk processing, new products, systems or third-party arrangements.",
  },
  {
    no: "07",
    title: "Incident Response Planning",
    description:
      "Create breach response, escalation and notification workflows with evidence tracking.",
  },
  {
    no: "08",
    title: "DPO as a Service",
    description:
      "Outsourced privacy officer support, governance oversight and periodic compliance reporting.",
  },
  {
    no: "09",
    title: "Third-Party & Vendor Risk Assessment",
    description:
      "Review processors, contracts, due diligence, data sharing and vendor security controls.",
  },
  {
    no: "10",
    title: "Training & Awareness",
    description:
      "Role-based DPDP training for leadership, IT, HR, operations and customer-facing teams.",
  },
  {
    no: "11",
    title: "Ongoing Compliance Monitoring",
    description:
      "Support audits, remediation tracking, evidence registers and periodic reviews.",
  },
];
const steps: Card[] = [
  {
    title: "Discover",
    description:
      "Understand processes, systems, data flows, vendors and personal-data touchpoints.",
  },
  {
    title: "Assess",
    description:
      "Review current compliance against DPDP obligations and identify gaps.",
  },
  {
    title: "Design",
    description:
      "Create target-state policies, SOPs, consent flows, rights workflows and governance.",
  },
  {
    title: "Implement",
    description:
      "Operationalise controls, update website/app content, train teams and align vendors.",
  },
  {
    title: "Audit",
    description:
      "Validate controls, collect evidence and review remediation status.",
  },
  {
    title: "Monitor",
    description:
      "Maintain dashboards, evidence registers, periodic reviews and improvement.",
  },
];
const engagementModels: EngagementModel[] = [
  {
    badge: "Fast Start",
    title: "Starter Assessment Package",
    description:
      "Fast DPDP gap assessment, current-state review and a prioritised action list.",
  },
  {
    badge: "Most Popular",
    title: "End-to-End Implementation",
    description:
      "Policy, process, data mapping, vendor review, training, controls and evidence setup.",
    popular: true,
  },
  {
    badge: "Ongoing",
    title: "DPO as a Service Retainer",
    description:
      "Ongoing advisory, governance reporting, rights-request support and compliance monitoring.",
  },
  {
    badge: "Enterprise",
    title: "Custom Enterprise Advisory",
    description:
      "Tailored support for complex organisations, multi-location operations or high-volume processing.",
  },
];
const industries: IconCard[] = [
  {
    icon: "💻",
    title: "IT, SaaS & Technology",
    description:
      "User & employee data, cloud & SaaS tools, analytics, processors and integrations.",
  },
  {
    icon: "🏥",
    title: "Healthcare & HealthTech",
    description:
      "Patient records, diagnostics, hospital systems, vendor platforms and access control.",
  },
  {
    icon: "🏦",
    title: "BFSI, Fintech & Payments",
    description:
      "KYC, transaction data, onboarding, fraud monitoring and regulatory expectations.",
  },
];
const whyAumyaa: IconCard[] = [
  {
    icon: "🛡️",
    title: "End-to-end partner",
    description: "One accountable team across the full lifecycle.",
  },
  {
    icon: "⚖️",
    title: "Governance specialist",
    description: "Deep expertise in consent, rights and SDF obligations.",
  },
  {
    icon: "🔧",
    title: "Implementation-led",
    description: "We operationalise, not just advise.",
  },
  {
    icon: "🤝",
    title: "Trust enablement",
    description: "Compliance that strengthens trust and audit readiness.",
  },
];

// ─── Small helpers ────────────────────────────────────────────────────────────
function Eyebrow({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  const theme = light ? "bg-[#fcd421] text-black" : "bg-[#fcd421] text-black";
  return (
    <span
      className={`inline-block rounded-full px-4 py-1 text-xs uppercase tracking-wider ${theme}`}
      style={headingFont}
    >
      {children}
    </span>
  );
}
function SectionHead({
  eyebrow,
  title,
  intro,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
}) {
  const align = center ? "text-center mx-auto" : "";
  const titleColor = light ? "text-white" : "text-black";
  const introColor = light ? "text-white/70" : "text-black/60";
  return (
    <div className={`max-w-3xl ${align}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-3xl sm:text-4xl leading-tight ${titleColor}`}
        style={headingFont}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${introColor}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DpdpCompliancePage() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      {/* ── HERO ── bg image + overlay, pushed below fixed navbar */}
      <section className="relative text-white" style={heroBgStyle}>
        {/* dark overlay so text stays readable over any photo */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-6xl px-6 pt-36 pb-20 sm:pt-40 sm:pb-24">
          <Eyebrow light>DPDP Compliance & Privacy Advisory</Eyebrow>
          <h1
            className="mt-5 max-w-3xl text-4xl sm:text-5xl leading-tight"
            style={headingFont}
          >
            Everything you need to become{" "}
            <span className="text-[#fcd421]">DPDP-compliant</span> — in one
            place.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Each offering can be engaged on its own or combined into an
            end-to-end programme. Explore the law, see who must comply, and find
            the right service for your organisation.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-8">
            <div className="mt-8 sm:mt-0">
              <a
                href={DPDP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#fcd421] px-5 sm:px-7 py-3 font-semibold transition hover:opacity-90 whitespace-nowrap"
                style={btnBlack}
              >
                Free Self-Assessment
                <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black">
                  <ArrowRight className="h-3 w-3 text-[#fcd421]" />
                </span>
              </a>
            </div>
            <div className="mt-0">
              <Link
                to="/contact"
                className="inline-block rounded-full bg-[#fcd421] px-5 sm:px-7 py-3 font-semibold transition hover:opacity-90 whitespace-nowrap"
                style={btnBlack}
              >
                Enquire now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS THE DPDP ACT ── */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHead
            eyebrow="What is the DPDP Act"
            title="The Digital Personal Data Protection Act, 2023"
            intro="India's comprehensive data protection law governing how organisations collect, process, store and protect the personal data of individuals (Data Principals). It introduces clear obligations around notice, consent, security and accountability — and meaningful penalties for non-compliance."
          />
          {/* Visual accent block */}
          <div className="rounded-2xl border border-black/10 bg-white p-8">
            <div
              className="text-5xl font-bold text-[#fcd421]"
              style={headingFont}
            >
              2023
            </div>
            <p
              className="mt-2 text-sm uppercase tracking-widest text-black/40"
              style={headingFont}
            >
              Year of enactment
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Clear consent & notice requirements",
                "Data principal rights (access, erasure, correction)",
                "Security safeguards & breach notification",
                "Accountability & compliance obligations",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#fcd421]" />
                  <p className="text-sm leading-relaxed text-black/70">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY DPDP MATTERS NOW ── */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHead
            light
            eyebrow="Why DPDP matters now"
            title="The clock is already ticking"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {whyNow.map((card, i) => {
              const icons = ["₹", "🤝", "🔒"];
              return (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-7 transition hover:bg-white/10"
                >
                  {/* yellow left accent bar */}
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[#fcd421]" />
                  <div className={`text-3xl ${i === 0 ? 'text-green-500' : ''}`}>
          {icons[i]}
        </div>
                  <h4 className="mt-4 text-lg text-white" style={headingFont}>
                    {card.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHO NEEDS COMPLIANCE ── */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHead
          eyebrow="Who needs compliance"
          title="Does this apply to you?"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {whoNeeds.map((card, i) => {
            const labels = ["DF", "SDF", "DP"];
            return (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fcd421] text-sm text-black"
                  style={headingFont}
                >
                  {labels[i]}
                </div>
                <h4 className="mt-4 text-lg" style={headingFont}>
                  {card.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── AUMYAA DPDP OFFERINGS ── */}
      <section id="offerings" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHead
            eyebrow="Aumyaa DPDP offerings"
            title="Eleven services, individually engageable"
            intro="Each service has a focused scope and its own enquiry path."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering) => (
              <div
                key={offering.no}
                className="group flex flex-col rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#fcd421] hover:shadow-lg"
              >
                {/* Top accent bar — slides in on hover */}
                <div className="mb-4 h-1 w-10 rounded-full bg-[#fcd421] transition-all group-hover:w-full" />
                <div className="text-2xl text-[#fcd421]" style={headingFont}>
                  {offering.no}
                </div>
                <h4 className="mt-3 text-lg" style={headingFont}>
                  {offering.title}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-black/60">
                  {offering.description}
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex w-fit items-center gap-1 rounded-full bg-black px-4 py-2 text-xs font-semibold transition hover:bg-[#fcd421]"
                  style={btnWhite}
                >
                  Enquire →
                </Link>
              </div>
            ))}
            {/* "Not sure?" dashed cta card */}
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#fcd421] bg-white p-7 text-center">
              <div className="text-3xl">💬</div>
              <p
                className="mt-3 text-sm font-semibold text-black"
                style={headingFont}
              >
                Not sure where to start?
              </p>
              <p className="mt-1 text-xs text-black/50">
                We'll help you find the right service.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-block rounded-full bg-[#fcd421] px-6 py-2.5 text-sm font-semibold transition hover:opacity-90"
                style={btnBlack}
              >
                Talk to us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE LIFECYCLE / METHODOLOGY ── */}
      <section id="methodology" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHead
          center
          eyebrow="Compliance lifecycle"
          title="How we work — a proven six-step framework"
          intro="A clear, evidence-driven path from discovery to continuous improvement."
        />
        <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative border border-black/8 bg-white p-7 transition hover:border-[#fcd421] first:rounded-tl-2xl last:rounded-br-2xl [&:nth-child(3)]:rounded-tr-2xl [&:nth-child(4)]:rounded-bl-2xl"
            >
              {/* Step number pill */}
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#fcd421] text-sm text-black"
                  style={headingFont}
                >
                  {index + 1}
                </span>
                <h4 className="text-lg" style={headingFont}>
                  {step.title}
                </h4>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-black/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section id="engage" className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHead
            center
            light
            eyebrow="Engagement Models"
            title="Ways to work with Aumyaa"
            intro="Flexible engagements sized to your maturity, scale and urgency."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((model) => {
              const cardBase =
                "flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1";
              const cardTheme = model.popular
                ? "border-[#fcd421] bg-[#fcd421]"
                : "border-white/20 bg-white/7 hover:bg-white/10";
              const badgeTheme = model.popular
                ? "bg-black text-[#fcd421]"
                : "bg-[#fcd421]";
              const titleColor = model.popular ? "text-black" : "text-white";
              const descColor = model.popular
                ? "text-black/70"
                : "text-white/60";
              const btnClass = model.popular
                ? "mt-5 inline-block rounded-full bg-black px-6 py-2.5 text-center font-semibold transition hover:opacity-80"
                : "mt-5 inline-block rounded-full border border-[#fcd421] px-6 py-2.5 text-center font-semibold transition hover:bg-white/10";
              return (
                <div key={model.title} className={`${cardBase} ${cardTheme}`}>
                  <span
                    className={`inline-block w-fit rounded-full px-3 py-1 text-xs ${badgeTheme}`}
                    style={headingFont}
                  >
                    {model.badge}
                  </span>
                  <h4
                    className={`mt-4 text-lg ${titleColor}`}
                    style={headingFont}
                  >
                    {model.title}
                  </h4>
                  <p
                    className={`mt-3 flex-1 text-sm leading-relaxed ${descColor}`}
                  >
                    {model.description}
                  </p>
                  <Link to="/contact" className={btnClass} style={btnWhite}>
                    Enquire
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES SERVED ── */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHead
          eyebrow="Industries served"
          title="DPDP, tailored to your sector"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#fcd421] hover:shadow-md"
            >
              {/* Icon on yellow circle */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fcd421] text-3xl">
                {industry.icon}
              </div>
              <h4 className="text-lg" style={headingFont}>
                {industry.title}
              </h4>
              <p className="text-sm leading-relaxed text-black/60">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY AUMYAA ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHead
            center
            eyebrow="Why Aumyaa"
            title="An end-to-end compliance partner you can trust"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyAumyaa.map((value) => (
              <div
                key={value.title}
                className="group flex flex-col items-start rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#fcd421] hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fcd421] text-2xl">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg" style={headingFont}>
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-yellow-400 mb-5">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <span
            className="inline-block rounded-full bg-black/10 px-4 py-1 text-xs uppercase tracking-wider"
            style={headingFont}
          >
            Get started
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl" style={headingFont}>
            Ready to begin your DPDP programme?
          </h2>
          <p className="mt-4 text-base text-black/70">
            Book a consultation and we'll help you choose the right offering and
            engagement model.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-black px-8 py-3.5 font-semibold shadow-md transition hover:opacity-90"
              style={btnWhite}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
