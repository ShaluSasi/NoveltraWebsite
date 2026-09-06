import BrandLogo from "@/components/BrandLogo";
import InquiryForm from "@/components/InquiryForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.14),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(6,182,212,0.1),_transparent_35%),white] text-[#0F172A]">
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:py-5">
          <div className="flex items-center gap-4">
            <BrandLogo />
            <span className="hidden rounded-full bg-[#EFF6FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563EB] shadow-sm md:inline-flex">
              Product-led engineering
            </span>
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-[#0F172A] md:flex">
            <a
              href="#home"
              className="transition hover:text-[#2563EB] hover:underline"
            >
              Home
            </a>
            <a
              href="#about"
              className="transition hover:text-[#2563EB] hover:underline"
            >
              About
            </a>
            <a
              href="#services"
              className="transition hover:text-[#2563EB] hover:underline"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="transition hover:text-[#2563EB] hover:underline"
            >
              Portfolio
            </a>
            <a
              href="#technologies"
              className="transition hover:text-[#2563EB] hover:underline"
            >
              Technologies
            </a>
            <a
              href="#contact"
              className="transition hover:text-[#2563EB] hover:underline"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/20 transition duration-200 hover:bg-[#1D4ED8]"
          >
            Book a call
          </a>
        </div>
      </header>

      <main id="home" className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <section className="relative overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white/95 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:p-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(6,182,212,0.12),_transparent_26%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">
              Premium product delivery for modern teams
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-[#0F172A] sm:text-6xl">
              Building digital products that are modern, dependable, and easy to
              evolve.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[#475569]">
              Noveltra Technologies designs, builds, and scales software
              experiences with thoughtful engineering, clear collaboration, and
              a focus on measurable outcomes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#1D4ED8]"
              >
                Schedule a discovery call
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-[#2563EB] px-6 py-3 text-sm font-semibold text-[#2563EB] transition duration-200 hover:bg-[#EFF6FF]"
              >
                View our services
              </a>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-[#E5E7EB] bg-[#F8FAFC]/80 p-6 text-sm text-[#475569] shadow-sm sm:grid-cols-3">
              {[
                { label: "Focus areas", value: "Product design, delivery, scalability" },
                { label: "Team style", value: "Collaborative, transparent, efficient" },
                { label: "Location", value: "Kochi, serving global teams" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-semibold text-[#0F172A]">{item.label}</p>
                  <p className="mt-2 text-[#475569]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm shadow-zinc-100">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#06B6D4]">
              Featured project
            </p>
            <div className="mt-4 mb-6 inline-flex rounded-full bg-[#EFF6FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#2563EB] shadow-sm">
              Education • UX refresh
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-[#0F172A]">
              KidzLadder
            </h2>
            <p className="mt-4 text-[#475569]">
              A learning platform refresh designed to simplify curriculum
              delivery, boost clarity for families, and support teachers with
              better progress tracking.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#475569]">
              <li>• Responsive experience for web and mobile learners</li>
              <li>• Clear content flow for parents and educators</li>
              <li>• Scalable design system for future modules</li>
            </ul>
            <a
              href="#portfolio"
              className="mt-8 inline-flex items-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Read the full case study
            </a>
          </div>
        </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Design-led engineering",
              text: "Clean user experiences grounded in usability, brand clarity, and long-term maintainability.",
            },
            {
              title: "Scalable delivery",
              text: "Software built to operate reliably today and adapt efficiently tomorrow.",
            },
            {
              title: "Transparent collaboration",
              text: "Clear communication, structured milestones, and practical decision points.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[#0F172A]">
                {item.title}
              </h3>
              <p className="mt-3 text-[#475569]">{item.text}</p>
              <div className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] opacity-80 transition group-hover:w-20" />
            </div>
          ))}
        </section>

        <section
          id="services"
          className="mt-24 rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-950">
              Services built for product clarity and momentum
            </h2>
            <p className="mt-4 text-zinc-600">
              From strategy to launch, we focus on the work that moves your
              product forward without adding unnecessary complexity.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Product Strategy & Discovery",
                description:
                  "Align product ambitions with user needs, technical feasibility, and business objectives.",
                items: [
                  "User research and feature prioritization",
                  "Technical feasibility review",
                  "Roadmap and MVP definition",
                ],
              },
              {
                title: "UX/UI Design & Experience",
                description:
                  "Design clear, accessible interfaces for web and mobile experiences.",
                items: [
                  "Interaction design",
                  "Visual systems and component libraries",
                  "Design handoff documentation",
                ],
              },
              {
                title: "Custom Web & Mobile Development",
                description:
                  "Build stable, maintainable applications using modern frameworks.",
                items: [
                  "Frontend development",
                  "Backend and API implementation",
                  "Responsive and performance-first delivery",
                ],
              },
              {
                title: "Product Delivery & Support",
                description:
                  "Keep delivery predictable with structured planning, quality checks, and ongoing support.",
                items: [
                  "Sprint planning and reporting",
                  "Testing and performance validation",
                  "Post-launch maintenance",
                ],
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-[#E5E7EB] bg-white p-8"
              >
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[#475569]">{service.description}</p>
                <ul className="mt-4 space-y-2 text-[#475569]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0F172A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0F172A]">
              Projects that reflect practical digital transformation
            </h2>
            <p className="mt-4 text-[#475569]">
              Selected work where strategy, design, and engineering came
              together to solve real product challenges.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            <article className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0F172A]">
                KidzLadder
              </h3>
              <p className="mt-4 text-[#475569]">
                A learning platform refresh for families and educators, focused
                on clearer navigation, more reliable progress tracking, and a
                scalable interface system.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.27em] text-[#06B6D4]">
                    Challenge
                  </p>
                  <p className="mt-3 text-[#475569]">
                    Improve usability across devices while making course content
                    simple to access and review.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.27em] text-[#06B6D4]">
                    Approach
                  </p>
                  <p className="mt-3 text-[#475569]">
                    Defined core journeys, rebuilt the information architecture,
                    and applied a modern visual system for learners.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.27em] text-[#06B6D4]">
                    Result
                  </p>
                  <p className="mt-3 text-[#475569]">
                    Prepared the platform for future feature growth and
                    established a more consistent experience for educators and
                    families.
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-3 text-zinc-600">
                <li>• Simplified the onboarding flow to reduce setup friction for new users</li>
                <li>• Improved task clarity for parents and teachers through clearer action cues</li>
                <li>• Built a flexible foundation to support future learning modules and feature growth</li>
              </ul>
            </article>

            <article className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0F172A]">
                HMS-Hospital Management System
              </h3>
              <p className="mt-4 text-[#475569]">
                A healthcare operations solution designed to streamline patient
                workflow, appointment management, and clinical coordination.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.27em] text-[#06B6D4]">
                    Challenge
                  </p>
                  <p className="mt-3 text-[#475569]">
                    Simplify hospital workflows while preserving secure access
                    and reliable patient data management.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.27em] text-[#06B6D4]">
                    Approach
                  </p>
                  <p className="mt-3 text-[#475569]">
                    Designed a role-based dashboard, patient intake flow, and
                    administrative scheduling system for care teams.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.27em] text-[#06B6D4]">
                    Result
                  </p>
                  <p className="mt-3 text-[#475569]">
                    Created a foundation for efficient care coordination and
                    future extensions for billing, inventory, and reporting.
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-3 text-zinc-600">
                <li>• Centralized patient records and appointment workflows</li>
                <li>• Reduced administrative handoff steps across departments</li>
                <li>
                  • Prepared the system for future modules like inventory and
                  billing
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section
          id="technologies"
          className="mt-24 rounded-3xl border border-[#E5E7EB] bg-white p-10 shadow-sm"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">
              Technologies
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0F172A]">
              Technology choices that prioritize reliability and momentum
            </h2>
            <p className="mt-4 text-[#475569]">
              We work with a modern stack selected for performance, flexibility,
              and maintainability across both web and backend systems.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Frontend",
                items: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS / modern CSS architecture",
                ],
              },
              {
                title: "Backend & APIs",
                items: [
                  "Node.js",
                  "Express / NestJS",
                  "GraphQL / REST",
                  "PostgreSQL / MongoDB",
                ],
              },
              {
                title: "Deployment & Infrastructure",
                items: [
                  "Vercel / AWS / Azure",
                  "Docker",
                  "CI/CD pipelines",
                  "Monitoring and error tracking",
                ],
              },
              {
                title: "Product tooling",
                items: [
                  "Figma",
                  "Storybook",
                  "Jira / linear planning",
                  "Notion / documentation",
                ],
              },
            ].map((tech) => (
              <div
                key={tech.title}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8"
              >
                <h3 className="text-xl font-semibold text-zinc-950">
                  {tech.title}
                </h3>
                <ul className="mt-4 space-y-3 text-zinc-600">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#0F172A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-3xl border border-[#E5E7EB] bg-white p-10 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0F172A]">
              A modern technology partner with practical focus
            </h2>
            <p className="mt-4 text-[#475569]">
              Noveltra Technologies blends product thinking, quality
              engineering, and user-centered design to build digital solutions
              that are straightforward to operate and easy to scale.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Mission",
                text: "To help mission-driven teams launch and grow digital products with confidence, clarity, and structure.",
              },
              {
                title: "Vision",
                text: "A future where every product decision is grounded in real user need, technical feasibility, and long-term maintainability.",
              },
              {
                title: "How We Work",
                text: "Discovery, design, build, refine—each phase organized around business goals, user experience, and ongoing improvement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-7"
              >
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#475569]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-3xl border border-[#E5E7EB] bg-white p-10 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0F172A]">
              Questions we answer often
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                question:
                  "What types of projects does Noveltra Technologies take on?",
                answer:
                  "We work with product teams that need digital experiences built or redesigned, especially web and mobile applications where clarity, usability, and future scalability matter.",
              },
              {
                question: "How do you approach a new project?",
                answer:
                  "We begin with discovery: learning the business goals, user needs, and technical constraints, then defining a practical product roadmap before design or development starts.",
              },
              {
                question: "Can you work with existing teams or systems?",
                answer:
                  "Yes. We support integrations with current workflows, legacy systems, and existing design assets while helping improve consistency and maintainability.",
              },
              {
                question: "How do you measure success?",
                answer:
                  "Success is measured by a clearer product direction, a smoother user experience, predictable delivery, and a solution that is easier to maintain and extend.",
              },
            ].map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-7"
              >
                <h3 className="text-lg font-semibold text-[#0F172A]">
                  {faq.question}
                </h3>
                <p className="mt-3 text-[#475569]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-24 rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-950">
              Start a project conversation
            </h2>
            <p className="mt-4 text-zinc-600">
              Tell us about your priorities, timelines, and the outcomes you
              need. We respond with a practical next step, not a generic
              proposal.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#06B6D4]">
                  Email
                </p>
                <p className="mt-2 text-[#475569]">
                  noveltratechnologies@gmail.com
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#06B6D4]">
                  Location
                </p>
                <p className="mt-2 text-[#475569]">Kochi</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#06B6D4]">
                  Availability
                </p>
                <p className="mt-2 text-[#475569]">
                  Typical response time is within 24–48 hours.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#06B6D4]">
                Quick inquiry
              </p>
              <InquiryForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white/90 px-6 py-8 text-zinc-600">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-zinc-950">Noveltra Technologies</p>
            <p className="mt-2 text-sm">
              Premium software delivery for modern teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#home" className="transition hover:text-zinc-950">
              Home
            </a>
            <a href="#about" className="transition hover:text-zinc-950">
              About
            </a>
            <a href="#services" className="transition hover:text-zinc-950">
              Services
            </a>
            <a href="#portfolio" className="transition hover:text-zinc-950">
              Portfolio
            </a>
            <a href="#technologies" className="transition hover:text-zinc-950">
              Technologies
            </a>
            <a href="#contact" className="transition hover:text-zinc-950">
              Contact
            </a>
          </div>
          <p className="text-sm">
            © 2026 Noveltra Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
