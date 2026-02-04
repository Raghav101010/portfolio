import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

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
      <p className="max-w-3xl text-neutral-400">
        {project.longDescription}
      </p>

      {/* Tech */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-neutral-800 px-3 py-1 text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-8 flex gap-6 underline">
        {project.demo && (
          <a href={project.demo} target="_blank">Live Demo</a>
        )}
        <a href={project.github} target="_blank">GitHub</a>
      </div>

      {/* Video */}
      {project.video && (
        <div className="mt-12">
          <iframe
            width="100%"
            height="400"
            src={project.video}
            className="rounded-xl"
            allowFullScreen
          />
        </div>
      )}
    </main>
  );
}
