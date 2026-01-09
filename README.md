
# 딥던전 커닝페이퍼 (FFXIV Deep Dungeon Guide)

파이널판타지14의 딥 던전(망자의 궁전, 천궁탑, 에우레카 오르토스, 노르브란트 순례길) 공략을 한눈에 확인할 수 있는 웹 어플리케이션입니다.

## 주요 기능
- 층수별(10층 단위) 몬스터 목록 확인
- 몬스터별 감지 방식, 장판 모양, CC 면역 정보 제공
- Gemini AI를 활용한 상세 파훼법 동적 생성

## 로컬 실행 방법
1. 의존성 설치: `npm install`
2. 환경 변수 설정: `.env` 파일에 `API_KEY=your_gemini_api_key` 추가
3. 실행: `npm run dev`

## 배포 방법 (Vercel)
1. GitHub 저장소에 코드를 푸시합니다.
2. Vercel에서 `Add New` -> `Project`를 선택하고 해당 저장소를 연결합니다.
3. **Environment Variables** 설정 섹션에서 `API_KEY` 항목에 본인의 Gemini API Key를 입력합니다.
4. `Deploy` 버튼을 누르면 배포가 완료됩니다.
