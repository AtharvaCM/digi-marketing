import { TfiAlarmClock } from 'react-icons/tfi';

export default function ReadTime({ value }: Readonly<{ value: number }>) {
  return (
    <span className="gap-1 flex items-center text-white">
      <TfiAlarmClock /> {Math.ceil(value)} minutes
    </span>
  );
}
