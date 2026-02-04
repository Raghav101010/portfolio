import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-10 py-20">

      {/* Navigation */}
      <div className="mb-8 text-sm underline">
        <Link href="/">← Back to Home</Link>
      </div>

      {/* Title */}
      <h1 className="mb-10 text-4xl font-bold">Projects</h1>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

    </main>
  );
}
