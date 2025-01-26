export default function Category({ value, label }: Readonly<{ value?: Sanity.BlogCategory; label?: string }>) {
  return (
    <>
      <span className="text-accent/40">#</span>
      {label ?? value?.title}
    </>
  );
}
