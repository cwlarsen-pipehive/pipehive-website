import Image from "next/image";
import { Activity, ClipboardList, Layers3, MapPin, MessageSquare, Route, ShieldCheck, TriangleAlert, Users } from "lucide-react";
import ProductLightbox from "../components/ProductLightbox";
import RoleTabs from "../components/RoleTabs";

const capabilities = [
  ["Spread Operations", "Locate work areas, crews, staging locations and active construction elements along the right-of-way."],
  ["Tasks & Progress", "Connect field work and meaningful project activity to the locations where it is occurring."],
  ["Safety", "Create and distribute field safety documents, track acknowledgements and keep outstanding actions visible."],
  ["Emergency Response", "Broadcast project-wide emergency alerts and associate incidents with their place on the active spread."],
  ["Communication", "Keep project communication connected to the shared operating context of the spread."],
];

const operatingChain = [
  { label: "Location", Icon: MapPin }, { label: "Work areas", Icon: Layers3 }, { label: "Crews", Icon: Users }, { label: "Tasks", Icon: ClipboardList },
  { label: "Safety", Icon: ShieldCheck }, { label: "Emergency", Icon: TriangleAlert }, { label: "Progress", Icon: Activity }, { label: "Communication", Icon: MessageSquare },
];

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

function SystemIcon({ title }: { title: string }) {
  const icons = { "Spread Operations": Route, "Tasks & Progress": ClipboardList, Safety: ShieldCheck, "Emergency Response": TriangleAlert, Communication: MessageSquare };
  const Icon = icons[title as keyof typeof icons];
  return <Icon size={18} aria-hidden="true" />;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-logo" href="#top" aria-label="PipeHive home">
          <Image src="/pipehive-logo.png" alt="PipeHive" width={96} height={96} priority />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#operating-model">Operating model</a>
          <a href="#company">Company</a>
        </nav>
        <a className="button button-small" href="/download">Download Demo <ArrowUpRight /></a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-heading">
        <div className="eyebrow">Field coordination · Pipeline construction</div>
        <div className="hero-layout">
          <div>
            <h1 id="hero-heading">Field operations software built around the pipeline spread.</h1>
            <p className="hero-copy">PipeHive gives pipeline construction teams a shared operational view of the right-of-way—connecting crews, work, tasks, safety, emergency response, communication and project progress in one system.</p>
            <a className="button" href="/download">Download Demo <ArrowUpRight /></a>
            <p className="hero-note">Developed by PIPEHIVE TECH LTD. in British Columbia, Canada.</p>
          </div>
          <div className="spread-showcase">
            <div className="spread-showcase-intro"><div className="section-label">The operating spread</div><h2>See the right-of-way as one shared operating picture.</h2><p>Work areas, crews, tasks, safety, progress and incident context stay connected to the physical spread.</p></div>
            <div className="hero-product-slot hero-product-frame">
              <ProductLightbox
                src="/images/product/supervisor-spread-map.png"
                alt="PipeHive supervisor Spread view showing a pipeline route, kilometre markers and operational work elements."
                width={3024}
                height={1964}
                priority
                sizes="(max-width: 900px) calc(100vw - 48px), 1120px"
                caption="Supervisor Spread — real-time field context organized around KM, work areas and active operations."
              />
              <div className="hero-product-caption"><strong>Supervisor Spread</strong><span>Real-time field context organized around KM, work areas and active operations.</span></div>
            </div>
            <ul className="spread-callouts" aria-label="Spread screenshot context">
              <li><MapPin size={17} aria-hidden="true" /><strong>Location-aware</strong></li>
              <li><Layers3 size={17} aria-hidden="true" /><strong>Work packages</strong></li>
              <li><Users size={17} aria-hidden="true" /><strong>Crew context</strong></li>
              <li><Activity size={17} aria-hidden="true" /><strong>Live status</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section concise-problem" aria-labelledby="problem-heading">
        <div className="section-label">The coordination problem</div>
        <div className="section-content">
          <h2 id="problem-heading">Linear construction creates a different coordination problem.</h2>
          <div className="problem-grid">
            <p>Pipeline work is distributed across kilometres of active right-of-way, with crews, contractors, equipment and supervision operating at different locations at the same time.</p>
            <p>Information is often fragmented across radio, messaging, paperwork and reporting tools. In the field, location and responsibility matter as much as the information itself.</p>
          </div>
        </div>
      </section>

      <section className="operating-model" id="operating-model" aria-labelledby="model-heading">
        <div className="model-inner">
          <div className="section-label">The operating model</div>
          <h2 id="model-heading">The spread is the operating interface.</h2>
          <p>PipeHive organizes shared project state around where activity occurs along the right-of-way. The map and spread are not standalone mapping modules—they are the context that connects operational systems.</p>
          <div className="operating-model-diagram">
            <div className="spread-core"><span>Shared project state</span><strong>The Spread</strong></div>
            <ol className="operating-chain">
              {operatingChain.map(({ label, Icon }, index) => <li className={`model-node model-node-${index + 1}`} key={label}><Icon size={16} aria-hidden="true" /><strong>{label}</strong></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section roles" aria-labelledby="roles-heading">
        <div className="section-label">Role-specific work</div>
        <div className="section-content">
          <h2 id="roles-heading">One project. Five operating environments.</h2>
          <p className="prose">Each role sees and acts on the information relevant to its responsibilities while sharing the same underlying project state. The result is less information overload and clearer responsibility in the field.</p>
          <RoleTabs />
        </div>
      </section>

      <section className="section capabilities" id="capabilities" aria-labelledby="capabilities-heading">
        <div className="section-label">Connected operations</div>
        <div className="section-content">
          <h2 id="capabilities-heading">Operational systems connected to the shared project state.</h2>
          <div className="systems-list">
            {capabilities.map(([title, description]) => <article className="system-story" key={title}><span className="system-icon"><SystemIcon title={title} /></span><div><h3>{title}</h3><strong>{title === "Spread Operations" ? "Work organized around where activity actually occurs." : title === "Tasks & Progress" ? "Field activity stays connected to project progress." : title === "Safety" ? "Daily preparation stays attached to the work." : title === "Emergency Response" ? "Response guidance remains connected to field context." : "Project communication stays grounded in the shared operating picture."}</strong></div><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="product-proof" id="product" aria-labelledby="proof-heading">
        <div className="proof-heading"><div className="section-label">The product</div><div><h2 id="proof-heading">From the right-of-way to the work in front of the crew.</h2><p>PipeHive keeps planning, field execution and project records connected to the actual locations where work is happening.</p></div></div>

        <article className="product-story">
          <div className="product-story-copy"><span>Plan + assign</span><h3>Plan work where the work actually happens.</h3><p>Define work packages, tasks, resources, foremen and crews directly on the Spread. Location and work package context stay together as planning becomes structured field execution.</p><small>Define work packages, resources, foremen and crews directly on the Spread.</small></div>
          <ProductLightbox src="/images/product/supervisor-element-creation.png" alt="PipeHive spread element creation screen with tie-in work package, tasks, materials, equipment and personnel assignment." width={3024} height={1964} sizes="(max-width: 900px) calc(100vw - 48px), 720px" caption="Field planning — define work packages, resources, foremen and crews directly on the Spread." />
        </article>

        <article className="product-story product-story-reverse">
          <ProductLightbox src="/images/product/supervisor-element-view.png" alt="PipeHive zone context showing pipeline work status, crew assignment and element operations." width={3024} height={1964} sizes="(max-width: 900px) calc(100vw - 48px), 720px" caption="Field context — open a location to see work, status, personnel and field context." />
          <div className="product-story-copy"><span>Operate in context</span><h3>Every location carries its operational context.</h3><p>Open an element to see work status, assigned crews and foremen, active and completed work, open issues and the actions that matter at that location.</p><small>Open a location to see work, status, personnel and field context.</small></div>
        </article>
      </section>

      <section className="operations" aria-labelledby="operations-heading">
        <div className="proof-heading"><div className="section-label">Operations + progress</div><div><h2 id="operations-heading">One place to see what needs attention.</h2><p>Project awareness extends beyond the map, connecting operational exceptions and field activity to the progress records that follow the work.</p></div></div>
        <div className="operations-stories">
          <article className="operation-story"><ProductLightbox src="/images/product/supervisor-dashboard.png" alt="PipeHive Operations Center showing fleet readiness, defects, maintenance exceptions and safety status." width={3024} height={1964} sizes="(max-width: 700px) calc(100vw - 32px), 720px" caption="Operations Center — fleet, safety and operational exceptions in one command view." /><div><span>Operations center</span><h3>Operational awareness beyond the right-of-way.</h3><p>Fleet readiness, open defects, maintenance exceptions and safety items are surfaced in one command view.</p></div></article>
          <article className="operation-story operation-story-reverse"><div><span>Project progress</span><h3>Field activity connected to project progress.</h3><p>Workflow, inspections, FLHAs, reporting and task progress remain connected as the project moves forward.</p></div><ProductLightbox src="/images/product/supervisor-progress.png" alt="PipeHive project progress screen showing workflow tasks, timeline, inspections, FLHAs and reports." width={3024} height={1964} sizes="(max-width: 700px) calc(100vw - 32px), 720px" caption="Project progress — workflow, inspections, FLHAs and reporting connected to active work." /></article>
        </div>
      </section>

      <section className="safety" aria-labelledby="safety-heading">
        <div className="proof-heading"><div className="section-label">Safety + field response</div><div><h2 id="safety-heading">Safety starts with the workday.</h2><p>Daily preparation and live emergency response stay in the operating workflow, without replacing company safety programs or emergency procedures.</p></div></div>
        <div className="safety-grid">
          <article className="safety-flha"><ProductLightbox src="/images/product/gps-safety-flha.png" alt="PipeHive Daily Tailgate and FLHA workflow for selecting work, hazards and control measures." width={1920} height={1080} sizes="(max-width: 700px) calc(100vw - 32px), 800px" caption="Daily Safety — work, hazards and controls captured before GPS and workday start." /><div><span><ShieldCheck size={16} aria-hidden="true" />Daily safety</span><h3>Digital Tailgate &amp; FLHA</h3><p>Capture work-specific hazards and controls before GPS and the workday start. Drafts and unsafe-condition reporting remain part of the same workflow.</p></div></article>
          <article className="safety-erp"><ProductLightbox src="/images/product/crew-mobile-erp-alert.png" alt="PipeHive mobile emergency broadcast showing Vehicle Incident ERP guidance and alert acknowledgement." width={1179} height={2556} sizes="(max-width: 700px) 260px, 290px" caption="Emergency Response — role-aware ERP guidance delivered directly to field personnel." /><div><span><TriangleAlert size={16} aria-hidden="true" />Emergency response</span><h3>Emergency response in the field.</h3><p>Role-aware Emergency Broadcast guidance, location context and acknowledgement are delivered directly to field personnel.</p></div></article>
        </div>
      </section>

      <section className="section field-origin" aria-labelledby="field-heading">
        <div className="section-label">Field origin</div>
        <div className="section-content"><h2 id="field-heading">Built from pipeline field experience.</h2><div className="prose"><p>PipeHive&apos;s workflows were developed from firsthand observations of crew coordination, blocked right-of-way and idle equipment, safety-document follow-up, distributed communication and emergency-response communication across active work areas.</p><p>The aim is a common operating picture that supports the people making field decisions.</p></div></div>
      </section>

      <section className="stage" aria-labelledby="stage-heading"><div className="stage-inner"><div className="section-label">Current stage</div><h2 id="stage-heading">Working MVP. Preparing for field validation.</h2><p>PipeHive&apos;s core multi-user platform is operational, including project coordination, tasks, safety, emergency, progress and communication systems.</p><p>The next phase is professional hardening, field validation and early commercial deployment.</p></div></section>

      <section className="company" id="company" aria-labelledby="company-heading"><div className="company-copy"><div className="section-label">Company</div><h2 id="company-heading">PIPEHIVE TECH LTD.</h2><p>PIPEHIVE TECH LTD. is a British Columbia software company developing operational technology specifically for pipeline and field construction.</p></div><div className="company-cta"><h3>See PipeHive on a pipeline spread.</h3><a className="button" href="/download">Download Demo <ArrowUpRight /></a><address id="contact"><span>British Columbia, Canada</span><a href="mailto:c.w.larsen@pipehive.net">c.w.larsen@pipehive.net</a></address></div></section>

      <footer><span>PIPEHIVE TECH LTD. © 2026</span><div><a href="/privacy">Privacy</a><a href="/support">Support</a><a href="/download">Windows app</a><a href="#contact">Contact</a></div></footer>
    </main>
  );
}
