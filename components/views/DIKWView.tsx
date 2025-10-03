
import React from 'react';
import InfoPanel from '../common/InfoPanel';

interface PyramidLayerProps {
    level: string;
    name: string;
    question: string;
    description: string;
    example: string;
    color: string;
    width: string;
}

const PyramidLayer: React.FC<PyramidLayerProps> = ({ level, name, question, description, example, color, width }) => (
    <div className={`flex justify-center items-center ${width} p-4 md:p-6 my-2 rounded-lg text-white shadow-lg`} style={{ background: color }}>
        <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold">{level}: {name}</h3>
            <p className="text-lg md:text-xl font-semibold my-2 italic">"{question}"</p>
            <p className="my-2 text-sm md:text-base">{description}</p>
            <p className="mt-3 text-sm md:text-base bg-white/20 p-2 rounded-md"><span className="font-bold">예시:</span> {example}</p>
        </div>
    </div>
);


const DIKWView: React.FC = () => {
    return (
        <div className="animate-[fadeIn_0.5s]">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-800">DIKW 피라미드란?</h2>
            <div className="flex flex-col items-center space-y-[-10px]">
                <PyramidLayer
                    level="W"
                    name="Wisdom (지혜)"
                    question="Why? (왜?)"
                    description="경험과 윤리적 판단이 결합되어 올바른 행동을 결정하는 원리입니다. '이해'를 넘어선 '통찰'의 단계입니다."
                    example="과거 데이터를 보니, 비 오는 날 우산을 준비한 고객의 만족도가 높았다. 따라서 내일 비가 오니 우산 증정 이벤트를 열어 고객 충성도를 높이자."
                    color="linear-gradient(135deg, #8b5cf6, #7c3aed)"
                    width="w-full md:w-2/5"
                />
                <PyramidLayer
                    level="K"
                    name="Knowledge (지식)"
                    question="How? (어떻게?)"
                    description="정보가 체계화되고 경험적으로 검증되어 문제 해결에 활용될 수 있는 규칙이나 패턴입니다."
                    example="비가 오면 우산 판매량이 3배 증가한다."
                    color="linear-gradient(135deg, #22c55e, #16a34a)"
                    width="w-full md:w-3/5"
                />
                <PyramidLayer
                    level="I"
                    name="Information (정보)"
                    question="What? Who? When? (무엇을? 누가? 언제?)"
                    description="데이터에 맥락(Context)이 부여되어 의미를 갖게 된 상태입니다."
                    example="내일 서울의 강수 확률은 90%이다."
                    color="linear-gradient(135deg, #f97316, #ea580c)"
                    width="w-full md:w-4/5"
                />
                <PyramidLayer
                    level="D"
                    name="Data (데이터)"
                    question="The Facts (단순 사실)"
                    description="가공되지 않은 순수한 사실이나 기록입니다. 그 자체로는 의미가 없습니다."
                    example="강수 확률 90%, 기온 20°C, 습도 75%"
                    color="linear-gradient(135deg, #ef4444, #dc2626)"
                    width="w-full"
                />
            </div>
             <InfoPanel title="💡 DIKW 모델의 의미와 한계">
                 <p>
                    DIKW 모델은 데이터가 어떻게 가치를 창출하는 지혜로 발전하는지 보여주는 강력한 프레임워크입니다.
                    <br/><br/>
                    하지만 전통적인 DIKW 모델은 <strong>선형적이고 단방향적</strong>이라는 한계가 있습니다. 온톨로지 기반 모델은 이 피라미드를 <strong>다방향으로 연결된 네트워크</strong>로 만들어, 각 단계가 서로 상호작용하며 역동적으로 학습하고 추론하는 살아있는 지식 시스템으로 발전시킵니다.
                </p>
            </InfoPanel>
        </div>
    );
};

export default DIKWView;
