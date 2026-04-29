export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-14 lg:px-18 ${className}`}>
      {children}
    </div>
  );
}