
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>AuraRings</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="transition-colors hover:text-foreground/80">Shop</a>
            <a href="#" className="transition-colors hover:text-foreground/80">Collections</a>
            <a href="#" className="transition-colors hover:text-foreground/80">About</a>
            <a href="#" className="transition-colors hover:text-foreground/80">Contact</a>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="hidden md:flex items-center gap-4">
             <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
             </Button>
             <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
             </Button>
             <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
             </Button>
          </div>
           <a href="/" className="flex items-center space-x-2 md:hidden">
            <span className="font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>AuraRings</span>
          </a>
           <div className="flex items-center gap-2 md:hidden">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
             </Button>
             <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
             </Button>
           </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 border-t">
            <a href="#" className="transition-colors hover:text-foreground/80">Shop</a>
            <a href="#" className="transition-colors hover:text-foreground/80">Collections</a>
            <a href="#" className="transition-colors hover:text-foreground/80">About</a>
            <a href="#" className="transition-colors hover:text-foreground/80">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
