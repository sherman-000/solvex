interface PriceCardProps {
  tier: string;
  price: number;
  isPopular: boolean;
  ctaText?: string;
}

const PriceCard = ({
  tier,
  price,
  isPopular,
  ctaText = "Contact on Telegram",
}: PriceCardProps) => {
  return (
    <div
      className={`rounded-xl overflow-hidden ${
        isPopular
          ? "bg-[#090909] border border-orange-500 shadow-lg shadow-blue-500/10"
          : "bg-[#090909] border border-orange-500"
      }`}
    >
      {/* {isPopular && (
        <div className="bg-gradient-to-r from-orange-500 to-red-500 py-1.5 text-center text-sm font-medium">
          Most Popular
        </div>
      )} */}

      <div className="p-6 md:p-8">
        {/* Header */}
        <h3 className="text-xl font-bold mb-1">{tier}</h3>
        <div className="flex items-end gap-1 mb-4">
          <span className="text-3xl md:text-4xl font-bold">₹{price}</span>
          {isPopular ? (
            <span className="text-gray-400 mb-1">/6 months</span>
          ) : (
            <span className="text-gray-400 mb-1">/month</span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6">
          {isPopular
            ? "Perfect for professionals and serious competitors."
            : "Everything you need to get started with coding assessments."}
        </p>

        {/* CTA Button */}
        <a
          href="https://t.me/solveX_app"
          target="_blank"
          className={`w-full py-3 flex items-center justify-center gap-4 rounded-md font-medium transition-all duration-300 ${
            isPopular
              ? "bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/20"
              : "bg-[#171717] hover:bg-[#3c3c3c] border border-[#3c3c3c]"
          }`}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

// Example usage:
const PricingSection = () => {
  const pricingTiers = [
    {
      tier: "Basic",
      price: 500,
      isPopular: false,
    },
    {
      tier: "Pro ⭐✨",
      price: 2000,
      isPopular: true,
    },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-14 py-16 w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Choose Your{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-300 bg-clip-text text-transparent">
          Plan
        </span>{" "}
        🎉
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
        Select the perfect plan for your needs and ace your coding assessments
        with confidence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <PriceCard key={index} {...tier} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
