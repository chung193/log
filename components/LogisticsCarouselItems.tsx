import React from 'react';
import './LogisticsCarouselItems.css';

type LogisticsCarouselItems = {
    topImage: string;
    logoImage: string;
    bottomImage: string;
};

const LogisticsCarouselItems: React.FC<LogisticsGridProps> = ({
    topImage,
    logoImage,
    bottomImage
}) => {
    return (
        <div className="logistics-grid item">
            <div className="logistics-grid-top">
                <img src={topImage} alt="Logistics - Air and Sea Transport" />
            </div>
            <div className="logistics-grid-logo">
                <img src={logoImage} alt="Company Logo" />
            </div>
            <div className="logistics-grid-bottom">
                <img src={bottomImage} alt="Logistics - Delivery Service" />
            </div>
        </div>
    );
};

export default LogisticsCarouselItems;