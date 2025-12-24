import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useUser } from '@/hooks/useUser';

const featuresList = [
  {
    title: '24/7 Vet',
    desc: 'Chat to a qualified vet nurse in app, anytime you need them',
  },
  {
    title: 'SnoutID™',
    desc: "Create your pet's unique ID with our revolutionary technology",
  },
  {
    title: 'Vet & Rescue Centre Alerts',
    desc: 'Notify local vets and shelters when your pet goes missing',
  },
  {
    title: 'Neighbourhood Alerts',
    desc: 'Alert local Crumb users when you mark your pet as missing',
  },
  {
    title: 'Social SOS',
    desc: 'Boost your missing pet on social media with our verified pages',
  },
  {
    title: 'Online Pet Profile',
    desc: 'Create your pet a digital pet profile with all their information',
  },
  {
    title: 'GPS SMS Alerts',
    desc: "Get alerted by SMS when your pet's tag is scanned",
  },
  {
    title: 'Community Rewards',
    desc: 'Earn rewards and donate to charity when you refer Crumb',
  },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isLoggedIn, login, logout } = useAuth();
  const { data: user, isLoading } = useUser(isLoggedIn);

  // Close features dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false);
      }
    };

    if (featuresOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [featuresOpen]);

  return (
    <header className="bg-[#fdfaf3] w-full border-b border-transparent font-[Afacad]">
      {/* AppBar / Toolbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#fdfaf3] border-b border-transparent">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[56px] md:h-[72px] px-5 md:px-10">
          {/* Logo and Desktop nav */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 min-w-0">
              <img
                src="https://static.crumb.pet/build/1.0.15/static/images/header-logo.svg"
                alt="Crumb Logo"
                className="h-[30px] w-auto"
                style={{ maxHeight: 30 }}
              />
            </a>
            <nav className="hidden md:flex items-center gap-6 font-[Afacad]">
              <div className="relative flex items-center" ref={dropdownRef}>
                <button
                  className="text-[16px] font-medium text-[#23201c] cursor-pointer flex items-center gap-1 focus:outline-none"
                  onClick={() => setFeaturesOpen((open) => !open)}
                  aria-haspopup="true"
                  aria-expanded={featuresOpen}
                >
                  Features
                  <svg
                    className={`w-4 h-4 text-[#23201c] transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {featuresOpen && (
                  <div className="fixed left-0 right-0 top-[72px] z-50 bg-[#fdfaf3] border-t border-[#e8e2d9]">
                    <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-10">
                      <div className="grid grid-cols-3 gap-x-16 gap-y-10">
                        {featuresList.map((feature) => (
                          <div
                            key={feature.title}
                            className="cursor-pointer"
                            tabIndex={0}
                            role="menuitem"
                            aria-label={feature.title}
                          >
                            <div className="text-[16px] font-semibold text-[#23201c] mb-2">
                              {feature.title}
                            </div>
                            <div className="text-[14px] text-[#23201c] opacity-70 leading-relaxed">
                              {feature.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="https://crumb.pet/en/pricing"
                className="text-[16px] font-medium text-[#23201c]"
              >
                Pricing
              </a>
            </nav>
          </div>
          {/* Desktop auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user && (
              <span className="text-[16px] font-medium text-[#23201c]">
                Hello {user.firstName}!
              </span>
            )}
            {user ? (
              <button
                onClick={logout}
                className="rounded-full border border-[#6a0934] px-6 py-2 text-[16px] font-semibold text-[#6a0934] bg-transparent hover:bg-[#f5e6ef] transition-colors w-[150px]"
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={login}
                disabled={isLoading}
                className="rounded-full border border-[#6a0934] px-6 py-2 text-[16px] font-semibold text-[#6a0934] bg-transparent hover:bg-[#f5e6ef] transition-colors w-[150px] text-center flex justify-center items-center"
              >
                {isLoading ? (
                  <svg
                    className="w-5 h-6 animate-spin text-[#6a0934]"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  'Log In'
                )}
              </button>
            )}
            <a
              href="https://crumb.pet/en/order"
              className="rounded-full px-6 py-2.5 text-[16px] font-semibold text-white bg-[#6a0934] hover:bg-[#8a1150] transition-colors w-[150px] text-center"
            >
              Get a free tag
            </a>
          </div>
          {/* Mobile burger */}
          <button
            className="md:hidden ml-auto p-1"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setDrawerOpen((open) => !open)}
            style={{ height: 48, width: 48 }}
          >
            {drawerOpen ? (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="12"
                  y1="12"
                  x2="28"
                  y2="28"
                  stroke="#23201c"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="28"
                  y1="12"
                  x2="12"
                  y2="28"
                  stroke="#23201c"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" y="12" width="24" height="2.5" rx="1" fill="#23201c" />
                <rect x="8" y="19" width="24" height="2.5" rx="1" fill="#23201c" />
                <rect x="8" y="26" width="24" height="2.5" rx="1" fill="#23201c" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Spacer for fixed AppBar */}
      <div className="h-[56px] md:h-0" />
      {/* Mobile Drawer */}
      <div
        className={`fixed top-[56px] left-0 right-0 bottom-0 z-[60] bg-[#fdfaf3] flex flex-col md:hidden transition-all duration-300 ease-in-out ${
          drawerOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Drawer divider */}
        <div className="border-t border-[#e8e2d9]" />
        {/* Drawer Navigation */}
        <div className="flex-1 flex flex-col px-6 pt-6 gap-0 overflow-y-auto">
          <button
            className="flex items-center justify-between w-full text-[18px] font-medium text-[#23201c] py-4"
            onClick={() => setFeaturesOpen((open) => !open)}
            aria-expanded={featuresOpen}
            aria-controls="mobile-features-list"
          >
            Features
            <svg
              className={`w-5 h-5 text-[#23201c] transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {featuresOpen && (
            <div id="mobile-features-list" className="pl-2 flex flex-col gap-2 pb-2">
              {featuresList.map((feature) => (
                <div key={feature.title} className="text-base text-[#23201c] py-2">
                  <span className="font-semibold">{feature.title}</span>
                  <div className="text-xs text-[#23201c] opacity-80">{feature.desc}</div>
                </div>
              ))}
            </div>
          )}
          <a
            href="https://crumb.pet/en/pricing"
            className="w-full text-[18px] font-medium text-[#23201c] py-4 text-left"
          >
            Pricing
          </a>
          <a
            href="https://crumb.pet/en/help"
            className="w-full text-[18px] font-medium text-[#23201c] py-4 text-left"
          >
            Help
          </a>
        </div>
        {/* Drawer Footer */}
        <div className="border-t border-[#e8e2d9] px-6 py-6 bg-[#fdfaf3]">
          {user && (
            <p className="text-[18px] font-medium text-[#23201c] text-center mb-4">
              Hello {user.firstName}!
            </p>
          )}
          <a
            href="https://crumb.pet/en/order"
            className="block w-full rounded-full px-8 py-4 text-[18px] font-semibold text-white bg-[#f15a29] hover:bg-[#e04d1f] transition-colors text-center mb-4"
          >
            Get a free tag
          </a>
          {user ? (
            <button
              onClick={logout}
              className="block w-full rounded-full border border-[#f15a29] px-8 py-4 text-[18px] font-semibold text-[#f15a29] bg-transparent hover:bg-[#fef5f2] transition-colors text-center"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={login}
              className="block w-full rounded-full border border-[#f15a29] px-8 py-4 text-[18px] font-semibold text-[#f15a29] bg-transparent hover:bg-[#fef5f2] transition-colors text-center"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
