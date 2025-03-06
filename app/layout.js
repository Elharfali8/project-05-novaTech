
import Navbar from "@/components/Navbar";
import "./globals.css";



export const metadata = {
  title: "NovaTech",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
