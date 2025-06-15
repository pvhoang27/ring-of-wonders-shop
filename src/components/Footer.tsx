
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>AuraRings</h3>
            <p className="text-muted-foreground text-sm">Timeless elegance, forged for you.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">All Rings</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Engagement</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Wedding Bands</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Shipping & Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Sizing Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground"><Instagram size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Facebook size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AuraRings. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
