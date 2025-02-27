// app/layout.js
 // Asegúrate de tener los componentes correctos
 "use client";
 import { usePathname } from 'next/navigation';
 import Footer from '@/components/Footer';
 import { Header } from '@/components/Header';
 import './globals.css';
 import { Oswald, Montserrat } from 'next/font/google';
 
 
 
 
 const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] });
 const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
 
 export default function RootLayout({ children }) {
   const pathname = usePathname();
 
   const isHome = pathname === "/"
 
  
 
 
   return (
     <html lang="en">
 
       
       
       <body className={`${oswald.className} ${montserrat.className} relative`}>
 
       {isHome && (
         <video
         autoPlay
         loop
         muted
         playsInline
         className="absolute top-0 left-0 w-full h-full object-cover -z-10"
       >
         <source src="/video/Home_Video.mp4" type="video/mp4" />
         Tu navegador no soporta videos.
       </video> 
       )}
         
         <Header />  {/* Componente Header */}
       
           {children}  {/* Aquí se renderiza el contenido de las páginas */}
         
         <Footer />  {/* Componente Footer */}
         
       </body>
     </html>
   );
 }
