# Coinangel Portfolio

> **Claude Code로 생성한 프론트엔드 개발자 포트폴리오 웹사이트**

이 프로젝트는 **Claude Code**의 다양한 기능을 시연하기 위해 제작된 데모 프로젝트입니다.
초보 사용자들이 Claude Code의 에이전트, Skills, MCP 도구 활용법을 배울 수 있도록 상세한 문서를 포함합니다.

## 라이브 데모

- **Vercel**: [coinangel-portfolio.vercel.app](https://coinangel-portfolio.vercel.app)

## 스크린샷

| 다크 모드 | 라이트 모드 |
|----------|------------|
| Hero 섹션 | About 섹션 |
| Projects 섹션 | Contact 섹션 |

---

## 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | Next.js | 16.x |
| 언어 | TypeScript | 5.x |
| 스타일링 | Tailwind CSS | 4.x |
| 애니메이션 | Motion (Framer Motion) | 11.x |
| 테마 | next-themes | 0.4.x |
| 아이콘 | Lucide React | - |
| 배포 | Vercel | - |

---

## Claude Code 사용 내역

이 프로젝트는 **Claude Code**를 사용하여 처음부터 끝까지 자동으로 생성되었습니다.

### 사용한 에이전트 (Task Agents)

Claude Code는 복잡한 작업을 위해 전문화된 에이전트를 제공합니다.

| 에이전트 | 용도 | 이 프로젝트에서의 사용 |
|---------|------|---------------------|
| **Plan** | 구현 계획 수립 | 프로젝트 아키텍처 및 구현 순서 설계 |
| **Explore** | 코드베이스 탐색 | 참고 사이트 분석 및 기존 패턴 파악 |
| **code-reviewer** | 코드 품질 검토 | 각 섹션 구현 후 품질/보안 검토 |
| **quick-validator** | 빠른 검증 | 코드 작성 후 타입/린트 체크 |

#### 에이전트 사용 예시

```
사용자: "포트폴리오 웹사이트를 만들어줘"

Claude Code:
1. Plan 에이전트로 구현 계획 수립
2. Explore 에이전트로 참고 사이트 분석
3. 코드 작성
4. quick-validator로 타입 체크
5. code-reviewer로 품질 검토
```

---

### 사용한 Skills

Claude Code의 Skills는 특정 도메인에 특화된 지식과 가이드라인을 제공합니다.

| Skill | 용도 | 이 프로젝트에서의 적용 |
|-------|------|---------------------|
| **frontend-design** | 고품질 UI 코드 생성 | 모든 React 컴포넌트 제작 시 |
| **vercel-react-best-practices** | React/Next.js 최적화 | 성능 패턴 적용 |
| **web-design-guidelines** | 웹 접근성 준수 | UI 접근성 검토 |

#### Skills 활용 방법

```bash
# frontend-design skill 호출
사용자: "Hero 섹션을 만들어줘"
Claude Code: frontend-design skill을 활용하여
             - 세련된 타이포그래피
             - 애니메이션 효과
             - 반응형 레이아웃 생성
```

**frontend-design Skill이 제공하는 것:**
- 독창적인 디자인 방향 설정 (Cyberpunk Editorial, Minimalist 등)
- 특별한 폰트 조합 (Syne + Outfit)
- 색상 팔레트 생성 (다크/라이트 모드)
- 고급 애니메이션 패턴

---

### 사용한 MCP 도구

MCP (Model Context Protocol)는 Claude Code가 외부 서비스와 통신할 수 있게 해줍니다.

#### Context7 MCP

라이브러리의 최신 공식 문서를 조회합니다.

| 도구 | 용도 | 사용 예시 |
|------|------|----------|
| `resolve-library-id` | 라이브러리 ID 조회 | "next.js" → "/vercel/next.js" |
| `query-docs` | 최신 문서 조회 | "How to use App Router in Next.js 15" |

```typescript
// 사용 예시
mcp__context7__resolve-library-id({
  libraryName: "next.js",
  query: "App Router 사용법"
})

mcp__context7__query-docs({
  libraryId: "/vercel/next.js",
  query: "How to set up dark mode with next-themes"
})
```

#### Memory MCP

프로젝트 정보를 저장하고 관리합니다.

| 도구 | 용도 | 사용 예시 |
|------|------|----------|
| `search_nodes` | 이전 작업 검색 | 프로젝트 정보 조회 |
| `create_entities` | 새 정보 저장 | 프로젝트 생성 정보 저장 |
| `add_observations` | 작업 내역 추가 | Phase 완료 정보 추가 |

---

### Claude Code 워크플로우

이 프로젝트가 생성된 전체 워크플로우입니다:

```
┌─────────────────────────────────────┐
│         1. 사용자 요청               │
│  "포트폴리오 웹사이트를 만들어줘"    │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│      2. WebFetch로 참고사이트 분석   │
│   jasonbergh.com 구조/디자인 파악    │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│      3. AskUserQuestion으로          │
│         요구사항 수집                │
│   - 분야: 프론트엔드 개발자          │
│   - 섹션: Hero, About, Projects...   │
│   - 테마: 다크/라이트 토글           │
│   - 이름: Coinangel                  │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│       4. Plan 에이전트로             │
│          구현 계획 수립              │
│   - 기술 스택 결정                   │
│   - 컴포넌트 구조 설계               │
│   - 구현 순서 정의                   │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│       5. Skills 활용하여             │
│          고품질 UI 코드 생성         │
│   - frontend-design                  │
│   - vercel-react-best-practices      │
│   - web-design-guidelines            │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│      6. quick-validator로            │
│         타입/린트 체크               │
│   npm run build 실행하여 검증        │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│      7. code-reviewer로              │
│         코드 품질 검토               │
│   보안, 성능, 유지보수성 점검        │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│      8. GitHub 레포 생성 및          │
│         Vercel 배포                  │
└─────────────────────────────────────┘
```

---

## 프로젝트 구조

```
coinangel-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 테마 Provider, 폰트 설정
│   │   ├── page.tsx            # 메인 페이지 (섹션 조합)
│   │   └── globals.css         # Tailwind + 커스텀 스타일
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # 네비게이션 + 테마 토글
│   │   │   └── Footer.tsx      # 푸터
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # 히어로 섹션
│   │   │   ├── AboutSection.tsx    # 소개 섹션
│   │   │   ├── ProjectsSection.tsx # 프로젝트 섹션
│   │   │   └── ContactSection.tsx  # 연락처 섹션
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx      # 재사용 버튼
│   │   │   ├── Card.tsx        # 프로젝트 카드
│   │   │   └── ThemeToggle.tsx # 다크/라이트 토글
│   │   │
│   │   ├── animations/
│   │   │   ├── AnimatedText.tsx    # 글자별 애니메이션
│   │   │   ├── FadeIn.tsx          # 페이드인 래퍼
│   │   │   ├── SlideIn.tsx         # 슬라이드인 래퍼
│   │   │   └── StaggerContainer.tsx # Stagger 컨테이너
│   │   │
│   │   └── ThemeProvider.tsx   # 테마 Provider
│   │
│   ├── lib/
│   │   ├── utils.ts            # 유틸리티 함수
│   │   └── constants.ts        # 상수 데이터
│   │
│   └── types/
│       └── index.ts            # TypeScript 타입
│
├── public/
│   └── images/                 # 이미지 파일
│
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

### 3. 프로덕션 빌드

```bash
npm run build
npm run start
```

---

## 커스터마이징

### 개인 정보 수정

`src/lib/constants.ts` 파일에서 수정:

```typescript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  bio: "Your bio...",
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
  },
  // ...
];
```

### 프로젝트 추가

`src/lib/constants.ts`의 `PROJECTS` 배열에 추가:

```typescript
export const PROJECTS: Project[] = [
  {
    id: "new-project",
    title: "Project Name",
    description: "Project description...",
    image: "/images/projects/project.jpg",
    tags: ["React", "TypeScript"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/...",
  },
  // ...
];
```

### 색상 테마 변경

`src/app/globals.css`에서 CSS 변수 수정:

```css
:root {
  --accent: #your-light-accent;
  --secondary: #your-light-secondary;
}

.dark {
  --accent: #your-dark-accent;
  --secondary: #your-dark-secondary;
}
```

---

## 배포

### Vercel 배포 (권장)

1. [Vercel](https://vercel.com)에 GitHub로 로그인
2. "New Project" → 레포지토리 선택
3. "Deploy" 클릭
4. 자동으로 배포 완료!

### 환경변수 (선택)

특별한 환경변수 없이 바로 배포 가능합니다.

---

## 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크탑 지원
- **다크/라이트 모드**: next-themes 기반 테마 전환
- **부드러운 애니메이션**: Framer Motion 스크롤 애니메이션
- **글자별 애니메이션**: Hero 섹션 이름 staggered 애니메이션
- **프로젝트 필터링**: 카테고리별 프로젝트 필터
- **SEO 최적화**: 메타데이터, OG 태그 설정

---

## 학습 자료

Claude Code에 대해 더 알아보기:

- [Claude Code 공식 문서](https://docs.anthropic.com/claude-code)
- [Claude Code GitHub](https://github.com/anthropics/claude-code)

---

## 라이선스

MIT License

---

## 제작자

**Coinangel** - Frontend Developer

Built with Claude Code (Claude Opus 4.5)

```
Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```
