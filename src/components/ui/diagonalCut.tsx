import { cn } from "@/lib/utils";

const DiagonalCut = ({
  direction,
  className,
}: {
  direction: 'top' | 'bottom';
  className?: string;
}) => {
  const points =
    direction === 'top'
      ? '0,0 1200,0 1200,48 0,0'
      : '0,48 1200,0 1200,48 0,48';

  return (
    <div
      className={cn(
        'w-full overflow-hidden leading-none',
        className
      )}
    >
      <svg
        viewBox='0 0 1200 48'
        preserveAspectRatio='none'
        className='block h-8 w-full md:h-10'
        aria-hidden='true'
      >
        <polygon
          points={points}
          className='fill-background'
        />
      </svg>
    </div>
  );
}

export default DiagonalCut;