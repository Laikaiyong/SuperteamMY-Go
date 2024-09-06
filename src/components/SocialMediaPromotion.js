import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SocialMediaPromotion = ({ inventory }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [promotionText, setPromotionText] = useState('');

  const handlePromotion = () => {
    console.log(`Promoting ${selectedProduct}: ${promotionText}`);
    // Implement actual social media promotion logic here
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Select a product"
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
        className="mb-4"
      />
      <Input
        type="text"
        placeholder="Enter promotion text"
        value={promotionText}
        onChange={(e) => setPromotionText(e.target.value)}
        className="mb-4"
      />
      <Button onClick={handlePromotion}>Post Promotion</Button>
    </div>
  );
};

export default SocialMediaPromotion;