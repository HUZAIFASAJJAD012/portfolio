import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Creative Portfolio | Innovative Developer',
  description: 'A unique showcase of creative development skills, innovative projects and technical expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="bg-light dark:bg-dark text-dark dark:text-light relative overflow-x-hidden">
        <div className="fixed w-1/2 h-1/2  bg-gradient-radial from-primary/20 to-transparent blur-3xl top-0 -right-1/4 -z-10"></div>
        <div className="fixed w-1/3 h-1/3 bg-gradient-radial from-secondary/30 to-transparent blur-3xl -bottom-10 -left-10 -z-10"></div>
        {children}
      </body>
    </html>
  );
}
