import React from 'react';
import './Legend.css';  // Assuming you will add custom styles in this CSS file

const Legend = () => {
    const legendItems = [
        { label: 'Recreational', color: '#CECC82' },   // Tomato color
        { label: 'Park', color: '#C27F64' },          // Light green color
        { label: 'School', color: '#7FA56C' },        // Steel blue color
        { label: 'Sewage screening plant', color: '#8096AE' }, // Gold color
        { label: 'Car park', color: '#866B94' },      // Light gray color
        { label: 'Developed residential space', color: '#CCAEAC' }, // Blue violet color
        { label: 'Newly developed residential space', color: '#9E5954' }, // Light salmon color
    ];

    return (
        <div className="legend-container">
            {legendItems.map((item, index) => (
                <div key={index} className="legend-item">
                    <div
                        className="legend-color-box"
                        style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="legend-label"><h3>{item.label}</h3></span>
                </div>
            ))}
        </div>
    );
};

export default Legend;
