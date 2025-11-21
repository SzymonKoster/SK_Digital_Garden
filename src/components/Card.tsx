/**
 * Card Component
 * 
 * A reusable card container with consistent styling and hover effects.
 * Used throughout the application for project cards, tech items, etc.
 */

import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = "", onClick }) => (
    <div
        onClick={onClick}
        className={`bg-stone-900 border border-stone-700/80 rounded-xl shadow-md hover:shadow-amber-900/10 hover:border-amber-700/50 transition-all duration-200 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
        {children}
    </div>
);
