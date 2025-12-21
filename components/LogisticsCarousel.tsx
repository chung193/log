import React from 'react';
import './LogisticsCarousel.css';

type CarouselItem = {
    id: number;
    image: string;
    isLogo?: boolean;
};

const items: CarouselItem[] = [
    { id: 1, image: '/images/homes-ab1.jpg' },
    { id: 2, image: '/images/homes-ab2.jpg' },
    { id: 3, image: '/images/homes-ab3.jpg' },
    { id: 4, image: '/images/homes-ab4.jpg' },
    { id: 5, image: '/images/homes-ab5.jpg', isLogo: true },
    { id: 6, image: '/images/homes-ab6.jpg' },
    { id: 7, image: '/images/homes-ab7.jpg' },
];

const LogisticsCarousel: React.FC = () => {
    return (
        <div className="carousel-wrapper">
            <div className="carousel-track">
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${item.isLogo ? 'logo-item' : ''}`}
                    >
                        <img src={item.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogisticsCarousel;
