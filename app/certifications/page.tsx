import Image from "next/image";
import Link from "next/link";

const certificates = [
  "/certificates/Bachelor.png",
  "/certificates/ds_certificate.png",
  "/certificates/cds.JPG",
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen px-10 py-20">

      <div className="mb-8 underline text-sm">
        <Link href="/">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold mb-10">
        Certifications & Achievements
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((src) => (
          <div
            key={src}
            className="rounded-xl overflow-hidden border border-neutral-800
                       transition hover:scale-105"
          >
            <Image
              src={src}
              alt="Certificate"
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>

    </main>
  );
}
