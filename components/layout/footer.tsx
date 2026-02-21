// components/layout/Footer.tsx
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Logo />
          <p className="text-sm text-[#64748B] mt-4">
            L&apos;unique plateforme dédiée aux étudiants belges.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#0F172A] mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-[#64748B]">
            <li>Ressources</li>
            <li>Logements</li>
            <li>Opportunités</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[#0F172A] mb-4">Contact</h3>
          <p className="text-sm text-[#64748B]">contact@studexia.eu</p>
        </div>
      </div>

      <div className="text-center text-sm text-[#64748B] py-6 border-t border-[#E2E8F0]">
        © {new Date().getFullYear()} Studexia. Tous droits réservés.
      </div>
    </footer>
  );
}
