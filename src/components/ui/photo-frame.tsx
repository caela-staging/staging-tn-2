import { cn } from '@/lib/utils';

interface PhotoFrameProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Classes applied to the outer wrapper (holds the corner brackets) */
  className?: string;
  /** Classes applied to the overflow-hidden inner container — use this for sizing (e.g. h-[600px], aspect-square) */
  innerClassName?: string;
  /** Extra classes on the <img> element */
  imgClassName?: string;
}

export function PhotoFrame({ src, alt, className, innerClassName, imgClassName, ...imgProps }: PhotoFrameProps) {
  return (
    <div className={cn('relative group', className)}>
      {/* Corner brackets */}
      <span className="absolute -top-1 -left-1 w-6 h-6 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none" />
      <span className="absolute -top-1 -right-1 w-6 h-6 border-t-[3px] border-r-[3px] border-primary z-20 pointer-events-none" />
      <span className="absolute -bottom-1 -left-1 w-6 h-6 border-b-[3px] border-l-[3px] border-primary z-20 pointer-events-none" />
      <span className="absolute -bottom-1 -right-1 w-6 h-6 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none" />

      <div className={cn('overflow-hidden', innerClassName)}>
        <img
          src={src}
          alt={alt}
          className={cn('w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700', imgClassName)}
          referrerPolicy="no-referrer"
          {...imgProps}
        />
      </div>
    </div>
  );
}
