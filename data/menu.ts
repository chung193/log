// Menu data với ID và English names
const menuItems = [
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
                id: 'logistics',
                name: 'Logistics quốc tế',
                nameEn: 'Logistics quốc tế',
                href: 'javascript:;',
                hasChildren: true,
                submenu: [
                    {
                        id: 'distribution-center',
                        name: 'Vận tải đường biển',
                        nameEn: 'Distribution Center',
                        href: '/giai-phap/giai-phap-sea-freight',
                        hasChildren: false
                    },
                    {
                        id: 'fulfillment-service',
                        name: 'Chuyển phát nhanh quốc tế',
                        nameEn: 'Fulfillment Service',
                        href: '/giai-phap/giai-phap-air-express/',
                        hasChildren: false
                    },
                    {
                        id: 'fulfillment-service',
                        name: 'Vận tải hàng không',
                        nameEn: 'Fulfillment Service',
                        href: '/giai-phap/giai-phap-air-cargo/',
                        hasChildren: false
                    },
                    {
                        id: 'fulfillment-service',
                        name: 'Đường bộ xuyên biên giới',
                        nameEn: 'Fulfillment Service',
                        href: '/giai-phap/giai-phap-cross-border-trucking',
                        hasChildren: false
                    },
                    {
                        id: 'fulfillment-service',
                        name: 'Vận tải đường sắt',
                        nameEn: 'Fulfillment Service',
                        href: '/giai-phap/giai-phap-railway/',
                        hasChildren: false
                    }
                ]
            },
            {
                id: 'international-logistics',
                name: 'TMĐT quốc tế',
                nameEn: 'International Logistics',
                href: '/giai-phap/thuong-mai-dien-tu-quoc-te',
                hasChildren: false
            },
            {
                id: 'international-logistics',
                name: 'Logistics nội địa',
                nameEn: 'International Logistics',
                href: '/giai-phap/logistics-noi-dia/',
                hasChildren: false
            },
            {
                id: 'ecommerce-international',
                name: 'Xuất nhập khẩu',
                nameEn: 'International E-commerce',
                href: 'javascript:;',
                hasChildren: true,
                submenu: [
                    {
                        id: 'ecommerce-solutions',
                        name: 'Tài chính chuỗi cung ứng',
                        nameEn: 'E-commerce Solutions',
                        href: '/giai-phap/tai-chinh-chuoi-cung-ung/',
                        hasChildren: false
                    },
                    {
                        id: 'last-mile-delivery',
                        name: 'Ủy thác xuất nhập khẩu',
                        nameEn: 'Last Mile Delivery',
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

export default menuItems