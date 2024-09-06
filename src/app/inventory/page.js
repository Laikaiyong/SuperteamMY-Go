'use client';
import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from 'lucide-react';

export default function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      fetchInventory();
      fetchTransactions();
    }
  }, [publicKey, connection]);

  const fetchInventory = async () => {
    // This is a placeholder. Replace with actual inventory fetching logic.
    const mockInventory = [
      { image: "https://pbs.twimg.com/media/GVWrm2LbIAAZBXe?format=jpg&name=4096x4096", id: 1, name: 'Uno Card', quantity: 50, price: 1.99, unit: 'lb', category: 'Game', rating: 4.5, description: 'Fresh, crisp organic uno card. Perfect for snacking or baking.' },
      { image: "https://pbs.twimg.com/media/GVEz0jzaEAE93TO?format=jpg&name=large", id: 2, name: 'Army Suite', quantity: 30, price: 3.49, unit: 'set', category: 'Clothing', rating: 4.2, description: 'Nutritious whole grain suite, freshly baked daily.' },
      { image: "https://pbs.twimg.com/media/GTvTMAvaEAAw-5J?format=jpg&name=large", id: 3, name: 'Laptop', quantity: 100, price: 4.99, unit: 'dozen', category: 'Dairy', rating: 4.8, description: 'Farm-fresh free-range eggs from locally raised hens.' },
      { image: "https://pbs.twimg.com/media/GP_8ioRbEAYEEHa?format=jpg&name=4096x4096", id: 4, name: 'Boyfriend', quantity: 40, price: 3.99, unit: 'gallon', category: 'Dairy', rating: 4.6, description: 'Creamy organic milk from grass-fed cows. No hormones or antibiotics.' },
    ];
    setInventory(mockInventory);
  };

  const fetchTransactions = async () => {
    // This is a placeholder. Replace with actual transaction fetching logic.
    const mockTransactions = [
      { id: 1, product: 'Uno Card', quantity: 3, total: 5.97, date: '2023-05-01' },
      { id: 2, product: 'Whole Grain Bread', quantity: 2, total: 6.98, date: '2023-05-02' },
    ];
    setTransactions(mockTransactions);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Self-Service Shop Inventory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {inventory.map((item) => (
          <Card key={item.id} className="flex flex-col">
            <CardHeader>
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
              <CardTitle className="mt-2">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Badge className="mb-2">{item.category}</Badge>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="flex items-center mb-2">
                {renderStars(item.rating)}
                <span className="ml-1 text-sm text-gray-600">({item.rating})</span>
              </div>
              <p className="font-semibold text-lg">{item.price.toFixed(2)} SOL / {item.unit}</p>
              <p className="text-sm text-gray-600">In stock: {item.quantity} {item.unit}s</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Check Detail</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b">
                <td className="px-4 py-2">{tx.product}</td>
                <td className="px-4 py-2">{tx.quantity}</td>
                <td className="px-4 py-2">{tx.total.toFixed(2)} SOL</td>
                <td className="px-4 py-2">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}