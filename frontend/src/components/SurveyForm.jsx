import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SurveyQuestions from "./SurveyQuestions";
import './SurveyForm.css';

const SurveyForm = () => {
    const [answers, setAnswers] = useState({
        q1: "",
        q2: [],
        q3: [],
        q4: "",
        q5: [],
        q6: [],
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [missingQuestions, setMissingQuestions] = useState([]);  // 누락된 질문 번호 저장
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            const current = answers[name] || [];
            if (checked) {
                setAnswers({
                    ...answers,
                    [name]: [...current, value],
                });
            } else {
                setAnswers({
                    ...answers,
                    [name]: current.filter((v) => v !== value),
                });
            }
        } else {
            setAnswers({
                ...answers,
                [name]: value,
            });
        }
    };

    const makeSummary = () => {
        return `
        학습 목표: ${answers.q1}
        관심 분야: ${answers.q2.join(", ")}
        앞으로의 목표: ${answers.q3.join(", ")}
        선호 난이도: ${answers.q4}
        보유 기술/경험: ${answers.q5.join(", ")}
        배우고 싶은 역량: ${answers.q6.join(", ")}
        `;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 필수 질문에 대한 유효성 검사
        const missing = [];

        // 각 질문에 대해 누락된 항목 체크
        if (!answers.q1) missing.push("1");
        if (answers.q2.length === 0) missing.push("2");
        if (answers.q3.length === 0) missing.push("3");
        if (!answers.q4) missing.push("4");
        if (answers.q5.length === 0) missing.push("5");
        if (answers.q6.length === 0) missing.push("6");

        if (missing.length > 0) {
            setMissingQuestions(missing); // 누락된 질문 번호 저장
            setErrorMessage(`다음 질문에 응답해주세요: ${missing.join(", ")}`);
            return;
        }

        setMissingQuestions([]); // 누락된 질문이 없으면 초기화
        setErrorMessage(""); // 오류 메시지 초기화

        const summary = makeSummary();
        try {
            const res = await axios.post("/recommend", { summary });
            navigate("/result", { state: { result: res.data.result, courseType: res.data.courseType } });
        } catch (err) {
            console.error(err);
            setErrorMessage("오류가 발생했습니다.");
        }
    };

    return (
        <div className="survey-container">
            <form onSubmit={handleSubmit} className="survey-form">
                <SurveyQuestions answers={answers} handleChange={handleChange} />

                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* 유효성 검사 오류 메시지 표시 */}

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default SurveyForm;
