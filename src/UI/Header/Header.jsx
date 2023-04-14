import Breadcrumbs from './Breadcrumbs';
import HeaderTop from "./HeaderTop";
import { useState, useEffect } from "react";
import MobileHeaderTop from './mobile/MobileHeaderTop';

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
      {screenWidth <= 860 ? < MobileHeaderTop /> : <HeaderTop />}
      <Breadcrumbs />
    </>
  )
}

export default Header;