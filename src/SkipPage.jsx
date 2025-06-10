import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import FooterBar from "./FooterBar";
import logo from "./waste.jpg";

const SkipPage = () => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      )
      .then((res) => {
        setSkips(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch skips:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 text-white mt-4">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sustainable Waste Management
            </h1>
            <p className="text-lg md:text-xl text-green-50 mb-8">
              Choose the perfect skip size for your garden waste. We ensure
              eco-friendly disposal and recycling of your waste.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Eco-friendly disposal</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Quick delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Flexible hire periods</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skip Selection Section */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Choose Your Skip Size
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect skip size for your project. Our skips are
            designed to handle various types of garden waste efficiently.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {skips.map((skip) => (
              <Card
                key={skip.id}
                yards={skip.size}
                price={skip.price_before_vat}
                image={logo}
                hirePeriod={skip.hire_period || 14}
                selected={selectedSkip?.id === skip.id}
                onSelect={() => setSelectedSkip(skip)}
                allowed_on_road={skip.allowed_on_road}
                allows_heavy_waste={skip.allows_heavy_waste}
              />
            ))}
          </div>
        )}
      </div>

      {/* Additional Information Section */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Quick Delivery
            </h3>
            <p className="text-gray-600">
              Get your skip delivered within 24 hours of booking.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Eco-Friendly
            </h3>
            <p className="text-gray-600">
              We ensure proper recycling and disposal of all waste.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Flexible Payment
            </h3>
            <p className="text-gray-600">
              Secure payment options with transparent pricing.
            </p>
          </div>
        </div>
      </div>

      <FooterBar
        selectedSkip={selectedSkip}
        onBack={() => setSelectedSkip(null)}
        onContinue={() =>
          console.log("Continue to next step with:", selectedSkip)
        }
      />
    </div>
  );
};

export default SkipPage;
