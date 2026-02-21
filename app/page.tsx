import Image from "next/image";
import FeatureCard from "@/components/layout/card";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12">
        <div>
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            Plateforme étudiante moderne
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Le hub étudiant N°1 en Belgique
          </h1>

          <p className="mt-5 text-lg text-slate-600">
            Studexia centralise logements, ressources académiques et opportunités
            étudiantes dans une seule interface claire et pro.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-7 py-3 font-medium text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02]">
              Explorer la plateforme
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-7 py-3 font-medium text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700">
              Voir la FAQ
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-3 shadow-xl shadow-slate-200">
          <Image
            src="/images/photo3.jpeg"
            alt="Étudiants sur la plateforme Studexia"
            width={900}
            height={600}
            priority
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Fonctionnalités clés</h2>
            <p className="mt-2 text-slate-600">
              Tout ce qu&apos;il faut pour simplifier la vie étudiante.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:justify-between">
          <FeatureCard
            iconSrc="/images/icon1.png"
            title="Logements"
            description="Trouve ton kot facilement partout en Belgique."
          />
          <FeatureCard
            iconSrc="/images/icone2.png"
            title="Ressources"
            description="Accède à des fiches, synthèses et outils IA."
          />
          <FeatureCard
            iconSrc="/images/icone3.png"
            title="Jobs & Stages"
            description="Découvre des opportunités étudiantes ciblées."
          />
        </div>
      </section>
    </main>
  );
}
