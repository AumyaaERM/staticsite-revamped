export const DPDP_FORM_URL =
  import.meta.env.VITE_DPDP_FORM_URL || "/consulting/dpdp-compliance";

export const IS_DPDP_FORM_CONFIGURED = Boolean(
  import.meta.env.VITE_DPDP_FORM_URL,
);
