/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import './style.css';

import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"


const SideBar = ({ onClose }, ref) => {
    console.log('Hi')
    const overlayRef = useRef();
    const menuRef = useRef();
    const navRef = useRef();
    const footerRef = useRef();

    useImperativeHandle( ref, () => {
        return {
            overlay: overlayRef.current,
            menu: menuRef.current,
            nav: navRef.current,
            footer: footerRef.current
        }
    }, [])
    return (
        <>
            <a href="#" class="resumo_fn_nav_overlay" ref={overlayRef}></a>
            <div class="resumo_fn_navigation" ref={menuRef}>
                <a class="closer" onClick={onClose}></a>

                {/* <!-- Navigation Content --> */}
                <div class="nav_in">

                    <nav id="nav" ref={navRef}>
                        <h3 class="label">Menu</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div class="nav_footer" ref={footerRef}>
                        <div class="social">
                            <ul>
                                <li><a href="#" target="_blank"><FaTwitter/></a></li>
                                <li><a href="#" target="_blank"><FaInstagram/></a></li>
                                <li><a href="#" target="_blank"><FaLinkedinIn/></a></li>
                            </ul>
                        </div>
                        <div class="copyright">
                            <a href="https://frenify.com/" target="_blank">Developed by Mahvish</a>
                        </div>
                    </div>

                </div>
                {/* <!-- /Navigation Content --> */}

            </div>
        </>
)
}

export default forwardRef(SideBar)
