import sx2 from "../assets/sx2.png"; // Uncomment if needed
import {
  Video,
  BetweenHorizonalStart,
  Image,
  LetterText,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Video className="text-blue-500" size={24} />,
      title: "Invisible to Screen Recorders",
      description:
        "Uses-content protection rendering technology to make content invisible to screen recorders.",
    },
    {
      icon: <BetweenHorizonalStart color="#d633ff" size={24} />,
      title: "Avoids Tab Switch Detection",
      description:
        "SolveX is built such that it will never steal focus from other applications, preventing tab switch detection.",
    },
    {
      icon: <Image color="#ff8757" size={24} />,
      title: "Invisible Screenshot Taker",
      description:
        "Comes with an invisible screenshot taker that captures screenshots without being detected and automatically pastes them into ChatGPT / ClaudeAI / Other AI Websites.",
    },
    {
      icon: <LetterText color="#31ff53" size={24} />,
      title: "Screenshot to Text (OCR)",
      description:
        "Converts screenshots to text using advanced OCR technology, making it easy to extract information from images. It uses Tesseract.js for OCR.",
    },
  ];

  return (
    <div className="mx-auto py-16 font-inter">
      <h2 className="text-3xl font-bold mb-8">Advanced Privacy Features</h2>
      <div className="flex flex-col 2xl:flex-row gap-8 items-center">
        {/* Left section - Features */}
        <div className="w-full 2xl:w-1/2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="dark:bg-[#0e0e0f] rounded-lg p-5 border border-[#3c3c3c] hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* <div className="mt-8">
            <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
              Learn more about our technology
              <ArrowUpRight className="ml-1" size={16} />
            </a>
          </div> */}
        </div>

        {/* Right section - Image */}
        <div className="w-full 2xl:w-1/2">
          <div className="relative">
            {/* Replace the placeholder with your actual image */}
            <img
              src={sx2}
              alt="Privacy Protection Visualization"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
