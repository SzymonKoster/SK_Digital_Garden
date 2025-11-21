/**
 * Visibility Icon Component
 * 
 * Displays an icon indicating whether an item is publicly visible or private.
 * Used in the admin workspace to show/toggle visibility status.
 */

import React from 'react';
import { Globe, Lock } from 'lucide-react';
import type { Visibility } from '../types';

interface VisibilityIconProps {
    visibility: Visibility;
}

export const VisibilityIcon: React.FC<VisibilityIconProps> = ({ visibility }) => (
    visibility === 'public'
        ? <span className="text-emerald-600/80 hover:text-emerald-500 transition-colors" title="Widoczny Publicznie"><Globe size={14} /></span>
        : <span className="text-stone-600 hover:text-stone-500 transition-colors" title="Prywatny / Ukryty"><Lock size={14} /></span>
);
