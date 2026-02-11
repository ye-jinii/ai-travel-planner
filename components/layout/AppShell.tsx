import * as React from 'react';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur-sm">
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
