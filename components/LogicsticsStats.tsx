'use client'
import React, { useEffect, useRef, useState } from 'react';
import './LogisticsStats.css'; // Import CSS file

// Define types
interface StatItem {
    id: number;
    title: string;
    value: number;
    description: string;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    imageAlt: string;
    srcSet?: string;
    aosDelay?: number;
}

interface HomeFourSectionProps {
    className?: string;
}

const HomeFourSection: React.FC<HomeFourSectionProps> = ({ className = '' }) => {
    // Stats data
    const statsData: StatItem[] = [
        {
            id: 1,
            title: "Transport to",
            value: 230,
            description: "Countries & Territories",
            imageUrl: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/four1.jpg",
            imageWidth: 803,
            imageHeight: 389,
            imageAlt: "Hình ảnh Trái đất",
            srcSet: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/four1.jpg 803w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/four1-300x145.jpg 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/four1-768x372.jpg 768w",
            aosDelay: 100
        },
        {
            id: 2,
            title: "Transporting",
            value: 50000,
            description: "containers per month",
            imageUrl: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/four2.jpg",
            imageWidth: 389,
            imageHeight: 389,
            imageAlt: "Container của Vietnam Post Logistics Company",
            srcSet: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/four2.jpg 389w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/four2-300x300.jpg 300w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/four2-150x150.jpg 150w",
            aosDelay: 200
        },
        {
            id: 3,
            title: "Exporting",
            value: 1200000,
            description: "tons each month",
            imageUrl: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/four3.jpg",
            imageWidth: 596,
            imageHeight: 389,
            imageAlt: "Vận chuyển Sea Freight",
            srcSet: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/four3.jpg 596w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/four3-300x196.jpg 300w",
            aosDelay: 300
        },
        {
            id: 4,
            title: "Total area",
            value: 500000,
            description: "m2 warehouse",
            imageUrl: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/four4.jpg",
            imageWidth: 596,
            imageHeight: 389,
            imageAlt: "Hàng hóa kho bãi",
            srcSet: "https://vietnampostlogistics.com/wp-content/uploads/2025/03/four4.jpg 596w, https://vietnampostlogistics.com/wp-content/uploads/2025/03/four4-300x196.jpg 300w",
            aosDelay: 400
        }
    ];

    // State for count animation
    const [animatedValues, setAnimatedValues] = useState<Record<number, number>>({});
    const statRefs = useRef<(HTMLSpanElement | null)[]>([]);

    // Initialize AOS (Animate On Scroll) - assuming you have AOS installed
    useEffect(() => {
        // If AOS is installed, initialize it
        if (typeof window !== 'undefined' && (window as any).AOS) {
            (window as any).AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true
            });
        }

        // Setup intersection observer for count animation
        const observers: IntersectionObserver[] = [];

        statsData.forEach((stat, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            // Start count animation
                            animateCount(stat.id, stat.value);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.5,
                    rootMargin: '0px 0px -100px 0px'
                }
            );

            if (statRefs.current[index]) {
                observer.observe(statRefs.current[index]!);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    // Count animation function
    const animateCount = (id: number, targetValue: number) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = targetValue / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            const currentValue = Math.min(Math.floor(stepValue * currentStep), targetValue);

            setAnimatedValues(prev => ({
                ...prev,
                [id]: currentValue
            }));

            if (currentStep >= steps) {
                clearInterval(interval);
                setAnimatedValues(prev => ({
                    ...prev,
                    [id]: targetValue
                }));
            }
        }, duration / steps);
    };

    // Format number with commas
    const formatNumber = (num: number): string => {
        return num.toLocaleString('en-US');
    };

    return (
        <section className={`sec-homes-four ${className}`}>
            <div className="homes-four ss-pd bg-pri">
                <div className="container">
                    <div className="homes-four-wrap">
                        <div className="homes-four-grids">
                            {statsData.map((stat, index) => (
                                <div
                                    key={stat.id}
                                    className="homes-four-grid"
                                    data-aos="fade-up-cus"
                                    data-aos-delay={stat.aosDelay}
                                >
                                    <div className="homes-four-it">
                                        <div className="inner">
                                            <div className="bg">
                                                <img
                                                    width={stat.imageWidth}
                                                    height={stat.imageHeight}
                                                    src={stat.imageUrl}
                                                    className="attachment-full size-full"
                                                    alt={stat.imageAlt}
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet={stat.srcSet}
                                                />
                                            </div>
                                            <div className="info">
                                                <p className="name">
                                                    {stat.title}
                                                </p>
                                                <p className="num">
                                                    <span
                                                        ref={el => statRefs.current[index] = el}
                                                        className="countNum"
                                                    >
                                                        {formatNumber(animatedValues[stat.id] || 0)}
                                                    </span>
                                                </p>
                                                <p className="des">
                                                    {stat.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFourSection;