/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07080A",
          900: "#0D0F12",
          800: "#13161B",
          700: "#1A1E25",
          line: "#FFFFFF14",
          linestrong: "#FFFFFF26",
        },
        paper: {
          DEFAULT: "#E9EBEF",
          dim: "#9AA0AC",
          faint: "#5C616C",
        },
        signal: {
          DEFAULT: "#56E8C9",
          dim: "#2E8C7A",
          glow: "#56E8C955",
        },
        synapse: {
          DEFAULT: "#9B87F5",
          dim: "#5E54A0",
          glow: "#9B87F555",
        },
        ember: {
          DEFAULT: "#F2A65A",
          dim: "#A3713A",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "mesh-glow":
          "radial-gradient(60% 50% at 20% 0%, #9B87F51a 0%, transparent 60%), radial-gradient(50% 40% at 85% 10%, #56E8C914 0%, transparent 60%)",
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
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
