import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Users, TrendingDown, Star } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// This would come from Supabase in production
const placeholderCourse = {
  code: "COSC-3320",
  name: "Algorithms and Data Structures",
  department: "Computer Science",
  description:
    "COSC 3320 covers fundamental algorithms and data structures such as lists, trees, graphs, and hashing, with an emphasis on runtime analysis and practical implementation in modern languages.",
  prerequisites:
    "A grade of C- or better in COSC 1437 and MATH 2305, and concurrent enrollment in or credit for MATH 2414 with a grade of C- or better.",
  creditHours: 3,
  lectureHours: 3,
  labHours: 0,
  badges: {
    gpa: 3.08,
    dropRate: 12,
    difficultyLabel: "Moderate",
    difficultyScore: 2.8,
  },
  snapshot: {
    avgGpa: 3.08,
    dropRate: 12,
    totalEnrolled: 4684,
    totalInstructors: 9,
    totalSections: 48,
    avgClassSize: 97,
  },
  gradeDistribution: [
    { label: "A", percentage: 29 },
    { label: "B", percentage: 35 },
    { label: "C", percentage: 16 },
    { label: "D", percentage: 3 },
    { label: "F", percentage: 2 },
    { label: "W", percentage: 12 },
    { label: "Other", percentage: 3 },
  ],
  instructors: [
    { name: "Ernst L Leiss", summary: "2,071 students · Avg GPA 3.26 · Drop 8%" },
    { name: "Gopal Pandurangan", summary: "770 students · Avg GPA 2.74 · Drop 15%" },
    { name: "Panruo Wu", summary: "615 students · Avg GPA 2.91 · Drop 7%" },
    { name: "Rakesh M Verma", summary: "508 students · Avg GPA 2.41 · Drop 27%" },
    { name: "Carlos Ordonez", summary: "224 students · Avg GPA 2.70 · Drop 19%" },
  ],
};

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "Moderate":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    case "Hard":
      return "bg-red-500/10 text-red-400 border-red-500/20";
    default:
      return "bg-muted text-muted-foreground";
  }
}

function getGradeColor(label: string) {
  switch (label) {
    case "A":
      return "bg-green-500";
    case "B":
      return "bg-blue-500";
    case "C":
      return "bg-yellow-500";
    case "D":
      return "bg-orange-500";
    case "F":
      return "bg-red-500";
    case "W":
      return "bg-gray-500";
    default:
      return "bg-gray-400";
  }
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const decodedCode = decodeURIComponent(code);

  // For now, only show placeholder for COSC-3320
  if (decodedCode.toUpperCase() !== "COSC-3320") {
    notFound();
  }

  const course = placeholderCourse;
  const displayCode = course.code.replace("-", " ");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container max-w-screen-2xl px-4 py-8">
          {/* Back button */}
          <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </Button>

          {/* Course Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{displayCode}</h1>
                <p className="text-xl text-muted-foreground mt-1">{course.name}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className={getDifficultyColor(course.badges.difficultyLabel)}>
                  {course.badges.difficultyLabel}
                </Badge>
                <Badge variant="outline">
                  {course.creditHours} Credit Hours
                </Badge>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Average GPA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{course.snapshot.avgGpa?.toFixed(2) ?? "—"}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4" />
                  Drop Rate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{course.snapshot.dropRate}%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Total Enrolled
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{course.snapshot.totalEnrolled?.toLocaleString()}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Sections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{course.snapshot.totalSections}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                </CardContent>
              </Card>

              {/* Grade Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
                  <CardDescription>Based on {course.snapshot.totalEnrolled?.toLocaleString()} students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.gradeDistribution.map((grade) => (
                      <div key={grade.label} className="flex items-center gap-3">
                        <span className="w-12 text-sm font-medium">{grade.label}</span>
                        <div className="flex-1 h-6 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getGradeColor(grade.label)} rounded-full transition-all`}
                            style={{ width: `${grade.percentage}%` }}
                          />
                        </div>
                        <span className="w-12 text-sm text-muted-foreground text-right">
                          {grade.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Instructors */}
              <Card>
                <CardHeader>
                  <CardTitle>Instructors</CardTitle>
                  <CardDescription>{course.snapshot.totalInstructors} instructors have taught this course</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.instructors.map((instructor, index) => (
                      <div key={instructor.name}>
                        {index > 0 && <Separator className="mb-4" />}
                        <div className="flex items-center justify-between">
                          <div>
                            <Link
                              href={`/instructors/${instructor.name.toLowerCase().replace(/\s+/g, "-")}`}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {instructor.name}
                            </Link>
                            <p className="text-sm text-muted-foreground mt-0.5">
                              {instructor.summary}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Credit Hours</p>
                    <p className="font-medium">{course.creditHours}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground">Lecture Hours</p>
                    <p className="font-medium">{course.lectureHours}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground">Lab Hours</p>
                    <p className="font-medium">{course.labHours}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground">Department</p>
                    <p className="font-medium">{course.department}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card>
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.prerequisites}
                  </p>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full" variant="default">
                    Add to Planner
                  </Button>
                  <Button className="w-full" variant="outline">
                    Write a Review
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
