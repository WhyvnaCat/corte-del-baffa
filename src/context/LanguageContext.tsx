import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { de } from "../data/content.de";
import { it } from "../data/content.it";
import type { SiteContent } from "../data/content.types";

export type Lang = "de" | "it";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  content: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "corte-del-baffa-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "de";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "de" || stored === "it") return stored;
  } catch {
    // localStorage may be unavailable (private browsing) — fall back silently
  }
  return "de";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const content = useMemo(() => (lang === "de" ? de : it), [lang]);
  const value = useMemo(() => ({ lang, setLang: setLangState, content }), [lang, content]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
