import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anpa — 说一句，替你安排好",
  description: "把自然语言变成清晰的待办、日程和可执行步骤。Anpa 是你的 AI 原生任务助手。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "./anpa-icon.png",
    shortcut: "./anpa-icon.png",
    apple: "./anpa-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
