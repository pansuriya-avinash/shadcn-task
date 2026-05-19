"use client";


import * as React from "react";
import { type Theme, type ThemeMode, THEME_TOKENS } from "@/lib/themes";


type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
 
  resolvedTheme: ThemeMode;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = React.createContext<
  ThemeProviderState | undefined
>(undefined);

function resolveMode(theme: Theme): ThemeMode {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTokens(mode: ThemeMode): void {
  const root = window.document.documentElement;
  const tokens = THEME_TOKENS[mode];

  root.dataset.mode = mode;
  root.dataset.themeMode = mode;

  root.classList.toggle("dark", mode === "dark");
  root.classList.toggle("light", mode === "light");

  root.style.colorScheme = mode;

  for (const [key, value] of Object.entries(tokens)) {
    root.style.setProperty(`--${key}`, value);
  }
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(
    () =>
      (typeof window !== "undefined" &&
        (localStorage.getItem(storageKey) as Theme)) ||
      defaultTheme,
  );

  // Track the effective mode so consumers can react to system changes.
  const [resolvedTheme, setResolvedTheme] = React.useState<ThemeMode>("light");

  React.useEffect(() => {
    const mode = resolveMode(theme);
    setResolvedTheme(mode);
    applyTokens(mode);
  }, [theme]);

  React.useEffect(() => {
    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = () => {
      const mode: ThemeMode = mq.matches ? "dark" : "light";
      setResolvedTheme(mode);
      applyTokens(mode);
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setThemeState(newTheme);
    },
    [storageKey],
  );

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{ theme, resolvedTheme, setTheme }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}


export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
