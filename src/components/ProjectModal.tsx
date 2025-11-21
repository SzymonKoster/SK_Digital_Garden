/**
 * Project Modal Component
 * 
 * Full-screen modal displaying detailed information about a portfolio project.
 * Shows project description, tech stack, timeline, and image gallery placeholders.
 */

import React from 'react';
import { Briefcase, Calendar, X, ImageIcon } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div
            className="bg-[#0c0a09] border border-stone-700 w-full max-w-3xl max-h-[90vh] overflow-auto rounded-2xl shadow-2xl shadow-amber-900/20"
            onClick={e => e.stopPropagation()}
        >
            <div className="flex justify-between items-start p-6 border-b border-stone-800 sticky top-0 bg-[#0c0a09]/95 backdrop-blur z-10">
                <div>
                    <div className="flex items-center gap-3 text-amber-500 mb-2">
                        <Briefcase size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">Project Details</span>
                    </div>
                    <h2 className="text-2xl font-bold text-stone-100">{project.title}</h2>
                </div>
                <button onClick={onClose} className="p-2 bg-stone-900 rounded-full text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors">
                    <X size={20} />
                </button>
            </div>

            <div className="p-6 space-y-8">
                <div className="flex flex-wrap gap-4 items-center justify-between bg-stone-900/50 p-4 rounded-xl border border-stone-800">
                    <div className="flex items-center gap-2 text-stone-400 text-sm">
                        <Calendar size={16} className="text-amber-600" />
                        <span>Zrealizowano: <strong className="text-stone-200">{project.date}</strong></span>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                        {project.techStack.map(tech => (
                            <span key={tech} className="px-2 py-1 bg-stone-950 border border-stone-700 rounded text-xs text-emerald-400 font-mono">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="prose prose-invert prose-stone max-w-none">
                    <h3 className="text-lg font-bold text-stone-200 mb-3">O Projekcie</h3>
                    <p className="text-stone-400 leading-relaxed whitespace-pre-line">
                        {project.fullDescription}
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-stone-200 mb-4 flex items-center gap-2">
                        <ImageIcon size={18} className="text-stone-500" />
                        Galeria
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Array.from({ length: project.imageCount }).map((_, idx) => (
                            <div key={idx} className="aspect-video bg-stone-900 border border-stone-800 rounded-xl flex flex-col items-center justify-center text-stone-600 gap-2 group hover:border-stone-600 transition-colors cursor-default">
                                <ImageIcon size={32} className="opacity-50 group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-mono">Zdjęcie z projektu #{idx + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-6 border-t border-stone-800 bg-stone-950">
                <button onClick={onClose} className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 font-bold text-sm transition-colors border border-stone-800">
                    Zamknij
                </button>
            </div>
        </div>
    </div>
);
