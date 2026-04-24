import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MuiProvider from './components/MuiProvider'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "QuackNet",
  description: "The Quackbox games, all online.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <MuiProvider>
          {children}
        </MuiProvider>
      </body>
    </html>
  );
}
