import Header from "@/components2/Header";
import solvexLogo from "../assets/solvexLogo.png";
import sx1L from "../assets/sx1L.png";
import vid from "../assets/22.mp4";
import {
  Send,
} from "lucide-react";
import FeatureCombo from "@/components2/FeatureCombo";
import Features from "@/components2/Features";
import PricingSection from "@/components2/PriceCard";
import Gallery from "@/components2/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="px-4 md:px-8 lg:px-14 w-full min-h-[96vh] flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 py-16">
          {/* Left Side - Text Content */}
          <div className="flex flex-col w-full md:w-1/2 lg:w-5/12 items-center md:items-start p-4 md:p-8 space-y-6 order-1 md:order-1">
            <div className="font-inter gap-y-2 flex flex-col font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-center md:text-left">
              <div className="text-nowrap">
                <span className="bg-gradient-to-r from-gray-100 via-gray-100 to-gray-600 bg-clip-text text-transparent">
                  SolveX
                </span>{" "}
                is an{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Invisible
                </span>
              </div>
              <div className="text-nowrap">
                <span className="bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-transparent">
                  Helper App
                </span>{" "}
                for your
              </div>
              <div className="text-nowrap">Online Assessments.</div>
            </div>

            <p className="text-center md:text-left text-gray-300 max-w-md text-lg">
              A browser-like app with advanced features that helps you in your
              Online Coding Assessments without leaving a trace.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center w-full md:w-1/2 lg:w-5/12 relative order-2 md:order-2">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

              <div className="relative">
                <img
                  src={sx1L}
                  alt="SolveX Interface"
                  className="relative z-10 drop-shadow-2xl rounded-2xl"
                />

                {/* Feature Card (Positioned) */}
                <div className="absolute -bottom-16 -right-8 md:-right-16 z-20 transform scale-75 md:scale-100">
                  <FeatureCombo />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="flex w-full justify-center gap-4 pt-4">
          <button className="bg-gradient-to-r flex gap-x-3 items-center from-cyan-500 to-blue-500 px-4 py-2 font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <Download color="#ffffff" /> Download Demo
          </button>
          <button className="border flex items-center gap-x-3 border-gray-600 px-4 py-2 font-medium hover:bg-gray-800 transition-all duration-300">
            <Send color="#14c4ff" /> Telegram
          </button>
        </div> */}

        {/* Features Section */}
        <section className="px-4 md:px-8 lg:px-14 w-full">
          <Features />
        </section>

        <section className="px-4 md:px-8 lg:px-14 w-full">
          <Gallery />
        </section>

        <section className="px-4 md:px-8 lg:px-14 w-full flex justify-center mt-16">
          <div className="text-gray-200 text-center">
            The app is mainly designed for the OAs that are conducted in a{" "}
            <u>browser</u>. However the app can be used for other purposes as
            well.
            <br />
            So far the app has been tested on the following platforms:
            <br />
            [ HackerRank, CodeSignal, CoderPad, HackerEarth, Google
            Meet, OBS Studio Screen Recorder ]
          </div>
        </section>

        <section className="px-4 md:px-8 lg:px-14 w-full flex justify-center mt-16">
          <video controls src={vid} className="w-8/12 h-full object-cover" />
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-8 lg:px-14 w-full py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want a{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Demo
              </span>{" "}
              ?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-2 mt-4">
              Want to test the app before buying? Schedule a demo with us and
              experience the features of SolveX firsthand.
            </p>
            <div className="flex w-full justify-center gap-4 pt-4">
              {/* <button className="bg-gradient-to-r flex gap-x-3 items-center from-cyan-500 to-blue-500 px-4 py-2 font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <Download color="#ffffff" /> Download Demo
              </button> */}
              <a
                href="https://t.me/solveX_app"
                target="_blank"
                className="border flex items-center gap-x-3 border-gray-600 px-4 py-2 font-medium hover:bg-gray-800 transition-all duration-300"
              >
                <Send color="#14c4ff" />
                Schedule a Demo
              </a>
            </div>
          </div>
        </section>

        <PricingSection />

        {/* Footer */}
        <footer className="px-4 md:px-8 lg:px-14 w-full py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src={solvexLogo} alt="SolveX Logo" className="w-10 h-10" />
              <span className="font-bold text-xl">SolveX</span>
            </div>
            <div className="flex gap-2 items-center ">
              <Send color="#55a2ef" size={22} />
              Telegram:{" "}
              <span className="border-b-2 border-[#55a2ef]">@sherman_000</span>
            </div>
          </div>
          <div className="text-center mt-6 text-gray-500 text-sm">
            © {new Date().getFullYear()} SolveX. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
