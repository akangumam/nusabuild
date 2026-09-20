import { useState, type FormEvent } from 'react'
import { Button, Input } from './ui'
import { SuccessModal } from './SuccessModal'

const BENEFITS = [
  'Prioritas jadwal pengembangan & dedicated project manager',
  'Rate khusus untuk retainer bulanan dan proyek lanjutan',
  'Gratis technical review kuartalan untuk produk Anda',
]

/** Valid member codes mapped to their discount percentage. */
const VALID_CODES: Record<string, number> = {
  NUSA30: 30,
  BUILD25: 25,
  FOUNDER20: 20,
}

type Result =
  | { status: 'idle' }
  | { status: 'valid'; message: string }
  | { status: 'error'; message: string }

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 10.5 8 14l8-8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AlertIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 6.5v4M10 13.4h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

/** Special code that unlocks the annual build-apps offer via a success modal. */
const REWARD_CODE = 'NUSABUILD-10JT'

export function MemberDiscount() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState<Result>({ status: 'idle' })
  const [modalOpen, setModalOpen] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const normalized = code.trim().toUpperCase()
    if (!normalized) {
      setResult({ status: 'error', message: 'Masukkan kode member terlebih dahulu.' })
      return
    }
    if (normalized === REWARD_CODE) {
      setResult({ status: 'valid', message: 'Valid! Diskon Rp 10.000.000 untuk build apps 1 tahun.' })
      setModalOpen(true)
      return
    }
    const discount = VALID_CODES[normalized]
    if (discount) {
      setResult({
        status: 'valid',
        message: `Valid! Dapatkan ${discount}% off. Berlaku hingga 15 Sep 2025.`,
      })
    } else {
      setResult({
        status: 'error',
        message: 'Kode member tidak ditemukan. Periksa kembali dan coba lagi.',
      })
    }
  }

  return (
    <section id="member" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid gap-8 rounded-2xl border-2 border-primary bg-gradient-to-br from-discount to-[#e0f7fb] p-6 md:grid-cols-2 md:items-center md:gap-8 md:p-12">
        {/* Left column: badge, headline, validator */}
        <div>
          <span className="text-xs font-medium text-primary underline decoration-primary underline-offset-4">
            Member Discount
          </span>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-10 text-ink">Up to 30% Off</h2>
          <p className="mt-3 max-w-md text-base leading-6 text-ink-soft">
            Bergabung sebagai member dan dapatkan harga terbaik untuk pengembangan produk berkelanjutan.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 max-w-md" noValidate>
            <label htmlFor="member-code" className="mb-1.5 block text-xs font-medium leading-4 text-[#374151]">
              Masukkan Kode Member
            </label>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
              <Input
                id="member-code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Masukkan kode member"
                aria-invalid={result.status === 'error'}
                aria-describedby="member-result"
                autoComplete="off"
              />
              <Button type="submit" className="shrink-0 px-5 max-sm:w-full">
                Validasi
              </Button>
            </div>

            {result.status !== 'idle' && (
              <div
                id="member-result"
                role="status"
                aria-live="polite"
                className={`mt-3 flex items-start gap-2 rounded-lg p-3 text-sm leading-5 ${
                  result.status === 'valid'
                    ? 'border-2 border-success bg-discount text-[#15803D]'
                    : 'border border-l-4 border-error bg-[#FEE2E2] text-[#B91C1C]'
                }`}
              >
                {result.status === 'valid' ? (
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                ) : (
                  <AlertIcon className="mt-0.5 h-5 w-5 shrink-0 text-error" />
                )}
                <span className="pt-0.5 font-medium">{result.message}</span>
              </div>
            )}
          </form>
        </div>

        {/* Right column: benefits */}
        <ul className="space-y-4">
          {BENEFITS.map((b) => (
            <li key={b} className="flex items-start gap-4 rounded-xl bg-white/70 p-4">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-white">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span className="text-base leading-6 text-ink">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {modalOpen && <SuccessModal onClose={() => setModalOpen(false)} />}
    </section>
  )
}
