## VibePrompt OS Web

자유 입력을 기반으로 **실행용 프롬프트(Claude Code/GPT/Cursor 투입용)**를 생성하기 위한 1인용 웹앱입니다.

### 로컬 실행

```bash
npm install
npm run dev
```

환경변수는 `env.example`를 참고해서 설정하세요(서버에서만 사용).

### GitHub Pages에서 확인하기(정적 배포)

이 레포는 GitHub Actions로 **Next.js static export** 결과(`out/`)를 GitHub Pages로 배포합니다.

- 배포 워크플로우: `.github/workflows/deploy-pages.yml`
- Pages URL(프로젝트 페이지): `https://habitree.github.io/prompt/`

주의: GitHub Pages는 정적 호스팅이라 `app/api/*` 같은 서버 API 라우트는 동작하지 않습니다.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
