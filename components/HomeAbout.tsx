'use client';
import React from 'react';
import './HomeAbout.css';
import FindMoreButton from './FindMoreButton';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
import { init } from 'next/dist/compiled/webpack/webpack';

type HomeAboutProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    initialLocale?: Locale;
};

const HomeAbout: React.FC<HomeAboutProps> = ({
    title = 'Lựa chọn tối ưu cho Doanh nghiệp',
    subtitle = 'Vietnam Post Logistics tự hào là Hệ sinh thái Logistics toàn diện dành cho doanh nghiệp.',
    description = `Vietnam Post Logistics được nhiều tập đoàn lớn trong nước và thế giới lựa chọn sử dụng dịch vụ bởi những lợi thế cạnh tranh vượt trội. 
Không chỉ là một doanh nghiệp nhà nước có thương hiệu uy tín hàng đầu quốc gia, ở Vietnam Post Logistics, chúng tôi có đội ngũ nhân sự chất lượng cao, trẻ trung, chuyên nghiệp, nhiệt tình, trách nhiệm. 
Chúng tôi sở hữu mạng lưới kho ngoại quan và trung tâm phân phối rộng khắp toàn quốc.`,
    buttonText = 'XEM THÊM VỀ CHÚNG TÔI',
    onButtonClick,
    initialLocale = 'en'
}) => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang') as Locale | null;
    const locale = langParam || initialLocale;

    const { t } = useTranslations(locale);
    return (
        <section className="business-section">
            <div className="business-content">
                <h2 className="business-title">{title}</h2>
                <p className="business-subtitle">{subtitle}</p>
                <p className="business-description">{description}</p>

                <FindMoreButton onClick={onButtonClick} label='Xem thêm về chúng tôi' />
            </div>
        </section>
    );
};

export default HomeAbout;
