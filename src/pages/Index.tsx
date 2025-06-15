
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const featuredProducts = [
  {
    id: 1,
    name: 'Seraphina Solitaire Ring',
    price: '$1,250',
    image: 'https://images.unsplash.com/photo-1605994199672-8588a44a4b4c?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Elysian Eternity Band',
    price: '$980',
    image: 'https://images.unsplash.com/photo-1611652022417-a553e6e4a2e2?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Orion Halo Ring',
    price: '$1,500',
    image: 'https://images.unsplash.com/photo-1627292923985-6205210134de?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Luna Crescent Ring',
    price: '$720',
    image: 'https://images.unsplash.com/photo-1617038220319-c6b1bcf11553?q=80&w=2000&auto=format&fit=crop',
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img 
            src="https://images.unsplash.com/photo-1598501309351-4d371e549a17?q=80&w=2574&auto=format&fit=crop" 
            alt="Woman wearing elegant rings" 
            className="w-full h-full object-cover"
          />
          <div className="relative z-10 text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Timeless Elegance</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">Discover our exclusive collection of handcrafted rings, designed to celebrate every moment.</p>
            <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              Shop Now
            </Button>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Collection</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
             <div className="text-center mt-12">
              <Button variant="outline" size="lg">View All Products</Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="bg-secondary/50 py-16 sm:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our World</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-8">Be the first to know about new collections, special events, and exclusive offers.</p>
            <form className="max-w-md mx-auto flex">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-l-md border-r-0 focus:ring-accent focus:border-accent" />
              <Button type="submit" className="rounded-l-none bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Index;
