import { QuestionCard } from "./QuestionCard"
import type {
	AnswerValue,
	AssessmentAnswers,
	Question,
	ScaleValue,
} from "../../../types/assessment"

interface SectionStepProps {
	questions: Question[]
	answers: AssessmentAnswers
	onAnswer: (id: string, value: AnswerValue | ScaleValue) => void
}

export function SectionStep({ questions, answers, onAnswer }: SectionStepProps) {
	return (
		<div className="space-y-4">
			{questions.map((q) => (
				<QuestionCard
					key={q.id}
					question={q}
					value={answers[q.id]}
					onChange={(v) => onAnswer(q.id, v)}
				/>
			))}
		</div>
	)
}
