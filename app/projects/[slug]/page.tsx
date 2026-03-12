import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-20">Project not found</div>;
  }

  return (
    <main className="min-h-screen px-10 py-20">
      {/* Back buttons */}
      <div className="mb-8 flex gap-6 text-sm underline">
        <Link href="/">← Home</Link>
        <Link href="/projects">← Back to Projects</Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold">{project.title}</h1>

      {/* Image */}
      <div className="my-8">
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={500}
          className="rounded-xl"
        />
      </div>

      {/* Description */}
      <p className="max-w-8xl text-neutral-900">
        {project.longDescription}
      </p>

      {/* Tech */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-neutral-200 px-8 py-2 text-s"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-8 flex gap-6 underline">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      {/* Architecture */}
      {project.architecture && (
        <div className="mt-12">
          <iframe
           width={2000}
            height={1500}
            src={project.architecture}
            className="rounded-xl"
            allowFullScreen
          />
        </div>
      )}
    </main>
  );
}
