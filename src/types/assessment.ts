export type AnswerValue = "Yes" | "No" | "Not Applicable"

export type ScaleValue = "<10k" | "10k-100k" | ">100k"

export type QuestionCategory = "Applicability" | "Exposure" | "Readiness"

export type SectionName =
	| "Applicability"
	| "Nature of Data Processed"
	| "Scale and Criticality"
	| "Data Sharing and Transfer"
	| "Compliance Readiness"

export type QuestionType = "boolean" | "scale"

interface BaseQuestion {
	id: string
	section: SectionName
	category: QuestionCategory
	text: string
	type: QuestionType
	/** Short tooltip shown on hover next to the question. */
	hoverText?: string
	/** Inline helper / example text shown under the question. */
	helpText?: string
}

export interface BooleanQuestion extends BaseQuestion {
	type: "boolean"
	/** Weight added to the exposure score when answered "Yes". */
	weight: number
}

export interface ScaleOption {
	value: ScaleValue
	label: string
	weight: number
}

export interface ScaleQuestion extends BaseQuestion {
	type: "scale"
	options: ScaleOption[]
}

export type Question = BooleanQuestion | ScaleQuestion
/** A user's answers, keyed by question id. */
export interface AssessmentAnswers {
	[questionId: string]: AnswerValue | ScaleValue | undefined
}

export type Applicability = "Applicable" | "Needs further review"

export type ExposureRating = "Very High" | "High" | "Medium" | "Low"

export interface AssessmentResult {
	applicability: Applicability
	exposureScore: number
	exposureRating: ExposureRating
	/** Percentage, 0-90 in sheet-parity mode (9 questions x 10). */
	readinessScore: number
	howExposed: string
	whatNext: string
	canFirmHelp: string
}

export interface ScoringOptions {
	/**
	 * Whether the Scale & Criticality question contributes its selected
	 * option weight to the exposure score.
	 * - true  (default): honours Aumyaa's intent that scale is an exposure factor.
	 * - false: exact parity with the current SharePoint sheet (scale ignored).
	 */
	includeScaleInExposure?: boolean
}
