import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Learner Account — istmX Learn",
  description: "Create an account to track your Python and GenAI learning journey, save traces, and access your AI tutor.",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
