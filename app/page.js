import Hero from '@/components/Hero';
import Technologies from '@/components/Technologies';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Header from '@/components/Header';

const sections = [
  { Component: Hero },
  { Component: Technologies },
  { Component: About },
  { Component: Experience },
  { Component: Education },
  { Component: Contact },
];

const Home = () => {
  return (
    <>
      {sections.map(({ Component }, idx) => (
        <Component key={idx} transitionDelay={`${idx * 0.15}s`} />
      ))}
    </>
  );
};

export default Home;
