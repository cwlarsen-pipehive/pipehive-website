import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Support | PipeHive",
  description:
    "Get help with the PipeHive field operations application — contact, demo access, and common questions.",
};

export default function Support() {
  return (
    <LegalPage title="Support" updated="PipeHive application support">
      <p>
        PipeHive is operational software for pipeline and field construction, published by
        PIPEHIVE TECH LTD. If something is not working, or you need access, contact us
        directly — a person answers.
      </p>
      <p>
        <strong>Email</strong> —{" "}
        <a href="mailto:c.w.larsen@pipehive.net">c.w.larsen@pipehive.net</a>
        <br />
        PIPEHIVE TECH LTD., British Columbia, Canada
      </p>
      <p>
        When reporting a problem, it helps to include your device and operating system, the
        project or job you were working in, roughly when it happened, and what you expected to
        happen instead.
      </p>

      <h3>Getting access</h3>
      <p>
        PipeHive is used by invitation. Projects are joined with a project code issued by the
        organization running the project, and your role on that project determines what you can
        see and do.
      </p>
      <p>
        This release is distributed for demonstration and evaluation. Demonstration profiles
        require an access code issued by PipeHive — contact us and we will provide one. The code
        is entered once and kept on your device.
      </p>

      <h3>Common questions</h3>
      <p>
        <strong>Why does PipeHive ask for location, including in the background?</strong> Location
        is used to place crews and work on the project spread, to support workday and timesheet
        tracking, and to give responders positional awareness during an emergency. Background
        location keeps a position current during an active workday without the app being kept
        open. You can turn location sharing off in the app, or withdraw the permission in your
        device settings; the rest of PipeHive continues to work.
      </p>
      <p>
        <strong>Why does it ask for camera and photo access?</strong> So you can attach field
        photos and scan credential or field documents onto inspections, tasks, safety records,
        daily reports and personnel profiles. PipeHive only receives the items you choose to
        attach.
      </p>
      <p>
        <strong>I cannot see a project I should have access to.</strong> Project visibility
        follows membership and role. Ask the supervisor or foreman running that project to
        confirm your membership, then sign out and back in.
      </p>
      <p>
        <strong>How do I delete my account or my data?</strong> Email us at the address above. If
        your records belong to a project run by your employer or a project operator, we will
        direct the request to them or act on their instruction — see our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h3>Reporting a security issue</h3>
      <p>
        If you believe you have found a security or privacy problem, email{" "}
        <a href="mailto:c.w.larsen@pipehive.net">c.w.larsen@pipehive.net</a> with the details.
        Please do not post it publicly before we have had a chance to respond.
      </p>
    </LegalPage>
  );
}
