/**
 * Component Tests for Card
 * 
 * Tests the reusable Card component.
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from '../src/components/Card';

describe('Card Component', () => {
    it('renders children correctly', () => {
        render(<Card>Test Content</Card>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        render(<Card className="custom-class">Content</Card>);
        const card = screen.getByText('Content').parentElement;
        expect(card).toHaveClass('custom-class');
    });

    it('calls onClick when clicked', async () => {
        const handleClick = vi.fn();
        render(<Card onClick={handleClick}>Clickable</Card>);

        const card = screen.getByText('Clickable').parentElement;
        await userEvent.click(card!);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('shows cursor-pointer when onClick is provided', () => {
        render(<Card onClick={() => { }}>Click me</Card>);
        const card = screen.getByText('Click me').parentElement;
        expect(card).toHaveClass('cursor-pointer');
    });
});
