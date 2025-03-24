import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskirli",
  description: "Task management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <Link href="/" className="text-2xl font-bold text-gray-900">
                    Taskirli
                  </Link>
                  <nav className="ml-10 space-x-8">
                    <Link href="/menu" className="text-gray-600 hover:text-gray-900">
                      Menu
                    </Link>
                    <Link href="/account" className="text-gray-600 hover:text-gray-900">
                      Account
                    </Link>
                  </nav>
                </div>
                <div>
                  <AuthButton />
                </div>
              </div>
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Taskirli. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
