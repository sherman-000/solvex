import sx3 from "../assets/sx3.png"; // Uncomment if needed
import sx4 from "../assets/sx4.png"; // Uncomment if needed

export default function Gallery() {
  return (
    <div className="flex md:flex-row justify-center flex-col gap-3">
      <img
        src={sx3}
        alt="SolveX Interface"
        className="relative z-10 md:w-6/12 drop-shadow-2xl rounded-md"
      />
      <img
        src={sx4}
        alt="SolveX Interface"
        className="relative z-10 md:w-6/12 drop-shadow-2xl rounded-md"
      />
    </div>
  );
}
