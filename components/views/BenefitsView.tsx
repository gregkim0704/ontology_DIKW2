
import React from 'react';

interface BenefitCardProps {
    title: string;
    description: string;
    example: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, example }) => (
    <div className="bg-gradient-to-br from-blue-900 to-purple-600 text-white p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <hr className="opacity-30 my-3" />
        <small className="text-purple-200">{example}</small>
    </div>
);

const benefits = [
    { title: "🚀 1. 자동 추론", description: "명시된 지식에서 새로운 지식을 자동 생성합니다.", example: "예: A는 B의 부모, B는 C의 부모 → A는 C의 조부모" },
    { title: "🔍 2. 의미 검색", description: "키워드가 아닌 의미로 검색합니다.", example: "예: \"더운 날 필요한 것\" → 에어컨, 선풍기, 아이스크림..." },
    { title: "🎯 3. 개인화", description: "각 사용자별 맞춤 지식 체계를 구축합니다.", example: "예: 내게 효과적인 학습법 vs 당신에게 효과적인 학습법" },
    { title: "🧩 4. 지식 통합", description: "서로 다른 출처의 지식을 통합합니다.", example: "예: 의학 + 영양학 + 운동학 → 통합 건강 관리" },
    { title: "🔄 5. 실시간 학습", description: "새로운 경험이 즉시 지식 체계에 반영됩니다.", example: "예: 오늘 실패 → 내일 더 나은 판단" },
    { title: "🌐 6. 맥락 보존", description: "\"왜 그렇게 판단했는가?\"를 완전히 추적 가능합니다.", example: "예: 결정 → 근거 → 데이터 역추적" },
    { title: "⚠️ 7. 모순 탐지", description: "논리적 모순을 자동으로 발견합니다.", example: "예: \"모든 A는 B다\" + \"이 A는 B가 아니다\" → 오류!" },
    { title: "🤝 8. 협업 지식", description: "여러 사람의 지혜를 통합하여 집단 지성을 만듭니다.", example: "예: 팀원 10명의 경험 → 팀 전체의 노하우" },
];

const BenefitsView: React.FC = () => {
    return (
        <div className="animate-[fadeIn_0.5s]">
            <h2 className="mb-8 text-2xl font-bold text-slate-800">온톨로지가 가져오는 혁신 효과</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                    <BenefitCard key={index} {...benefit} />
                ))}
            </div>
        </div>
    );
};

export default BenefitsView;
