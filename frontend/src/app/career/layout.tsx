import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Culture | WebNote Technologies",
  description:
    "Join an international collective of software architects, UI/UX engineers, and digital growth specialists solving complex challenges for high-growth enterprises worldwide.",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
