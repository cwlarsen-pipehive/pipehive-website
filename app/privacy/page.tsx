import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | PipeHive",
  description:
    "How PIPEHIVE TECH LTD. collects, uses and protects information in the PipeHive field operations application.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="Last updated 23 September 2026">
      <p>
        PipeHive is operational software for pipeline and field construction, published by
        PIPEHIVE TECH LTD. (&quot;PipeHive&quot;, &quot;we&quot;), a British Columbia company. This
        policy explains what the PipeHive mobile and desktop applications collect, why, and
        what choices you have.
      </p>
      <p>
        PipeHive is used at work. In most cases your employer or the project operator is the
        organization that decides what is recorded about your work and for how long, and we
        process that information on their behalf. Questions about a specific project&apos;s
        records are usually best directed to that organization.
      </p>

      <h3>Information we collect</h3>
      <p>
        <strong>Account information.</strong> An email address and password, used to sign you in
        and to identify your actions within a project. Passwords are handled by Google Firebase
        Authentication and are not visible to us.
      </p>
      <p>
        <strong>Personnel and project records.</strong> Your name, role, crew or company
        assignment, and any qualifications, certifications or credential documents recorded
        against your profile. Also the work you do in the app: tasks, inspections, safety
        documents, daily reports, timesheet and workday sessions, spool and material records,
        messages, and similar operational entries.
      </p>
      <p>
        <strong>Credential information that may be sensitive.</strong> Depending on how a
        project operator configures its credential requirements, the records above can include
        union membership and medical-fitness or occupational-health status — for example a
        fitness-to-work clearance — alongside trade certifications and equipment tickets. This
        information is entered by you or by authorized project personnel, is used only to
        determine whether someone is qualified for the work being assigned, and is visible only
        to authorized members of the same project. It is never used for advertising or
        tracking, never sold, and never disclosed to anyone outside the project other than our
        hosting processor.
      </p>
      <p>
        <strong>Location.</strong> When location sharing is enabled, PipeHive collects precise
        device location to show active crews on the project spread, to support workday and
        timesheet tracking, and to give emergency responders positional awareness. On supported
        devices this can include location collected while the app is in the background, so that
        a crew member&apos;s position remains current during an active workday or an emergency
        without the app being kept open. Location sharing can be turned off in the app, and
        device-level location permission can be withdrawn at any time in your device settings.
      </p>
      <p>
        <strong>Photos, camera and documents.</strong> When you attach a photo, scan a document,
        or upload a file, PipeHive accesses the relevant image, camera or file you select.
        PipeHive does not scan your photo library or your files in the background; it receives
        only what you choose to attach.
      </p>
      <p>
        <strong>Notifications.</strong> A push notification token for your device, so the app can
        deliver assignment, safety and emergency notifications.
      </p>
      <p>
        <strong>Diagnostics.</strong> Server-side logs recording that an operation occurred, for
        reliability and security. These can include an account identifier and a timestamp.
      </p>

      <h3>What we do not do</h3>
      <p>
        PipeHive contains no advertising, no advertising identifiers, and no third-party
        analytics, attribution or behavioural tracking software. We do not sell personal
        information, we do not share it with data brokers, and we do not use it to build
        marketing profiles or to track you across other companies&apos; apps or websites.
      </p>

      <h3>How information is used</h3>
      <p>
        To operate the application and the features you and your organization use: to
        authenticate you, to show the shared operating picture of a project, to attribute work
        and safety records to the people who performed them, to deliver notifications, to
        support emergency response, and to keep the service secure and working correctly.
      </p>

      <h3>Where information is held, and who can see it</h3>
      <p>
        PipeHive is built on Google Firebase (Firestore, Cloud Storage, Authentication and Cloud
        Functions), operating on Google Cloud infrastructure. Google acts as our processor for
        that hosting.
      </p>
      <p>
        Within the application, access is scoped by project membership and role. People in your
        organization and project — typically supervisors, foremen, safety and quality personnel —
        can see the records associated with your work, which is the operational purpose of the
        software. Our own staff access production data only where necessary to support or repair
        the service.
      </p>
      <p>
        Information may be stored or processed outside your province or country, including in the
        United States, where Google operates infrastructure.
      </p>

      <h3>Retention</h3>
      <p>
        Operational and project records are retained for as long as the project organization
        requires them, including where records must be kept for regulatory, contractual or
        quality-assurance reasons. Account records are retained while your account is active.
      </p>

      <h3>Your choices and rights</h3>
      <p>
        You can turn off location sharing in the app, and withdraw location, camera, photo or
        notification permissions in your device settings, at any time. Withdrawing a permission
        disables the feature that depends on it, but does not otherwise prevent you using
        PipeHive.
      </p>
      <p>
        Subject to applicable law, you may request access to the personal information we hold
        about you, correction of inaccurate information, or deletion of your account. Where your
        employer or the project operator controls the records, we will direct the request to them
        or act on their instruction. Contact us at the address below.
      </p>

      <h3>Demonstration and beta access</h3>
      <p>
        This release is distributed for demonstration and evaluation. Demonstration profiles and
        sample projects contain fictional data and are shared: do not enter real personal
        information, real safety records, or confidential project information into a
        demonstration profile.
      </p>

      <h3>Children</h3>
      <p>
        PipeHive is workplace software and is not directed to children. We do not knowingly
        collect personal information from anyone under the age of majority in their jurisdiction.
      </p>

      <h3>Security</h3>
      <p>
        Access is authenticated, transport is encrypted, and server-side rules and trusted
        server functions restrict what each account can read and write. No system is perfectly
        secure, and we do not claim otherwise.
      </p>

      <h3>Changes</h3>
      <p>
        If this policy changes materially we will update the date at the top of this page and,
        where appropriate, notify users in the application.
      </p>

      <h3>Contact</h3>
      <p>
        PIPEHIVE TECH LTD., British Columbia, Canada —{" "}
        <a href="mailto:c.w.larsen@pipehive.net">c.w.larsen@pipehive.net</a>
      </p>
    </LegalPage>
  );
}
