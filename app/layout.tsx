import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#F8FAFC] text-[#0F172A]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
