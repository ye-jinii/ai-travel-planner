'use client';

import { useMemo, useState } from 'react';
import { Plane } from 'lucide-react';
import { DestinationSearch } from '@/features/home/components/DestinationSearch';
import { DestinationCard } from '@/features/home/components/DestinationCard';
import { popularDestinations } from '@/mocks/destinations';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return popularDestinations;
    return popularDestinations.filter((destination) =>
      [destination.name, destination.country, destination.cities].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-14">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6D28D9] text-white shadow-[0_12px_28px_rgba(109,40,217,0.3)]">
              <Plane className="h-5 w-5" />
            </div>
            <span className="text-xs font-semibold tracking-[0.35em] text-[#6D28D9]">
              AI TRAVEL PLANNER
            </span>
          </div>
        </header>

        <section className="mt-14 max-w-3xl">
          <h1 className="mt-6 text-4xl font-semibold leading-[1.15] text-slate-900 sm:text-6xl">
            여행은
            <br />
            강렬하게,
            <br />
            선택은 간결하게.
          </h1>
        </section>

        <div className="mt-16 w-full">
          <DestinationSearch value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="mt-12 w-full">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-slate-400">POPULAR DESTINATIONS</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
