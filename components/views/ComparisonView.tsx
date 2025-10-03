
import React from 'react';
import InfoPanel from '../common/InfoPanel';

const ComparisonItem: React.FC<{ title: string; items: string[]; isOntology?: boolean }> = ({ title, items, isOntology = false }) => (
    <div className={`p-6 rounded-2xl shadow-lg border-l-4 ${isOntology ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-500' : 'bg-gradient-to-br from-red-50 to-red-100 border-red-500'}`}>
        <h3 className="mb-4 text-2xl font-bold text-slate-800">{title}</h3>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="relative pl-7">
                    <span className={`absolute left-0 top-1 text-2xl font-bold ${isOntology ? 'text-blue-500' : 'text-red-500'}`}>•</span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const ComparisonView: React.FC = () => {
    const traditionalItems = [
        "선형적 계층 구조", "단방향 흐름 (Data → Wisdom)", "정적, 변화 없음", "맥락 정보 손실", "개인화 불가능", "관계 명시 안 됨", "자동 추론 불가능", "통합 어려움"
    ];

    const ontologyItems = [
        "네트워크 그래프 구조", "다방향 연결 (모든 방향)", "동적, 실시간 학습", "맥락 완전 보존", "개인별 맞춤 가능", "모든 관계 명시적", "자동 추론 가능", "완벽한 통합"
    ];

    return (
        <div className="animate-[fadeIn_0.5s]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <ComparisonItem title="❌ 전통적 DIKW" items={traditionalItems} />
                <ComparisonItem title="✅ 온톨로지 기반 DIKW" items={ontologyItems} isOntology />
            </div>
            <InfoPanel title="🎯 핵심 차이점">
                <p>
                    전통적 DIKW는 <strong>"피라미드"</strong>처럼 고정된 구조입니다.
                    반면 온톨로지 기반 DIKW는 <strong>"살아있는 신경망"</strong>처럼 끊임없이 연결되고 진화합니다.
                    <br /><br />
                    마치 위키피디아가 단순 백과사전을 넘어선 것처럼, 온톨로지는 DIKW를 <strong>지능형 시스템</strong>으로 전환시킵니다.
                </p>
            </InfoPanel>
        </div>
    );
};

export default ComparisonView;
