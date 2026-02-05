import Image from "next/image";
import { Project } from "@/data/projects";
import Link from "next/link";


export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
    <div className="cursor-pointer rounded-xl border border-neutral-800 bg-neutral-300 p-5 hover:border-neutral-600 transition">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        className="rounded-xl mb-4"
      />

      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground border"
          >
            Demo
          </a>
        )}

        <a
          href={project.github}
          target="_blank"
          className="px-4 py-2 text-sm rounded-lg border border-border"
        >
          GitHub
        </a>

        {project.video && (
          <a
            href={project.video}
            target="_blank"
            className="px-4 py-2 text-sm rounded-lg border border-border"
          >
            Video
          </a>
        )}
      </div>
    </div>
    </Link>
  );
}
