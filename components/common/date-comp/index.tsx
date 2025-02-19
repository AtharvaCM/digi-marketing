import { FC } from 'react';

const DateComp: FC<{ value: string; className?: string }> = ({ className, value }) => {
  if (!value) return null;

  const formatted = new Date(value + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <time className={className} dateTime={value}>
      Published {formatted}
    </time>
  );
};

export default DateComp;
