import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Download PipeHive for Windows | PipeHive",
  description:
    "Download the PipeHive desktop application for Windows, and what to expect when installing it.",
};

// The installer is ~82 MB, which Cloudflare Pages will not serve: it caps a single file at
// 25 MB. So the binary lives on a GitHub release of this repository and the site links to
// it. Keep the tag and asset name in step with the release, or this 404s.
const RELEASE_TAG = "desktop-v1.0.0";
const ASSET = "PipeHive-Setup-1.0.0.exe";
const DOWNLOAD_URL = `https://github.com/cwlarsen-pipehive/pipehive-website/releases/download/${RELEASE_TAG}/${ASSET}`;

export default function Download() {
  return (
    <LegalPage title="PipeHive for Windows" updated="Version 1.0.0 · Pilot release">
      <p>
        The PipeHive desktop application for Windows. It is the same application as the
        mobile app and works against the same projects, so anything recorded on a phone in
        the field is on the desktop, and the reverse.
      </p>
      <p>
        <a href={DOWNLOAD_URL}>Download PipeHive Setup 1.0.0 for Windows</a> — about 82 MB,
        64-bit Windows 10 or 11.
      </p>

      <h3>You will see a warning from Windows</h3>
      <p>
        This build is not yet code-signed, so Windows SmartScreen will show{" "}
        <strong>&quot;Windows protected your PC&quot;</strong> when you run the installer.
        That message means the file has no certificate yet — not that anything is wrong with
        it. To continue, click <strong>More info</strong>, then{" "}
        <strong>Run anyway</strong>.
      </p>
      <p>
        We are telling you this plainly rather than letting you discover it, because a
        warning nobody warned you about is a good reason not to trust software. A signing
        certificate is in progress and the warning will stop once builds are signed with it.
      </p>

      <h3>Installing</h3>
      <p>
        The installer does not require administrator rights and installs for the current user
        only. You can choose the install location. To remove it, use{" "}
        <strong>Settings → Apps → Installed apps → PipeHive → Uninstall</strong>, the same as
        any other Windows application.
      </p>

      <h3>Signing in</h3>
      <p>
        PipeHive is used by invitation. You will need either an account on a project, or —
        for a demonstration — the access code issued to you by PipeHive. The code is entered
        once, under <strong>Use Demo Profile</strong>, and is remembered on that computer.
      </p>
      <p>
        If you do not have a code or a project invitation, contact us and we will set you up.
      </p>

      <h3>This is a pilot release</h3>
      <p>
        This version is distributed for pilot use and evaluation. If something does not work,
        we want to hear about it — see <a href="/support">Support</a> for how to reach us and
        what to include.
      </p>
    </LegalPage>
  );
}
