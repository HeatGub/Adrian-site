export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}