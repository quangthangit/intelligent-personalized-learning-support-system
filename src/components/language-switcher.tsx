// src/components/LanguageSwitcher.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Thay locale trong URL
    const segments = pathname.split("/");
    segments[1] = newLocale; // ví dụ: /en/about -> /vi/about
    router.push(segments.join("/"));
  };

  return (
    <div className="flex gap-2">
      <button
        className={`px-3 py-1 rounded ${currentLocale === "en" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => switchLocale("en")}
      >
        English
      </button>
      <button
        className={`px-3 py-1 rounded ${currentLocale === "vi" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => switchLocale("vi")}
      >
        Tiếng Việt
      </button>
    </div>
  );
}
