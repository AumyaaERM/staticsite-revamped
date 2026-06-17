import React, { useEffect, useMemo, useState } from "react"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { ProgressStepper } from "./components/ProgressStepper"
import { RegistrationStep } from "./components/RegistrationStep"
import { SectionStep } from "./components/SectionStep"
import { ReportView } from "./components/ReportView"
import { BRAND_YELLOW, headingFont } from "./theme"
import { dpdpQuestions, SECTION_ORDER } from "../../data/dpdpAssessment/questions"
import { getMaxExposureScore, scoreAssessment } from "../../lib/dpdpScoring"
import { buildLeadSubmission, submitLead } from "../../lib/submitLead"
import type { LeadDetails } from "../../lib/submitLead"
import type {
	AnswerValue,
	AssessmentAnswers,
	AssessmentResult,
	Question,
	ScaleValue,
} from "../../types/assessment"

const EMPTY_LEAD: LeadDetails = {
	name: "",
	company: "",
	designation: "",
	email: "",
	phone: "",
	industry: "",
	website: "",
	employeeCount: "",
	interestedService: "",
}
const STORAGE_KEY = "aumyaa.dpdp.assessment.v1"
const PHASES = ["Your details", "Assessment", "Your report"]

function progressBarStyle(index: number, total: number) {
	const pct = Math.round(((index + 1) / total) * 100)
	return { width: `${pct}%`, backgroundColor: BRAND_YELLOW } as const
}

export function DpdpAssessmentPage() {
	const [step, setStep] = useState(0)
	const [lead, setLead] = useState<LeadDetails>(EMPTY_LEAD)
	const [answers, setAnswers] = useState<AssessmentAnswers>({})
	const [result, setResult] = useState<AssessmentResult | null>(null)
	const [submitting, setSubmitting] = useState(false)

	const sectionQuestions = useMemo(
		() =>
			SECTION_ORDER.map((s) =>
				dpdpQuestions.filter((q) => q.section === s),
			) as Question[][],
		[],
	)
	const maxExposure = useMemo(() => getMaxExposureScore(), [])
	const totalSections = SECTION_ORDER.length

	useEffect(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY)
			if (raw) {
				const saved = JSON.parse(raw)
				if (saved.lead) setLead(saved.lead)
				if (saved.answers) setAnswers(saved.answers)
				if (typeof saved.step === "number") setStep(saved.step)
			}
		} catch (err) {
			/* ignore corrupt storage */
		}
	}, [])

	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify({ lead, answers, step }))
		} catch (err) {
			/* ignore */
		}
	}, [lead, answers, step])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}, [step])

	const activePhase = step === 0 ? 0 : step <= totalSections ? 1 : 2
	const sectionIndex = step - 1
	const onReport = step > totalSections && result !== null
	const isLastSection = sectionIndex === totalSections - 1
	const canContinue =
	sectionIndex >= 0 &&
	sectionIndex < totalSections &&
	sectionComplete(sectionIndex)
	const continueStyle = {
		backgroundColor: BRAND_YELLOW,
		color: "#111111",
	} as const

	function handleAnswer(id: string, value: AnswerValue | ScaleValue) {
		setAnswers((prev) => ({ ...prev, [id]: value }))
	}

	function sectionComplete(idx: number) {
		const qs = sectionQuestions[idx]
		return qs ? qs.every((q) => Boolean(answers[q.id])) : false
	}

	async function finish() {
		setSubmitting(true)
		const computed = scoreAssessment(answers)
		await submitLead(buildLeadSubmission(lead, computed))
		setResult(computed)
		setSubmitting(false)
		setStep(totalSections + 1)
	}

	function handleContinue() {
		if (sectionIndex < totalSections - 1) {
			setStep(step + 1)
		} else {
			finish()
		}
	}

	function restart() {
		setLead(EMPTY_LEAD)
		setAnswers({})
		setResult(null)
		setStep(0)
		try {
			localStorage.removeItem(STORAGE_KEY)
		} catch (err) {
			/* ignore */
		}
	}

	return (
		<div className="flex min-h-screen flex-col bg-white">
			<Navbar />
			<main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-20 pt-28 sm:pt-32">
				<div className="mb-6 text-center">
					<p
						className="text-xs font-bold tracking-widest text-gray-400"
						style={headingFont}
					>
						DPDP COMPLIANCE
					</p>
					<h1
						className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl"
						style={headingFont}
					>
						DPDP Applicability &amp; Readiness Assessment
					</h1>
				</div>

				<div className="mb-8">
					<ProgressStepper phases={PHASES} activePhase={activePhase} />
				</div>

				{step === 0 ? (
					<div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
						<RegistrationStep
							initial={lead}
							onComplete={(l) => {
								setLead(l)
								setStep(1)
							}}
						/>
					</div>
				) : null}

				{step >= 1 && step <= totalSections ? (
					<div>
						<div className="mb-4">
							<div className="flex items-center justify-between">
								<h2
									className="text-lg font-bold text-gray-900"
								style={headingFont}
							>
									{SECTION_ORDER[sectionIndex]}
								</h2>
								<span className="text-xs font-semibold text-gray-400">
									Section {sectionIndex + 1} of {totalSections}
								</span>
							</div>
							<div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
								<div
									className="h-full rounded-full"
									style={progressBarStyle(sectionIndex, totalSections)}
								/>
							</div>
						</div>

						<SectionStep
							questions={sectionQuestions[sectionIndex]}
							answers={answers}
							onAnswer={handleAnswer}
						/>

						<div className="mt-6 flex items-center justify-between">
							<button
								type="button"
								onClick={() => setStep(step - 1)}
								className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-bold text-gray-700 hover:border-gray-400"
							>
								Back
							</button>
							<button
								type="button"
								disabled={!canContinue || submitting}
								onClick={handleContinue}
								className="rounded-lg px-6 py-2.5 text-sm font-bold transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
								style={continueStyle}
							>
								{submitting
									? "Generating..."
									: isLastSection
										? "Generate report"
										: "Continue"}
							</button>
						</div>
						{!canContinue ? (
							<p className="mt-2 text-right text-xs text-gray-400">
								Please answer all questions to continue.
							</p>
						) : null}
					</div>
				) : null}

				{onReport && result ? (
					<ReportView
						result={result}
						maxExposure={maxExposure}
						onRestart={restart}
					/>
				) : null}
			</main>
			<Footer />
		</div>
	)
}
