import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-20 py-20">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            AI Engineer <br />
            <span className="text-primary">
              Computer Vision & Deep Learning
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Building real-world AI systems with Python, Deep Learning, and MLOps.
          </p>

          <p className="mt-3 text-sm text-muted-foreground">
            10+ years engineering background · Transitioning into applied AI
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <Link href="/projects">
              <button className="px-6 py-3 rounded-lg border border-neutral-600
           transition hover:bg-neutral-800 active:scale-95">
               View Projects
              </button>
            </Link>

            <a href="/resume/Raghwendra_Mahato_Resume.pdf" download
            className="px-6 py-3 rounded-lg border transition hover:bg-neutral-800">
            Download Resume
            </a>

            <Link href="/contact">
              <button className="px-6 py-3 rounded-lg border border-neutral-600
           transition hover:bg-neutral-800 active:scale-95">
               Contact Me
              </button>
            </Link>

            <Link href="/certifications">
              <button className="px-6 py-3 rounded-lg border border-neutral-600
           transition hover:bg-neutral-800 active:scale-95">
               Certifications and Achievements
              </button>
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Profile photo"
            width={350}
            height={350}
            className="rounded-full border shadow-lg"
            priority
          />
        </div>
      </section>

      {/* Bio Section */}
      <section className="mt-24 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-muted-foreground leading-relaxed">
          I’m an AI-focused engineer with a strong foundation in Python,
          Machine Learning, and Computer Vision. Currently building end-to-end
          AI applications — from model training to deployment — with a focus
          on real-world impact.
        </p>
      </section>
    </main>
  );
}
