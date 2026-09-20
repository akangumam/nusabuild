import { useEffect, useRef, useState } from 'react'

const BENEFITS = [
  'Link approval langsung ke email',
  'Pembayaran via Bank Jago Syariah member',
  'Akses konsultasi mulai otomatis',
  'Invoice & dokumentasi di dashboard',
]

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 10.5 8 14l8-8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ClockIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 6.25V10l2.5 1.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SpinnerIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`animate-spin ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function EnvelopeIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SuccessModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const [step, setStep] = useState<'review' | 'loading' | 'success'>('review')

  const remainingDays = Math.max(0, Math.ceil((new Date('2026-09-23T23:59:59+07:00').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))

  // Focus management, Escape to close, and a simple focus trap.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previouslyFocused?.focus()
    }
  }, [onClose])

  function handleApprove() {
    setStep('loading')
    // Simulate network request
    setTimeout(() => {
      setStep('success')
    }, 1500)
  }

  return (
    <div
      className="animate-overlay-in fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-[28px] sm:p-[32px] md:p-[40px]"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="animate-modal-in relative h-fit w-full max-w-[90vw] overflow-hidden rounded-[16px] bg-white p-[28px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] sm:max-w-[440px] sm:p-[32px] md:max-w-[480px] md:p-[40px] max-h-[90vh]"
      >
        {/* Close button */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-[20px] top-[20px] grid h-8 w-8 place-items-center rounded-lg text-[#D1D5DB] transition-colors hover:text-[#9CA3AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {step === 'success' ? (
          <div className="flex animate-in fade-in zoom-in-95 duration-300 flex-col items-center text-center py-4">
            <div className="mb-[20px] grid h-[72px] w-[72px] place-items-center rounded-full bg-[#ECFDF5] relative">
              <EnvelopeIcon className="h-[36px] w-[36px] text-[#0891B2]" />
              <div className="absolute -bottom-1 -right-1 grid h-[26px] w-[26px] place-items-center rounded-full bg-[#10B981] border-[3px] border-white">
                <CheckIcon className="h-4 w-4 text-white" />
              </div>
            </div>
            
            <h2 className="mb-[12px] font-display text-[24px] font-bold text-[#1F2937]">
              Tautan Terkirim!
            </h2>
            
            <p className="mb-[24px] text-[14px] font-normal leading-[22px] text-[#4B5563]">
              Silakan periksa kotak masuk atau folder spam di email <br className="hidden sm:block" />
              <strong className="font-semibold text-[#1F2937]">khaerul20250100407@sibermu.ac.id</strong>
            </p>
            
            <div className="mb-[28px] rounded-[8px] bg-[#F3F4F6] px-[16px] py-[12px]">
              <p className="text-[12px] font-medium leading-[18px] text-[#6B7280]">
                Tautan persetujuan untuk Bank Jago Syariah Anda akan kedaluwarsa dalam {remainingDays} hari.
              </p>
            </div>
            
            <button
              type="button"
              onClick={onClose}
              className="flex h-[40px] w-full items-center justify-center rounded-[8px] border border-[#D1D5DB] bg-white text-[13px] font-semibold text-[#374151] transition-all hover:bg-[#F9FAFB] md:h-[44px]"
            >
              Tutup & Selesai
            </button>
          </div>
        ) : (
          <div className={step === 'loading' ? 'opacity-70 pointer-events-none transition-opacity duration-300' : ''}>
            {/* [1] SUCCESS + HEADLINE */}
            <div className="mb-[20px] flex items-center gap-[12px]">
              <div className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#ECFDF5]">
                <CheckIcon className="h-[24px] w-[24px] text-[#0891B2]" />
              </div>
              <h2
                id="success-modal-title"
                className="font-display text-[22px] font-bold leading-tight text-[#1F2937] md:text-[24px]"
              >
                Kode Member Valid!
              </h2>
            </div>

            {/* [2] MEMBER INFO CARD */}
            <div className="mb-[16px] rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB] p-[16px]">
              <div className="flex flex-col gap-[6px]">
                <div>
                  <p className="text-[11px] font-medium text-[#6B7280]">Nama Member</p>
                  <p className="text-[14px] font-semibold text-[#1F2937]">Khaerul Umam</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-[#6B7280]">Email</p>
                  <p className="text-[13px] font-normal text-[#1F2937]">khaerul20250100407@sibermu.ac.id</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-[#6B7280]">Rekening Bank Jago Syariah</p>
                  <p className="text-[13px] font-normal text-[#1F2937]">Khaerul Umam (***3321)</p>
                </div>
              </div>
            </div>

            {/* [3] PRICE SECTION */}
            <div className="mb-[16px] flex items-center justify-between rounded-[12px] border-[2px] border-[#0891B2] bg-gradient-to-br from-[#ECFDF5] to-[#E0F2FE] p-[16px]">
              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="text-[12px] font-medium text-[#6B7280]">Harga Member:</span>
                  <span className="font-display text-[20px] font-bold text-[#0891B2] md:text-[24px]">
                    Rp 10.000.000
                  </span>
                </div>
                <p className="text-[11px] font-normal text-[#6B7280]">untuk build apps 1 tahun</p>
              </div>
              <span className="shrink-0 rounded-[16px] bg-[#0891B2] px-[10px] py-[4px] text-[11px] font-semibold text-white">
                1 TAHUN
              </span>
            </div>

            {/* [4] EXPIRY WARNING */}
            <div className="mb-[16px] flex items-center gap-[8px] rounded-[6px] border-l-[3px] border-[#F59E0B] bg-[#FEF3C7] px-[14px] py-[12px]">
              <ClockIcon className="h-[16px] w-[16px] shrink-0 text-[#D97706]" />
              <p className="text-[12px] font-medium text-[#92400E]">
                Berlaku hingga 23 September 2026
              </p>
            </div>

            {/* [5] BENEFITS LIST */}
            <ul className="mb-[18px] flex flex-col gap-[10px]">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-[8px]">
                  <CheckIcon className="mt-0.5 h-[16px] w-[16px] shrink-0 text-[#10B981]" />
                  <span className="text-[13px] font-normal leading-tight text-[#374151]">{b}</span>
                </li>
              ))}
            </ul>

            {/* [6] ACTION BUTTON */}
            <button
              type="button"
              disabled={step === 'loading'}
              onClick={handleApprove}
              className="mb-[12px] flex h-[40px] w-full items-center justify-center gap-[8px] rounded-[8px] bg-[#0891B2] text-[13px] font-semibold text-white transition-all hover:bg-[#0369A1] disabled:opacity-80 disabled:cursor-wait md:h-[44px]"
            >
              {step === 'loading' ? (
                <>
                  <SpinnerIcon className="h-[16px] w-[16px] text-white" />
                  Mengirim tautan...
                </>
              ) : (
                'Lanjutkan ke Approval'
              )}
            </button>

            {/* [7] FINE PRINT */}
            <p className="text-center text-[11px] font-normal leading-[16px] text-[#9CA3AF]">
              Link approval berlaku {remainingDays} hari. Pembayaran aman via Midtrans.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
