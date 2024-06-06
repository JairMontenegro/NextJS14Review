import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from './ui/home.module.css';
import { lusitana } from './ui/fonts'; // import font from font.ts
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <div className={styles.shape}></div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome .</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image // In next JS this component Image that's the eslitntc recommend us to use instead a img html node, becaouse the component add a performance and imporve its charge, and change the format to webp after recoginze it, by default this image component is lazy load
            width={1000}
            height={760}
            className="hidden md:block"
            src="/hero-desktop.png"
            alt="screenshot of the dashboard"
          />
          <Image // In next JS this component Image that's the eslitntc recommend us to use instead a img html node, becaouse the component add a performance and imporve its charge, and change the format to webp after recoginze it, by default this image component is lazy load
            width={560}
            height={620}
            className="block md:hidden"
            src="/hero-mobile.png"
            alt="screenshot of the dashboard"
          />
        </div>
      </div>
    </main>
  );
}
