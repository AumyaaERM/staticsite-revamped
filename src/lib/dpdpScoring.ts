import {
	dpdpQuestions,
	APPLICABILITY_QUESTION_IDS,
	READINESS_QUESTION_IDS,
} from "../data/dpdpAssessment/questions"
import type {
	Applicability,
	AssessmentAnswers,
	AssessmentResult,
	ExposureRating,
	ScoringOptions,
} from "../types/assessment"

// Static report copy, taken verbatim from the "Report" tab (B13).
const CAN_FIRM_HELP =
	"Yes - Gap Assessment, Readiness Program, Data Mapping, Consent Management, Vendor Review, DPO Support, Audit Readiness."

// Assessment!I4 -> "Applicable" if ANY applicability question is "Yes".
export function computeApplicability(
	answers: AssessmentAnswers,
): Applicability {
	const anyYes = APPLICABILITY_QUESTION_IDS.some((id) => answers[id] === "Yes")
	return anyYes ? "Applicable" : "Needs further review"
}

// Assessment!I3 -> SUMPRODUCT((C="Yes")*(D)).
// The sheet keys purely on the literal "Yes", so:
//   - every boolean "Yes" adds its weight (incl. readiness questions, per spec)
//   - the scale question is added separately (its answer is never "Yes"),
//     gated by includeScaleInExposure for exact sheet parity when needed.
export function computeExposureScore(
	answers: AssessmentAnswers,
	options: ScoringOptions = {},
): number {
	const { includeScaleInExposure = true } = options
	let score = 0
	for (const q of dpdpQuestions) {
		if (q.type === "boolean") {
			if (answers[q.id] === "Yes") {
				score += q.weight
			}
		} else if (q.type === "scale" && includeScaleInExposure) {
			const selected = q.options.find((o) => o.value === answers[q.id])
			if (selected) {
				score += selected.weight
			}
		}
	}
	return score
}

// Assessment!I6 -> COUNTIF(readiness, "Yes") * 10 (max 90 by design).
export function computeReadinessScore(answers: AssessmentAnswers): number {
	const yesCount = READINESS_QUESTION_IDS.filter(
		(id) => answers[id] === "Yes",
	).length
	return yesCount * 10
}

// Assessment!I5 -> banding on the exposure score.
export function computeExposureRating(score: number): ExposureRating {
	if (score >= 90) return "Very High"
	if (score >= 60) return "High"
	if (score >= 30) return "Medium"
	return "Low"
}

// Report!B9
function howExposedFrom(rating: ExposureRating): string {
	if (rating === "Very High") return "Significant regulatory exposure"
	if (rating === "High") return "Material exposure"
	return "Moderate/Low exposure"
}

// Report!B11
function whatNextFrom(readinessScore: number): string {
	return readinessScore < 50
		? "Conduct DPDPA Gap Assessment, Data Mapping, Consent Review and Vendor Assessment"
		: "Advance to implementation and audit readiness"
}

// Full report, mirroring the "Report" tab.
export function scoreAssessment(
	answers: AssessmentAnswers,
	options: ScoringOptions = {},
): AssessmentResult {
	const exposureScore = computeExposureScore(answers, options)
	const exposureRating = computeExposureRating(exposureScore)
	const readinessScore = computeReadinessScore(answers)
	return {
		applicability: computeApplicability(answers),
		exposureScore,
		exposureRating,
		readinessScore,
		howExposed: howExposedFrom(exposureRating),
		whatNext: whatNextFrom(readinessScore),
		canFirmHelp: CAN_FIRM_HELP,
	}
}

// Maximum achievable exposure score. Used to scale the report gauge.
export function getMaxExposureScore(options: ScoringOptions = {}): number {
	const { includeScaleInExposure = true } = options
	let max = 0
	for (const q of dpdpQuestions) {
		if (q.type === "boolean") {
			max += q.weight
		} else if (q.type === "scale" && includeScaleInExposure) {
			max += Math.max(...q.options.map((o) => o.weight))
		}
	}
	return max
}
