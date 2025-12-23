import React from 'react';
import './Ecosystem.css';

interface LogisticsItemProps {
    title: string;
    subtitle?: string;
    description?: string;
    items?: string[];
    twoColumns?: boolean;
}

const LogisticsItem: React.FC<LogisticsItemProps> = ({ title, subtitle, description, items, twoColumns }) => {
    return (
        <div className="homes-logis-item col">
            <div className="inner">
                <div className="des">
                    <p className="des">{title}</p>
                    {description && <p className="sub">{description}</p>}
                    {items && items.length > 0 && (
                        twoColumns ? (
                            <table style={{ height: '24px', width: '100%' }}>
                                <tbody>
                                    <tr style={{ height: '24px' }}>
                                        <td style={{ width: '56.9667%', height: '24px' }}>
                                            <ul>
                                                {items.slice(0, Math.ceil(items.length / 2)).map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td style={{ width: '43.0333%', height: '24px' }}>
                                            <ul>
                                                {items.slice(Math.ceil(items.length / 2)).map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <ul>
                                {items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        )
                    )}
                </div>
                {subtitle && <p className="tt">{subtitle}</p>}
            </div>
        </div>
    );
};

interface CircleIconProps {
    src: string;
    alt: string;
    transform: string;
}

const CircleIcon: React.FC<CircleIconProps> = ({ src, alt, transform }) => {
    return (
        <div
            className="icon"
            style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: transform
            }}
        >
            <img
                width="48"
                height="48"
                src={src}
                className="attachment-full size-full"
                alt={alt}
                decoding="async"
                loading="lazy"
            />
        </div>
    );
};

const Ecosystem: React.FC = () => {
    const circleIcons: CircleIconProps[] = [
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-1.svg',
            alt: 'Hàng hóa',
            transform: 'translate(-50%, -50%) translate(390px, 210px)'
        },
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-2.svg',
            alt: 'Kho',
            transform: 'translate(-50%, -50%) translate(305px, 395px)'
        },
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-3.svg',
            alt: 'Building',
            transform: 'translate(-50%, -50%) translate(115px, 402px)'
        },
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-4.svg',
            alt: 'Trucking',
            transform: 'translate(-50%, -50%) translate(22px, 210px)'
        },
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-5.svg',
            alt: 'cửa hàng',
            transform: 'translate(-50%, -50%) translate(115px, 4px)'
        },
        {
            src: 'https://vietnampostlogistics.com/wp-content/uploads/2025/03/ic-6.svg',
            alt: 'Khách hàng',
            transform: 'translate(-50%, -50%) translate(312px, 13px)'
        }
    ];

    return (
        <div className="sec-homes-logis">
            <div className="homes-logis ss-pd">
                <div className="container">
                    <div className="head-verti center mb-32">
                        <div className="line aos-init aos-animate" data-aos="fade-up-cus">
                            <h2 className="title title-48 add-className text-verti is-inview">
                                Hệ sinh thái Logistics
                            </h2>
                        </div>
                    </div>
                    <div className="homes-logis-box">
                        <div className="homes-logis-list row gap-res">
                            {/* Communication */}
                            <LogisticsItem
                                title="Communication"
                                subtitle="Consumer"
                            />

                            {/* Procurement */}
                            <LogisticsItem
                                title="Procurement"
                                subtitle="Raw Materiala"
                            />

                            {/* Inbound Logistics */}
                            <LogisticsItem
                                title="Inbound Logistics"
                                subtitle="Supplier"
                                items={[
                                    'Import Freight: Air, Ocean (FLC & LCL),customs Clearance',
                                    'Storage Service: PVMI (bonded warehouse,CFS..), Factory fulfillment center',
                                    'Land trucking'
                                ]}
                            />

                            {/* E-commerce */}
                            <LogisticsItem
                                title="E-commerce"
                                items={[
                                    'E-commerce, B2C delivery',
                                    'COD',
                                    'E-commerce platform'
                                ]}
                            />

                            {/* Circle Center */}
                            <div className="homes-logis-circle col">
                                <div className="circle-text">
                                    <img
                                        src="https://vietnampostlogistics.com/template/assets/images/text.png"
                                        alt="Logistics text"
                                    />
                                </div>
                                <div className="circle-img">
                                    <div className="img">
                                        <div className="img-inner">
                                            <img
                                                src="https://vietnampostlogistics.com/template/assets/images/car.jpg"
                                                alt="Logistics truck"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="circle">
                                    {circleIcons.map((icon, idx) => (
                                        <CircleIcon
                                            key={idx}
                                            src={icon.src}
                                            alt={icon.alt}
                                            transform={icon.transform}
                                        />
                                    ))}
                                </div>
                                <div className="circle-tts">
                                    <div className="circle-tt">Retailer</div>
                                    <div className="circle-tt">Manufacturer</div>
                                </div>
                            </div>

                            {/* Supply Chain Finance */}
                            <LogisticsItem
                                title="Supply Chain Finance"
                                description="Optimize cash flow for supplier or buyer"
                            />

                            {/* Last-miles Delivery */}
                            <LogisticsItem
                                title="Last-miles Delivery"
                                items={[
                                    'Nation wide Hub & transport network',
                                    'Land trucking',
                                    'Air shipment'
                                ]}
                            />

                            {/* Distribution Service */}
                            <LogisticsItem
                                title="Distribution Service"
                                subtitle="Distributors"
                                description="VNP is deploying modern distribution strateg by using nationwide networl"
                            />

                            {/* Outbound Logistics */}
                            <LogisticsItem
                                title="Outbound Logistics"
                                items={[
                                    'Distribution center',
                                    'Fulfillment center',
                                    'Land trucking',
                                    'Air, Ocean freight',
                                    'VAS'
                                ]}
                                twoColumns={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ecosystem;