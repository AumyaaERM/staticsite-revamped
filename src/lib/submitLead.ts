import type { AssessmentResult } from "../types/assessment";

export interface LeadDetails {
  name: string;
  company: string;
  designation: string;
  email: string;
  phone: string;
  industry: string;
  employeeCount: string;
  website: string;
  interestedService: string;
}

export type LeadStatus = "Registered" | "Completed";

const FORM_ID = "1FAIpQLScMmyWc8df_c1c-VJ5HK9mPOiWn7kSuh2dGBRhZX6Dd-vva9g";

const ENTRY = {
  name: "entry.414013744",
  company: "entry.1964793534",
  designation: "entry.325671946",
  email: "entry.397373879",
  phone: "entry.434679207",
  industry: "entry.26483842",
  employeeCount: "entry.129854768",
  website: "entry.519802175",
  interestedService: "entry.1963450739",
  status: "entry.222750798",
  applicability: "entry.1097045395",
  exposureScore: "entry.833689808",
  exposureRating: "entry.1449531477",
  readinessScore: "entry.2111883502",
} as const;

const FORM_BASE = "https://docs.google.com/forms/d/e/";
const FORM_ACTION = FORM_ID ? FORM_BASE + FORM_ID + "/formResponse" : undefined;

// Fire-and-forget POST to a Google Form. We use mode "no-cors" with a
// URL-encoded body so the browser skips the CORS preflight that Google Forms
async function postToGoogleForm(
  fields: Record<string, string>,
): Promise<boolean> {
  if (!FORM_ACTION) {
    console.warn("Google Form not configured (FORM_ID is empty); skipping.");
    return false;
  }
  try {
    const body = new URLSearchParams();
    for (const [key, value] of Object.entries(fields)) {
      if (key && value) body.append(key, value);
    }
    await fetch(FORM_ACTION, { method: "POST", mode: "no-cors", body });
    return true;
  } catch (error) {
    console.error("Google Form submission failed", error);
    return false;
  }
}

// Shared contact fields used by both the registration row and the
// completion row.
function leadFields(lead: LeadDetails): Record<string, string> {
  return {
    [ENTRY.name]: lead.name,
    [ENTRY.company]: lead.company,
    [ENTRY.designation]: lead.designation,
    [ENTRY.email]: lead.email,
    [ENTRY.phone]: lead.phone,
    [ENTRY.industry]: lead.industry,
    [ENTRY.employeeCount]: lead.employeeCount,
    [ENTRY.website]: lead.website,
    [ENTRY.interestedService]: lead.interestedService,
  };
}

// Row 1 - fired the moment the user finishes the registration screen, so the
// lead is captured even if they abandon before answering questions.
export function submitRegistration(lead: LeadDetails): Promise<boolean> {
  return postToGoogleForm({
    ...leadFields(lead),
    [ENTRY.status]: "Registered",
  });
}

export function submitCompletion(
  lead: LeadDetails,
  result: AssessmentResult,
): Promise<boolean> {
  return postToGoogleForm({
    ...leadFields(lead),
    [ENTRY.status]: "Completed",
    [ENTRY.applicability]: result.applicability,
    [ENTRY.exposureScore]: String(result.exposureScore),
    [ENTRY.exposureRating]: result.exposureRating,
    [ENTRY.readinessScore]: String(result.readinessScore),
  });
}