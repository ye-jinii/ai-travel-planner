import Link from 'next/link';
import type { DestinationOption } from '@/features/planner/types/planner';

interface DestinationCardProps {
  destination: DestinationOption;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="group relative rounded-xl border border-white/70 bg-white/90 p-5 shadow-[0_14px_30px_rgba(15,32,70,0.08)] backdrop-blur transition hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div className="text-3xl">{destination.flag}</div>
        <span className="rounded-full bg-[#6D28D9]/10 px-3 py-1 text-xs font-semibold text-[#6D28D9]">
          {destination.price}
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900">{destination.name}</h3>
        <p className="text-xs text-slate-400">{destination.country}</p>
        <p className="mt-2 text-xs text-slate-500">{destination.cities}</p>
      </div>
      <Link
        href={`/planner?destination=${destination.id}`}
        className="absolute inset-0 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9]/70"
        aria-label={`${destination.name} 여행지 선택`}
      />
    </article>
  );
}
