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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(226,236,255,0.9),rgba(240,245,255,0.6)_40%,rgba(255,255,255,1)_70%)]">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-16">
        <div className="absolute left-6 top-10 h-24 w-24 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-10 top-20 h-32 w-32 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-500 text-white shadow-[0_16px_40px_rgba(59,130,246,0.35)]">
            <Plane className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl [font-family:var(--font-display)]">
            AI 여행 플래너
          </h1>
          <p className="mt-2 text-sm text-slate-500">어디로 떠나고 싶으신가요?</p>
        </div>

        <div className="mt-10 w-full">
          <DestinationSearch value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="mt-12 w-full">
          <h2 className="text-lg font-semibold text-slate-800 [font-family:var(--font-display)]">
            인기 여행지
          </h2>
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
