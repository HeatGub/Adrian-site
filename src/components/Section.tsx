import { Container } from "./Container";

export function Section({
  children,
  className = "",
  contentClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section className={className}>
      <Container className={contentClassName}>{children}</Container>
    </section>
  );
}
