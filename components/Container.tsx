'use client';
import React, { useEffect, useRef, useState } from 'react';
import './Solution.css';

const Solution: React.FC = () => {
    const viewerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const movingIconRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !viewerRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Tính toán khi section nằm trong viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Tính % scroll qua section này
                const scrollProgress = Math.max(0, Math.min(1,
                    (windowHeight - rect.top) / (windowHeight + rect.height)
                ));

                // 72 frames (101-172) cho container
                const totalFrames = 72;
                const frameIndex = Math.floor(scrollProgress * (totalFrames - 1));
                setCurrentFrame(frameIndex);

                // Animation cho moving-icon và đường vàng
                if (pathRef.current && movingIconRef.current) {
                    const path = pathRef.current;
                    const svg = path.ownerSVGElement;
                    if (!svg) return;

                    // Lấy kích thước thực tế của SVG trong viewport
                    const svgRect = svg.getBoundingClientRect();
                    const viewBox = svg.viewBox.baseVal;

                    // Tính tỷ lệ scale giữa viewBox và kích thước thực tế
                    const scaleX = svgRect.width / viewBox.width;
                    const scaleY = svgRect.height / viewBox.height;

                    const pathLength = path.getTotalLength();
                    const currentLength = scrollProgress * pathLength;
                    const targetPoint = path.getPointAtLength(currentLength);

                    // Tính góc xoay
                    const delta = 10;
                    const prevLength = Math.max(0, currentLength - delta);
                    const prevPoint = path.getPointAtLength(prevLength);
                    const angle = Math.atan2(targetPoint.y - prevPoint.y, targetPoint.x - prevPoint.x) * (180 / Math.PI);

                    // Chuyển đổi tọa độ từ viewBox sang pixel thực tế
                    const actualX = targetPoint.x * scaleX;
                    const actualY = targetPoint.y * scaleY;

                    // Cập nhật vị trí icon - sử dụng tọa độ thực tế
                    const icon = movingIconRef.current;
                    icon.style.left = `${actualX}px`;
                    icon.style.top = `${actualY}px`;
                    icon.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

                    // Cập nhật đường vàng - chỉ vẽ từ đầu đến icon
                    const remainingLength = pathLength - currentLength;
                    path.style.strokeDasharray = `${pathLength}`;
                    path.style.strokeDashoffset = `${remainingLength}`;
                }
            }
        };

        // Khởi tạo strokeDasharray ban đầu
        if (pathRef.current) {
            const pathLength = pathRef.current.getTotalLength();
            pathRef.current.style.strokeDasharray = `${pathLength}`;
            pathRef.current.style.strokeDashoffset = `${pathLength}`;
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Chạy lần đầu

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="sec-homes-solv" ref={sectionRef}>
            <div className="homes-solv ss-pd-t splitCardJS">
                <div className="homes-solv-svg">
                    <svg className="main-svg" viewBox="0 0 1728 259" xmlns="http://www.w3.org/2000/svg">
                        {/* Đường mờ - luôn hiện full */}
                        <path
                            className="main-line"
                            opacity="0.2"
                            d="M2 256C2 256 307.173 3 862.861 3C1418.55 3 1726 256 1726 256"
                            stroke="black"
                            strokeWidth="6"
                            fill="none"
                        />
                        {/* Đường vàng - animated */}
                        <path
                            ref={pathRef}
                            className="animated-line"
                            d="M2 256C2 256 307.173 3 862.861 3C1418.55 3 1726 256 1726 256"
                            stroke="#FBAE17"
                            strokeWidth="6"
                            fill="none"
                        />
                    </svg>
                    {/* Icon di chuyển */}
                    <svg
                        ref={movingIconRef}
                        className="moving-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 81 40"
                        height="40"
                        width="81"
                    >
                        <path
                            strokeWidth="6"
                            stroke="#FBAE17"
                            fill="white"
                            d="M59.2802 2.99219H3.78271V36.9702H59.2802L76.2692 19.9812L59.2802 2.99219Z"
                        />
                    </svg>
                </div>
                <div className="homes-solv-con">
                    <div className="img">
                        <div className="img-inner" id="viewer" ref={viewerRef}>
                            {Array.from({ length: 72 }, (_, i) => i + 101).map((num, index) => (
                                <img
                                    key={num}
                                    src={`/template/assets/images/container_${num}.png`}
                                    alt=""
                                    className={index === currentFrame ? 'active' : ''}
                                    style={{ display: index === currentFrame ? 'block' : 'none' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Solution;