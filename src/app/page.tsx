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
    <main>
      <Header />
      <HeroSection />
      <section className="py-12 px-4 container mx-auto">
        <h2 className="text-2xl font-medium mb-8 text-center">Shop our most trusted formulas</h2>
        <FeaturedProducts />
      </section>
      <MissionSection />
      <section className="py-12 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-full md:col-span-1">
            <img 
              src="/images/products/BodyLotion.jpg" 
              alt="Body Lotion" 
              className="w-full h-auto rounded-lg object-cover aspect-square"
            />
            <div className="mt-4">
              <h3 className="text-center font-medium">Body Lotion</h3>
              <p className="text-center mt-1">$25.95 CAD</p>
            </div>
          </div>
          <div className="col-span-full md:col-span-1">
            <img 
              src="/images/shampoo.jpg" 
              alt="Micellar Shampoo" 
              className="w-full h-auto rounded-lg object-cover aspect-square"
            />
            <div className="mt-4">
              <h3 className="text-center font-medium">Micellar Shampoo</h3>
              <p className="text-center mt-1"><span className="line-through text-gray-500 mr-2">$32.95 CAD</span>$28.95 CAD</p>
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
  );
}