#uvicorn main:app --host 0.0.0.0 --port 8000
from fastapi import FastAPI, Request
from  pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from dotenv import load_dotenv
import os


load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

app = FastAPI()     #FastAPI 앱 초기화

#CORS 설정 : 개발중에만 * 허용
app.add_middleware(CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],)

class Summary(BaseModel):
  summary: str
SYSTEM_PROMPT = "너는 마이크로디그리 과정 추천 챗봇이야. 사용자의 성향에 따라 '심화형', '융합형', '일반형', '개방형' 중 하나를 추천해야 해."

#추천 api
@app.post("/recommend")
async def recommend(summary: Summary):
  prompt=f"""
  사용자 응답 요약: "{summary.summary}"
  → 추천 유형과 그 이유를 말해줘.
  """
  response = client.chat.completions.create(
    model="gpt-4.1-nano",
    messages=[
      {"role": "system", "content": SYSTEM_PROMPT},
      {"role": "user", "content": prompt}
    ]
  )

  result = response.choices[0].message.content
  if "일반형" in result:
    courseType = "일반형"
  elif "심화형" in result:
    courseType = "심화형"
  elif "융합형" in result:
    courseType = "융합형"
  elif "개방형" in result:
    courseType = "개방형"
  else:
    courseType = None
  return {"result":result, "courseType": courseType}

