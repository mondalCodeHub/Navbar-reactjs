import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';

/*
    navbar structure breakdown
    nav
        navCenter
            navHeader
            h4(title or logo)
            button(navToggle)
            linksContainer or showContainer
                links(ul)
                    link(li)
                    #link1
                    #link2
                    ...
                    #linkX
                socialIcons(ul)
                    #icon1
                    #icon2
                    ...
                    #iconX (note: you can use any icon . i have used react-icons but fontawesome is alos a good option)

*/

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(true);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    // useEffect(() => {
    //     const linksHeight = linksRef.current.getBoundingClientRect().height
    //     if (showLinks) {
    //         linksContainerRef.current.style.height = `${linksHeight}px`
    //     } else {
    //         linksContainerRef.current.style.height = '0px';
    //     }
    // }, [showLinks])

    return (
        <>
            <nav >
                <div className="navCenter">
                    <div className="navHeader">
                        <h4 className="title">mondalcodehub</h4>

                        <button className="navToggle" onClick={() => setShowLinks(!showLinks)}>
                            <FaBars />
                        </button>
                    </div>
                    {
                        showLinks && (
                            // <div className={`${showLinks ? 'linksContainer showContainer' : 'linksContainer'}`} >
                            <div className='linksContainer' ref={linksContainerRef}>
                                <ul className="links" ref={linksRef}>
                                    {
                                        links.map((link) => {
                                            const { id, url, text } = link;
                                            return (
                                                <li key={id} className='linksliOne'>
                                                    <a href={url}>{text}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }

                    <ul className="socialIcons">
                        {
                            social.map((socialInfo) => {
                                const { id, url, icon } = socialInfo;
                                return (
                                    <li key={id} className='li-a'>
                                        <a href={url}>{icon}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;

// @mondalcodehub-NOV22