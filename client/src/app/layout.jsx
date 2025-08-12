import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "sonner";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ['latin'],
});


export const metadata = {
  title: "Climate Care Network",
  description: "A platform to connect and support climate care initiatives",
  icons: {
    icon: '/my-favicon.png', // The path to the favicon in the `public` directory
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${JetBrainsMono.variable}  antialiased`}
      ><Toaster position="top-right" richColors />

        <Header style={{
          position:'fixed',
          zIndex:'1000px'
        }}/>
        {children}
      </body>
    </html>
  );
}
