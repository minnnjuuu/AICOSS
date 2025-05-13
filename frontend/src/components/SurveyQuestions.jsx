import './SurveyQuestions.css';

const SurveyQuestions = ({ answers, handleChange }) => {
    return (
        <div className="survey-inner-container">

            {/* 질문 1 */}
            <div className="question-block">
                <p className="question-title">1. 어떤 학습이 가장 끌리나요?</p>
                {[
                    ["A", "실무에서 바로 써먹을 수 있는 기술을 배우고 싶어요!"],
                    ["B", "다양한 분야를 넘나들며 배우고 싶어요!"],
                    ["C", "깊이 있는 지식을 쌓고 전문가가 되고 싶어요!"],
                    ["D", "사회 문제를 해결하는 프로젝트로 배우고 싶어요!"]
                ].map(([val, label]) => (
                    <label key={val} className="option-label">
                        <input
                            type="radio"
                            name="q1"
                            value={val}
                            checked={answers.q1 === val}
                            onChange={handleChange}
                            className="option-input"
                        />
                        <span>{label}</span>
                    </label>
                ))}
            </div>

            {/* 질문 2 */}
            <div className="question-block">
                <p className="question-title">2. 인공지능에서 관심 있는 분야가 있나요?<br />(여러 개 선택 가능!)</p>
                {[
                    ["A", "음... 특별히 관심 없어요"],
                    ["B", "언어를 다루는 자연어 처리 (NLP) - 번역, 챗봇 등"],
                    ["C", "영상이나 자율주행처럼 컴퓨터 비전"],
                    ["D", "데이터 분석과 추천 시스템"],
                    ["E", "머신러닝이나 딥러닝 이론!"],
                    ["F", "스마트팩토리 같은 산업 자동화"],
                    ["G", "헬스케어와 의료 분야의 인공지능"],
                    ["H", "보안과 생체 인증"]
                ].map(([val, label]) => (
                    <label key={val} className="option-label">
                        <input
                            type="checkbox"
                            name="q2"
                            value={val}
                            checked={answers.q2.includes(val)}
                            onChange={handleChange}
                            className="option-input"
                        />
                        <span>{label}</span>
                    </label>
                ))}
            </div>

            {/* 질문 3 */}
            <div className="question-block">
                <p className="question-title">3. 앞으로의 목표는 어떤 걸까요? <br />(여러 개 선택 가능!)</p>
                {[
                    ["A", "빨리 취업해서 능력을 키우고 싶어요!"],
                    ["B", "대학원 가서 연구자로 성장하고 싶어요!"],
                    ["C", "창업해서 새로운 걸 시작하고 싶어요!"],
                    ["D", "자격증 딸 때가 된 것 같아요!"],
                    ["E", "사회 문제를 해결하며 기여하고 싶어요!"],
                    ["F", "협업도 잘하고 융합적 사고도 키우고 싶어요!"],
                    ["G", "아직 잘 모르겠어요!"]
                ].map(([val, label]) => (
                    <label key={val} className="option-label">
                        <input
                            type="checkbox"
                            name="q3"
                            value={val}
                            checked={answers.q3.includes(val)}
                            onChange={handleChange}
                            className="option-input"
                        />
                        <span>{label}</span>
                    </label>
                ))}
            </div>

            {/* 질문 4 */}
            <div className="question-block">
                <p className="question-title">4. 어떤 수준의 학습이 더 좋을까요?</p>
                {[
                    ["A", "기초부터 천천히 배우고 싶어요!"],
                    ["B", "실무에 적용할 수 있을 정도로 깊이 배우고 싶어요!"],
                    ["C", "특정 분야나 기술을 깊게 파고 싶어요!"],
                    ["D", "기초부터 심화, 연구까지 다양한 걸 다 경험하고 싶어요!"]
                ].map(([val, label]) => (
                    <label key={val} className="option-label">
                        <input
                            type="radio"
                            name="q4"
                            value={val}
                            checked={answers.q4 === val}
                            onChange={handleChange}
                            className="option-input"
                        />
                        <span>{label}</span>
                    </label>
                ))}
            </div>

            {/* 질문 5 */}
            <div className="question-block">
                <p className="question-title">5. 현재 내가 갖고 있는 기술이나 경험은 뭐가 있을까요? <br />(여러 개 선택 가능!)</p>
                {[
                    ["A", "프로그래밍 언어 - Python, R, SQL 등"],
                    ["B", "데이터 처리 및 분석 - 데이터 정리, 시각화 도구 사용"],
                    ["C", "인턴, 프로젝트, 학회 활동 등 경험"],
                    ["D", "아직 부족해요!"]
                ].map(([val, label]) => (
                    <label key={val} className="option-label">
                        <input
                            type="checkbox"
                            name="q5"
                            value={val}
                            checked={answers.q5.includes(val)}
                            onChange={handleChange}
                            className="option-input"
                        />
                        <span>{label}</span>
                    </label>
                ))}
            </div>

            {/* 질문 6 */}
            <div className="question-block">
                <p className="question-title">6. 새롭게 배우고 싶은 핵심 역량은 무엇인가요? <br />(여러 개 선택 가능!)</p>
                {[
                    ["A", "코딩 및 프로그래밍 능력 - Python, C++, Java 등"],
                    ["B", "머신러닝과 딥러닝 이론 - 알고리즘과 수학적 이해"],
                    ["C", "실무 경험을 쌓을 수 있는 인공지능 프로젝트"],
                    ["D", "데이터 분석과 빅데이터 처리 능력"],
                    ["E", "사회적 문제를 데이터로 해결하는 능력"]
                ].map(([val, label]) => (
                    <label key={val} className="option-label">
                        <input
                            type="checkbox"
                            name="q6"
                            value={val}
                            checked={answers.q6.includes(val)}
                            onChange={handleChange}
                            className="option-input"
                        />
                        <span>{label}</span>
                    </label>
                ))}
            </div>

        </div>
    );
};

export default SurveyQuestions;
