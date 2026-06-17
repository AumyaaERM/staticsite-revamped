import type { Question } from "../../types/assessment"

// 21 questions, ported verbatim from the "Assessment" tab of the
// "DPDPA Assessment form" sheet (rows 3-23). Order is preserved.
const questions = [
	// ----- Applicability -----
	{
		id: "app_digital_pd",
		section: "Applicability",
		category: "Applicability",
		type: "boolean",
		text: "Do you collect, store, or process personal data in digital format (or digitize physical records)?",
		weight: 15,
	},
	{
		id: "app_process_in_india",
		section: "Applicability",
		category: "Applicability",
		type: "boolean",
		text: "Do you process personal data in India?",
		weight: 10,
		hoverText: "Meaning of Personal Data",
	},
	{
		id: "app_offer_goods_services",
		section: "Applicability",
		category: "Applicability",
		type: "boolean",
		text: "Do you offer goods/services to individuals in India?",
		weight: 10,
		hoverText:
			"Select 'Yes' if you target consumers or users based in India, even if your business is registered abroad.",
	},
	// ----- Nature of Data Processed -----
	{
		id: "nat_employee_vendor",
		section: "Nature of Data Processed",
		category: "Exposure",
		type: "boolean",
		text: "Do you process employee / vendor personal data?",
		weight: 5,
	},
	{
		id: "nat_customer_enduser",
		section: "Nature of Data Processed",
		category: "Exposure",
		type: "boolean",
		text: "Do you process customer or end-user personal data (e.g., names, emails, phone numbers, addresses)?",
		weight: 10,
	},
	{
		id: "nat_children_disabled",
		section: "Nature of Data Processed",
		category: "Exposure",
		type: "boolean",
		text: "Do you process children's data (<18 years) or of persons with disabilities?",
		weight: 15,
	},
	{
		id: "nat_sensitive",
		section: "Nature of Data Processed",
		category: "Exposure",
		type: "boolean",
		text: "Do you process data related to Health, Financial, Biometric, religion etc.?",
		weight: 30,
		helpText:
			"e.g., facial recognition, fingerprints for attendance, or iris scans",
	},
	// ----- Scale and Criticality -----
	{
		id: "scale_subjects",
		section: "Scale and Criticality",
		category: "Exposure",
		type: "scale",
		text: "What is the approximate scale of your data subjects?",
		options: [
			{ value: "<10k", label: "Less than 10k", weight: 5 },
			{ value: "10k-100k", label: "10k - 100k", weight: 10 },
			{ value: ">100k", label: "More than 100k", weight: 15 },
		],
	},
	// ----- Data Sharing and Transfer -----
	{
		id: "share_cloud_saas",
		section: "Data Sharing and Transfer",
		category: "Exposure",
		type: "boolean",
		text: "Do you utilize cloud storage or third-party SaaS tools to store personal data?",
		weight: 10,
	},
	{
		id: "share_vendors",
		section: "Data Sharing and Transfer",
		category: "Exposure",
		type: "boolean",
		text: "Do you share data with vendors/processors?",
		weight: 8,
	},
	{
		id: "share_outside_india",
		section: "Data Sharing and Transfer",
		category: "Exposure",
		type: "boolean",
		text: "Do you transfer data outside India?",
		weight: 5,
	},
	{
		id: "share_govt",
		section: "Data Sharing and Transfer",
		category: "Exposure",
		type: "boolean",
		text: "Do you disclose personal data to Government Authorities, Law enforcement bodies, or regulators?",
		weight: 7,
	},
	// ----- Compliance Readiness -----
	{
		id: "ready_privacy_notice",
		section: "Compliance Readiness",
		category: "Readiness",
		type: "boolean",
		text: "Do you have an updated, clear Privacy Notice/Policy accessible to data principals?",
		weight: 4,
	},
	{
		id: "ready_consent",
		section: "Compliance Readiness",
		category: "Readiness",
		type: "boolean",
		text: "Do you obtain consent before collecting Personal data?",
		weight: 8,
	},
	{
		id: "ready_withdraw_consent",
		section: "Compliance Readiness",
		category: "Readiness",
		type: "boolean",
		text: "Can individuals withdraw consent?",
		weight: 4,
	},
	{
		id: "ready_records",
		section: "Compliance Readiness",
		category: "Readiness",
		type: "boolean",
		text: "Do you maintain records of processing?",
		weight: 4,
	},
	{
		id: "ready_gap_assessment",
		section: "Compliance Readiness",
		category: "Readiness",
		type: "boolean",
		text: "Have you conducted a DPDPA or Privacy gap assessment?",
		weight: 4,
	},
	{
		id: "ready_vendor_contracts",
		section: "Compliance Readiness",
		category: "Readiness",
		type: "boolean",
		text: "Have vendor contracts been reviewed for privacy obligations?",
		weight: 4,
	},
	{
		id: "ready_dpo",
		section: "Compliance Readiness",
		category: "Readiness",
		type: "boolean",
		text: "Have you assigned privacy ownership/DPO equivalent?",
		weight: 4,
	},
	{
		id: "ready_grievance",
		section: "Compliance Readiness",
		category: "Readiness",
		type: "boolean",
		text: "Do you have a grievance redressal process?",
		weight: 4,
	},
	{
		id: "ready_breach",
		section: "Compliance Readiness",
		category: "Readiness",
		type: "boolean",
		text: "Do you have an incident/data breach response process?",
		weight: 4,
	},
] as Question[]

export const dpdpQuestions = questions

// Ids whose "Yes" answer makes the DPDP Act applicable (Assessment!I4).
export const APPLICABILITY_QUESTION_IDS = questions
	.filter((q) => q.category === "Applicability")
	.map((q) => q.id)

// Ids counted by the readiness score (Assessment!I6 = COUNTIF Yes x 10).
export const READINESS_QUESTION_IDS = questions
	.filter((q) => q.category === "Readiness")
	.map((q) => q.id)

// Ordered list of sections for rendering the wizard.
export const SECTION_ORDER = [
	"Applicability",
	"Nature of Data Processed",
	"Scale and Criticality",
	"Data Sharing and Transfer",
	"Compliance Readiness",
] as const
