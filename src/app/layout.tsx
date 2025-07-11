import Header from "@/components/head/header";
import Navbar from "@/components/head/navbar";
import Top__header from "@/components/head/top__header";
import Footer from "@/components/footer";
import Providers from "./provider";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>
          <div className="max-w-[1320px] mx-auto">
            <div className="hidden md:block">
              <Top__header />
            </div>
            <div>
              <Header />
            </div>
            <div className="">
              <Navbar />
            </div>
            <div>{children}</div>
          </div>
            <div className="bg-black">
              <Footer />
            </div>
        </Providers>
      </body>
    </html>
  );
}
