import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";

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
        <p className="text-sm text-white/50 animate-pulse">
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

  async function handleDownload() {
    if (!imageUrl) return;
    const res = await fetch(imageUrl);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `snappy-${shareId}.png`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <PageShell>
      <div className="w-full max-w-3xl flex flex-col items-center gap-6">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
              <AiFillThunderbolt />
            </div>
            <span className="font-bold text-sm text-white">Snappy</span>
          </div>
          <span className="text-xs text-white/40">
            Expires in {daysLeft} day{daysLeft !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Image preview */}
        <div className="w-full rounded-2xl overflow-hidden border border-white/10">
          <img
            src={imageUrl!}
            alt="Shared screenshot"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <HiDownload className="text-base" />
            Download image
          </button>
          <a
            href="/"
            className="px-6 py-3 rounded-xl text-sm font-medium border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-colors"
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
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] flex flex-col items-center justify-center px-6 py-16 gap-6">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-125 h-125 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-125 h-125 bg-indigo-500/20 rounded-full blur-[120px]" />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 w-full">
        {children}
      </div>
    </main>
  );
}

function Message({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white text-xl">
        <AiFillThunderbolt />
      </div>
      <h1 className="text-lg font-semibold text-white">{title}</h1>
      <p className="text-sm text-white/50">{subtitle}</p>

      <a
        href="/"
        className="mt-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Get Snappy free
      </a>
    </div>
  );
}
