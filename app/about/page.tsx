export default function About() {
  return (
    <main className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">About me</h1>
      <p className="text-lg mb-6">
        Hi, I'm Eric! This is an example blog page to get started on my journey as a web developer. 
      </p>

      <section className="space-y-6">
        <article className="p-4 border rounded-md shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-1">Growing as a Developer in 2025</h2>
          <p className="text-gray-600">I'm currently trying to get better as a developer and am exploring different technologies. Currently I'm learning React, Tailwind CSS, and Next.js</p>
        </article>

        <article className="p-4 border rounded-md shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-1">Contact me</h2>
          <p className="text-gray-600">Email: xxxx@gmail.com </p>
          <p className="text-gray-600">Phone Number: (xxx)-xxx-xxxx</p>
          <p className="text-gray-600">Github: <a href="https://github.com/EricShen9" className="text-blue-600 hover:underline">EricShen9</a> </p>
        </article>

      </section>
    </main>
  );
}
