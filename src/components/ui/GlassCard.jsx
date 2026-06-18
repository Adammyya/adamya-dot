import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", hover = true, as: Comp = motion.div, ...props }) {
  return (
    <Comp
      className={`glass rounded-2xl shadow-glass ${
        hover ? "transition-colors duration-300 hover:border-white/20" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
