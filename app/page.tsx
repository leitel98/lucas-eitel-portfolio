import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex w-full items-center justify-start min-h-screen flex-col gap-10 py-20">
      <section id="Home" className="max-w-7xl flex w-full justify-around px-10">
        <Image src="/images/main-pic.png" alt="Main Image" width={100} height={500} />
        <h1 className="title">Hello</h1>
      </section>
    </main>
  );
}
