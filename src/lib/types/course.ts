// Types for course data

export type DifficultyLabel = "Easy" | "Moderate" | "Hard";
export type TrendLabel = "Improving" | "Stable" | "Declining";

export type CourseBadges = {
  gpa: number | null;
  dropRate: number | null; // percent
  difficultyLabel: DifficultyLabel | null;
  difficultyScore: number | null; // 1–5
  trend: TrendLabel;
};

export type CourseCatalogInfo = {
  creditHours: number | null;
  lectureHours: number | null;
  labHours: number | null;
  description: string;
  fulfills: string[];
  repeatability: string | null;
  tccnsEquivalent: string | null;
  additionalFee: string | null;
  prerequisites?: string | null;
};

export type CourseSnapshot = {
  avgGpa: number | null;
  dropRate: number | null;
  totalEnrolled: number | null;
  totalInstructors: number | null;
  totalSections: number | null;
  avgClassSize: number | null;
  gpaStdDev: number | null;
};

export type GradeBucket = {
  label: string; // "A", "B", "C", "D", "F", "W", "S", "NR", etc.
  percentage: number; // 0–100
};

export type InstructorSummary = {
  name: string;
  summary: string; // e.g. "224 students · Avg GPA 2.70 · Drop 19%"
  department?: string | null;
  rating?: number | null;
  totalStudents?: number | null;
  avgGpaNumeric?: number | null;
  dropRateNumeric?: number | null;
  courseCount?: number | null;
  sectionCount?: number | null;
};

export type SectionLetterBreakdown = {
  A: number | null;
  B: number | null;
  C: number | null;
  D: number | null;
  F: number | null;
  W: number | null;
  S?: number | null;
  NR?: number | null;
};

export type PastSection = {
  term: string; // e.g. "Spring 2025"
  instructor: string;
  section: string;
  enrolled: number | null;
  gpa: number | null;
  letters?: SectionLetterBreakdown;
};

export type Course = {
  code: string; // "COSC-3320"
  name: string;
  department: string;
  badges: CourseBadges;
  catalog: CourseCatalogInfo;
  snapshot: CourseSnapshot;
  gradeDistribution: GradeBucket[];
  instructors: InstructorSummary[];
  instructorNarrative: string;
  pastSections: PastSection[];
};

/**
 * Format a user-facing course code like "COSC 3320" from the internal code.
 */
export function getCourseDisplayCode(course: { code: string }): string {
  const raw = course.code.trim();
  if (!raw) return "";

  // First try splitting on dash or whitespace, e.g. "COSC-3320" or "COSC 3320"
  const [subject, rest] = raw.split(/[\s-]+/, 2);
  if (rest) {
    return `${subject} ${rest}`;
  }

  // Fallback: if it's like "COSC3320", try to separate letters + digits
  const match = raw.match(/^([A-Za-z]+)(\d.*)$/);
  if (match) {
    return `${match[1]} ${match[2]}`;
  }

  // As a last resort, just return the raw code
  return raw;
}
