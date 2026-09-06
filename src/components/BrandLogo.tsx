import Image from "next/image";

export default function BrandLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-12 w-12 overflow-hidden rounded-[1.5rem] bg-[#EFF6FF] p-2 shadow-lg shadow-slate-200/30">
        <Image
          src="/noveltra-logo.png"
          alt="Noveltra Technologies logo"
          fill
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-lg font-semibold tracking-tight text-[#0F172A]">
          Noveltra Technologies
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-[#2563EB]">
          Innovate. Build. Elevate.
        </p>
      </div>
    </div>
  );
}
