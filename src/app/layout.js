import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "TaxSafar - One Stop for All Your Tax & Compliance Needs",
  description: "Get expert support in ITR, GST, registrations, compliance, accounting, and more. Trusted by vendors and businesses across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
