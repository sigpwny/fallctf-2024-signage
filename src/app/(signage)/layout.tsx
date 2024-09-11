import "@/styles/globals.css";
import "@/styles/fonts.css";
import "./signage.css";

export const metadata = {
  title: "Fall CTF 2024",
  description: "A CTF by SIGPwny",
};

export default function SignageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans overflow-hidden">
        <div className="h-screen w-screen grid">
          {children}
        </div>
      </body>
    </html>
  );
};
