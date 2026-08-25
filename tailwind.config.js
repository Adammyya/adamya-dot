/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // "ink" now means warm parchment/paper (the base), not black —
        // named to keep existing component classes (bg-ink-950 etc) working
        // while delivering the archival-paper palette the brief calls for.
        ink: {
          950: "#F3EEE1", // warm ivory / parchment background
          900: "#EDE6D6",
          800: "#E4DBC8",
          700: "#D8CCB4",
          line: "#2B241A1F",
          linestrong: "#2B241A3D",
        },
        paper: {
          DEFAULT: "#2B241A", // ink black / charcoal text
          dim: "#5A5040",
          faint: "#8A7E68",
        },
        signal: {
          DEFAULT: "#2F5233", // deep forest green — the one accent
          dim: "#1E3722",
          glow: "#2F523355",
        },
        synapse: {
          DEFAULT: "#2F5233",
          dim: "#1E3722",
          glow: "#2F523355",
        },
        ember: {
          DEFAULT: "#8C3B2E", // dark burgundy — used sparingly (status/alerts only)
          dim: "#5E2A21",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Source Serif 4'", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "mesh-glow": "none",
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        "blueprint-grid":
          "linear-gradient(#2B241A0d 1px, transparent 1px), linear-gradient(90deg, #2B241A0d 1px, transparent 1px)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(12px,-8px)" },
          "100%": { transform: "translate(0,0)" },
        },
        pulseLine: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
        "pulse-line": "pulseLine 3.5s linear infinite",
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 8px 30px -12px rgba(0,0,0,0.6)",
        glow: "0 0 40px -8px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};
