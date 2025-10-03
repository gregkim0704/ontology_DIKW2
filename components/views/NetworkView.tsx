import React, { useState } from 'react';
import InfoPanel from '../common/InfoPanel';

interface NodeData {
    id: string;
    label: string;
    icon: string;
    position: { left: string; top: string };
    gradient: string;
}

const NODES: NodeData[] = [
    { id: 'data', label: 'Data', icon: '📊', position: { left: '200px', top: '250px' }, gradient: 'from-red-500 to-red-700' },
    { id: 'info', label: 'Information', icon: '📋', position: { left: '400px', top: '200px' }, gradient: 'from-orange-500 to-orange-700' },
    { id: 'context', label: 'Context', icon: '🌐', position: { left: '400px', top: '300px' }, gradient: 'from-yellow-500 to-yellow-700' },
    { id: 'exp', label: 'Experience', icon: '💡', position: { left: '400px', top: '400px' }, gradient: 'from-lime-500 to-lime-700' },
    { id: 'know', label: 'Knowledge', icon: '🧩', position: { left: '600px', top: '200px' }, gradient: 'from-green-500 to-green-700' },
    { id: 'pattern', label: 'Pattern', icon: '🔍', position: { left: '600px', top: '300px' }, gradient: 'from-cyan-500 to-cyan-700' },
    { id: 'infer', label: 'Inference', icon: '🤖', position: { left: '600px', top: '400px' }, gradient: 'from-blue-500 to-blue-700' },
    { id: 'wisdom', label: 'Wisdom', icon: '🎯', position: { left: '800px', top: '250px' }, gradient: 'from-indigo-500 to-indigo-700' },
    { id: 'action', label: 'Action', icon: '⚡', position: { left: '1000px', top: '250px' }, gradient: 'from-purple-500 to-purple-700' }
];

const CONNECTIONS = [
    { left: '250px', top: '300px', width: '200px', transform: 'rotate(-30deg)' },
    { left: '250px', top: '300px', width: '150px', transform: 'rotate(30deg)' },
    { left: '450px', top: '250px', width: '180px', transform: 'rotate(0deg)' },
    { left: '450px', top: '350px', width: '180px', transform: 'rotate(0deg)' },
    { left: '630px', top: '250px', width: '200px', transform: 'rotate(30deg)' },
    { left: '630px', top: '350px', width: '200px', transform: 'rotate(-30deg)' },
    { left: '830px', top: '300px', width: '200px', transform: 'rotate(0deg)' },
    { left: '400px', top: '100px', width: '150px', transform: 'rotate(60deg)' },
    { left: '400px', top: '450px', width: '150px', transform: 'rotate(-60deg)' }
];


const NetworkView: React.FC = () => {
    const [highlightedNodeId, setHighlightedNodeId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleNodeClick = (node: NodeData) => {
        setHighlightedNodeId(node.id);
        alert(`${node.label} 노드\n\n이 노드는 다른 모든 노드와 연결되어 있으며, 양방향으로 정보가 흐릅니다.\n\n온톨로지에서는 각 노드가 명시적인 의미와 관계를 가집니다.`);
    };

    return (
        <div className="animate-[fadeIn_0.5s]">
            <h2 className="mb-5 text-2xl font-bold text-slate-800">지식 그래프 네트워크</h2>
            <p className="mb-5 text-slate-600">
                노드를 클릭하면 연결 관계를 볼 수 있습니다. 모든 것이 연결되어 있습니다!
            </p>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="노드 검색 (예: Data, Wisdom)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    aria-label="Search for nodes in the network"
                />
            </div>
            <div className="w-full h-[600px] border-2 border-slate-200 rounded-2xl relative bg-slate-50 overflow-hidden">
                {CONNECTIONS.map((conn, index) => (
                    <div
                        key={index}
                        className="absolute h-0.5 bg-slate-400 opacity-60"
                        style={{ ...conn, transformOrigin: 'left center' }}
                    ></div>
                ))}

                {NODES.map((node) => {
                    const isDimmed = searchTerm.length > 0 && !node.label.toLowerCase().includes(searchTerm.toLowerCase());
                    return (
                        <div
                            key={node.id}
                            className={`absolute w-32 h-32 rounded-full flex flex-col items-center justify-center text-white font-bold cursor-pointer transition-all duration-300 shadow-lg hover:scale-110 hover:z-10 bg-gradient-to-br ${node.gradient} ${isDimmed ? 'opacity-20' : ''}`}
                            style={{ 
                                ...node.position, 
                                transform: highlightedNodeId === node.id ? 'scale(1.2)' : 'scale(1)', 
                                zIndex: highlightedNodeId === node.id ? 20 : 1 
                            }}
                            onClick={() => handleNodeClick(node)}
                        >
                            <div className="text-3xl">{node.icon}</div>
                            <div className="text-sm mt-1">{node.label}</div>
                        </div>
                    );
                })}
            </div>
            <InfoPanel title="🔗 네트워크 특징">
                <p>
                    <strong>피라미드 → 그래프:</strong> 모든 노드가 서로 연결될 수 있습니다. <br />
                    <strong>양방향 흐름:</strong> 지혜에서 데이터로 역추적 가능합니다. <br />
                    <strong>맥락 노드:</strong> Context, Experience, Pattern 등이 추가되어 풍부한 의미를 담습니다. <br />
                    <strong>추론 엔진:</strong> Inference 노드가 자동으로 새로운 지식을 생성합니다.
                </p>
            </InfoPanel>
        </div>
    );
};

export default NetworkView;