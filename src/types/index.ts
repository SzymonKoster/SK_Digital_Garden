/**
 * Type Definitions for Digital Garden Portfolio
 * 
 * This file contains all TypeScript type definitions and interfaces
 * used throughout the application.
 */

/**
 * Technology/skill status in the tech radar
 * - active: Currently using in production
 * - learning: Actively learning and experimenting
 * - assess: Evaluating for future use
 * - archive: Previously used, now archived
 */
export type Status = 'active' | 'learning' | 'assess' | 'archive';

/**
 * Technology/skill category for grouping and filtering
 */
export type Category =
    | 'languages'        // Programming languages
    | 'data-engineering' // Data and AI engineering tools
    | 'devops'          // Cloud and infrastructure
    | 'tools'           // Development tools and utilities
    | 'soft-skills'     // Soft skills and languages
    | 'business';       // Business and management tools

/**
 * Visibility setting for content
 * - public: Visible to all users
 * - private: Only visible to admin users
 */
export type Visibility = 'public' | 'private';

/**
 * Individual technology or skill item in the tech radar
 */
export interface TechItem {
    id: string;
    name: string;
    category: Category;
    status: Status;
    visibility: Visibility;
    description: string;
    tags: string[];
}

/**
 * Portfolio project showcase
 */
export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    date: string;
    techStack: string[];
    imageCount: number;
}

/**
 * Professional certification or award
 */
export interface Certificate {
    id: string;
    name: string;
    issuer: string;
    date: string;
    url?: string;
    iconType: 'azure' | 'gcp' | 'generic';
}
