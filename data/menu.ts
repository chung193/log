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

// Hàm để lấy menu theo locale
export const getMenuByLocale = (locale: Locale): MenuItem[] => {
    return menuData.map(item => ({
        ...item,
        name: locale === 'en' ? item.nameEn : item.name,
        submenu: item.submenu?.map(subItem => ({
            ...subItem,
            name: locale === 'en' ? subItem.nameEn : subItem.name,
            submenu: subItem.submenu?.map(subSubItem => ({
                ...subSubItem,
                name: locale === 'en' ? subSubItem.nameEn : subSubItem.name
            }))
        }))
    }));
}

export default menuData;