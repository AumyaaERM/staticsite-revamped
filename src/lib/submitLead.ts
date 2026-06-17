import type { AssessmentResult } from "../types/assessment"

export interface LeadDetails {
	name: string
	company: string
	designation: string
	email: string
	phone: string
	industry: string
	employeeCount: string
	website: string
	interestedService: string
}

export interface LeadSubmission extends LeadDetails {
	submittedAt: string
	applicability: string
	exposureScore: number
	exposureRating: string
	readinessScore: number
}

// Vite injects env vars prefixed with VITE_ at build time.
const ENDPOINT = import.meta.env.VITE_DPDP_SHEET_ENDPOINT as string | undefined

// Combine the registration details with the computed result into one row.
export function buildLeadSubmission(
	lead: LeadDetails,
	result: AssessmentResult,
): LeadSubmission {
	return {
		...lead,
		submittedAt: new Date().toISOString(),
		applicability: result.applicability,
		exposureScore: result.exposureScore,
		exposureRating: result.exposureRating,
		readinessScore: result.readinessScore,
	}
}

// Fire-and-forget POST to the Google Apps Script web app.
// We use text/plain + no-cors so the browser skips the CORS preflight that an
// Apps Script web app cannot answer. The response is opaque, so the report is
// never blocked on this call.
export async function submitLead(payload: LeadSubmission): Promise<boolean> {
	if (!ENDPOINT) {
		console.warn(
			"VITE_DPDP_SHEET_ENDPOINT is not set; skipping lead submission.",
		)
		return false
	}
	try {
		await fetch(ENDPOINT, {
			method: "POST",
			mode: "no-cors",
			headers: { "Content-Type": "text/plain;charset=utf-8" },
			body: JSON.stringify(payload),
		})
		return true
	} catch (error) {
		console.error("Lead submission failed", error)
		return false
	}
}
