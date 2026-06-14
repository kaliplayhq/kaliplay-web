import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blacktop: "#030303",
        carbon: "#0b0b0f",
        ember: "#ff4d00",
        flare: "#ff7a00",
        pulse: "#00e5ff",
        bone: "#f7f7f5",
        ash: "#9b9ba3"
      },
      boxShadow: {
        glow: "0 0 42px rgba(255, 77, 0, 0.42)",
        cyan: "0 0 36px rgba(0, 229, 255, 0.32)"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
