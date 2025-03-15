import Category from './Category';

export default function Categories({
  categories,
  ...props
}: Readonly<{ categories?: Sanity.BlogCategory[] } & React.ComponentProps<'ul'>>) {
  if (!categories?.length) return null;

  return (
    <ul {...props}>
      {categories.map((category) => (
        <li key={category._id}>
          <Category value={category} />
        </li>
      ))}
    </ul>
  );
}
