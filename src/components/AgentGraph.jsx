

// Conceptual illustration only: an orchestrator coordinating specialised agents.
// It is not a diagram of any one project.
const agents = ['Reasoning', 'Retrieval', 'Tools', 'Memory', 'Execution'];

const CENTER = 280;
const RADIUS = 200;

const nodes = agents.map((label, i) => {
    const angle = (-90 + i * 72) * Math.PI / 180;

    return {
      label,
      x: CENTER + RADIUS * Math.cos(angle),
      y: CENTER + RADIUS * Math.sin(angle)
    };
});

const description = 'Conceptual diagram: a central orchestrator connected to five specialised agents for reasoning, retrieval, tools, memory and execution';

/**
 * Desktop: a radial node graph with dashes flowing along each connection.
 * Below lg the same idea is re-laid as a vertical tree instead of being scaled down.
 */
const AgentGraph = () => {
  return (
    <>
        <svg
            viewBox="0 0 560 560"
            role="img"
            aria-label={description}
            fill="none"
            className="hidden absolute -z-10 top-[15%] right-[2%] w-[min(42vw,560px)] font-mono lg:block"
        >
            {/* Orbits and the ring linking neighbouring agents */}
            <g className="graph-line">
                <circle cx={CENTER} cy={CENTER} r={RADIUS} stroke="#1B2230" />
                <circle cx={CENTER} cy={CENTER} r="118" stroke="#1B2230" strokeDasharray="2 8" />
                <polygon
                    points={nodes.map(({ x, y }) => x + ',' + y).join(' ')}
                    stroke="#A78BFA"
                    strokeOpacity="0.3"
                    strokeDasharray="3 7"
                />
            </g>

            {/* Connections: a quiet base line with dashes travelling over it */}
            <g className="graph-line">
                {nodes.map(({ x, y }, key) => (
                    <g key={key}>
                        <line x1={CENTER} y1={CENTER} x2={x} y2={y} stroke="#334155" />

                        <line
                            x1={CENTER}
                            y1={CENTER}
                            x2={x}
                            y2={y}
                            stroke="#22D3EE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            className={'flow ' + (key % 2 ? 'flow-in' : '')}
                            style={{ animationDelay: key * -0.4 + 's' }}
                        />
                    </g>
                ))}
            </g>

            {/* Orchestrator */}
            <g className="graph-node">
                <circle cx={CENTER} cy={CENTER} r="62" fill="#05070B" stroke="#22D3EE" strokeOpacity="0.35" />
                <circle cx={CENTER} cy={CENTER} r="52" stroke="#22D3EE" strokeDasharray="3 9" className="spin-slow" />
                <circle cx={CENTER} cy={CENTER - 12} r="5" fill="#22D3EE" />
                <text x={CENTER} y={CENTER + 14} textAnchor="middle" fill="#F1F5F9" fontSize="10" letterSpacing="1.5">ORCHESTRATOR</text>
            </g>

            {/* Agents */}
            {nodes.map(({ label, x, y }, key) => (
                <g
                    key={key}
                    className="graph-node"
                >
                    <rect x={x - 62} y={y - 19} width="124" height="38" rx="19" fill="#0A0E15" stroke="#334155" />
                    <circle cx={x - 44} cy={y} r="3.5" fill={key % 2 ? '#A78BFA' : '#22D3EE'} />
                    <text x={x - 33} y={y + 3.5} fill="#CBD5E1" fontSize="10" letterSpacing="1.5">{label.toUpperCase()}</text>
                </g>
            ))}
        </svg>

        <div
            role="img"
            aria-label={description}
            className="stage mt-12 p-5 lg:hidden"
        >
            <div aria-hidden="true">
                <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
                    <span className="w-[19px] h-[19px] grid place-items-center border border-accent rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    </span>

                    Orchestrator
                </p>

                <ul className="grid gap-3 ml-[9px] pt-4 pl-6 border-l border-dashed border-accent/50 sm:grid-cols-2">
                    {agents.map((label, key) => (
                        <li
                            key={key}
                            className="relative flex items-center gap-3 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-slate-300 bg-background border border-line rounded-full"
                        >
                            <span className="absolute right-full w-6 border-t border-dashed border-accent/50 sm:hidden"></span>

                            <span className={'w-1.5 h-1.5 rounded-full ' + (key % 2 ? 'bg-violet-400' : 'bg-accent')}></span>

                            {label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}

export default AgentGraph
