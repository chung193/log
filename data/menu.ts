import { Locale } from "@/lib/i18n"

// data/menu.ts
export interface MenuItem {
    id: string
    name: string
    nameEn: string
    href: string
    hasChildren?: boolean
    submenu?: MenuItem[]
    isCurrent?: boolean
}

// Menu data với ID và English names
const menuData: MenuItem[] = [
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
                id: 'warehouse',
                name: 'Kho vận',
                nameEn: 'Warehouse',
                href: '/giai-phap/giai-phap-kho-van/',
                hasChildren: false
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
                        href: '/giai-phap/giai-phap-sea-freight',
                        hasChildren: false
                    },
                    {
                        id: 'international-express',
                        name: 'Chuyển phát nhanh quốc tế',
                        nameEn: 'International Express',
                        href: '/giai-phap/giai-phap-air-express/',
                        hasChildren: false
                    },
                    {
                        id: 'air-cargo',
                        name: 'Vận tải hàng không',
                        nameEn: 'Air Cargo',
                        href: '/giai-phap/giai-phap-air-cargo/',
                        hasChildren: false
                    },
                    {
                        id: 'cross-border-trucking',
                        name: 'Đường bộ xuyên biên giới',
                        nameEn: 'Cross-border Trucking',
                        href: '/giai-phap/giai-phap-cross-border-trucking',
                        hasChildren: false
                    },
                    {
                        id: 'railway-transport',
                        name: 'Vận tải đường sắt',
                        nameEn: 'Railway Transport',
                        href: '/giai-phap/giai-phap-railway/',
                        hasChildren: false
                    }
                ]
            },
            {
                id: 'ecommerce-international',
                name: 'TMĐT quốc tế',
                nameEn: 'International E-commerce',
                href: '/giai-phap/thuong-mai-dien-tu-quoc-te',
                hasChildren: false
            },
            {
                id: 'domestic-logistics',
                name: 'Logistics nội địa',
                nameEn: 'Domestic Logistics',
                href: '/giai-phap/logistics-noi-dia/',
                hasChildren: false
            },
            {
                id: 'import-export',
                name: 'Xuất nhập khẩu',
                nameEn: 'Import-Export',
                href: 'javascript:;',
                hasChildren: true,
                submenu: [
                    {
                        id: 'supply-chain-finance',
                        name: 'Tài chính chuỗi cung ứng',
                        nameEn: 'Supply Chain Finance',
                        href: '/giai-phap/tai-chinh-chuoi-cung-ung/',
                        hasChildren: false
                    },
                    {
                        id: 'import-export-trust',
                        name: 'Ủy thác xuất nhập khẩu',
                        nameEn: 'Import-Export Trust',
                        href: '/giai-phap/uy-thac-xuat-nhap-khau/',
                        hasChildren: false
                    }
                ]
            },
        ]
    },
    {
        id: 'contact',
        name: 'Liên hệ',
        nameEn: 'Contact',
        href: '/lien-he/',
        hasChildren: false
    },
]

// Helper function để lấy text theo locale
const getLocalizedText = (item: MenuItem, locale: Locale): string => {
    return locale === 'en' ? item.nameEn : item.name
}

// Recursive function để map menu với đa ngôn ngữ
const mapMenuRecursive = (items: MenuItem[], locale: Locale): MenuItem[] => {
    return items.map(item => ({
        ...item,
        name: getLocalizedText(item, locale),
        submenu: item.submenu ? mapMenuRecursive(item.submenu, locale) : undefined
    }))
}

// Hàm chính để lấy menu theo locale
export const getMenuByLocale = (locale: Locale): MenuItem[] => {
    return mapMenuRecursive(menuData, locale)
}

// Hàm để tìm menu item theo path
export const findMenuItemByPath = (path: string, locale: Locale = 'vi'): MenuItem | null => {
    const searchRecursive = (items: MenuItem[]): MenuItem | null => {
        for (const item of items) {
            if (item.href === path) {
                return { ...item, name: getLocalizedText(item, locale) }
            }
            if (item.submenu) {
                const found = searchRecursive(item.submenu)
                if (found) return found
            }
        }
        return null
    }

    return searchRecursive(menuData)
}

// Hàm để lấy breadcrumb path
export const getBreadcrumbPath = (path: string, locale: Locale = 'vi'): MenuItem[] => {
    const result: MenuItem[] = []

    const searchRecursive = (items: MenuItem[], parents: MenuItem[] = []): boolean => {
        for (const item of items) {
            const currentPath = [...parents, item]

            if (item.href === path) {
                result.push(...currentPath.map(p => ({
                    ...p,
                    name: getLocalizedText(p, locale)
                })))
                return true
            }

            if (item.submenu && searchRecursive(item.submenu, currentPath)) {
                return true
            }
        }
        return false
    }

    searchRecursive(menuData)
    return result
}

// Cache để tối ưu performance
let cachedMenu: Record<string, MenuItem[]> = {}

// Hàm lấy menu với cache
export const getMenuByLocaleMemoized = (locale: Locale): MenuItem[] => {
    if (!cachedMenu[locale]) {
        cachedMenu[locale] = getMenuByLocale(locale)
    }
    return cachedMenu[locale]
}

// Hàm clear cache khi cần
export const clearMenuCache = (): void => {
    cachedMenu = {}
}

// Hàm validate menu data (chỉ chạy trong development)
const validateMenuData = (): void => {
    if (process.env.NODE_ENV !== 'development') return

    const ids = new Set<string>()

    const validateRecursive = (items: MenuItem[], level = 0): boolean => {
        for (const item of items) {
            // Check duplicate ID
            if (ids.has(item.id)) {
                console.warn(`[Menu Validation] Duplicate menu ID: ${item.id}`)
                return false
            }
            ids.add(item.id)

            // Check href hợp lệ
            if (item.href === 'javascript:;' && !item.hasChildren && !item.submenu?.length) {
                console.warn(`[Menu Validation] Menu item "${item.id}" has javascript href but no children`)
            }

            // Check consistency giữa hasChildren và submenu
            if (item.hasChildren && (!item.submenu || item.submenu.length === 0)) {
                console.warn(`[Menu Validation] Menu item "${item.id}" has hasChildren=true but no submenu`)
            }

            if (!item.hasChildren && item.submenu && item.submenu.length > 0) {
                console.warn(`[Menu Validation] Menu item "${item.id}" has submenu but hasChildren=false`)
            }

            // Validate submenu
            if (item.submenu && !validateRecursive(item.submenu, level + 1)) {
                return false
            }
        }
        return true
    }

    validateRecursive(menuData)
}

// Chạy validation trong development
validateMenuData()

export default menuData