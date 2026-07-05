import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

// type ScreenshotData = {
//   file_path: string;
//   expires_at: string;
// };

export default function SharePage() {
  const { shareId } = useParams<{ shareId: string }>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [expiresAt, setExpiresAt] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "loading" | "found" | "expired" | "notfound"
  >("loading");

  useEffect(() => {
    if (!shareId) return;

    async function fetchScreenshot() {
      const { data, error } = await supabase
        .from("screenshots")
        .select("*")
        .eq("share_id", shareId)
        .single();

      if (error || !data) {
        setStatus("notfound");
        return;
      }

      const expired = new Date(data.expires_at) < new Date();
      if (expired) {
        setStatus("expired");
        return;
      }

      const { data: urlData } = supabase.storage
        .from("screenshots")
        .getPublicUrl(data.file_path);

      setImageUrl(urlData.publicUrl);
      setExpiresAt(data.expires_at);
      setStatus("found");
    }

    fetchScreenshot();
  }, [shareId]);

  if (status === "loading") {
    return (
      <PageShell>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Loading screenshot...
        </p>
      </PageShell>
    );
  }

  if (status === "notfound") {
    return (
      <PageShell>
        <Message
          title="Screenshot not found."
          subtitle="This link doesn't exist or was never created."
        />
      </PageShell>
    );
  }

  if (status === "expired") {
    return (
      <PageShell>
        <Message
          title="This screenshot link has expired."
          subtitle="Screenshots shared via Snappy expire after 3 days."
        />
      </PageShell>
    );
  }

  const daysLeft = Math.ceil(
    (new Date(expiresAt!).getTime() - Date.now()) / (1000 * 60 * 60 * 24),
  );

  return (
    <PageShell>
      <div className="w-full max-w-3xl flex flex-col items-center gap-6">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
              }}
            >
              ⚡
            </div>
            <span
              className="font-bold text-sm"
              style={{ color: "var(--text)" }}
            >
              Snappy
            </span>
          </div>
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            Expires in {daysLeft} day{daysLeft !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Image preview */}
        <div
          className="w-full rounded-2xl overflow-hidden border"
          style={{ borderColor: "var(--border)" }}
        >
          <img
            src={imageUrl!}
            alt="Shared screenshot"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={imageUrl!}
            download={`snappy-${shareId}.png`}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #3b82f6, #60a5fa)" }}
          >
            Download image
          </a>
          <a
            href="/"
            className="px-6 py-3 rounded-xl text-sm font-medium border transition-opacity hover:opacity-80"
            style={{
              color: "var(--text)",
              borderColor: "var(--border)",
              background: "var(--panel)",
            }}
          >
            Get Snappy free
          </a>
        </div>
      </div>
    </PageShell>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-6"
      style={{ background: "var(--bg)" }}
    >
      {children}
    </main>
  );
}

function Message({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
        style={{ background: "var(--panel)" }}
      >
        ⚡
      </div>
      <h1 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
        {title}
      </h1>
      <p className="text-sm" style={{ color: "var(--muted)" }}>
        {subtitle}
      </p>
      <a
        href="/"
        className="mt-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
        style={{ background: "var(--accent)" }}
      >
        Get Snappy free
      </a>
    </div>
  );
}
