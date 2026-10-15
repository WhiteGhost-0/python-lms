import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password — istmX Learn",
  description: "Request a password reset link for your istmX Learn account.",
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
