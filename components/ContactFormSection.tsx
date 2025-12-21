'use client';

import React, { useState } from 'react';

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    return (
        <div style={{
            position: 'relative',
            padding: '100px 20px',
            backgroundColor: '#0A5A99',
            minHeight: '500px',
            overflow: 'hidden'
        }}>
            {/* Background Image - Container and Plane */}
            <div style={{
                position: 'absolute',
                right: '0',
                bottom: '0',
                width: '50%',
                height: '100%',
                backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'left center',
                opacity: 0.3,
                zIndex: 0
            }} />

            <div style={{
                position: 'relative',
                maxWidth: '1400px',
                margin: '0 auto',
                zIndex: 1
            }}>
                {/* Title */}
                <h2 style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: '#FFF',
                    marginBottom: '50px',
                    textAlign: 'center'
                }}>
                    Liên hệ với Vietnam Post Logistics
                </h2>

                {/* Form Container */}
                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {/* Row 1 - Name and Company Name */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px',
                        marginBottom: '20px'
                    }}>
                        {/* Name Field */}
                        <div>
                            <label style={{
                                display: 'block',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#FFF',
                                marginBottom: '8px'
                            }}>
                                Tên của bạn
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nhập Tên của bạn"
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    fontSize: '15px',
                                    border: 'none',
                                    borderRadius: '12px',
                                    backgroundColor: '#FFF',
                                    color: '#333',
                                    outline: 'none',
                                    transition: 'box-shadow 0.3s ease',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.3)';
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            />
                        </div>

                        {/* Company Name Field */}
                        <div>
                            <label style={{
                                display: 'block',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#FFF',
                                marginBottom: '8px'
                            }}>
                                Tên công ty <span style={{ color: '#ff6b6b' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Tên công ty"
                                value={formData.companyName}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    fontSize: '15px',
                                    border: 'none',
                                    borderRadius: '12px',
                                    backgroundColor: '#FFF',
                                    color: '#333',
                                    outline: 'none',
                                    transition: 'box-shadow 0.3s ease',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.3)';
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            />
                        </div>
                    </div>

                    {/* Row 2 - Email and Phone */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px',
                        marginBottom: '30px'
                    }}>
                        {/* Email Field */}
                        <div>
                            <label style={{
                                display: 'block',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#FFF',
                                marginBottom: '8px'
                            }}>
                                Email <span style={{ color: '#ff6b6b' }}>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    fontSize: '15px',
                                    border: 'none',
                                    borderRadius: '12px',
                                    backgroundColor: '#FFF',
                                    color: '#333',
                                    outline: 'none',
                                    transition: 'box-shadow 0.3s ease',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.3)';
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label style={{
                                display: 'block',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#FFF',
                                marginBottom: '8px'
                            }}>
                                Số điện thoại <span style={{ color: '#ff6b6b' }}>*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Số điện thoại"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    fontSize: '15px',
                                    border: 'none',
                                    borderRadius: '12px',
                                    backgroundColor: '#FFF',
                                    color: '#333',
                                    outline: 'none',
                                    transition: 'box-shadow 0.3s ease',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.3)';
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>
                        <button
                            onClick={handleSubmit}
                            style={{
                                padding: '16px 40px',
                                borderRadius: '30px',
                                border: 'none',
                                backgroundColor: '#1a3b5c',
                                color: '#FFF',
                                fontSize: '15px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#0f2638';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#1a3b5c';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
                            }}
                        >
                            <span>LIÊN HỆ TƯ VẤN</span>
                            <span style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: '#FFA500',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }}>
                                →
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;