import React, { useState } from "react"
import { BRAND_YELLOW, headingFont } from "../theme"
import type { LeadDetails } from "../../../lib/submitLead"

interface RegistrationStepProps {
	initial: LeadDetails
	onComplete: (lead: LeadDetails) => void
}

const EMPLOYEE_OPTIONS = ["1-10", "11-50", "51-200", "201-1000", "1000+"]
const INDUSTRY_OPTIONS = [
	"IT / SaaS",
	"E-commerce / Retail",
	"Healthcare / Pharma",
	"BFSI (Banking / Finance / Insurance)",
	"Education / EdTech",
	"Manufacturing",
	"Media / Advertising",
	"Other",
]
const SERVICE_OPTIONS = [
	"DPDP Gap Assessment",
	"Data Mapping",
	"Consent Management",
	"Vendor / Third-Party Review",
	"DPO as a Service",
	"Audit Readiness",
	"Not sure yet",
]
const BLOCKED_EMAIL_DOMAINS = [
	"gmail.com",
	"yahoo.com",
	"hotmail.com",
	"outlook.com",
	"icloud.com",
	"aol.com",
	"proton.me",
	"protonmail.com",
	"rediffmail.com",
]

// Accepts any properly-formatted email on any business domain (any TLD).
// Free / personal providers are still rejected so leads are work emails.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function isWorkEmail(email: string): boolean {
	const value = email.trim().toLowerCase()
	if (!EMAIL_REGEX.test(value)) return false
	const domain = value.slice(value.lastIndexOf("@") + 1)
	return !BLOCKED_EMAIL_DOMAINS.includes(domain)
}

const INPUT_CLS =
	"w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-gray-800"
const LABEL_CLS = "mb-1 block text-xs font-semibold text-gray-600"
const ERR_CLS = "mt-1 text-xs text-red-500"

export function RegistrationStep({ initial, onComplete }: RegistrationStepProps) {
	const [form, setForm] = useState<LeadDetails>(initial)
	const [consent, setConsent] = useState(false)
	const [errors, setErrors] = useState<Record<string, string>>({})

	const submitStyle = { backgroundColor: BRAND_YELLOW, color: "#111111" } as const

	function update(field: keyof LeadDetails, value: string) {
		setForm((prev) => ({ ...prev, [field]: value }))
	}

	function validate(): boolean {
		const next: Record<string, string> = {}
		if (!form.name.trim()) next.name = "Please enter your full name."
		if (!form.designation.trim())
			next.designation = "Please enter your designation."
		if (!form.company.trim())
			next.company = "Please enter your organisation name."
		if (!form.email.trim()) next.email = "Please enter your email."
		else if (!isWorkEmail(form.email))
			next.email = "Please use a work email (personal domains aren't accepted)."
		if (!form.phone.trim()) next.phone = "Please enter your phone number."
		if (!form.industry) next.industry = "Please select your industry."
		if (!form.employeeCount) next.employeeCount = "Please select your team size."
		if (!form.interestedService)
			next.interestedService = "Please choose a service."
		if (!consent) next.consent = "Please accept to continue."
		setErrors(next)
		return Object.keys(next).length === 0
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		if (validate()) onComplete(form)
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div>
				<h2
					className="text-xl font-bold text-gray-900"
					style={headingFont}
				>
					Tell us about your organisation
				</h2>
				<p className="mt-1 text-sm text-gray-500">
					We'll use these details to tailor and generate your compliance report.
				</p>
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				<div>
					<label className={LABEL_CLS}>Full name *</label>
					<input
						className={INPUT_CLS}
						value={form.name}
						onChange={(e) => update("name", e.target.value)}
						placeholder="Your full name"
					/>
					{errors.name ? <p className={ERR_CLS}>{errors.name}</p> : null}
				</div>
				<div>
					<label className={LABEL_CLS}>Designation *</label>
					<input
						className={INPUT_CLS}
						value={form.designation}
						onChange={(e) => update("designation", e.target.value)}
						placeholder="Compliance Lead"
					/>
					{errors.designation ? (
						<p className={ERR_CLS}>{errors.designation}</p>
					) : null}
				</div>
				<div>
					<label className={LABEL_CLS}>Work email *</label>
					<input
						className={INPUT_CLS}
						type="email"
						value={form.email}
						onChange={(e) => update("email", e.target.value)}
						placeholder="you@company.com"
					/>
					{errors.email ? <p className={ERR_CLS}>{errors.email}</p> : null}
				</div>
				<div>
					<label className={LABEL_CLS}>Phone *</label>
					<input
						className={INPUT_CLS}
						value={form.phone}
						onChange={(e) => update("phone", e.target.value)}
						placeholder="+91 "
					/>
					{errors.phone ? <p className={ERR_CLS}>{errors.phone}</p> : null}
				</div>
				<div>
					<label className={LABEL_CLS}>Organisation name *</label>
					<input
						className={INPUT_CLS}
						value={form.company}
						onChange={(e) => update("company", e.target.value)}
						placeholder="Aumyaa Pvt. Ltd."
					/>
					{errors.company ? <p className={ERR_CLS}>{errors.company}</p> : null}
				</div>
				<div>
					<label className={LABEL_CLS}>Website</label>
					<input
						className={INPUT_CLS}
						value={form.website}
						onChange={(e) => update("website", e.target.value)}
						placeholder="company.com"
					/>
				</div>
				<div>
					<label className={LABEL_CLS}>Industry *</label>
					<select
						className={INPUT_CLS}
						value={form.industry}
						onChange={(e) => update("industry", e.target.value)}
					>
						<option value="">Select industry</option>
						{INDUSTRY_OPTIONS.map((opt) => (
							<option key={opt} value={opt}>
								{opt}
							</option>
						))}
					</select>
					{errors.industry ? <p className={ERR_CLS}>{errors.industry}</p> : null}
				</div>
				<div>
					<label className={LABEL_CLS}>Number of employees *</label>
					<select
						className={INPUT_CLS}
						value={form.employeeCount}
						onChange={(e) => update("employeeCount", e.target.value)}
					>
						<option value="">Select team size</option>
						{EMPLOYEE_OPTIONS.map((opt) => (
							<option key={opt} value={opt}>
								{opt}
							</option>
						))}
					</select>
					{errors.employeeCount ? (
						<p className={ERR_CLS}>{errors.employeeCount}</p>
					) : null}
				</div>
				<div className="sm:col-span-2">
					<label className={LABEL_CLS}>Service you're interested in *</label>
					<select
						className={INPUT_CLS}
						value={form.interestedService}
						onChange={(e) => update("interestedService", e.target.value)}
					>
						<option value="">Select a service</option>
						{SERVICE_OPTIONS.map((opt) => (
							<option key={opt} value={opt}>
								{opt}
							</option>
						))}
					</select>
					{errors.interestedService ? (
						<p className={ERR_CLS}>{errors.interestedService}</p>
					) : null}
				</div>
			</div>

			<label className="flex items-start gap-2 text-xs text-gray-500">
				<input
					type="checkbox"
					className="mt-0.5"
					checked={consent}
					onChange={(e) => setConsent(e.target.checked)}
				/>
				<span>
					I agree to be contacted by Aumyaa about my assessment and consent to
					my details being processed for this purpose.
				</span>
			</label>
			{errors.consent ? <p className={ERR_CLS}>{errors.consent}</p> : null}

			<button
				type="submit"
				className="w-full rounded-lg py-3 text-sm font-bold transition hover:brightness-95"
				style={submitStyle}
			>
				Start Assessment →
			</button>
		</form>
	)
}