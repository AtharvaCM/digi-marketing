import { FC } from 'react';

const DateComp: FC<{ value: string }> = ({ value }) => {
  if (!value) return null;

  const formatted = new Date(value + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <time className="font-semibold text-slate-600" dateTime={value}>
      Published {formatted}
    </time>
  );
};

export default DateComp;
