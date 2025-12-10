
import "./globals.css";
import Link from "next/link";


export default function RootLayout({ children}: { children: React.ReactNode})
{
  return (
    <html lang="en">
       <body>
      <nav className="flex gap-4 text-black" >
        Luke Fullstack
        <Link href="/Customer">Insert</Link>
        
      </nav>
      {children}


      
      </body>
    </html>
  );
}


 