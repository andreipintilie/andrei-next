import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContentProvider } from '@/contexts/ContentContext';
import { getAllContent } from '@/lib/contentful';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Andrei Pintilie | Front-End Developer',
  description: 'Front-End Developer based in Timisoara, Romania',
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }) {
  const initialContent = await getAllContent();

  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased`}>
        <ContentProvider initialContent={initialContent}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ContentProvider>
      </body>
    </html>
  );
}
