# 2-ktb-hkt-yagsog-fe
💊LLM 기반 복약 관리 웹 애플리케이션의 프론트엔드입니다.<br/>
사용자가 복용 중인 약물 정보를 입력하고, 해당 정보를 바탕으로 챗봇에게 질문할 수 있습니다.

<br/>

## 주요 기능

- 이름, 나이, 성별, 복용 약물 정보를 입력하는 단계별 폼
- 각 단계에서 입력된 데이터는 `sessionStorage`에 임시 저장
- 모든 정보를 확인한 후, 챗봇 페이지로 넘어갈 때 한 번에 서버로 `POST` 요청 전송
- 챗봇 페이지에서 질문 입력 및 응답 확인 가능
- 탭을 껐다가 다시 열거나, 홈으로 돌아가면 `sessionStorage` 초기화

<br/>

## 입력 흐름

1. **이름 입력** → `/info/input/name`  
2. **나이 입력** → `/info/input/age`  
3. **성별 선택** → `/info/input/gender`  
4. **약물 정보 입력** → `/info/input/medicine`  
5. **정보 확인** → `/info/check`  
6. **챗봇 시작 및 서버로 데이터 전송** → `/chatbot`

<br/>

## 기술 스택

- React (Vite)
- TypeScript
- Tailwind CSS
- React Router
- Zustand (for async API state)
- sessionStorage API (입력값 임시 저장)

<br/>

## 폴더 구조

```text
frontend/
├─ public/
├─ src/
│  ├─ components/         # UI 컴포넌트(버튼, 텍스트)
│  ├─ pages/              # 화면 페이지
│  ├─ stores/             # Zustand 상태 관리
│  ├─ types/              # 타입 정의 (FormProps)
│  ├─ main.tsx            # 앱 진입점
│  └─ App.tsx             # 앱 루트 컴포넌트
├─ index.html             # Vite 루트 HTML
├─ package.json
├─ tailwind.config.js     # Tailwind 설정
└─ vite.config.ts
```

<br/>

## 실행 방법
```bash
# 1. Git 클론
git clone https://github.com/chulsu0012/2-ktb-hkt-yagsog-fe.git

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev
```