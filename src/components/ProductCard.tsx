
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-none rounded-lg group">
      <div className="overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-auto object-cover aspect-square transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4 bg-white">
        <h3 className="font-semibold text-base truncate">{product.name}</h3>
        <p className="text-muted-foreground mt-1">{product.price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
