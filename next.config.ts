import type { NextConfig } from "next";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // 원한다면 여기에서 마크다운 플러그인을 추가하세요

  //remarkGfm: GitHub Markdown을 지원
  //remarkFrontmatter: Frontmatter 구문을 파싱
  //remarkMdxFrontmatter: Frontmatter 데이터를 MDX 컴포넌트의 메타데이터로 사용
  //rehypePrettyCode: 코드 블럭을 예쁘게 렌더링
  options: {
    remarkPlugins: [
      remarkGfm,
      // remarkFrontmatter,
      // [remarkMdxFrontmatter, { name: "metadata" }],
    ],
    rehypePlugins: [rehypePrettyCode],
  },
});

// MDX 구성과 Next.js 구성을 병합합니다
export default withMDX(nextConfig);
