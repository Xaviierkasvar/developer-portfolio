import { Box } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import CustomDrawer from "../src/components/Drawer/Drawer";
import Footer from "../src/components/Footer/Footer";

const Layout = ({navbarSx, title, children, desc}: ILayout) => {
  const [isOpen, setOpen] = useState(false);
  
  const toggleDrawer = (state?: boolean) => {
    setOpen(state !== undefined ? state : !isOpen);
  }

  // Información para SEO
  const defaultTitle = "Francisco Javier Castillo Barrios | Ingeniero de Sistemas y Desarrollador Full Stack";
  const defaultDescription = "Portfolio profesional de Francisco Javier Castillo Barrios, Ingeniero de Sistemas especializado en desarrollo de software y aplicaciones web. Experiencia como programador Full Stack en PHP, Laravel, JavaScript, Vue, React y más.";
  const defaultImage = "/assets/common/img/avatar/default.png";
  const siteUrl = "https://franciscocastillo.dev"; // Reemplaza con tu dominio real cuando lo tengas

  return (
    <>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Meta tags básicos */}
        <meta name="description" content={desc || defaultDescription} />
        <meta httpEquiv="content-language" content="es"/>
        <meta charSet="UTF-8"/>
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content="Desarrollo Web, Full Stack, PHP, Laravel, JavaScript, Vue, React, Desarrollo de Software, Ingeniero de Sistemas" />
        <meta name="author" content="Francisco Javier Castillo Barrios" />
        <meta name="publisher" content="Francisco Javier Castillo Barrios"/>
        <meta name="copyright" content="Francisco Javier Castillo Barrios"/>
        <meta name="page-topic" content="Desarrollo Web | Portfolio"/>
        <meta name="page-type" content="Portfolio"/>
        <meta name="audience" content="Todos"/>
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={desc || defaultDescription} />
        <meta property="og:image" content={`${siteUrl}${defaultImage}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title || defaultTitle} />
        <meta name="twitter:description" content={desc || defaultDescription} />
        <meta name="twitter:image" content={`${siteUrl}${defaultImage}`} />
      </Head>
      
      <Navbar toggleDrawer={toggleDrawer} navbarSx={navbarSx}/>
      <CustomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
      
      <Box className="site-content">
        {children}
      </Box>
      
      <Footer />
    </>
  )
}

export default Layout;