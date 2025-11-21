/**
 * Utility Functions
 * 
 * Helper functions used throughout the application.
 */

import React from 'react';
import { Code, Database, Cpu, ShieldCheck, Brain, Users, Layers } from 'lucide-react';
import type { Category } from '../types';

/**
 * Returns the appropriate icon component for a given category
 */
export function getIconForCategory(category: Category): React.ReactElement {
    switch (category) {
        case 'languages': return <Code size={16} />;
        case 'data-engineering': return <Database size={16} />;
        case 'devops': return <Cpu size={16} />;
        case 'tools': return <ShieldCheck size={16} />;
        case 'soft-skills': return <Brain size={16} />;
        case 'business': return <Users size={16} />;
        default: return <Layers size={16} />;
    }
}
