'use client'

import { useState } from 'react'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const menuItems = [
        { name: 'Trang chủ', href: '/' },
        {
            name: 'Công ty',
            href: '#',
            submenu: [
                { name: 'Về chúng tôi', href: '/cong-ty/ve-chung-toi/' },
                { name: 'Cơ sở vật chất', href: '/cong-ty/co-so-vat-chat/' },
                { name: 'Đội ngũ nhân sự', href: '/cong-ty/doi-ngu-nhan-su/' },
                { name: 'FAQS', href: '/cong-ty/faqs/' }
            ]
        },
    ]

    return (
        <header className="hd">
            <div className="container">
                <div className="hd-wr">
                    <div className="hd-flex">
                        {/* Logo */}
                        <div className="hd-logo">
                            <a href="/">
                                <img
                                    src="/images/logo.svg"
                                    alt="Việt Nam Post Logistics"
                                    width={146}
                                    height={49}
                                />
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hd-nav">
                            <nav className="menu-nav">
                                <ul className="menu-list">
                                    {menuItems.map((item, index) => (
                                        <li key={index} className={`parent fz16 menu-item ${item.submenu ? 'menu-item-has-children dropdown' : ''}`}>
                                            <a className="menu-link" href={item.href}>
                                                {item.name}
                                                {item.submenu && <i className="fa-solid fa-circle-plus"></i>}
                                            </a>
                                            {item.submenu && (
                                                <>
                                                    <i className="bx bxs-chevron-down"></i>
                                                    <ul className="menu-list">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <li key={subIndex} className="parent fz16 menu-item">
                                                                <a className="menu-link" href={subItem.href}>
                                                                    {subItem.name} <i className="fa-solid fa-circle-plus"></i>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Header Actions */}
                        <div className="hd-act">


                            {/* <div className="hd-srch" onClick={() => setIsSearchOpen(true)}>
                                <img src="/images/ic-srch.svg" alt="Search" />
                            </div> */}

                            <LanguageSwitcher />

                            {/* Mobile Menu Toggle */}
                            <div className="burger">
                                <div
                                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                                    id="hamburger"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <svg className="ham" viewBox="0 0 100 100" width="40">
                                        <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"></path>
                                        <path className="line middle" d="m 30,50 h 40"></path>
                                        <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Overlay */}
                {isSearchOpen && (
                    <div className="found foundJS">
                        <div className="found-over foundOver" onClick={() => setIsSearchOpen(false)}></div>
                        <div className="found-x foundClose" onClick={() => setIsSearchOpen(false)}>
                            <i className="fa-solid fa-xmark-large"></i>
                        </div>
                        <div className="found-wr">
                            <div className="container">
                                <div className="found-f">
                                    <p className="tt">TÌM KIẾM</p>
                                    <form method="get" id="searchform" className="searchform" action="/search">
                                        <div className="found-form">
                                            <input
                                                type="search"
                                                className="search-field"
                                                name="s"
                                                placeholder="Tìm kiếm..."
                                                autoFocus
                                            />
                                            <button type="submit">
                                                <img src="/images/ic-srch.svg" alt="Search" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}></div>
            )}



            {/* Mobile Menu */}
            <div className={`mobile ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-con">
                    <div className="mobile-wr">
                        <div className="mobile-nav">
                            <nav className="menu-nav">
                                <ul className="menu-list">
                                    {menuItems.map((item, index) => (
                                        <li key={index} className={`parent fz16 menu-item ${item.submenu ? 'menu-item-has-children dropdown' : ''}`}>
                                            <a className="menu-link" href={item.href}>
                                                {item.name}
                                                {item.submenu && <i className="fa-solid fa-circle-plus"></i>}
                                            </a>
                                            {item.submenu && (
                                                <ul className="menu-list">
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="parent fz16 menu-item">
                                                            <a className="menu-link" href={subItem.href}>
                                                                {subItem.name} <i className="fa-solid fa-circle-plus"></i>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}