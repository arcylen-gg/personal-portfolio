/**
 * Auto-calculates Years of Experience from June 2016 to today.
 * Call this in any component — values update based on current date at build/SSR time.
 */
export function useYOE() {
  const start = new Date(2016, 5, 1) // June 1 2016 (month is 0-indexed)
  const now = new Date()

  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  return {
    years,
    months,
    /** e.g. "9+ Years" */
    short: `${years}+ Years`,
    /** e.g. "9 yrs 9 mos" */
    display: months > 0 ? `${years} yrs ${months} mos` : `${years} years`,
    /** e.g. "9 years & 9 months" */
    full: months > 0 ? `${years} years & ${months} months` : `${years} years`,
    /** e.g. "9+ Years in Web Development" */
    inWebDev: `${years}+ Years in Web Development`,
    /** e.g. "9 years 9 months" — for inline prose */
    prose: months > 0 ? `${years} years ${months} months` : `${years} years`,
  }
}
