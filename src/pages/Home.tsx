import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf3]">
      <div className="flex-1">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
