import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#fdfaf3] w-full font-[Afacad] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
        {/* Trustpilot Rating */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-[14px] font-medium text-[#23201c]">Excellent</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            ))}
          </div>
          <a
            href="https://www.trustpilot.com/review/crumb.pet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-[#23201c] underline"
          >
            21,489 reviews on
          </a>
          <div className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="text-[14px] font-semibold text-[#23201c]">Trustpilot</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-[36px] md:text-[56px] lg:text-[64px] font-bold text-[#23201c] leading-tight mb-6">
          Every pet deserves to come home
        </h1>

        {/* Subtext */}
        <p className="text-[18px] md:text-[20px] text-[#23201c] opacity-80 max-w-[700px] mx-auto mb-10 leading-relaxed">
          Traditional pet tags and microchips don't actually help you find your pet.
          <br className="hidden md:block" />
          We do, using the world's most powerful lost-pet recovery network.
        </p>

        {/* CTA Button */}
        <a
          href="https://crumb.pet/en/order"
          className="inline-block rounded-full px-10 py-4 text-[18px] font-semibold text-white bg-[#f15a29] hover:bg-[#e04d1f] transition-colors"
        >
          Get a free tag
        </a>
      </div>
    </section>
  );
};

export default Hero;
