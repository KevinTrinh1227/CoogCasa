import Link from "next/link";
import { Search, BookOpen, Users, Briefcase, Award, Calendar, Wrench } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const quickLinks = [
  {
    title: "Courses",
    description: "Grade distributions, instructor data, and course reviews",
    href: "/courses",
    icon: BookOpen,
  },
  {
    title: "Instructors",
    description: "Compare instructors by GPA, drop rate, and student reviews",
    href: "/instructors",
    icon: Users,
  },
  {
    title: "Careers",
    description: "Jobs and internships for UH students",
    href: "/careers",
    icon: Briefcase,
  },
  {
    title: "Scholarships",
    description: "Find scholarships you qualify for",
    href: "/scholarships",
    icon: Award,
  },
  {
    title: "Events",
    description: "Campus events and activities",
    href: "/events",
    icon: Calendar,
  },
  {
    title: "Tools",
    description: "GPA calculator, citations, and more",
    href: "/tools",
    icon: Wrench,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container max-w-screen-2xl px-4 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Tagline */}
            <p className="text-sm font-medium text-primary">
              Whose house? Coogs&apos; house.
            </p>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The UH Student Hub
            </h1>

            {/* Description */}
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Course grades, instructor ratings, careers, scholarships, and everything
              you need to succeed at the University of Houston.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search courses, instructors, or anything..."
                  className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
                <kbd className="hidden sm:inline-flex absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none h-6 select-none items-center gap-1 rounded border border-border bg-muted px-2 font-mono text-xs text-muted-foreground">
                  <span className="text-xs">/</span>
                </kbd>
              </div>
            </div>

            {/* Quick Search Examples */}
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="text-muted-foreground">Try:</span>
              <Link
                href="/courses/COSC-3320"
                className="text-primary hover:underline"
              >
                COSC 3320
              </Link>
              <span className="text-muted-foreground">&middot;</span>
              <Link
                href="/courses?q=calculus"
                className="text-primary hover:underline"
              >
                Calculus
              </Link>
              <span className="text-muted-foreground">&middot;</span>
              <Link
                href="/instructors?q=leiss"
                className="text-primary hover:underline"
              >
                Ernst Leiss
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links Grid */}
        <section className="container max-w-screen-2xl px-4 py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Card className="h-full transition-colors hover:bg-card/80 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <link.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{link.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {link.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-t border-border/40 bg-card/50">
          <div className="container max-w-screen-2xl px-4 py-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">10,000+</p>
                <p className="text-sm text-muted-foreground">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">3,000+</p>
                <p className="text-sm text-muted-foreground">Instructors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500K+</p>
                <p className="text-sm text-muted-foreground">Grade Records</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">Free</p>
                <p className="text-sm text-muted-foreground">Always</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container max-w-screen-2xl px-4 py-16">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Join the Community
            </h2>
            <p className="max-w-[500px] text-muted-foreground">
              Connect with fellow Coogs, share course experiences, and help each other succeed.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/auth/login">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://discord.gg/coogcasa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discord
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
