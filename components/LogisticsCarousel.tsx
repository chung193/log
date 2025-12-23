import React from 'react';
import './LogisticsCarousel.css';
import LogisticsCarouselItems from './LogisticsCarouselItems';
type CarouselItem = {
    id: number;
    image?: string;
    images?: string[];
    isLogo?: boolean;
};

const items: CarouselItem[] = [
    { id: 1, image: '/images/homes-ab1.jpg' },
    { id: 2, image: '/images/homes-ab2.jpg' },
    { id: 3, image: '/images/homes-ab3.jpg' },
    {
        id: 4, images: [
            '/images/homes-ab4.jpg',
            '/images/homes-ab4.jpg',
            '/images/homes-ab4.jpg',
        ]
    },
    { id: 5, image: '/images/homes-ab5.jpg' },
    { id: 6, image: '/images/homes-ab6.jpg' },
    { id: 7, image: '/images/homes-ab7.jpg' },
];

const LogisticsCarousel: React.FC = () => {
    return (
        <div className="carousel-wrapper">
            <div className="carousel-track ">
                {[...items, ...items].map((item, index) => (
                    item.images ? (
                        // Nếu có array images, render tất cả
                        <LogisticsCarouselItems topImage={item.images[0]} logoImage={item.images[1]} bottomImage={item.images[2]} />
                    ) : (
                        // Nếu chỉ có 1 image
                        <div
                            key={index}
                            className="carousel-item item"
                        >
                            <img src={item.image} alt="" />
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default LogisticsCarousel;