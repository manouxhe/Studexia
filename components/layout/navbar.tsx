"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Ressources", href: "/ressources" },
    { name: "Logements", href: "/logements" },
    { name: "Opportunités", href: "/opportunites" },
    { name: "FAQ", href: "/FAQ" },
  ];

  return (
    <nav className="w-full border-b border-[#E2E8F0] bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Logo />

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "text-[#1D4ED8]"
                    : "text-[#64748B] hover:text-[#1D4ED8]"
                }`}
              >
                {item.name}

                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#1D4ED8] transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="app/connexion"
            className="text-sm font-medium text-[#1D4ED8] hover:opacity-80 transition"
          >
            Connexion
          </Link>

          <Link
            href="app/inscription"
            className="px-4 py-2 rounded-lg bg-[#1D4ED8] text-white text-sm font-medium 
            hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-sm"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </nav>
  );
}
