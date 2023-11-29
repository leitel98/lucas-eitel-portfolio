import { Button } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex w-full items-center justify-start min-h-screen flex-col gap-10">
      <article id="Home" className="max-w-7xl flex w-full justify-evenly px-10">
        <Image
          src="/images/main-pic.png"
          alt="Main Image"
          width={500}
          height={2000}
          quality={100}
          className="h-full w-1/3 drop-shadow-xl"
        />
        <section className="flex flex-col w-1/2 items-start justify-center gap-10">
          <h2 className="text-6xl font-bold text-royal-100">
            Hello! I am
            {' '}
            <span className="text-royal-950">Lucas Eitel,</span>
          </h2>
          <h1 className="text-7xl font-bold text-royal-100">
            <span className="text-royal-950">Full Stack</span>
            {' '}
            software developer!
          </h1>
          <div className="flex w-full items-center justify-center">
            <Button size="big">Download cv</Button>
          </div>
        </section>
      </article>
    </main>
  );
}
