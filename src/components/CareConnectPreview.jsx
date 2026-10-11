

/**
 * Components
 */
import Icon from './Icon';

// Illustrative mockup, not a screenshot: the CareConnect repository has no screenshots.
// The sample conversation is invented for the preview and hidden from assistive tech.

const appointment = [
    { label: 'Name', done: true },
    { label: 'Email', done: true },
    { label: 'Date', done: true },
    { label: 'Time', done: false }
];

const messages = [
    { fromUser: true, text: 'I want to book an appointment.' },
    { text: 'Sure. Which date works for you?' },
    { fromUser: true, text: 'Next Monday, in the morning.' },
    { text: 'Noted. I will email a confirmation once the time is set.' },
    { fromUser: true, text: 'What does my report say about follow-ups?' },
    { text: 'Answering from your uploaded document.', source: 'medical-info.pdf' }
];

const CareConnectPreview = () => {
  return (
    <div
        role="img"
        aria-label="Illustrative preview of the CareConnect interface: a booking conversation, the appointment details collected so far, and a question answered from an uploaded PDF"
        className="h-full"
    >
        <div
            aria-hidden="true"
            className="h-full flex flex-col text-[11px] leading-snug"
        >

            <div className="flex items-center gap-3 h-9 px-4 border-b border-line shrink-0">
                <span className="w-2 h-2 rounded-full bg-[var(--tone)]"></span>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">CareConnect / chat</span>

                {/* Pulse line: the healthcare motif */}
                <svg
                    viewBox="0 0 120 24"
                    className="w-24 h-5 ml-auto"
                    fill="none"
                    stroke="var(--tone)"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                >
                    <path d="M0 12h34l5-8 7 16 6-12 4 4h64" />
                </svg>
            </div>

            <div className="flex flex-1 min-h-0">

                <div className="hidden w-[30%] shrink-0 flex-col gap-2 p-4 border-r border-line sm:flex">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Documents</p>

                    <p className="px-2 py-1.5 font-mono text-[10px] text-muted border border-line rounded truncate">
                        medical-info.pdf
                    </p>

                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Appointment</p>

                    {appointment.map(({ label, done }, key) => (
                        <p
                            key={key}
                            className="flex items-center justify-between pb-1.5 border-b border-line"
                        >
                            {label}

                            <span className={'font-mono text-[10px] ' + (done ? 'text-emerald-400' : 'text-muted')}>
                                {done ? 'collected' : 'pending'}
                            </span>
                        </p>
                    ))}
                </div>

                <div className="flex flex-col justify-end gap-2 flex-1 min-w-0 p-4 overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none">
                    {messages.map(({ fromUser, text, source }, key) => (
                        <p
                            key={key}
                            className={'max-w-[85%] px-3 py-2 rounded-lg ' + (fromUser ? 'self-end bg-accent font-medium text-background' : 'self-start bg-background border border-line')}
                        >
                            {text}

                            {source &&
                                <span className="block mt-1 font-mono text-[9px] text-muted">
                                    Source: {source}
                                </span>
                            }
                        </p>
                    ))}

                    <p className="flex items-center justify-between gap-2 mt-1 px-3 py-2 text-muted bg-background border border-line rounded-lg">
                        Ask a question or book an appointment

                        <Icon name="arrow_forward" />
                    </p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default CareConnectPreview
