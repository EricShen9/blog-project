import '@/app/globals.css';
//import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import Sidenav from '@/app/ui/sidenav/sidenav';
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ['latin'],
  weight: ['100','300','400','700','900'], // or ['100','300','400','700','900'] if you need more
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    
      <body className={`${lato.className} bg-white text-black`}>
        <header className="bg-blue-600 text-white p-4">
          <div className="max-w-2xl ">
            <h1 className="text-2xl font-bold px-6">My Blog</h1>
          </div>
        </header>

        <div className="flex min-h-screen">
         {/* Sidebar */}
          <Sidenav />

        {children}


        </div>
        <footer className="text-center text-sm text-gray-500 mt-12 mb-4">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
