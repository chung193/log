'use client'

import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

interface MenuItem {
    name: string
    href: string
    hasChildren?: boolean
    submenu?: MenuItem[]
    isCurrent?: boolean
}

interface LanguageItem {
    code: string
    name: string
    flag: string
    href: string
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isLangOpen, setIsLangOpen] = useState(false)
    const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null)
    const [activeMobileMenus, setActiveMobileMenus] = useState<Record<string, boolean>>({})

    const menuItems: MenuItem[] = [
        {
            name: 'Trang chủ',
            href: '/',
            isCurrent: true
        },
        {
            name: 'Công ty',
            href: 'javascript:;',
            hasChildren: true,
            submenu: [
                {
                    name: 'Về chúng tôi',
                    href: '/cong-ty/ve-chung-toi/',
                    hasChildren: true
                },
            ]
        },
        {
            name: 'Giải pháp',
            href: 'javascript:;',
            hasChildren: true,
            submenu: [
                {
                    name: 'Kho vận',
                    href: '/giai-phap/giai-phap-kho-van/',
                    hasChildren: true
                },
                {
                    name: 'Logistics quốc tế',
                    href: 'javascript:;',
                    hasChildren: true,
                    submenu: [
                        {
                            name: 'Vận tải đường biển',
                            href: '/giai-phap/giai-phap-sea-freight/',
                            hasChildren: true
                        },
                        {
                            name: 'Chuyển phát nhanh Quốc tế',
                            href: '/giai-phap/giai-phap-air-express/',
                            hasChildren: true
                        },
                        {
                            name: 'Vận tải hàng không',
                            href: '/giai-phap/giai-phap-air-cargo/',
                            hasChildren: true
                        },
                        {
                            name: 'Đường bộ xuyên biên giới',
                            href: '/giai-phap/giai-phap-cross-border-trucking/',
                            hasChildren: true
                        },
                        {
                            name: 'Vận tải đường sắt',
                            href: '/giai-phap/giai-phap-railway/',
                            hasChildren: true
                        },
                    ]
                },
                {
                    name: 'TMĐT quốc tế',
                    href: ' /giai-phap/thuong-mai-dien-tu-quoc-te/',
                    hasChildren: true
                },
                {
                    name: 'Logistics nội địa',
                    href: '/giai-phap/logistics-noi-dia/',
                    hasChildren: true
                },
                {
                    name: 'Xuất nhập khẩu',
                    href: '/giai-phap/uy-thac-xuat-nhap-khau/',
                    hasChildren: true,
                    submenu: [
                        {
                            name: 'Tài chính chuỗi cung ứng',
                            href: '/giai-phap/tai-chinh-chuoi-cung-ung/',
                            hasChildren: true
                        },
                        {
                            name: 'Ủy thác xuất nhập khẩu',
                            href: '/giai-phap/uy-thac-xuat-nhap-khau/',
                            hasChildren: true
                        },
                    ]
                },
            ]
        },

        {
            name: 'Liên hệ',
            href: '/lien-he/'
        },
    ]
    const socialLinks = [
        {
            href: 'https://www.facebook.com/VietnamPostLogisticsCompany',
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-fb.svg',
            alt: 'Facebook'
        },
        {
            href: 'https://www.linkedin.com/company/vietnam-post-logistics/',
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-ins.svg',
            alt: 'LinkedIn'
        },
        {
            href: 'https://www.tiktok.com/@vietnampostlogistics',
            icon: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-tiktok.svg',
            alt: 'TikTok'
        },
    ]

    const toggleMobileMenu = (menuKey: string) => {
        setActiveMobileMenus(prev => ({
            ...prev,
            [menuKey]: !prev[menuKey]
        }))
    }

    const isMobileMenuOpen = (menuKey: string) => {
        return activeMobileMenus[menuKey] || false
    }

    // Render desktop menu items recursively
    const renderDesktopMenuItem = (item: MenuItem, index: number, level: number = 0) => {
        const hasChildren = item.submenu && item.submenu.length > 0
        const isActive = activeDesktopMenu === `${index}-${level}`

        return (
            <li
                key={`${index}-${level}`}
                className={`parent fz16 menu-item ${hasChildren ? 'menu-item-has-children dropdown' : ''} ${item.isCurrent ? 'current-menu-item' : ''}`}
                onMouseEnter={() => hasChildren && setActiveDesktopMenu(`${index}-${level}`)}
                onMouseLeave={() => hasChildren && setActiveDesktopMenu(null)}
            >
                <a className="menu-link" href={item.href}>
                    {item.name}
                    {hasChildren && <i className="fa-solid fa-circle-plus"></i>}
                </a>
                {hasChildren && <i className="bx bxs-chevron-down"></i>}

                {hasChildren && item.submenu && isActive && (
                    <ul className={`menu-list ${level > 0 ? 'sub-sub-menu' : ''}`}>
                        {item.submenu.map((subItem, subIndex) => (
                            <li
                                key={`${index}-${level}-${subIndex}`}
                                className={`parent fz16 menu-item ${subItem.submenu ? 'menu-item-has-children dropdown' : ''}`}
                            >
                                <a className="menu-link" href={subItem.href}>
                                    {subItem.name}
                                    {subItem.hasChildren && <i className="fa-solid fa-circle-plus"></i>}
                                </a>
                                {subItem.submenu && <i className="bx bxs-chevron-down"></i>}

                                {subItem.submenu && (
                                    <ul className="menu-list">
                                        {subItem.submenu.map((subSubItem, subSubIndex) => (
                                            <li key={`${index}-${level}-${subIndex}-${subSubIndex}`} className="parent fz16 menu-item">
                                                <a className="menu-link" href={subSubItem.href}>
                                                    {subSubItem.name}
                                                    {subSubItem.hasChildren && <i className="fa-solid fa-circle-plus"></i>}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        )
    }

    // Render mobile menu items recursively
    const renderMobileMenuItem = (item: MenuItem, index: number, level: number = 0) => {
        const hasChildren = item.submenu && item.submenu.length > 0
        const menuKey = `${index}-${level}`
        const isOpen = isMobileMenuOpen(menuKey)

        return (
            <li
                key={menuKey}
                className={`parent fz16 menu-item ${hasChildren ? 'menu-item-has-children dropdown' : ''} ${item.isCurrent ? 'current-menu-item' : ''}`}
            >
                <a
                    className="menu-link"
                    href={item.href}
                    onClick={(e) => {
                        if (hasChildren && item.href === 'javascript:;') {
                            e.preventDefault()
                            toggleMobileMenu(menuKey)
                        }
                    }}
                >
                    {item.name}
                    {hasChildren && (
                        <i
                            className={`fa-solid ${isOpen ? 'fa-circle-minus' : 'fa-circle-plus'}`}
                            onClick={(e) => {
                                if (hasChildren) {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    toggleMobileMenu(menuKey)
                                }
                            }}
                        ></i>
                    )}
                </a>
                {hasChildren && <i className="bx bxs-chevron-down"></i>}

                {hasChildren && item.submenu && isOpen && (
                    <ul className="menu-list">
                        {item.submenu.map((subItem, subIndex) => (
                            <li
                                key={`${index}-${level}-${subIndex}`}
                                className={`parent fz16 menu-item ${subItem.submenu ? 'menu-item-has-children dropdown' : ''}`}
                            >
                                <a
                                    className="menu-link"
                                    href={subItem.href}
                                    onClick={(e) => {
                                        if (subItem.submenu && subItem.href === 'javascript:;') {
                                            e.preventDefault()
                                            toggleMobileMenu(`${index}-${level}-${subIndex}`)
                                        }
                                    }}
                                >
                                    {subItem.name}
                                    {subItem.hasChildren && (
                                        <i
                                            className={`fa-solid ${isMobileMenuOpen(`${index}-${level}-${subIndex}`) ? 'fa-circle-minus' : 'fa-circle-plus'}`}
                                            onClick={(e) => {
                                                if (subItem.hasChildren) {
                                                    e.preventDefault()
                                                    e.stopPropagation()
                                                    toggleMobileMenu(`${index}-${level}-${subIndex}`)
                                                }
                                            }}
                                        ></i>
                                    )}
                                </a>
                                {subItem.submenu && <i className="bx bxs-chevron-down"></i>}

                                {subItem.submenu && isMobileMenuOpen(`${index}-${level}-${subIndex}`) && (
                                    <ul className="menu-list">
                                        {subItem.submenu.map((subSubItem, subSubIndex) => (
                                            <li key={`${index}-${level}-${subIndex}-${subSubIndex}`} className="parent fz16 menu-item">
                                                <a className="menu-link" href={subSubItem.href}>
                                                    {subSubItem.name}
                                                    {subSubItem.hasChildren && <i className="fa-solid fa-circle-plus"></i>}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        )
    }

    return (
        <header className="hd">
            <div className="container">
                <div className="hd-wr">
                    <div className="hd-flex">
                        {/* Logo */}
                        <div className="hd-logo">
                            <a href="https://vietnampostlogistics.com/" className="custom-logo-link" rel="home">
                                <img
                                    width="146"
                                    height="49"
                                    src="/images/logo.svg"
                                    className="custom-logo"
                                    alt="Việt Nam Post Logistics"
                                    decoding="async"
                                />
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hd-nav">
                            <nav className="menu-nav">
                                <ul id="menu-primary" className="menu-list">
                                    {menuItems.map((item, index) => renderDesktopMenuItem(item, index))}
                                </ul>
                            </nav>
                        </div>

                        {/* Header Actions */}
                        <div className="hd-act">


                            <div className="hd-srch" onClick={() => setIsSearchOpen(true)}>
                                <img src="/images/ic-srch.svg" alt="Search" />
                            </div>

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
                                    <form method="get" id="searchform" className="searchform" action="https://vietnampostlogistics.com/">
                                        <div className="found-form">
                                            <input
                                                type="search"
                                                className="search-field"
                                                name="s"
                                                placeholder="Tìm kiếm..."
                                                autoFocus
                                            />
                                            <button type="submit">
                                                <img src="https://vietnampostlogistics.com/template/assets/images/ic-srch.svg" alt="Search" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Overlay */}
            {isMenuOpen && (
                <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}></div>
            )}

            {/* Mobile Menu */}
            <div className={`mobile ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-con">
                    <div className="mobile-wr">
                        <div className="mobile-nav">
                            <nav className="menu-nav">
                                <ul id="menu-primary-1" className="menu-list">
                                    {menuItems.map((item, index) => renderMobileMenuItem(item, index))}
                                </ul>
                            </nav>
                        </div>

                        <div className="mobile-content">
                            <div className="social">
                                <div className="social-list">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                        >
                                            <img src={social.icon} alt={social.alt} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}