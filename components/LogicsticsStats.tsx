'use client'
import React, { useEffect, useRef, useState } from 'react';
import './LogisticsStats.css'; // Import CSS file
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';
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
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : 'en';

    const { t } = useTranslations(locale);
    // Stats data
    const statsData: StatItem[] = [
        {
            id: 1,
            title: t("components.stats.title-1"),
            value: t("components.stats.stat-1"),
            description: t("components.stats.desc-1"),
            imageUrl: "/images/four1.jpg",
            imageWidth: 803,
            imageHeight: 389,
            imageAlt: "Hình ảnh Trái đất",
            srcSet: "/images/four1.jpg 803w, /images/four1.jpg 300w, /images/four1.jpg 768w",
            aosDelay: 100
        },
        {
            id: 2,
            title: t("components.stats.title-2"),
            value: t("components.stats.stat-2"),
            description: t("components.stats.desc-2"),
            imageUrl: "/images/four2.jpg",
            imageWidth: 389,
            imageHeight: 389,
            imageAlt: "Container của Vietnam Post Logistics Company",
            srcSet: "/images/four2.jpg 389w,/images/four2.jpg 300w, /images/four2.jpg 150w",
            aosDelay: 200
        },
        {
            id: 3,
            title: t("components.stats.title-3"),
            value: t("components.stats.stat-3"),
            description: t("components.stats.desc-3"),
            imageUrl: "/images/four3.jpg",
            imageWidth: 596,
            imageHeight: 389,
            imageAlt: "Vận chuyển Sea Freight",
            srcSet: "/images/four3.jpg 596w, /images/four3.jpg 300w",
            aosDelay: 300
        },
        {
            id: 4,
            title: t("components.stats.title-4"),
            value: t("components.stats.stat-4"),
            description: t("components.stats.desc-4"),
            imageUrl: "/images/four4.jpg",
            imageWidth: 596,
            imageHeight: 389,
            imageAlt: "Hàng hóa kho bãi",
            srcSet: "/images/four4.jpg 596w, /images/four4.jpg 300w",
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