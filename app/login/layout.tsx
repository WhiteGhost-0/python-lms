import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learner Sign In — istmX Learn",
  description: "Sign in to track progress, save code traces, and access your Socratic AI tutor.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
