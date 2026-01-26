import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">
            Coog<span className="text-primary">Casa</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/courses"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Courses
          </Link>
          <Link
            href="/instructors"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Instructors
          </Link>
          <Link
            href="/planner"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Planner
          </Link>
          <Link
            href="/careers"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Careers
          </Link>
          <Link
            href="/scholarships"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Scholarships
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Search button - triggers global search */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Login button */}
          <Button asChild variant="default" size="sm" className="hidden sm:flex">
            <Link href="/auth/login">Sign in</Link>
          </Button>

          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
