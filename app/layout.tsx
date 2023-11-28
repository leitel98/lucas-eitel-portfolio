import type { Metadata } from 'next';
import { Rosario } from 'next/font/google';
import Providers from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lucas Eitel Portfolio',
  description: 'Welcome to my page!',
};

const rosario = Rosario({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rosario.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
