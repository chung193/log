'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/redux/store'
import { setMenuActive } from '@/redux/commonSlice'

interface MenuItem {
    id: string
    name: string
    nameEn: string
    href: string
    hasChildren?: boolean
    submenu?: MenuItem[]
    isCurrent?: boolean
}

export default function Header({ initialLocale = 'en' }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [activeMobileMenus, setActiveMobileMenus] = useState<Record<string, boolean>>({})
    const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null)

    const activeItem = useSelector((state: RootState) => state.common.menu.active)
    const dispatch = useDispatch()
    const pathname = usePathname()

    // Load active menu từ localStorage khi component mount
    useEffect(() => {
        const savedActiveMenu = localStorage.getItem('activeMenu')
        if (savedActiveMenu) {
            dispatch(setMenuActive(savedActiveMenu))
        }
    }, [dispatch])

    // Lưu active menu vào localStorage khi thay đổi
    useEffect(() => {
        if (activeItem) {
            localStorage.setItem('activeMenu', activeItem)
        }
    }, [activeItem])

    // Set active menu dựa trên current path
    useEffect(() => {
        const findActiveMenuByPath = (items: MenuItem[], path: string): string | null => {
            for (const item of items) {
                // Kiểm tra exact match
                if (item.href === path) {
                    return item.id
                }

                // Kiểm tra partial match (cho các trang con)
                if (item.href !== 'javascript:;' && path.startsWith(item.href)) {
                    return item.id
                }

                // Đệ quy kiểm tra submenu
                if (item.submenu) {
                    const found = findActiveMenuByPath(item.submenu, path)
                    if (found) return found
                }
            }
            return null
        }

        const activeId = findActiveMenuByPath(menuItems, pathname)
        if (activeId && activeItem !== activeId) {
            dispatch(setMenuActive(activeId))
        }
    }, [pathname, dispatch])

    // Menu data với ID và English names
    const menuItems = useMemo<MenuItem[]>(() => [
        {
            id: 'home',
            name: 'Trang chủ',
            nameEn: 'Home',
            href: '/',
            isCurrent: true
        },
        {
            id: 'company',
            name: 'Công ty',
            nameEn: 'Company',
            href: 'javascript:;',
            hasChildren: true,
            submenu: [
                {
                    id: 'about-us',
                    name: 'Về chúng tôi',
                    nameEn: 'About Us',
                    href: '/cong-ty/ve-chung-toi/',
                    hasChildren: true
                },
                {
                    id: 'company-profile',
                    name: 'Giới thiệu công ty',
                    nameEn: 'Company Profile',
                    href: '/cong-ty/gioi-thieu-cong-ty/',
                    hasChildren: false
                },
                {
                    id: 'vision-mission',
                    name: 'Tầm nhìn - Sứ mệnh',
                    nameEn: 'Vision - Mission',
                    href: '/cong-ty/tam-nhin-su-menh/',
                    hasChildren: false
                },
                {
                    id: 'core-values',
                    name: 'Giá trị cốt lõi',
                    nameEn: 'Core Values',
                    href: '/cong-ty/gia-tri-cot-loi/',
                    hasChildren: false
                },
                {
                    id: 'certificates',
                    name: 'Chứng chỉ & Giải thưởng',
                    nameEn: 'Certificates & Awards',
                    href: '/cong-ty/chung-chi-giai-thuong/',
                    hasChildren: false
                }
            ]
        },
        {
            id: 'solutions',
            name: 'Giải pháp',
            nameEn: 'Solutions',
            href: 'javascript:;',
            hasChildren: true,
            submenu: [
                {
                    id: 'warehouse-management',
                    name: 'Kho vận',
                    nameEn: 'Warehouse Management',
                    href: '/giai-phap/giai-phap-kho-van/',
                    hasChildren: true,
                    submenu: [
                        {
                            id: 'distribution-center',
                            name: 'Trung tâm phân phối',
                            nameEn: 'Distribution Center',
                            href: '/giai-phap/trung-tam-phan-phoi/',
                            hasChildren: false
                        },
                        {
                            id: 'fulfillment-service',
                            name: 'Dịch vụ fulfillment',
                            nameEn: 'Fulfillment Service',
                            href: '/giai-phap/dich-vu-fulfillment/',
                            hasChildren: false
                        }
                    ]
                },
                {
                    id: 'international-logistics',
                    name: 'Logistics quốc tế',
                    nameEn: 'International Logistics',
                    href: 'javascript:;',
                    hasChildren: true,
                    submenu: [
                        {
                            id: 'sea-freight',
                            name: 'Vận tải đường biển',
                            nameEn: 'Sea Freight',
                            href: '/giai-phap/giai-phap-sea-freight/',
                            hasChildren: true
                        },
                        {
                            id: 'air-express',
                            name: 'Chuyển phát nhanh Quốc tế',
                            nameEn: 'International Express',
                            href: '/giai-phap/giai-phap-air-express/',
                            hasChildren: true
                        },
                        {
                            id: 'air-cargo',
                            name: 'Vận tải hàng không',
                            nameEn: 'Air Cargo',
                            href: '/giai-phap/giai-phap-air-cargo/',
                            hasChildren: true
                        },
                        {
                            id: 'cross-border-trucking',
                            name: 'Đường bộ xuyên biên giới',
                            nameEn: 'Cross-border Trucking',
                            href: '/giai-phap/giai-phap-cross-border-trucking/',
                            hasChildren: true
                        },
                        {
                            id: 'railway-transport',
                            name: 'Vận tải đường sắt',
                            nameEn: 'Railway Transport',
                            href: '/giai-phap/giai-phap-railway/',
                            hasChildren: true
                        },
                    ]
                },
                {
                    id: 'ecommerce-international',
                    name: 'TMĐT quốc tế',
                    nameEn: 'International E-commerce',
                    href: '/giai-phap/thuong-mai-dien-tu-quoc-te/',
                    hasChildren: true,
                    submenu: [
                        {
                            id: 'ecommerce-solutions',
                            name: 'Giải pháp TMĐT',
                            nameEn: 'E-commerce Solutions',
                            href: '/giai-phap/giai-phap-thuong-mai-dien-tu/',
                            hasChildren: false
                        },
                        {
                            id: 'last-mile-delivery',
                            name: 'Giao hàng chặng cuối',
                            nameEn: 'Last Mile Delivery',
                            href: '/giai-phap/giao-hang-chang-cuoi/',
                            hasChildren: false
                        }
                    ]
                },
                {
                    id: 'domestic-logistics',
                    name: 'Logistics nội địa',
                    nameEn: 'Domestic Logistics',
                    href: '/giai-phap/logistics-noi-dia/',
                    hasChildren: true,
                    submenu: [
                        {
                            id: 'domestic-express',
                            name: 'Chuyển phát nhanh nội địa',
                            nameEn: 'Domestic Express',
                            href: '/giai-phap/chuyen-phat-nhanh-noi-dia/',
                            hasChildren: false
                        },
                        {
                            id: 'b2b-logistics',
                            name: 'Logistics B2B',
                            nameEn: 'B2B Logistics',
                            href: '/giai-phap/logistics-b2b/',
                            hasChildren: false
                        }
                    ]
                },
                {
                    id: 'import-export',
                    name: 'Xuất nhập khẩu',
                    nameEn: 'Import & Export',
                    href: '/giai-phap/uy-thac-xuat-nhap-khau/',
                    hasChildren: true,
                    submenu: [
                        {
                            id: 'supply-chain-finance',
                            name: 'Tài chính chuỗi cung ứng',
                            nameEn: 'Supply Chain Finance',
                            href: '/giai-phap/tai-chinh-chuoi-cung-ung/',
                            hasChildren: true
                        },
                        {
                            id: 'import-export-entrustment',
                            name: 'Ủy thác xuất nhập khẩu',
                            nameEn: 'Import & Export Entrustment',
                            href: '/giai-phap/uy-thac-xuat-nhap-khau/',
                            hasChildren: true
                        },
                        {
                            id: 'customs-clearance',
                            name: 'Thông quan hải quan',
                            nameEn: 'Customs Clearance',
                            href: '/giai-phap/thong-quan-hai-quan/',
                            hasChildren: false
                        }
                    ]
                },
                {
                    id: 'digital-solutions',
                    name: 'Giải pháp số',
                    nameEn: 'Digital Solutions',
                    href: '/giai-phap/giai-phap-so/',
                    hasChildren: true,
                    submenu: [
                        {
                            id: 'tracking-system',
                            name: 'Hệ thống tracking',
                            nameEn: 'Tracking System',
                            href: '/giai-phap/he-thong-tracking/',
                            hasChildren: false
                        },
                        {
                            id: 'order-management',
                            name: 'Quản lý đơn hàng',
                            nameEn: 'Order Management',
                            href: '/giai-phap/quan-ly-don-hang/',
                            hasChildren: false
                        }
                    ]
                }
            ]
        },
        {
            id: 'network',
            name: 'Mạng lưới',
            nameEn: 'Network',
            href: 'javascript:;',
            hasChildren: true,
            submenu: [
                {
                    id: 'global-network',
                    name: 'Mạng lưới toàn cầu',
                    nameEn: 'Global Network',
                    href: '/mang-luoi/mang-luoi-toan-cau/',
                    hasChildren: false
                },
                {
                    id: 'vietnam-network',
                    name: 'Mạng lưới tại Việt Nam',
                    nameEn: 'Vietnam Network',
                    href: '/mang-luoi/mang-luoi-tai-viet-nam/',
                    hasChildren: false
                },
                {
                    id: 'partners',
                    name: 'Đối tác',
                    nameEn: 'Partners',
                    href: '/mang-luoi/doi-tac/',
                    hasChildren: false
                }
            ]
        },
        {
            id: 'resources',
            name: 'Tài nguyên',
            nameEn: 'Resources',
            href: 'javascript:;',
            hasChildren: true,
            submenu: [
                {
                    id: 'news',
                    name: 'Tin tức',
                    nameEn: 'News',
                    href: '/tai-nguyen/tin-tuc/',
                    hasChildren: true
                },
                {
                    id: 'blog',
                    name: 'Blog',
                    nameEn: 'Blog',
                    href: '/tai-nguyen/blog/',
                    hasChildren: true
                },
                {
                    id: 'faq',
                    name: 'Câu hỏi thường gặp',
                    nameEn: 'FAQ',
                    href: '/tai-nguyen/cau-hoi-thuong-gap/',
                    hasChildren: false
                },
                {
                    id: 'downloads',
                    name: 'Tải xuống',
                    nameEn: 'Downloads',
                    href: '/tai-nguyen/tai-xuong/',
                    hasChildren: false
                }
            ]
        },
        {
            id: 'contact',
            name: 'Liên hệ',
            nameEn: 'Contact',
            href: '/lien-he/',
            hasChildren: false
        },
    ], [])

    const socialLinks = useMemo(() => [
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
    ], [])

    // Mobile menu handlers
    const toggleMobileMenu = useCallback((menuKey: string) => {
        setActiveMobileMenus(prev => ({
            ...prev,
            [menuKey]: !prev[menuKey]
        }))
    }, [])

    const isMobileMenuOpen = useCallback((menuKey: string) => {
        return activeMobileMenus[menuKey] || false
    }, [activeMobileMenus])

    // Desktop menu handlers
    const handleDesktopMenuItemHover = useCallback((menuId: string | null) => {
        setHoveredMenuItem(menuId)
    }, [])

    const handleMenuItemClick = useCallback((item: MenuItem) => {
        // Don't dispatch for dropdown parent items
        if (item.href === 'javascript:;') {
            return
        }

        // Update active menu in Redux
        dispatch(setMenuActive(item.id))

        // Lưu vào localStorage
        localStorage.setItem('activeMenu', item.id)

        // Nếu là mobile menu, đóng nó
        setIsMenuOpen(false)
    }, [dispatch])

    // Desktop menu render function với Next.js Link
    const renderDesktopMenuItem = useCallback((item: MenuItem, index: number, level: number = 0) => {
        const hasChildren = item.submenu && item.submenu.length > 0
        const isHovered = hoveredMenuItem === item.id
        const isActive = activeItem === item.id
        const showSubmenu = hasChildren && (isHovered || isActive)
        const isCurrentPage = pathname === item.href

        return (
            <li
                key={`${item.id}-${level}`}
                className={`parent fz16 menu-item ${hasChildren ? 'menu-item-has-children dropdown' : ''} ${isCurrentPage ? 'current-menu-item' : ''}`}
                onMouseEnter={() => hasChildren && handleDesktopMenuItemHover(item.id)}
                onMouseLeave={() => hasChildren && handleDesktopMenuItemHover(null)}
            >
                {hasChildren && item.href === 'javascript:;' ? (
                    // Dropdown parent không clickable
                    <span className="menu-link">
                        {item.name}
                        {hasChildren && <i className="fa-solid fa-circle-plus"></i>}
                    </span>
                ) : (
                    // Real link với Next.js Link
                    <Link
                        href={item.href}
                        className="menu-link"
                        onClick={() => handleMenuItemClick(item)}
                        scroll={false}
                    >
                        {item.name}
                        {hasChildren && <i className="fa-solid fa-circle-plus"></i>}
                    </Link>
                )}
                {hasChildren && <i className="bx bxs-chevron-down"></i>}

                {/* Show submenu on hover or active */}
                {showSubmenu && item.submenu && (
                    <ul className={`menu-list ${level > 0 ? 'sub-sub-menu' : ''}`}>
                        {item.submenu.map((subItem, subIndex) => {
                            const isSubCurrent = pathname === subItem.href
                            return (
                                <li
                                    key={`${subItem.id}-${level + 1}`}
                                    className={`parent fz16 menu-item ${subItem.submenu ? 'menu-item-has-children dropdown' : ''} ${isSubCurrent ? 'current-menu-item' : ''}`}
                                >
                                    {subItem.submenu && subItem.href === 'javascript:;' ? (
                                        // Dropdown parent không clickable
                                        <span className="menu-link">
                                            {subItem.name}
                                            {subItem.hasChildren && <i className="fa-solid fa-circle-plus"></i>}
                                        </span>
                                    ) : (
                                        // Real link
                                        <Link
                                            href={subItem.href}
                                            className="menu-link"
                                            onClick={() => handleMenuItemClick(subItem)}
                                            scroll={false}
                                        >
                                            {subItem.name}
                                            {subItem.hasChildren && <i className="fa-solid fa-circle-plus"></i>}
                                        </Link>
                                    )}
                                    {subItem.submenu && <i className="bx bxs-chevron-down"></i>}

                                    {subItem.submenu && (
                                        <ul className="menu-list">
                                            {subItem.submenu.map((subSubItem, subSubIndex) => {
                                                const isSubSubCurrent = pathname === subSubItem.href
                                                return (
                                                    <li
                                                        key={`${subSubItem.id}-${level + 2}`}
                                                        className={`parent fz16 menu-item ${isSubSubCurrent ? 'current-menu-item' : ''}`}
                                                    >
                                                        <Link
                                                            href={subSubItem.href}
                                                            className="menu-link"
                                                            onClick={() => handleMenuItemClick(subSubItem)}
                                                            scroll={false}
                                                        >
                                                            {subSubItem.name}
                                                            {subSubItem.hasChildren && <i className="fa-solid fa-circle-plus"></i>}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                )}
            </li>
        )
    }, [hoveredMenuItem, activeItem, pathname, handleMenuItemClick, handleDesktopMenuItemHover])

    // Mobile menu render function với Next.js Link
    const renderMobileMenuItem = useCallback((item: MenuItem, index: number, level: number = 0) => {
        const hasChildren = item.submenu && item.submenu.length > 0
        const menuKey = `${item.id}-${level}`
        const isOpen = isMobileMenuOpen(menuKey)
        const isCurrentPage = pathname === item.href

        return (
            <li
                key={menuKey}
                className={`parent fz16 menu-item ${hasChildren ? 'menu-item-has-children dropdown' : ''} ${isCurrentPage ? 'current-menu-item' : ''}`}
            >
                {hasChildren && item.href === 'javascript:;' ? (
                    // Dropdown parent chỉ để toggle
                    <span
                        className="menu-link"
                        onClick={(e) => {
                            e.preventDefault()
                            toggleMobileMenu(menuKey)
                        }}
                    >
                        {item.name}
                        {hasChildren && (
                            <i
                                className={`fa-solid ${isOpen ? 'fa-circle-minus' : 'fa-circle-plus'} mobile-menu-toggle`}
                                onClick={(e) => {
                                    if (hasChildren) {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        toggleMobileMenu(menuKey)
                                    }
                                }}
                            ></i>
                        )}
                    </span>
                ) : (
                    // Real link với Next.js Link
                    <Link
                        href={item.href}
                        className="menu-link"
                        onClick={() => {
                            handleMenuItemClick(item)
                            setIsMenuOpen(false)
                        }}
                        scroll={false}
                    >
                        {item.name}
                        {hasChildren && (
                            <i
                                className={`fa-solid ${isOpen ? 'fa-circle-minus' : 'fa-circle-plus'} mobile-menu-toggle`}
                                onClick={(e) => {
                                    if (hasChildren && item.href === 'javascript:;') {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        toggleMobileMenu(menuKey)
                                    }
                                }}
                            ></i>
                        )}
                    </Link>
                )}
                {hasChildren && <i className="bx bxs-chevron-down"></i>}

                {hasChildren && item.submenu && isOpen && (
                    <ul className="menu-list">
                        {item.submenu.map((subItem, subIndex) => {
                            const subMenuKey = `${subItem.id}-${level + 1}`
                            const isSubOpen = isMobileMenuOpen(subMenuKey)
                            const isSubCurrent = pathname === subItem.href

                            return (
                                <li
                                    key={`${subItem.id}-${level + 1}`}
                                    className={`parent fz16 menu-item ${subItem.submenu ? 'menu-item-has-children dropdown' : ''} ${isSubCurrent ? 'current-menu-item' : ''}`}
                                >
                                    {subItem.submenu && subItem.href === 'javascript:;' ? (
                                        // Dropdown parent
                                        <span
                                            className="menu-link"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                toggleMobileMenu(subMenuKey)
                                            }}
                                        >
                                            {subItem.name}
                                            {subItem.hasChildren && (
                                                <i
                                                    className={`fa-solid ${isSubOpen ? 'fa-circle-minus' : 'fa-circle-plus'} mobile-menu-toggle`}
                                                    onClick={(e) => {
                                                        if (subItem.hasChildren) {
                                                            e.preventDefault()
                                                            e.stopPropagation()
                                                            toggleMobileMenu(subMenuKey)
                                                        }
                                                    }}
                                                ></i>
                                            )}
                                        </span>
                                    ) : (
                                        // Real link
                                        <Link
                                            href={subItem.href}
                                            className="menu-link"
                                            onClick={() => {
                                                handleMenuItemClick(subItem)
                                                setIsMenuOpen(false)
                                            }}
                                            scroll={false}
                                        >
                                            {subItem.name}
                                            {subItem.hasChildren && (
                                                <i
                                                    className={`fa-solid ${isSubOpen ? 'fa-circle-minus' : 'fa-circle-plus'} mobile-menu-toggle`}
                                                    onClick={(e) => {
                                                        if (subItem.hasChildren && subItem.href === 'javascript:;') {
                                                            e.preventDefault()
                                                            e.stopPropagation()
                                                            toggleMobileMenu(subMenuKey)
                                                        }
                                                    }}
                                                ></i>
                                            )}
                                        </Link>
                                    )}
                                    {subItem.submenu && <i className="bx bxs-chevron-down"></i>}

                                    {subItem.submenu && isSubOpen && (
                                        <ul className="menu-list">
                                            {subItem.submenu.map((subSubItem, subSubIndex) => {
                                                const isSubSubCurrent = pathname === subSubItem.href
                                                return (
                                                    <li
                                                        key={`${subSubItem.id}-${level + 2}`}
                                                        className={`parent fz16 menu-item ${isSubSubCurrent ? 'current-menu-item' : ''}`}
                                                    >
                                                        <Link
                                                            href={subSubItem.href}
                                                            className="menu-link"
                                                            onClick={() => {
                                                                handleMenuItemClick(subSubItem)
                                                                setIsMenuOpen(false)
                                                            }}
                                                            scroll={false}
                                                        >
                                                            {subSubItem.name}
                                                            {subSubItem.hasChildren && <i className="fa-solid fa-circle-plus"></i>}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                )}
            </li>
        )
    }, [isMobileMenuOpen, toggleMobileMenu, pathname, handleMenuItemClick])

    return (
        <header className="hd">
            <div className="container">
                <div className="hd-wr">
                    <div className="hd-flex">
                        {/* Logo với Next.js Link */}
                        <div className="hd-logo">
                            <Link href="/" className="custom-logo-link" rel="home">
                                <img
                                    width="146"
                                    height="49"
                                    src="/images/logo.svg"
                                    className="custom-logo"
                                    alt="Việt Nam Post Logistics"
                                    decoding="async"
                                />
                            </Link>
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
                                            key={social.href}
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