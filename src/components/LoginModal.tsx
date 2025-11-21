/**
 * Login Modal Component
 * 
 * Password-protected login modal for accessing the admin workshop mode.
 * Displays a centered modal with password input.
 */

import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface LoginModalProps {
    onLogin: (password: string) => void;
    onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onLogin, onClose }) => {
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        onLogin(password);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="bg-stone-900 border border-stone-700 p-6 rounded-xl shadow-2xl w-full max-w-sm">
                <div className="flex justify-center mb-4 text-amber-500">
                    <Lock size={32} />
                </div>
                <h3 className="text-xl font-bold text-center text-stone-200 mb-2">Dostęp do Warsztatu</h3>
                <p className="text-xs text-center text-stone-500 mb-6">Podaj hasło administratora, aby edytować.</p>

                <input
                    type="password"
                    autoFocus
                    className="w-full bg-black border border-stone-700 rounded-lg px-4 py-2 text-stone-200 mb-4 focus:border-amber-500 outline-none"
                    placeholder="Hasło..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                />

                <div className="flex gap-2">
                    <button onClick={onClose} className="flex-1 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 font-medium transition-colors text-sm">
                        Anuluj
                    </button>
                    <button onClick={handleSubmit} className="flex-1 py-2 rounded-lg bg-amber-700 hover:bg-amber-600 text-amber-100 font-medium transition-colors text-sm">
                        Wejdź
                    </button>
                </div>
            </div>
        </div>
    );
};
