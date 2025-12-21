import React from 'react';
import './FindMoreButton.css';

type FindMoreButtonProps = {
    label?: string;
    onClick?: () => void;
};

const FindMoreButton: React.FC<FindMoreButtonProps> = ({
    label = 'TÌM HIỂU THÊM',
    onClick,
}) => {
    return (
        <button className="find-more-btn" onClick={onClick}>
            <span className="find-more-text">{label}</span>

            <span className="find-more-icon">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B4F8A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </span>
        </button>
    );
};

export default FindMoreButton;
