
import React from 'react';
import InfoPanel from '../common/InfoPanel';
import CodeBlock from '../common/CodeBlock';

interface LayerProps {
    title: string;
    description: string;
    code: string;
    example: string;
}

const Layer: React.FC<LayerProps> = ({ title, description, code, example }) => (
    <div className="bg-white p-5 rounded-lg my-4 border-l-4 border-purple-600 shadow-md">
        <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
        <p className="text-slate-600">{description}</p>
        <CodeBlock>
            {code}
            {'\n'}
            {example}
        </CodeBlock>
    </div>
);

const LayersView: React.FC = () => {
    return (
        <div className="animate-[fadeIn_0.5s]">
            <h2 className="mb-5 text-2xl font-bold text-slate-800">다차원 온톨로지 레이어</h2>
            <Layer
                title="📅 차원 1: 시간 레이어 (Temporal)"
                description="과거의 데이터, 현재의 정보, 미래의 예측이 모두 연결됩니다."
                code="[과거_데이터] --학습--> [현재_패턴] --예측--> [미래_지혜]"
                example="예: 지난 10년 날씨 → 계절 패턴 → 내년 날씨 예측"
            />
            <Layer
                title="🌍 차원 2: 공간 레이어 (Spatial)"
                description="개인, 팀, 조직, 사회 수준의 지식이 계층적으로 연결됩니다."
                code="[개인_경험] --통합--> [팀_노하우] --확산--> [조직_문화] --영향--> [사회_규범]"
                example="예: 내 업무 방식 → 팀 프로세스 → 회사 정책 → 산업 표준"
            />
            <Layer
                title="🎚️ 차원 3: 추상화 레이어 (Abstraction)"
                description="구체적 사실에서 추상적 원리까지 연결됩니다."
                code="[구체적_사례] --추상화--> [중간_규칙] --일반화--> [보편_원리]"
                example="예: 이 프로젝트 실패 → 의사소통 부족 패턴 → 협업의 본질"
            />
            <Layer
                title="📊 차원 4: 확실성 레이어 (Certainty)"
                description="확실한 사실부터 불확실한 추측까지 신뢰도가 표시됩니다."
                code="[확실한_데이터: 100%] → [검증된_정보: 90%] → [경험적_지식: 70%] → [직관적_지혜: 50%]"
                example="예: 기온 25°C (확실) → 더운 날씨 (거의 확실) → 에어컨 필요 (추정)"
            />
             <Layer
                title="⚖️ 차원 5: 가치 레이어 (Value)"
                description="사실(IS)과 당위(OUGHT)가 구분되어 연결됩니다."
                code="[사실_관찰] ⟷ [가치_판단] → [윤리적_지혜]"
                example="예: \"직원이 실수했다\"(사실) ⟷ \"비난보다 지원해야 한다\"(가치) → 리더십 철학"
            />
            <InfoPanel title="🌟 다차원의 힘">
                 <p>
                    단순 피라미드는 1차원(상하)만 표현하지만,
                    온톨로지는 <strong>5차원 이상의 공간</strong>에서 지식을 구조화합니다.
                    <br/><br/>
                    이를 통해 <strong>"왜?"</strong>(원인), <strong>"언제?"</strong>(시간), <strong>"어디서?"</strong>(공간),
                    <strong>"얼마나?"</strong>(확실성), <strong>"가치는?"</strong>(윤리)까지 모두 표현 가능합니다.
                </p>
            </InfoPanel>
        </div>
    );
};

export default LayersView;
