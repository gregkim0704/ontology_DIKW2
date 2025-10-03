
import React from 'react';

interface InfoPanelProps {
    title: string;
    children: React.ReactNode;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ title, children }) => {
    return (
        <div className="bg-slate-100 p-5 rounded-lg mt-5">
            <h3 className="font-bold text-lg mb-2 text-slate-800">{title}</h3>
            <div className="text-slate-700 leading-relaxed">
                {children}
            </div>
        </div>
    );
};

export default InfoPanel;
