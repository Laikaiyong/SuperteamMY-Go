'use client';

import { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import SolanaTransactionTable from '@/components/TransactionHistoryTable';

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [salesData, setSalesData] = useState([]);
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      fetchBalance();
      fetchSalesData();
    }
  }, [publicKey, connection]);

  const fetchBalance = async () => {
    if (publicKey) {
      const balance = await connection.getBalance(publicKey);
      setBalance(balance / 1000000000); // Convert lamports to SOL
    }
  };

  const fetchSalesData = async () => {
    // This is a placeholder. Replace with actual data fetching logic.
    const mockData = [
      { name: 'Jan', sales: 4000 },
      { name: 'Feb', sales: 3000 },
      { name: 'Mar', sales: 5000 },
      { name: 'Apr', sales: 4500 },
      { name: 'May', sales: 6000 },
    ];
    setSalesData(mockData);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <WalletMultiButton className="mb-4" />
      {publicKey ? (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Wallet Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{balance.toFixed(2)} SOL</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
          <SolanaTransactionTable />
          </>
      ) : (
        <p>Please connect your wallet to view the dashboard.</p>
      )}
    </div>
  );
}