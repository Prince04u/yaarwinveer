import deposit from "@/assets/deposit-bonus.jpg.asset.json";
import salary from "@/assets/daily-salary.jpg.asset.json";
import jackpot from "@/assets/referral-jackpot.jpg.asset.json";
import wingoHistory from "@/assets/wingo-history.jpg.asset.json";
import wingoWin from "@/assets/wingo-win.jpg.asset.json";
import congrats from "@/assets/congratulations.jpg.asset.json";

export const refImages = {
  deposit: deposit.url,
  salary: salary.url,
  jackpot: jackpot.url,
  wingoHistory: wingoHistory.url,
  wingoWin: wingoWin.url,
  congrats: congrats.url,
};

interface FigProps { src: string; alt: string; caption?: string; }
export function Figure({ src, alt, caption }: FigProps) {
  return (
    <figure className="my-8">
      <div className="rounded-xl overflow-hidden border border-border bg-surface shadow-sm">
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto" />
      </div>
      {caption && <figcaption className="text-xs text-muted-foreground text-center mt-2 italic">{caption}</figcaption>}
    </figure>
  );
}
