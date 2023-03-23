import HeaderTop from "./HeaderTop";
import Breadcrumbs from './Breadcrumbs';
import HeaderTopTest from "./../Header/TestHeader/HeaderTopTest";
import { useState, useEffect } from "react";

const Header = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* <HeaderTop/> */}
      {/* <HeaderTopTest /> */}
      {screenWidth <= 860 ? < HeaderTop /> : <HeaderTopTest />}
      <Breadcrumbs />
    </>
  )
}

export default Header