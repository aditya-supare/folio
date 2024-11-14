import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "./provider";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa";
import Menu from "~/components/ui/menu/Menu"



export const metadata: Metadata = {
  title: "AdityaSupare Portfolio",
  description: "tech and art minimilistic portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


function TopNav(){
  return (
    <nav className="w-full flex flex-wrap items-center p-4 border-b-[1px] border-[#dcdbc8] text-[#b8b79d] ">
    <div className="flex items-center mb-2 md:mb-0 w-full md:w-auto justify-center md:justify-start">
      <span className="font-bold text-lg flex items-center">
        <span className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></span>
        Folio
      </span>
    </div>

    <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-center flex-1">
      <Link href="/" passHref>
        <Button variant="outline" className="rounded-full flex items-center gap-2 py-2 md:py-5">
          <FaHome className="text-lg" />
          <span className="hidden md:inline">Home</span>
        </Button>
      </Link>
      <Link href="/projects" passHref>
        <Button variant="outline" className="rounded-full flex items-center gap-2 py-2 md:py-5">
          <FaProjectDiagram className="text-lg" />
          <span className="hidden md:inline">My Projects</span>
        </Button>
      </Link>
      <Link href="/about" passHref>
        <Button variant="outline" className="rounded-full flex items-center gap-2 py-2 md:py-5">
          <FaUser className="text-lg" />
          <span className="hidden md:inline">About Me</span>
        </Button>
      </Link>
    </div>

    
    <div className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0">
      <Link href="/contact" passHref>
        <Button variant="outline" className="rounded-full flex items-center gap-2 py-2 md:py-5">
          <FaEnvelope className="text-lg" />
          <span className="hidden md:inline">Contact Me</span>
        </Button>
      </Link>    
    </div>
  </nav>
  )
}



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Menu/>
            {/* <TopNav/> */}
            {children}
            
          </ThemeProvider>
          </body>
    </html>
  );
}
