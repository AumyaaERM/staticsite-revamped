import { Link } from "react-router-dom"
import { GaugeMeter } from "./GaugeMeter"
import { ReadinessRing } from "./ReadinessRing"
import { headingFont } from "../theme"
import type { AssessmentResult } from "../../../types/assessment"

interface ReportViewProps {
	result: AssessmentResult
	maxExposure: number
	onRestart: () => void
}

const INFO_CARDS = [
	{ icon: "\u26A0\uFE0F", title: "HOW EXPOSED AM I?", key: "howExposed" },
	{ icon: "\uD83D\uDCCB", title: "WHAT SHOULD I DO NEXT?", key: "whatNext" },
	{ icon: "\uD83D\uDC8E", title: "CAN THIS FIRM HELP ME?", key: "canFirmHelp" },
] as const

const CTA_TEXT_STYLE = { color: "#ffffff" } as const

export function ReportView({ result, maxExposure, onRestart }: ReportViewProps) {
	const applicable = result.applicability === "Applicable"
	const applicabilityStyle = applicable
		? { backgroundColor: "#dcfce7", color: "#166534" }
		: { backgroundColor: "#fef9c3", color: "#854d0e" }
	const cardText: Record<string, string> = {
		howExposed: result.howExposed,
		whatNext: result.whatNext,
		canFirmHelp: result.canFirmHelp,
	}

	return (
		<div className="space-y-6">
			<div className="text-center">
				<h2
					className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
					style={headingFont}
				>
					DPDPA Compliance Assessment: Your Risk Profile
				</h2>
				<div className="mt-3 flex justify-center">
					<span
						className="rounded-full px-4 py-1.5 text-sm font-bold"
						style={applicabilityStyle}
					>
						{applicable
							? "\u2713 DPDP Act, 2023 is APPLICABLE to your organisation"
							: "Needs further review for DPDP applicability"}
					</span>
				</div>
			</div>

			<div className="grid gap-5 md:grid-cols-2">
				<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
					<p
						className="text-center text-sm font-bold tracking-widest text-gray-500"
						style={headingFont}
					>
						EXPOSURE RATING
					</p>
					<div className="mt-4">
						<GaugeMeter
							score={result.exposureScore}
							max={maxExposure}
							rating={result.exposureRating}
						/>
					</div>
					<p className="mt-2 text-center text-xs text-gray-400">
						Score {result.exposureScore} of {maxExposure} possible exposure
						points
					</p>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
					<p
						className="text-center text-sm font-bold tracking-widest text-gray-500"
						style={headingFont}
					>
						READINESS SCORE
					</p>
					<div className="mt-4">
						<ReadinessRing percent={result.readinessScore} />
					</div>
					<p className="mt-2 text-center text-xs text-gray-400">
						Based on your current compliance controls
					</p>
				</div>
			</div>

			<div className="grid gap-5 md:grid-cols-3">
				{INFO_CARDS.map((card) => (
					<div
						key={card.key}
						className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
					>
						<div className="flex items-center gap-2">
							<span className="text-lg">{card.icon}</span>
							<h3
								className="text-sm font-bold tracking-wide text-gray-900"
								style={headingFont}
							>
								{card.title}
							</h3>
						</div>
						<p className="mt-3 text-sm leading-relaxed text-gray-600">
							{cardText[card.key]}
						</p>
					</div>
				))}
			</div>

			<div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
				<h3
					className="text-lg font-bold text-gray-900"
					style={headingFont}
				>
					Ready to act on these findings?
				</h3>
				<p className="mx-auto mt-1 max-w-xl text-sm text-gray-600">
					Our DPDP specialists can turn this snapshot into a prioritised,
					audit-ready compliance roadmap for your organisation.
				</p>
				<div className="mt-4 flex flex-wrap items-center justify-center gap-3">
					<Link
						to="/contact"
						className="rounded-lg bg-black px-6 py-3 text-sm font-bold"
						style={CTA_TEXT_STYLE}
					>
						Talk to our DPDP experts
					</Link>
					<button
						type="button"
						onClick={onRestart}
						className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-700 hover:border-gray-400"
					>
						Retake assessment
					</button>
				</div>
			</div>

			<p className="text-center text-xs text-gray-400">
				This self-assessment is indicative only and does not constitute legal
				advice.
			</p>
		</div>
	)
}
