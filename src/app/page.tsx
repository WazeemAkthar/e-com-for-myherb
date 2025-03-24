/* eslint-disable @next/next/no-img-element */
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import MissionSection from '@/components/home/MissionSection';
import ValuePropositions from '@/components/home/ValuePropositions';
import Header from '@/components/layout/Header';
// import CategoryNavigation from '@/components/home/CategoryNavigation';
// import NewsletterSignup from '@/components/home/NewsletterSignup';\
import CategoryCard from '@/components/home/CategoryCard';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      {/* Fixed gradient background that covers the entire viewport */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(70.71%_70.71%_at_50%_50%,_#FFE5E5_0%,_#FFE0DA_25%,_#D7FF89_100%)] -z-10"
        style={{ width: '100vw', height: '100vh' }}
      />
      
      <main className="relative">
        <Header />
        <HeroSection />
        <section className="py-12 px-4 mx-auto bg-[linear-gradient(90deg,_rgba(240,244,236,1)_7%,_rgba(241,235,226,1)_50%)]">
          <h2 className="text-2xl font-medium mb-8 text-center">Shop our most trusted formulas</h2>
          <FeaturedProducts />
        </section>
        <MissionSection />
        <section className="py-12 px-4 mx-auto bg-[linear-gradient(90deg,_rgba(240,244,236,1)_7%,_rgba(241,235,226,1)_50%)]">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-full md:col-span-1">
              <img 
                src="/images/products/fecheredproduct1.jpg" 
                alt="Body Lotion" 
                className="w-full h-auto rounded-lg object-cover aspect-square"
              />
              <div className="mt-4">
                <h3 className="text-center font-medium">BRIGHTENING SOLUTION</h3>
                {/* <p className="text-center mt-1">Rs.1525.95 /=</p> */}
              </div>
            </div>
            <div className="col-span-full md:col-span-1">
              <img 
                src="/images/products/PIMPLECURE.jpg" 
                alt="Micellar Shampoo" 
                className="w-full h-auto rounded-lg object-cover aspect-square"
              />
              <div className="mt-4">
                <h3 className="text-center font-medium">PIMPLE CURE</h3>
                {/* <p className="text-center mt-1"><span className="line-through text-gray-500 mr-2">Rs.2232.95 /=</span>Rs.1528.95 /=</p> */}
              </div>
            </div>
          </div>
        </section>
        <ValuePropositions />
        {/* <CategoryNavigation /> */}
        {/* <NewsletterSignup /> */}
        <CategoryCard/>
        <Footer />
      </main>
    </>
  );
}