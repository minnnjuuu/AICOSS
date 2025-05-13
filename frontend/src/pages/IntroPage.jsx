// src/pages/IntroPage.jsx
import { useNavigate } from "react-router-dom";
import logo from '../assets/aicossLogo.png';
import "../styles/IntroPage.css";

const IntroPage = () => {
    const navigate = useNavigate();

    return (
        <div className="intro-container">
            <img src={logo} alt="사업단 로고" className="intro-logo" />
            <h1 className="intro-title">MBTI 말고 AIBTI 해봤어?</h1>
            <p className="intro-description">
                <strong>인공지능혁신융합대학사업단</strong>은<br />
                AI 전문인력 및 AI+X 융합인력 2만명 양성을 통해 인공지능 기술을 사회 및 산업 각 분야에 적용할 수 있는
                인재 발굴과 인공지능 분야 플랫폼 구축 및 확산에 노력하고 있습니다.
            </p>
            <div className="survey-description">
                <h3 className="survey-description-title">AICOSS 모듈형 교육과정이란?</h3><br /><br />
                <div className="survey-detail-description">
                    <div className="detail" id="1">
                        <h4 className="detail-title" id="detail1">짧은 기간 집중학습 훈련제도</h4>
                        2010년대 이후 기존의 고등교육 학위 제도를 대체하는 새로운 학습제도로서, 특히 IT 분야를 중심으로 특정 기술이나 직업에 한정하는 짧은 기간의 집중학습 훈련제도입니다
                    </div>
                    <div className="detail" id="2">
                        <h4 className="detail-title" id="detail2">모듈형 교육(인증)과정 최소 이수학점</h4>
                        - 마이크로디그리 : 12학점 (4개 구성 교과목 필수 이수)
                        <br />
                        - 나노디그리 : 6학점
                    </div>
                    <div className="detail" id="3">
                        <h4 className="detail-title" id="detail3">운영 현황</h4>
                        인공지능혁신융합대학사업단(AICOSS)에서는 12건의 마이크로디그리를 운영중입니다.
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
            <div className="survey-description-2">
                <h3 className="survey-description-title">마이크로 및 나노 디그리 <br />4가지 유형</h3><br /><br />
                <p className="detail-course-type" id="course1"><strong>일반형</strong> : 컨소시엄에서 공동운영하는 19개 공통교과목으로 구성된 프로그램</p>
                <p className="detail-course-type" id="course2"><strong>융합형</strong> : 인공지능과 타 전공 교육을 융합한 프로그램</p>
                <p className="detail-course-type" id="course3"><strong>심화형</strong> : 인공지능 분야 전공 수준의 심화형 프로그램</p>
                <p className="detail-course-type" id="course4"><strong>개방형</strong> : 인공지능과 지역사회 현장 연계 실무 교육 프로그램</p>
            </div>
            <div className="survey-description-3">
                <h3>당신에게 적합한 <br />마이크로 및 나노 디그리 유형을 <br />인공지능이 추천해드립니다.</h3>
            </div>
            <button className="intro-button" onClick={() => navigate("/survey")}>
                Start
            </button>





            <footer className="intro-footer">
                <div className="survey-info">
                    <p>**본 설문은 OpenAI의 GPT기술을 기반으로 구성되었습니다.</p>
                </div>
                <p>&copy; 2025 인공지능혁신융합대학사업단 AICOSS</p>
                <p>AI 기술 제공: <a href="https://openai.com/" target="_blank" rel="noopener noreferrer">OpenAI GPT</a></p>
            </footer>
        </div>
    );
};

export default IntroPage;
