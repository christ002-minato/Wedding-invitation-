interface FloralDividerProps {
  variant?: "default" | "thin" | "ornate";
}

export function FloralDivider({ variant = "default" }: FloralDividerProps) {
  if (variant === "thin") {
    return (
      <div className="flex items-center justify-center gap-4 my-8">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--orange)]/30 to-[var(--orange)]/30" />
        <span className="text-[var(--orange)] text-xs">✦</span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[var(--orange)]/30 to-[var(--orange)]/30" />
      </div>
    );
  }

  if (variant === "ornate") {
    return (
      <div className="flex items-center justify-center gap-4 my-12">
        <div className="flex items-center gap-2">
          <span className="text-[var(--orange)]/40 text-sm">❀</span>
          <div className="h-[2px] w-12 bg-gradient-to-r from-[var(--orange)]/40 to-[var(--orange)]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--orange)] text-lg">✦</span>
          <span className="text-[var(--orange-light)] text-base">❁</span>
          <span className="text-[var(--orange)] text-lg">✦</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-[2px] w-12 bg-gradient-to-l from-[var(--orange)]/40 to-[var(--orange)]" />
          <span className="text-[var(--orange)]/40 text-sm">❀</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4 my-10">
      <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[var(--orange)]" />
      <div className="flex items-center gap-2">
        <span className="text-[var(--orange)]/60 text-sm">✦</span>
        <span className="text-[var(--orange)] text-base">❀</span>
        <span className="text-[var(--orange)]/60 text-sm">✦</span>
      </div>
      <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[var(--orange)]" />
    </div>
  );
}
