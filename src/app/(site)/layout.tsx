import "@/styles/globals.css";
import "@/styles/fonts.css";
import "@/styles/signage.css";

export const metadata = {
  title: "Fall CTF 2023",
  description: "A CTF by SIGPwny",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <PreloadResources /> */}
      {/* <Seo /> */}
      <body className="font-sans">
        <div className="container min-h-screen">
          {/* Navbar */}
          {children}
        </div>
        {/* Footer */}
      </body>
    </html>
  );
};
