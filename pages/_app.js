import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/scss/themes.scss";
// import Layout from "../src/components/layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("App rerendered");
    // <html lang="en" data-layout-style="default" data-sidebar-size="lg" data-sidebar="dark" data-layout-mode="light" data-layout-width="fluid" data-layout-position="fixed" data-topbar="light" data-layout="vertical" data-sidebar-image="none"></html>
    function changeHTMLAttribute(attribute, value) {
      if (document && document.documentElement)
        document.documentElement.setAttribute(attribute, value);
    }
    // we have added the below attributes to HTML tag beacuse we are using a website teplate and template id dependent on this attributes
    //the styling in scss files is done with respect to the below attributes in html
    changeHTMLAttribute("data-layout-style", "default");
    changeHTMLAttribute("data-sidebar-size", "lg");
    changeHTMLAttribute("data-sidebar", "dark");
    changeHTMLAttribute("data-layout-mode", "light");
    changeHTMLAttribute("ddata-layout-width", "fluid");
    changeHTMLAttribute("data-layout-position", "fixed");
    changeHTMLAttribute("data-topbar", "light");
    changeHTMLAttribute("data-layout", "vertical");
    changeHTMLAttribute("data-sidebar-image", "none");
  },[]);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);

  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );
}

export default MyApp;


// TODO: split css files for fast reloaidng
// TODO: see if you can upload with drap and drop files in create project page on multiple OS and browsers
// TODO: see if editor works properly in create project page
