// src/pages/ResultPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import '../styles/ResultPage.css';

const ResultPage = () => {
    const location = useLocation();
    const { result, courseType } = location.state || {};

    const descriptions = {
        일반형: "일반형은 기초부터 시작하여 다양한 분야를 폭넓게 배우는 유형입니다. 적당한 난이도의 과정이 제공됩니다.",
        심화형: "심화형은 깊이 있는 전문 지식을 배우고 싶은 유형입니다. 심화된 이론과 기술을 중점적으로 학습합니다.",
        융합형: "융합형은 다양한 분야의 지식을 결합하여 새로운 기술을 배우고 싶은 유형입니다. 협업과 실습이 중요한 과정입니다.",
        개방형: "개방형은 스스로 학습 목표를 설정하고, 자유롭게 학습을 진행하는 유형입니다. 자율적인 학습을 선호합니다.",
    };

    return (
        <div className="result-page">
            <h1 className="result-title">결과 페이지</h1>
            {result ? (
                <div className="result-block">
                    <h2 className="result-subtitle">추천 결과:</h2>
                    <p className="result-text">{result}</p>

                    <h3 className="result-subtitle">추천 유형: {courseType}</h3>
                    <p className="result-text">{descriptions[courseType]}</p>
                </div>
            ) : (
                <p className="no-result">결과가 없습니다. 설문을 먼저 완료해 주세요.</p>
            )}
        </div>

    );
};

export default ResultPage;
