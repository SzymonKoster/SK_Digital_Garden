/**
 * Utility Function Tests
 * 
 * Tests for icon utility functions.
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { getIconForCategory } from '../src/utils/icons';
import type { Category } from '../src/types';

describe('getIconForCategory', () => {
    const categories: Category[] = [
        'languages',
        'data-engineering',
        'devops',
        'tools',
        'soft-skills',
        'business'
    ];

    it.each(categories)('returns an icon for category: %s', (category) => {
        const icon = getIconForCategory(category);
        const { container } = render(icon);
        expect(container.firstChild).toBeTruthy();
    });

    it('returns appropriate icon size', () => {
        const icon = getIconForCategory('languages');
        const { container } = render(icon);
        const svg = container.querySelector('svg');
        expect(svg).toHaveAttribute('width', '16');
        expect(svg).toHaveAttribute('height', '16');
    });
});
