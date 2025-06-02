import { Inter } from "next/font/google";
import Link from "next/link";
import { Providers } from "../providers/providers"
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-lg">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                      <h1 className="text-xl font-bold text-gray-800">
                        Cat Factory
                      </h1>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                      <Link
                        href="/"
                        className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                      >
                        Gatos
                      </Link>
                      <Link
                        href="/breeds"
                        className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                      >
                        Razas
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </Providers>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
