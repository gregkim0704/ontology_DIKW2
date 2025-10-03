
import React, { useState } from 'react';
import { ViewId } from './types';
import Tabs from './components/Tabs';
import DIKWView from './components/views/DIKWView';
import ComparisonView from './components/views/ComparisonView';
import NetworkView from './components/views/NetworkView';
import LayersView from './components/views/LayersView';
import BenefitsView from './components/views/BenefitsView';
import ImplementationView from './components/views/ImplementationView';

const App: React.FC = () => {
    const [activeView, setActiveView] = useState<ViewId>('dikw');

    const renderView = () => {
        switch (activeView) {
            case 'dikw':
                return <DIKWView />;
            case 'compare':
                return <ComparisonView />;
            case 'network':
                return <NetworkView />;
            case 'layers':
                return <LayersView />;
            case 'benefits':
                return <BenefitsView />;
            case 'implement':
                return <ImplementationView />;
            default:
                return <DIKWView />;
        }
    };

    return (
        <div className="font-sans bg-gradient-to-br from-blue-900 via-purple-600 to-pink-600 min-h-screen p-5">
            <div className="max-w-screen-2xl mx-auto bg-white rounded-[20px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-slate-800 mb-2.5 bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                        🧠 온톨로지 기반 DIKW 혁신 모델
                    </h1>
                    <p className="text-xl text-slate-500">
                        지식의 미래: 연결되고, 학습하고, 진화하는 지능 시스템
                    </p>
                </header>

                <Tabs activeView={activeView} setActiveView={setActiveView} />

                <main>
                    {renderView()}
                </main>
            </div>
             <footer className="text-center py-6 text-white text-sm">
                <p>한국인프라연구원(주) • infrastructure@kakao.com • 010-9143-0800</p>
            </footer>
        </div>
    );
};

export default App;