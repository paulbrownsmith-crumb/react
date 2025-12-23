import React, { useState, useRef } from "react";

export type User = {
  username?: string;
  email?: string;
};

interface HeaderProps {
  isAuthenticated: boolean;
  user: User | null;
  logout: () => Promise<void>;
}


const featuresList = [
  {
    title: "24/7 Vet",
    desc: "Chat to a qualified vet nurse in app, anytime you need them",
    highlight: true,
  },
  {
    title: "SnoutID™",
    desc: "Create your pet’s unique ID with our revolutionary technology",
  },
  {
    title: "Vet & Rescue Centre Alerts",
    desc: "Notify local vets and shelters when your pet goes missing",
  },
  {
    title: "Neighbourhood Alerts",
    desc: "Alert local Crumb users when you mark your pet as missing",
  },
  {
    title: "Social SOS",
    desc: "Boost your missing pet on social media with our verified pages",
  },
  {
    title: "Online Pet Profile",
    desc: "Create your pet a digital pet profile with all their information",
  },
  {
    title: "GPS SMS Alerts",
    desc: "Get alerted by SMS when your pet’s tag is scanned",
  },
  {
    title: "Community Rewards",
    desc: "Earn rewards and donate to charity when you refer Crumb",
  },
];

const Header: React.FC<HeaderProps> = ({ isAuthenticated, user, logout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      setDropdownVisible(true);
      document.addEventListener("mousedown", handleClick);
    } else {
      // Wait for fade out before hiding
      const timeout = setTimeout(() => setDropdownVisible(false), 200);
      return () => {
        clearTimeout(timeout);
        document.removeEventListener("mousedown", handleClick);
      };
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

  return (
    <header className="bg-[#fdfaf3] w-full border-b border-transparent font-[Afacad]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-8">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://static.crumb.pet/build/1.0.15/static/images/header-logo.svg"
              alt="Crumb Logo"
              className="h-10 w-auto"
            />
          </a>
          <nav className="flex items-center gap-8 font-[Afacad]">
            <div className="relative flex items-center" ref={dropdownRef}>
              <button
                ref={buttonRef}
                className="text-[18px] font-medium text-[#23201c] cursor-pointer flex items-center gap-1 focus:outline-none"
                onClick={() => setDropdownOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Features
                <svg
                  className={`w-4 h-4 text-[#23201c] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownVisible && (
                <div
                  ref={dropdownRef}
                  className={`fixed left-0 top-[96px] z-50 w-full bg-[#fdfaf3] transition-opacity duration-200 ${dropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  style={{ minWidth: 700, boxShadow: 'none', border: 'none', borderRadius: 0 }}
                >
                  <div className="mx-auto max-w-[892px] p-8 flex flex-wrap gap-y-6 gap-x-8">
                    {featuresList.map((feature) => (
                      <div
                        key={feature.title}
                        className={`w-[240px] ${feature.highlight ? "bg-[#f3ede3] rounded-xl p-4" : ""}`}
                      >
                        <div className="text-lg font-semibold text-[#23201c] mb-1">{feature.title}</div>
                        <div className="text-base text-[#23201c] opacity-80 leading-snug">{feature.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a
              href="https://crumb.pet/en/pricing"
              className="text-[18px] font-medium text-[#23201c]"
            >
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="text-[18px] text-[#23201c] font-medium mr-2">
                {user?.username || user?.email}
              </span>
              <button
                onClick={logout}
                className="rounded-full border border-[#6a0934] px-8 py-2 text-[18px] font-semibold text-[#6a0934] bg-transparent hover:bg-[#f5e6ef] transition-colors"
              >
                Log Out
              </button>
            </>
          ) : (
            <a
              href="https://crumb.pet/en/login"
              className="rounded-full border border-[#6a0934] px-8 py-2 text-[18px] font-semibold text-[#6a0934] bg-transparent hover:bg-[#f5e6ef] transition-colors"
            >
              Log In
            </a>
          )}
          <a
            href="https://crumb.pet/en/order"
            className="rounded-full px-8 py-2 text-[18px] font-semibold text-white bg-[#6a0934] hover:bg-[#8a1150] transition-colors"
          >
            Get a free tag
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
