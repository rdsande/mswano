export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-md border border-black/10 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-mswano-secondary">
      {children}
    </span>
  );
}
