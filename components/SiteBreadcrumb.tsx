import React from "react";

interface BreadcrumbItem {
    text: string;
    link: string;
    isActive?: boolean;
}

interface BreadcrumbProps {
    items?: BreadcrumbItem[]; // Thêm dấu ? để items là optional
    language?: 'vi' | 'en';
    className?: string;
    showAnimation?: boolean;
}

const SiteBreadcrumb: React.FC<BreadcrumbProps> = ({
    items = [], // Giá trị mặc định là mảng rỗng
    language = 'vi',
    className = '',
    showAnimation = true
}) => {
    // Dữ liệu song ngữ
    const translations = {
        vi: {
            home: "Trang chủ",
        },
        en: {
            home: "Home",
        }
    };

    // Tạo mảng items hoàn chỉnh (bao gồm trang chủ)
    const allItems = [
        {
            text: translations[language].home,
            link: language === 'vi' ? '/' : '/en',
            isActive: false
        },
        ...(items || []) // Đảm bảo items luôn là mảng
    ];

    return (
        <div className={`breadcrumb ${className}`}>
            <div className="breadcrumb-wrapper">
                <ul className="breadcrumb-list">
                    {allItems.map((item, index) => {
                        const itemClassName = [
                            'breadcrumb-item',
                            item.isActive ? 'active' : '',
                            showAnimation ? 'aos-init aos-animate' : ''
                        ].filter(Boolean).join(' ');

                        return (
                            <li
                                key={index}
                                className={itemClassName}
                                {...(showAnimation && { 'data-aos': 'fade-left' })}
                            >
                                <a href={item.link} className="breadcrumb-link">
                                    {item.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SiteBreadcrumb;