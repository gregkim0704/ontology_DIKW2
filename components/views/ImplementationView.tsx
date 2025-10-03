
import React from 'react';
import InfoPanel from '../common/InfoPanel';

interface StepProps {
    number: number;
    title: string;
    description: string;
    tools: string;
}

const Step: React.FC<StepProps> = ({ number, title, description, tools }) => (
    <div className="flex items-start my-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex-shrink-0 mr-5 w-12 h-12 rounded-full bg-gradient-to-br from-blue-900 to-purple-600 text-white flex items-center justify-center font-bold text-xl">
            {number}
        </div>
        <div>
            <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
            <p className="text-slate-600 leading-relaxed">
                {description}
                <br />
                <strong className="text-sm text-purple-700">도구:</strong> <span className="text-sm text-slate-500">{tools}</span>
            </p>
        </div>
    </div>
);

const steps = [
    { number: 1, title: "도메인 온톨로지 설계 (1-2개월)", description: "핵심 개념(Class), 관계(Property), 규칙(Rule)을 정의합니다.", tools: "Protégé, WebVOWL, Ontotext" },
    { number: 2, title: "데이터 수집 및 변환 (2-3개월)", description: "기존 데이터를 RDF/OWL 형식으로 변환합니다.", tools: "Apache Jena, RDF4J, D2RQ" },
    { number: 3, title: "추론 엔진 구축 (1-2개월)", description: "논리 규칙 기반 추론 시스템을 구축합니다.", tools: "Pellet, HermiT, SWRL" },
    { number: 4, title: "그래프 데이터베이스 구축 (1개월)", description: "대규모 지식 그래프 저장 및 쿼리 시스템을 만듭니다.", tools: "Neo4j, Amazon Neptune, GraphDB" },
    { number: 5, title: "AI 통합 (2-3개월)", description: "기계학습과 온톨로지를 결합하여 동적 학습 시스템을 만듭니다.", tools: "TensorFlow + Knowledge Graph, PyTorch Geometric" },
    { number: 6, title: "사용자 인터페이스 개발 (2개월)", description: "직관적인 시각화 및 상호작용 도구를 만듭니다.", tools: "D3.js, Cytoscape.js, React" },
    { number: 7, title: "지속적 개선 (ongoing)", description: "사용자 피드백을 받아 온톨로지를 계속 발전시킵니다.", tools: "A/B 테스트, 사용 패턴 분석, 온톨로지 진화" },
];

const ImplementationView: React.FC = () => {
    return (
        <div className="animate-[fadeIn_0.5s]">
            <h2 className="mb-5 text-2xl font-bold text-slate-800">실전 구현 로드맵</h2>
            <div className="bg-slate-50 p-2 sm:p-8 rounded-2xl my-5">
                {steps.map(step => (
                    <Step key={step.number} {...step} />
                ))}
            </div>
            <InfoPanel title="💻 필요 기술 스택">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                    <div>
                        <strong>온톨로지:</strong> OWL, RDF, SPARQL<br />
                        <strong>그래프 DB:</strong> Neo4j, GraphDB<br />
                        <strong>추론:</strong> Pellet, HermiT<br />
                    </div>
                    <div>
                        <strong>AI/ML:</strong> TensorFlow, PyTorch<br />
                        <strong>시각화:</strong> D3.js, Cytoscape<br />
                        <strong>백엔드:</strong> Python, Java, Node.js<br />
                    </div>
                </div>
            </InfoPanel>
        </div>
    );
};

export default ImplementationView;
