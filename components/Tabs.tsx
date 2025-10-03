
import React from 'react';
import { ViewId } from '../types';

interface Tab {
    id: ViewId;
    label: string;
}

const TABS: Tab[] = [
    { id: 'dikw', label: 'DIKW 란?' },
    { id: 'compare', label: '비교' },
    { id: 'network', label: '지식 그래프' },
    { id: 'layers', label: '다층 구조' },
    { id: 'benefits', label: '혁신 효과' },
    { id: 'implement', label: '구현 방법' },
];

interface TabsProps {
    activeView: ViewId;
    setActiveView: (viewId: ViewId) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeView, setActiveView }) => {
    return (
        <nav className="flex justify-center gap-2.5 mb-8 flex-wrap">
            {TABS.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveView(tab.id)}
                    className={`px-6 py-3 border-none rounded-lg cursor-pointer text-base font-semibold transition-all duration-300
                        ${
                            activeView === tab.id
                                ? 'bg-gradient-to-r from-blue-900 to-purple-600 text-white shadow-lg'
                                : 'bg-slate-200 text-slate-700 hover:bg-slate-300 hover:-translate-y-0.5'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </nav>
    );
};

export default Tabs;