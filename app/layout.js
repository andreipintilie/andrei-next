import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContentProvider } from '@/contexts/ContentContext';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Andrei Pintilie | Front-End Developer',
  description: 'Front-End Developer based in Timisoara, Romania',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased`}>
        <ContentProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ContentProvider>
      </body>
    </html>
  );
}
