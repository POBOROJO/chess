import { NumberTicker } from "@/components/ui/number-ticker";

const Statistics = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 tracking-tight">
              <NumberTicker value={500} className="text-emerald-400" />+
            </div>
            <div className="font-body text-slate-300 font-light tracking-wide text-base sm:text-lg">
              Students Taught
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 tracking-tight">
              <NumberTicker
                value={10000}
                delay={0.2}
                className="text-emerald-400"
              />
              +
            </div>
            <div className="font-body text-slate-300 font-light tracking-wide text-base sm:text-lg">
              Classes Conducted
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 tracking-tight">
              <NumberTicker
                value={6}
                delay={0.4}
                className="text-emerald-400"
              />
              +
            </div>
            <div className="font-body text-slate-300 font-light tracking-wide text-base sm:text-lg">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
