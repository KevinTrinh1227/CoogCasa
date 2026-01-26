import Link from "next/link";
import { Search, Filter } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Placeholder course data - will be replaced with Supabase query
const placeholderCourses = [
  {
    code: "COSC-3320",
    name: "Algorithms and Data Structures",
    department: "COSC",
    gpa: 3.08,
    dropRate: 12,
    difficulty: "Moderate",
    creditHours: 3,
  },
  {
    code: "COSC-2430",
    name: "Programming & Data Structures",
    department: "COSC",
    gpa: 2.85,
    dropRate: 18,
    difficulty: "Hard",
    creditHours: 3,
  },
  {
    code: "MATH-2433",
    name: "Calculus III",
    department: "MATH",
    gpa: 2.72,
    dropRate: 22,
    difficulty: "Hard",
    creditHours: 3,
  },
  {
    code: "PHYS-1321",
    name: "University Physics I",
    department: "PHYS",
    gpa: 2.91,
    dropRate: 15,
    difficulty: "Moderate",
    creditHours: 3,
  },
  {
    code: "ENGL-1303",
    name: "First Year Writing I",
    department: "ENGL",
    gpa: 3.45,
    dropRate: 5,
    difficulty: "Easy",
    creditHours: 3,
  },
  {
    code: "HIST-1377",
    name: "The United States to 1877",
    department: "HIST",
    gpa: 3.32,
    dropRate: 8,
    difficulty: "Easy",
    creditHours: 3,
  },
];

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

function getGpaColor(gpa: number) {
  if (gpa >= 3.5) return "text-green-400";
  if (gpa >= 3.0) return "text-yellow-400";
  if (gpa >= 2.5) return "text-orange-400";
  return "text-red-400";
}

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container max-w-screen-2xl px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
            <p className="text-muted-foreground mt-2">
              Browse courses with grade distributions, instructor data, and student reviews.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses by name, code, or department..."
                className="w-full h-10 pl-9 pr-4 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Course Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderCourses.map((course) => (
              <Link key={course.code} href={`/courses/${course.code}`}>
                <Card className="h-full transition-all hover:bg-card/80 hover:border-primary/50 hover:shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg">{course.code.replace("-", " ")}</CardTitle>
                        <CardDescription className="line-clamp-1 mt-1">
                          {course.name}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className={getDifficultyColor(course.difficulty)}>
                        {course.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs">Avg GPA</p>
                        <p className={`font-semibold ${getGpaColor(course.gpa)}`}>
                          {course.gpa.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Drop Rate</p>
                        <p className="font-semibold">{course.dropRate}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Credits</p>
                        <p className="font-semibold">{course.creditHours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-8 flex justify-center">
            <p className="text-sm text-muted-foreground">
              Showing 6 of 10,000+ courses
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
