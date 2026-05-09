/**
 * Normalize a German IBAN for basic public-methodology examples.
 *
 * This helper removes whitespace and common separators, then uppercases the value.
 * It does not perform production-grade validation.
 */
export function normalizeGermanIban(input) {
  if (typeof input !== "string") {
    return "";
  }

  return input
    .replace(/[\s\-_.]/g, "")
    .toUpperCase();
}
