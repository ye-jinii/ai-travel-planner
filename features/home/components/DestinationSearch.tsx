'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DestinationSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function DestinationSearch({ value, onChange }: DestinationSearchProps) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-[0_20px_45px_rgba(15,32,70,0.08)] backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="나라 또는 도시를 검색하세요 (예: 일본, 도쿄)"
            className="w-full bg-transparent text-sm text-slate-700 outline-none"
          />
        </label>
        <Button className="h-11 rounded-xl px-6">검색</Button>
      </div>
    </div>
  );
}
