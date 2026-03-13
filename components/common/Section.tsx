export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-5 sm:px-10 md:px-16 my-12 ${className}`}>
      {children}
    </section>
  );
}
