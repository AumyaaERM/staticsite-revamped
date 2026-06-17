import React from "react"
import { BRAND_YELLOW, headingFont } from "../theme"

interface ProgressStepperProps {
	phases: string[]
	activePhase: number
}

const ACTIVE_CIRCLE_STYLE = {
	backgroundColor: BRAND_YELLOW,
	color: "#111111",
} as const

export function ProgressStepper({ phases, activePhase }: ProgressStepperProps) {
	return (
		<div className="flex items-center justify-center gap-2 sm:gap-4">
			{phases.map((label, i) => {
				const reached = i <= activePhase
				const done = i < activePhase
				const circleCls =
					"flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold " +
					(reached ? "" : "bg-gray-200 text-gray-500")
				const labelCls =
					"hidden text-sm font-semibold sm:inline " +
					(i === activePhase ? "text-gray-900" : "text-gray-500")
				return (
					<React.Fragment key={label}>
						<div className="flex items-center gap-2">
							<span
								className={circleCls}
								style={reached ? ACTIVE_CIRCLE_STYLE : undefined}
							>
								{done ? "\u2713" : i + 1}
							</span>
							<span
								className={labelCls}
								style={i === activePhase ? headingFont : undefined}
							>
								{label}
							</span>
						</div>
						{i < phases.length - 1 ? (
							<span className="h-px w-6 bg-gray-300 sm:w-10" />
						) : null}
					</React.Fragment>
				)
			})}
		</div>
	)
}
