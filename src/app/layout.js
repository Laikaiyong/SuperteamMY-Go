import localFont from "next/font/local";
import "./globals.css";
import { WalletProviders } from "./providers";
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: "SuperteamMY GO",
  description: "Enter, Grab, and Go, New kind of Shopping",
  openGraph: {
		title: "SuperteamMY GO",
		description: "Enter, Grab, and Go, New kind of Shopping",
		images: ["/logo.png"],
	},
	twitter: {
		card: "summary",
		site: "SuperteamMY GO",
		title: "SuperteamMY GO",
		description: "Enter, Grab, and Go, New kind of Shopping",
		images: ["/logo.png"],
	},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dataTheme="retro">
        <WalletProviders>
        <body className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
              {children}
            </main>
          </body>
        </WalletProviders>
    </html>
  );
}
