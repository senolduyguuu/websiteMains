import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 40, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 850 850"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M175 512.5L337.5 675H512.5L675 512.5V337.5L512.5 175L425 262.5L337.5 175L175 337.5V512.5ZM175 512.5L425 262.5L675 512.5H175Z"
      />
    </svg>
  );
}
