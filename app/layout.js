import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WorkoutPro",
  description: "Just like your workout buddy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </Provider>
    </html>
  );
}
