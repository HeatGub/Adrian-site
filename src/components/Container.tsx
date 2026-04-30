export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-18 lg:px-24 ${className}`}>
      {children}
    </div>
  );
}