import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'

/**
 * Shared UI primitives for the NusaBuild landing page.
 * All interactive controls follow the 44px touch-target + 8px radius spec,
 * with label typography at 14px / 600 for CTA consistency.
 */

type ButtonVariant = 'primary' | 'outline' | 'ghost'

const BUTTON_BASE =
  'inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60'

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-secondary focus-visible:outline-primary',
  outline:
    'border-2 border-white text-white hover:bg-secondary hover:border-secondary focus-visible:outline-white',
  ghost:
    'border border-[#E5E7EB] bg-white text-ink hover:border-primary hover:text-primary focus-visible:outline-primary',
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ButtonVariant }) {
  return (
    <a href={href} className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`h-11 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 text-base text-ink placeholder:text-[#9CA3AF] focus:border-2 focus:border-primary focus:shadow-[0_0_0_3px_rgba(8,145,178,0.15)] focus:outline-none focus-visible:outline-none ${className}`}
      {...props}
    />
  )
}

export function Card({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={`rounded-xl border border-[#E5E7EB] bg-white ${className}`}>{children}</div>
  )
}
