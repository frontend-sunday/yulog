import "./globals.css";
import Layout from "@/components/common/layouts/Layout";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "서유림 블로그",
  description: "개발마스터가 될거야ㅑ",
  openGraph: {
    title: "서유림 블로그",
    description: "안녕하세요, 서유림의 기술 블로그입니다.",
    url: "https://devrim.site",
    siteName: "서유림 블로그",
    images: {
      // url: "./OG_IMAG.png",
    },
  },
  metadataBase: new URL("https://devrim.site"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="custom-scrollbar">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: ``,
          }}
        />
      </head>
      <body className="dark:text-gray-100 max-w-[750px] m-auto">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
