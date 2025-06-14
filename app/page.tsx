export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg mb-6">
        Hi, I'm Eric! This is an example blog page to get started on my journey as a web developer.
      </p>

      <section className="space-y-6">
        <article className="p-4 border rounded-md shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-1">How I Built My Blog with Next.js</h2>
          <p className="text-gray-600">A walkthrough of how I created this blog using the Next.js App Router.</p>
        </article>

        <article className="p-4 border rounded-md shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-1">Growing as a Developer in 2025</h2>
          <p className="text-gray-600">Reflections and goals as I continue my journey in software development.</p>
        </article>
      </section>
    </main>
  );
}
