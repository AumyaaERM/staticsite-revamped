import React from "react"
import { BRAND_YELLOW } from "../theme"
import type { AnswerValue, Question, ScaleValue } from "../../../types/assessment"

interface QuestionCardProps {
	question: Question
	value: AnswerValue | ScaleValue | undefined
	onChange: (value: AnswerValue | ScaleValue) => void
}

const BOOLEAN_OPTIONS: AnswerValue[] = ["Yes", "No", "Not Applicable"]

const PILL_BASE =
	"rounded-full border px-4 py-1.5 text-sm font-semibold transition"
const PILL_INACTIVE =
	"border-gray-300 bg-white text-black hover:border-gray-400"

// Inline styles guarantee the brand colors render even if Tailwind's content
// scanner does not pick up class names from this file.
const ACTIVE_STYLE = {
	backgroundColor: BRAND_YELLOW,
	borderColor: BRAND_YELLOW,
	color: "#ffffff",
} as const

export function QuestionCard({ question, value, onChange }: QuestionCardProps) {
	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
			<div className="flex items-start gap-2">
				<p className="flex-1 text-[15px] font-medium text-gray-800">
					{question.text}
				</p>
				{question.hoverText ? (
					<span
						title={question.hoverText}
						className="mt-0.5 flex h-5 w-5 shrink-0 cursor-help items-center justify-center rounded-full border border-gray-300 text-xs text-gray-500"
					>
						i
					</span>
				) : null}
			</div>
			{question.helpText ? (
				<p className="mt-1 text-xs italic text-gray-400">{question.helpText}</p>
			) : null}

			{question.type === "boolean" ? (
				<div className="mt-4 flex flex-wrap gap-2">
					{BOOLEAN_OPTIONS.map((opt) => {
						const active = value === opt
						return (
							<button
								key={opt}
								type="button"
								onClick={() => onChange(opt)}
								className={active ? PILL_BASE : `${PILL_BASE} ${PILL_INACTIVE}`}
								style={active ? ACTIVE_STYLE : undefined}
							>
								{opt}
							</button>
						)
					})}
				</div>
			) : (
				<div className="mt-4 flex flex-wrap gap-2">
					{question.options.map((opt) => {
						const active = value === opt.value
						return (
							<button
								key={opt.value}
								type="button"
								onClick={() => onChange(opt.value)}
								className={active ? PILL_BASE : `${PILL_BASE} ${PILL_INACTIVE}`}
								style={active ? ACTIVE_STYLE : undefined}
							>
								{opt.label}
							</button>
						)
					})}
				</div>
			)}
		</div>
	)
}