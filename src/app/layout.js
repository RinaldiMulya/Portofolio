import { Inter } from 'next/font/google'
import "./globals.css";
import Layout from "./components/layout/layout";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Rinaldi - Full Stack Developer',
  description: 'Portfolio website of Rinaldi, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['portfolio', 'developer', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Rinaldi' }],
  creator: 'Rinaldi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
          <Layout>
            {children}
          </Layout>
      </body>
    </html>
  );
}
