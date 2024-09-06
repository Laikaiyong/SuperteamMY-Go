import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for demonstration
const transactions = [
  { id: 1, date: "2024-09-06", customer: "Alice", item: "Coffee", amount: 0.05, status: "Confirmed" },
  { id: 2, date: "2024-09-06", customer: "Bob", item: "Sandwich", amount: 0.15, status: "Pending" },
  { id: 3, date: "2024-09-05", customer: "Charlie", item: "Salad", amount: 0.1, status: "Confirmed" },
  { id: 4, date: "2024-09-05", customer: "David", item: "Soda", amount: 0.03, status: "Confirmed" },
  { id: 5, date: "2024-09-04", customer: "Eve", item: "Chips", amount: 0.02, status: "Confirmed" },
];

const SolanaTransactionTable = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Customer Purchase History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Amount (SOL)</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.customer}</TableCell>
                <TableCell>{transaction.item}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SolanaTransactionTable;