import { MainLayout } from '@/components/layout/MainLayout';
import { About } from '@/components/sections/home/About';
import { Contact } from '@/components/sections/home/Contact';
import { Hero } from '@/components/sections/home/Hero';
import { Services } from '@/components/sections/home/Services';
import { Values } from '@/components/sections/home/Values';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Values />
      <Contact />
    </MainLayout>
  );
}
