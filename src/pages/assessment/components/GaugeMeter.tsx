import React from "react"
import { headingFont } from "../theme"
import type { ExposureRating } from "../../../types/assessment"

interface GaugeMeterProps {
	score: number
	max: number
	rating: ExposureRating
}

const RATING_COLOR: Record<ExposureRating, string> = {
	Low: "#16a34a",
	Medium: "#f59e0b",
	High: "#f97316",
	"Very High": "#dc2626",
}

function polar(cx: number, cy: number, r: number, angleDeg: number) {
	const a = (angleDeg * Math.PI) / 180
	return { x: cx + r * Math.cos(a), y: cy - r * Math.sin(a) }
}

function arcPath(
	cx: number,
	cy: number,
	r: number,
	startAngle: number,
	endAngle: number,
) {
	const start = polar(cx, cy, r, startAngle)
	const end = polar(cx, cy, r, endAngle)
	const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0
	return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`
}

export function GaugeMeter({ score, max, rating }: GaugeMeterProps) {
	const cx = 130
	const cy = 130
	const r = 100
	const fraction = max > 0 ? Math.min(Math.max(score / max, 0), 1) : 0
	const needleAngle = 180 - fraction * 180
	const needle = polar(cx, cy, r - 16, needleAngle)
	const color = RATING_COLOR[rating]

	const scoreStyle = { color } as const
	const ratingStyle = { ...headingFont, color } as const

	return (
		<div className="flex flex-col items-center">
			<svg viewBox="0 0 260 160" className="w-full max-w-[260px]">
				<defs>
					<linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#16a34a" />
						<stop offset="40%" stopColor="#f59e0b" />
						<stop offset="70%" stopColor="#f97316" />
						<stop offset="100%" stopColor="#dc2626" />
					</linearGradient>
				</defs>
				<path
					d={arcPath(cx, cy, r, 180, 0)}
					fill="none"
					stroke="#eeeeee"
					strokeWidth={22}
					strokeLinecap="round"
				/>
				<path
					d={arcPath(cx, cy, r, 180, 0)}
					fill="none"
					stroke="url(#gaugeGradient)"
					strokeWidth={22}
					strokeLinecap="round"
				/>
				<line
					x1={cx}
					y1={cy}
					x2={needle.x}
					y2={needle.y}
					stroke="#111111"
					strokeWidth={5}
					strokeLinecap="round"
				/>
				<circle cx={cx} cy={cy} r={9} fill="#111111" />
			</svg>
			<div className="-mt-6 text-center">
				<div className="text-5xl font-extrabold" style={scoreStyle}>
					{score}
				</div>
				<div
					className="mt-1 text-sm font-bold tracking-wide"
					style={ratingStyle}
				>
					{rating.toUpperCase()} RISK
				</div>
			</div>
		</div>
	)
}
