import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Raghwendra Mahato | Portfolio",
  description: "AI Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-black text-black dark:text-white">
        {children}
      </body>
    </html>
  )
}
