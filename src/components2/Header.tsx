import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import solvexLogo from "../assets/solvexLogo.png"; // Uncomment if needed
// import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-20 flex h-12 w-full overflow-hidden items-center justify-between border-b border-[#5a5e6750] bg-[#111113] bg-opacity-60 px-4 backdrop-blur-md"
    >
      <div className="nodrag flex items-center gap-x-3">
        <Link
          to="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="nodrag flex items-center gap-x-2 p-1 transition-all duration-200 hover:bg-[#70707030] rounded-md"
        >
          <img src={solvexLogo} alt="Solvex Logo" className="w-6 h-6" />
          {/* <FaGithub className="text-white text-lg" /> */}
          <span className="font-spaceMono text-sm text-white font-space-mono font-medium tracking-wide">SolveX</span>
        </Link>
      </div>
    </motion.div>
  );
}
