const deposit = "/deposit-bonus.jpg";
const salary = "/daily-salary.jpg";
const jackpot = "/referral-jackpot.jpg";
const wingoHistory = "/wingo-history.jpg";
const wingoWin = "/wingo-win.jpg";
const congrats = "/congratulations.jpg";

export const refImages = {
  deposit,
  salary,
  jackpot,
  wingoHistory,
  wingoWin,
  congrats,
};

interface FigProps {
  src: string;
  alt: string;
  caption?: string;
}

export function Figure({ src, alt, caption }: FigProps) {
  return (
    <figure className="my-8">
      <div className="rounded-xl overflow-hidden border border-border bg-surface shadow-sm">
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto" />
      </div>
      {caption && (
        <figcaption className="text-xs text-muted-foreground text-center mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
