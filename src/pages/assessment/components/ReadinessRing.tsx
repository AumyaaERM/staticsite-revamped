import React from "react"
import { headingFont } from "../theme"

interface ReadinessRingProps {
	percent: number
}

function bandFor(percent: number) {
	if (percent >= 80) return { label: "Compliance Ready", color: "#16a34a" }
	if (percent >= 50) return { label: "Developing", color: "#f59e0b" }
	return { label: "Critically Vulnerable", color: "#dc2626" }
}

export function ReadinessRing({ percent }: ReadinessRingProps) {
	const r = 78
	const circ = 2 * Math.PI * r
	const clamped = Math.min(Math.max(percent, 0), 100)
	const offset = circ * (1 - clamped / 100)
	const band = bandFor(clamped)

	const percentTextStyle = { fill: band.color, fontWeight: 800 } as const
	const labelStyle = { ...headingFont, color: band.color } as const

	return (
		<div className="flex flex-col items-center">
			<svg viewBox="0 0 200 200" className="w-full max-w-[190px]">
				<circle
					cx={100}
					cy={100}
					r={r}
					fill="none"
					stroke="#eeeeee"
					strokeWidth={18}
				/>
				<circle
					cx={100}
					cy={100}
					r={r}
					fill="none"
					stroke={band.color}
					strokeWidth={18}
					strokeLinecap="round"
					strokeDasharray={circ}
					strokeDashoffset={offset}
					transform="rotate(-90 100 100)"
				/>
				<text
					x={100}
					y={112}
					textAnchor="middle"
					fontSize={44}
					style={percentTextStyle}
				>
					{clamped}%
				</text>
			</svg>
			<div className="mt-1 text-sm font-bold tracking-wide" style={labelStyle}>
				{band.label}
			</div>
		</div>
	)
}
