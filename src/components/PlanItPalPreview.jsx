

const days = ['Day 1', 'Day 2', 'Day 3'];

// A real screenshot from the repository README, set in a drawn browser frame.
// The route line beside it is decoration, outside the screenshot.
const PlanItPalPreview = () => {
  return (
    <div className="relative h-full">

        <div
            aria-hidden="true"
            className="absolute top-[14%] bottom-[10%] left-[7%] flex flex-col justify-between border-l border-dashed border-[color:var(--tone)]"
        >
            {days.map((day, key) => (
                <p
                    key={key}
                    className="flex items-center gap-2 -ml-[5px] font-mono text-[10px] uppercase tracking-[0.15em] text-muted"
                >
                    <span className="w-[9px] h-[9px] rounded-full bg-surface border border-[color:var(--tone)]"></span>

                    <span className="hidden sm:block">{day}</span>
                </p>
            ))}
        </div>

        <div className="absolute top-[12%] right-[-5%] bottom-[-8%] left-[16%] flex flex-col bg-background border border-line rounded-tl-xl overflow-hidden shadow-2xl shadow-black/60 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 motion-reduce:transition-none sm:left-[22%]">

            <div
                aria-hidden="true"
                className="flex items-center gap-1.5 h-7 px-3 border-b border-line shrink-0"
            >
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>

                <span className="ml-2 font-mono text-[10px] text-muted">Plan It Pal / itinerary</span>
            </div>

            <img
                src="/Manideep - Portfolio Images/images/plan-it-pal-itinerary.webp"
                alt="Plan It Pal itinerary page: hotel recommendations and day-wise places to visit, each with price, rating and a map link"
                width={1400}
                height={692}
                loading="lazy"
                className="flex-1 min-h-0 w-full object-cover object-left-top"
            />
        </div>

    </div>
  )
}

export default PlanItPalPreview
