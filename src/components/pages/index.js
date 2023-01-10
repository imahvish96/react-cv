import React, { useRef } from 'react';

import About from '../templates/left-template/about';
import Contact from '../templates/left-template/contact';
import Footer from '../templates/left-template/footer';
import Home from '../templates/left-template/home';
import Work from '../templates/left-template/work';
import Menu from '../templates/right-template/menu';
import Panel from '../templates/right-template/panel';
import SideBar from '../ui/sidebar';


export default function Portfolio() {
  const menuRef = useRef();
  console.log(menuRef.current)
  // const {menu, overlay, nav, footer} = menuRef.current;

  const openSideBar = () => {
    console.log('hello');
    const menu = menuRef.current.menu
    const overlay = menuRef.current.overlay
    const nav = menuRef.current.nav
    const footer = menuRef.current.footer
    menu.style.transform = "translateX(0%)";
    overlay.style.transform = "translateX(0%)";
    for (let item of nav.getElementsByTagName('li')) {
      item.style.opacity = '1';
    }
    footer.style.opacity = '1';
  }

  const closeSideBar = () => {
    const menu = menuRef.current.menu
    const overlay = menuRef.current.overlay
    const nav = menuRef.current.nav
    const footer = menuRef.current.footer
    menu.style.transform = "translateX(101%)";
    overlay.style.transform = "translateX(102%)";
    for (let item of nav.getElementsByTagName('li')) {
      item.style.opacity = '0';
    }
    footer.style.opacity = '0';
  }

  return (
    <React.Fragment>
          <SideBar ref={menuRef} onClose={closeSideBar}/>
        <div className='resumo_fn_left' id='resumo_fn_left'>
            <Home/>  
            <About/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
        <div className='resumo_fn_right' id='resumo_fn_right'>
            <Menu
              onOpen={openSideBar}
            />
            <Panel/>
        </div>
    </React.Fragment>
  )
}
