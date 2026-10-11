

const images = '/Manideep - Portfolio Images/images/';

// Screenshots published in the Qmaster repository README, shown close to their original size.
const screens = [
    {
      src: images + 'qmaster-join.jpg',
      alt: 'Qmaster mobile app: form to join the queue',
      pose: '-rotate-6 translate-y-2 group-hover:-translate-x-2'
    },
    {
      src: images + 'qmaster-status.jpg',
      alt: 'Qmaster mobile app: token, position and estimated wait',
      pose: 'z-10 scale-105'
    },
    {
      src: images + 'qmaster-admin.jpg',
      alt: 'Qmaster admin dashboard: active queue with serve and skip actions, and the served tokens log',
      pose: 'rotate-6 translate-y-2 group-hover:translate-x-2'
    }
];

// Sample data for the illustrative dashboard panel; not figures from the real application.
const stats = [
    { label: 'Waiting', value: '4' },
    { label: 'Est. wait', value: '8 min' }
];

const queue = ['T12', 'T13', 'T14', 'T15', 'T16'];

const QmasterPreview = () => {
  return (
    <div className="h-full flex">

        <div className="flex items-center justify-center flex-1 min-w-0 p-5">
            {screens.map(({ src, alt, pose }, key) => (
                <img
                    key={key}
                    src={src}
                    alt={alt}
                    width={277}
                    height={600}
                    loading="lazy"
                    className={'h-[80%] w-auto -mx-4 rounded-lg border border-line shadow-2xl shadow-black/60 transition-transform duration-500 motion-reduce:transition-none sm:h-[58%] sm:-mx-2 ' + pose}
                />
            ))}
        </div>

        <div
            role="img"
            aria-label="Illustrative queue dashboard with sample data: queue open, one token being served, four people waiting and an estimated wait"
            className="hidden w-[40%] shrink-0 bg-background/60 border-l border-line sm:block"
        >
            <div
                aria-hidden="true"
                className="h-full flex flex-col justify-center gap-4 p-5"
            >

                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse"></span>

                        Queue open
                    </span>

                    <span>Sample</span>
                </div>

                <div className="p-4 bg-surface border border-line rounded-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Now serving</p>

                    <p className="mt-1 font-display text-4xl font-bold text-[color:var(--tone)]">T12</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {stats.map(({ label, value }, key) => (
                        <div
                            key={key}
                            className="p-3 bg-surface border border-line rounded-xl"
                        >
                            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">{label}</p>

                            <p className="mt-1 text-lg font-semibold">{value}</p>
                        </div>
                    ))}
                </div>

                <div className="flex gap-1.5">
                    {queue.map((token, key) => (
                        <span
                            key={key}
                            className={'flex-1 py-1.5 font-mono text-[10px] text-center rounded-md border ' + (key ? 'text-muted border-line' : 'text-background bg-[var(--tone)] border-transparent')}
                        >
                            {token}
                        </span>
                    ))}
                </div>

            </div>
        </div>

    </div>
  )
}

export default QmasterPreview
