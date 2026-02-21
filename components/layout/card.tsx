import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: string;
  iconSrc?: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
  iconSrc,
}: FeatureCardProps) {
  return (
    <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 w-72 text-center">
      <div className="mb-4 flex justify-center">
        {iconSrc ? (
          <div className="relative h-12 w-12">
            <Image
              src={iconSrc}
              alt={`${title} icon`}
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
        ) : (
          <span className="text-4xl">{icon}</span>
        )}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
