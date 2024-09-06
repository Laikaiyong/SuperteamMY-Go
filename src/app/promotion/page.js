'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram } from 'lucide-react';

export default function Promotion() {
  const [promotions, setPromotions] = useState([
    { id: 1, product: 'Henry Lengzai', description: 'Special offer!', platform: 'Twitter', link: "https://www.instagram.com/reel/C6YYBJDvX4q/" },
    { id: 2, product: 'Inside Scoop Ice Cream', description: 'New arrival!', platform: 'Twitter', link: "https://www.instagram.com/p/C_cOfAaPRj-" },
    { id: 3, product: 'Alcohol Brand Benjamin', description: 'Limited time deal!', platform: 'Twitter', link: "https://www.instagram.com/reel/C-hDKMOvk4R/" },
  ]);

  const handleShare = (promotion) => {
    window.open(
      "https://twitter.com/intent/tweet?text=Purchase!&url=https://ggbl.ink/" +
      promotion.link,
      "_blank"
    )
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'Twitter': return <Twitter className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Promotions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {promotions.map((promo) => (
          <Card key={promo.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {getPlatformIcon(promo.platform)}
                <span className="ml-2">{promo.product}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{promo.description}</p>
              <Button className="mt-4" onClick={() => handleShare(promo)}>
                Share
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}