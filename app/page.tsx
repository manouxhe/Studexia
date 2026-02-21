import Image from "next/image";
import FeatureCard from "@/components/layout/card";

export default function Home() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-20 gap-12">
        
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Le hub étudiant N°1 en Belgique
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Studexia centralise logements, ressources académiques
            et opportunités étudiantes en une seule plateforme moderne.
          </p>

          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300">
            Explorer la plateforme
          </button>
        </div>

        <div className="bg-indigo-50 p-4 rounded-3xl shadow-xl">
          <Image
            src="/photo3.jpeg"
            alt="Université"
            width={500}
            height={350}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="flex flex-wrap justify-center gap-8 px-10 pb-20">
        <FeatureCard
          icon="🏠"
          title="Logements"
          description="Trouve ton kot facilement partout en Belgique."
        />
        <FeatureCard
          icon="📚"
          title="Ressources"
          description="Accède à des fiches, synthèses et outils IA."
        />
        <FeatureCard
          icon="💼"
          title="Jobs & Stages"
          description="Découvre des opportunités étudiantes."
        />
        <FeatureCard
          icon="🤝"
          title="Communauté"
          description="Échange avec d'autres étudiants."
        />
      </section>

    </main>
  );
}
