import React, { useEffect, useRef, useState } from 'react';
import { CountUp } from 'countup.js';

interface StatCardProps {
    value: number;
    prefix?: string;
    suffix?: string;
    delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({
    value,
    prefix = '',
    suffix = '',
    delay = 0
}) => {
    const countUpRef = useRef<HTMLSpanElement>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const currentRef = countUpRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setTimeout(() => {
                        if (!currentRef) return;

                        const countUp = new CountUp(currentRef, value, {
                            duration: 2.5,
                            separator: ',',
                            prefix: prefix,
                            suffix: suffix,
                            useEasing: true,
                        });

                        if (!countUp.error) {
                            countUp.start();
                            setHasStarted(true);
                        } else {
                            console.error('CountUp error:', countUp.error);
                        }
                    }, delay);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, [value, prefix, suffix, hasStarted, delay]);

    return <span ref={countUpRef}>0</span>;
};

interface StatData {
    title: string;
    value: number;
    description: string;
    bgColor: string;
    textColor: string;
    accentColor: string;
    image: string;
}

const LogisticsStats: React.FC = () => {
    // Sample data - thay bằng translation hook của bạn
    const stats: StatData[] = [
        {
            title: 'Vận chuyển tới',
            value: 230,
            description: 'Quốc gia và vùng lãnh thổ',
            bgColor: '#0A5A99',
            textColor: '#FFF',
            accentColor: '#FFA500',
            image: '/images/globe.jpg' // Thay Unsplash URL
        },
        {
            title: 'Vận chuyển',
            value: 50000,
            description: 'Container/năm',
            bgColor: '#FFA500',
            textColor: '#FFF',
            accentColor: '#FFF',
            image: '/images/container.jpg'
        },
        {
            title: 'Xuất khẩu',
            value: 1200000,
            description: 'Tấn hàng hóa/năm',
            bgColor: '#1B8FAD',
            textColor: '#FFF',
            accentColor: '#FFF',
            image: '/images/ship.jpg'
        },
        {
            title: 'Tổng diện tích',
            value: 500000,
            description: 'm² kho bãi',
            bgColor: '#4A4A4A',
            textColor: '#FFF',
            accentColor: '#FFA500',
            image: '/images/warehouse.jpg'
        }
    ];

    return (
        <div className="bg-[#0D2840] min-h-screen flex items-center justify-center p-5 md:p-10">
            <div className="max-w-7xl w-full mx-auto">
                {/* Grid Container */}
                <div className="grid gap-5">
                    {/* Row 1 - Desktop: 2 cards (1 large + 1 small) */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-5">
                        {/* Card 1 - Large */}
                        <div
                            className="relative rounded-3xl overflow-hidden p-10 md:p-12 flex flex-col justify-start shadow-2xl min-h-[300px] lg:min-h-[330px]"
                            style={{ backgroundColor: stats[0].bgColor }}
                        >
                            {/* Globe Image */}
                            <div
                                className="absolute -right-12 top-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 rounded-full opacity-95"
                                style={{
                                    backgroundImage: `url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                role="img"
                                aria-label="Global network illustration"
                            />

                            <div className="relative z-10">
                                <p className="mb-4 text-base md:text-lg font-semibold text-white opacity-95">
                                    {stats[0].title}
                                </p>
                                <h2 className="mb-4 text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight"
                                    style={{ color: stats[0].accentColor }}>
                                    <StatCard value={stats[0].value} delay={0} />
                                </h2>
                                <p className="text-sm md:text-base font-semibold text-white opacity-95">
                                    {stats[0].description}
                                </p>
                            </div>
                        </div>

                        {/* Card 2 - Small */}
                        <div
                            className="relative rounded-3xl overflow-hidden p-8 md:p-10 flex flex-col justify-start shadow-2xl min-h-[280px] lg:min-h-[330px]"
                            style={{ backgroundColor: stats[1].bgColor }}
                        >
                            {/* Container Image */}
                            <div
                                className="absolute right-5 bottom-5 w-48 h-32 lg:w-52 lg:h-36"
                                style={{
                                    backgroundImage: `url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80)`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))'
                                }}
                                role="img"
                                aria-label="Container illustration"
                            />

                            <div className="relative z-10">
                                <p className="mb-3 text-sm md:text-base font-semibold text-white opacity-95">
                                    {stats[1].title}
                                </p>
                                <h2 className="mb-3 text-5xl md:text-6xl font-bold leading-none tracking-tight"
                                    style={{ color: stats[1].accentColor }}>
                                    <StatCard value={stats[1].value} delay={200} />
                                </h2>
                                <p className="text-sm md:text-base font-semibold text-white opacity-95">
                                    {stats[1].description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 - 2 equal cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Card 3 */}
                        <div
                            className="relative rounded-3xl overflow-hidden p-8 md:p-10 flex flex-col justify-start shadow-2xl min-h-[280px] lg:min-h-[320px]"
                            style={{ backgroundColor: stats[2].bgColor }}
                        >
                            {/* Ship Image */}
                            <div
                                className="absolute left-0 bottom-0 right-0 h-40 md:h-44 opacity-90"
                                style={{
                                    backgroundImage: `url(https://images.unsplash.com/photo-1571610818339-45bebb3682a4?w=800&q=80)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center top'
                                }}
                                role="img"
                                aria-label="Ship illustration"
                            />

                            <div className="relative z-10 text-right">
                                <p className="mb-3 text-sm md:text-base font-semibold text-white opacity-95">
                                    {stats[2].title}
                                </p>
                                <h2 className="mb-3 text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight"
                                    style={{ color: stats[2].accentColor }}>
                                    <StatCard value={stats[2].value} delay={400} />
                                </h2>
                                <p className="text-sm md:text-base font-semibold text-white opacity-95">
                                    {stats[2].description}
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div
                            className="relative rounded-3xl overflow-hidden p-8 md:p-10 flex flex-col justify-start shadow-2xl min-h-[280px] lg:min-h-[320px]"
                            style={{ backgroundColor: stats[3].bgColor }}
                        >
                            {/* Warehouse Image */}
                            <div
                                className="absolute right-0 bottom-0 w-72 h-52 md:w-80 md:h-56 opacity-85"
                                style={{
                                    backgroundImage: `url(https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                role="img"
                                aria-label="Warehouse illustration"
                            />

                            <div className="relative z-10">
                                <p className="mb-3 text-sm md:text-base font-semibold text-white opacity-95">
                                    {stats[3].title}
                                </p>
                                <h2 className="mb-3 text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight"
                                    style={{ color: stats[3].accentColor }}>
                                    <StatCard value={stats[3].value} delay={600} />
                                </h2>
                                <p className="text-sm md:text-base font-semibold text-white opacity-95">
                                    {stats[3].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogisticsStats;