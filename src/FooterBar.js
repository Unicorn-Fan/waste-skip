import React from 'react';
import clsx from 'clsx';

const FooterBar = ({ selectedSkip, onBack, onContinue }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className={clsx(
              "px-4 py-2 rounded-lg transition-all duration-300",
              selectedSkip
                ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                : "text-gray-400 cursor-not-allowed"
            )}
            disabled={!selectedSkip}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform rotate-180"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <span>Back</span>
            </div>
          </button>

          <div className="flex-1 text-center">
            {selectedSkip && (
              <div className="flex items-center justify-center gap-4">
                <div className="text-sm text-gray-600">
                  Selected: <span className="text-green-700 font-medium">{selectedSkip.size} Yard Skip</span>
                </div>
                <div className="h-4 w-px bg-gray-200" />
                <div className="text-sm text-gray-600">
                  Price: <span className="text-green-700 font-medium">£{selectedSkip.price_before_vat}</span>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={onContinue}
            className={clsx(
              "px-6 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2",
              selectedSkip
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
            disabled={!selectedSkip}
          >
            <span>Continue</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
