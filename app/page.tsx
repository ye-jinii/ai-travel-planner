import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <AppShell>
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          AI Plan Project
        </h1>
        <p className="mx-auto max-w-md text-sm text-slate-600">
          Next.js + TypeScript + Tailwind CSS + shadcn/ui + TanStack Query v5
        </p>
        <Button>시작하기</Button>
      </div>
    </AppShell>
  );
}

