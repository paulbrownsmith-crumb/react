import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full font-[Afacad]">
      {/* Wavy Top Border */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[40px] md:h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C40 30 40 0 80 0C120 0 120 30 160 30C200 30 200 0 240 0C280 0 280 30 320 30C360 30 360 0 400 0C440 0 440 30 480 30C520 30 520 0 560 0C600 0 600 30 640 30C680 30 680 0 720 0C760 0 760 30 800 30C840 30 840 0 880 0C920 0 920 30 960 30C1000 30 1000 0 1040 0C1080 0 1080 30 1120 30C1160 30 1160 0 1200 0C1240 0 1240 30 1280 30C1320 30 1320 0 1360 0C1400 0 1400 30 1440 30V60H0Z"
            fill="#3d0c1c"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#3d0c1c]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Logo, Social, App Download Column */}
            <div className="col-span-2 md:col-span-1">
              {/* Logo */}
              <a href="/" className="inline-block mb-6">
                <span className="text-[32px] font-bold text-white font-[Afacad]">
                  Crumb<span className="text-[#f15a29]">.</span>
                </span>
              </a>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 mb-6">
                <a
                  href="https://www.tiktok.com/@crumb.pet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="TikTok"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/crumb-pet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@crumbpet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="YouTube"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/crumb.pet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
              </div>

              {/* App Download Button */}
              <a
                href="https://crumb.pet/en/download"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white text-[14px] font-medium hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <span>| Download the app</span>
              </a>
            </div>

            {/* Features Column */}
            <div>
              <h3 className="text-[16px] font-semibold text-white mb-4">Features</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="https://crumb.pet/en/features/snoutid" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    SnoutID™
                  </a>
                </li>
                <li>
                  <a href="https://crumb.pet/en/features/vet-rescue-alerts" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Vet & rescue centre alerts
                  </a>
                </li>
                <li>
                  <a href="https://crumb.pet/en/features/neighbourhood-alerts" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Neighbourhood alerts
                  </a>
                </li>
                <li>
                  <a href="https://crumb.pet/en/features/online-pet-profile" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Online pet profile
                  </a>
                </li>
                <li>
                  <a href="https://crumb.pet/en/features/gps-alerts" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    GPS alerts
                  </a>
                </li>
                <li>
                  <a href="https://crumb.pet/en/features/social-sos" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Social SOS
                  </a>
                </li>
                <li>
                  <a href="https://crumb.pet/en/features/24-7-vet" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    24/7 Vet
                  </a>
                </li>
              </ul>
            </div>

            {/* Help & Legal Column */}
            <div>
              <h3 className="text-[16px] font-semibold text-white mb-4">Help & Legal</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="https://help.crumb.pet" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Help centre
                  </a>
                </li>
                <li>
                  <a href="https://crumb.pet/en/terms" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="https://crumb.pet/en/privacy" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            {/* About Column */}
            <div>
              <h3 className="text-[16px] font-semibold text-white mb-4">About</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="https://crumb.pet/en/partners" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Partner programme
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Wavy Divider */}
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <svg
            viewBox="0 0 1200 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[8px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0 4C10 4 10 0 20 0C30 0 30 4 40 4C50 4 50 0 60 0C70 0 70 4 80 4C90 4 90 0 100 0C110 0 110 4 120 4C130 4 130 0 140 0C150 0 150 4 160 4C170 4 170 0 180 0C190 0 190 4 200 4C210 4 210 0 220 0C230 0 230 4 240 4C250 4 250 0 260 0C270 0 270 4 280 4C290 4 290 0 300 0C310 0 310 4 320 4C330 4 330 0 340 0C350 0 350 4 360 4C370 4 370 0 380 0C390 0 390 4 400 4C410 4 410 0 420 0C430 0 430 4 440 4C450 4 450 0 460 0C470 0 470 4 480 4C490 4 490 0 500 0C510 0 510 4 520 4C530 4 530 0 540 0C550 0 550 4 560 4C570 4 570 0 580 0C590 0 590 4 600 4C610 4 610 0 620 0C630 0 630 4 640 4C650 4 650 0 660 0C670 0 670 4 680 4C690 4 690 0 700 0C710 0 710 4 720 4C730 4 730 0 740 0C750 0 750 4 760 4C770 4 770 0 780 0C790 0 790 4 800 4C810 4 810 0 820 0C830 0 830 4 840 4C850 4 850 0 860 0C870 0 870 4 880 4C890 4 890 0 900 0C910 0 910 4 920 4C930 4 930 0 940 0C950 0 950 4 960 4C970 4 970 0 980 0C990 0 990 4 1000 4C1010 4 1010 0 1020 0C1030 0 1030 4 1040 4C1050 4 1050 0 1060 0C1070 0 1070 4 1080 4C1090 4 1090 0 1100 0C1110 0 1110 4 1120 4C1130 4 1130 0 1140 0C1150 0 1150 4 1160 4C1170 4 1170 0 1180 0C1190 0 1190 4 1200 4"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Copyright */}
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-6">
          <p className="text-[14px] text-white/70">
            © {new Date().getFullYear()} Crumb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
