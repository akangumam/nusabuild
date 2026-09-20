Context: Landing page IT company "NusaBuild". 
Modal popup muncul ketika user validasi kode "NusaBuild-10JT" berhasil (valid).
Penawaran: Harga spesial member Rp 10.000.000 untuk build apps 1 tahun (berlaku hingga 23 Sep 2026).
Vibe: Modern minimalis, clean, professional. Celebrate success tapi tetap clear CTA.

MODAL CONTAINER:
- Bg: white
- Border radius: 16px
- Width: 480px (desktop) | 90vw max (mobile)
- Height: auto
- Shadow: 0 20px 25px -5px rgba(0,0,0,0.1)
- Padding: 48px (desktop) | 32px (mobile)
- Align: center screen (fixed overlay dengan dark backdrop 40% opacity)

LAYOUT: Vertical stack (top to bottom):
1. Success icon / badge (top)
2. Headline
3. Price highlight card (prominent)
4. Expiry date warning
5. Benefits list
6. Action button
7. Fine print (optional)

--- COMPONENT DETAILS ---

[1] SUCCESS ICON/BADGE:
- Circle bg: #ECFDF5 (soft cyan)
- Icon: checkmark biru, size 48px, color #0891B2
- Top margin: 0
- Bottom margin: 24px

[2] HEADLINE:
- Text: "Kode Member Valid!"
- Font: Bricolage Grotesque, 28px / 700 weight
- Color: #1F2937 (text primary)
- Line height: 36px
- Margin bottom: 12px

[3] SUBHEADING:
- Text: "Dapatkan akses build apps selama 1 tahun dengan harga spesial member"
- Font: system sans, 14px / 400 weight
- Color: #6B7280 (text secondary)
- Margin bottom: 28px

[4] PRICE HIGHLIGHT CARD:
- Bg: linear-gradient(135deg, #ECFDF5 0%, #E0F2FE 100%) — soft cyan to light blue gradient
- Border: 2px solid #0891B2
- Border radius: 12px
- Padding: 28px
- Margin bottom: 20px

Inside card layout (horizontal, space-between):
  Left:
    - Label: "Harga Member" (12px / 500 weight, text secondary)
    - Price: "Rp 10.000.000" (36px / 700 weight, Bricolage Grotesque, #0891B2)
    - Subtext: "untuk build apps 1 tahun" (12px / 400, text secondary)
  
  Right:
    - Badge: "1 TAHUN" (12px / 600, white text, bg #0891B2, radius 20px, padding 6px 12px)

[5] EXPIRY DATE WARNING:
- Bg: #FEF3C7 (soft yellow/amber)
- Border-left: 4px solid #F59E0B (amber accent)
- Padding: 12px 16px
- Border radius: 8px
- Margin bottom: 24px

Content:
  - Icon: clock atau alert, 16px, color #D97706 (amber)
  - Text: "Penawaran berlaku hingga 23 September 2026" (14px / 500 weight, #92400E text dark amber)

[6] BENEFITS CHECKLIST:
- Space between items: 16px
- Each item: flex gap-3 (icon left, text right)
  
Item styling:
  - Icon: checkmark, 20px, color #10B981, flex-shrink-0
  - Text: 14px / 400 weight, color #374151
  - Items:
    1. "Link approval akan dikirim ke email terdaftar"
    2. "Pembayaran via rekening bank member (BNI/BCA/Mandiri)"
    3. "Akses konsultasi & development mulai langsung setelah pembayaran"
    4. "Invoice & dokumentasi lengkap ter-update di dashboard"

[7] ACTION BUTTON:
- Text: "Lanjutkan ke Approval"
- Bg: #0891B2 (primary blue)
- Text color: white
- Font: 14px / 600 weight
- Padding: 14px 24px
- Height: 48px
- Border radius: 8px
- Width: 100%
- Hover state: bg #0369A1 (darker blue)
- Icon (optional): arrow-right 18px, margin-left 8px
- Margin bottom: 16px

[8] FINE PRINT (optional, below button):
- Text: "Link approval berlaku 7 hari. Pembayaran aman & terenkripsi via Midtrans."
- Font: 12px / 400 weight
- Color: #9CA3AF (text muted)
- Text align: center

--- TYPOGRAPHY & COLOR (strict) ---
Font stacks:
  - Headline: Bricolage Grotesque 700
  - Body: System sans (SF Pro / -apple-system / Segoe UI fallback)

Colors:
  - Primary: #0891B2
  - Dark primary: #0369A1 (hover)
  - Success: #10B981
  - Warning/Expiry: #F59E0B (amber)
  - Text primary: #1F2937
  - Text secondary: #6B7280
  - Muted: #9CA3AF

--- SPACING GRID ---
- Modal padding: 48px desktop | 32px mobile
- Gap between sections: 24px (major) | 16px (minor)
- Button height: 48px (touch target)
- Icon size: 20-48px

--- RESPONSIVE ---
Desktop (1440px):
  - Modal width: 480px
  - Headline: 28px
  - Price: 36px

Tablet (768px):
  - Modal width: calc(100% - 32px), max 480px
  - Headline: 26px
  - Price: 32px

Mobile (390px):
  - Modal width: 90vw, max 360px
  - Padding: 32px
  - Headline: 24px
  - Price: 28px
  - Button height: 44px

--- BACKDROP & ANIMATION ---
- Overlay: bg-black opacity-40, fill screen
- Modal animation: fade-in 200ms + scale 200ms (from 0.9 → 1)
- Close button (X): top-right, 24px, color #D1D5DB, hover #9CA3AF

--- ACCESSIBILITY ---
- Modal role: dialog
- Focus trap: keyboard navigation
- Contrast: 5:1+ text on all backgrounds
- Button size: 48px min (touch target)
- Focus state: 2px outline #0891B2

--- COPY FINALIZATION ---
Headline: "Kode Member Valid!"
Subhead: "Dapatkan akses build apps selama 1 tahun dengan harga spesial member"
Price label: "Harga Member"
Price amount: "Rp 10.000.000"
Price subtext: "untuk build apps 1 tahun"
Badge: "1 TAHUN"
Expiry: "Penawaran berlaku hingga 23 September 2026"
Button: "Lanjutkan ke Approval"
Benefits:
  1. "Link approval akan dikirim ke email terdaftar"
  2. "Pembayaran via rekening bank member (BNI/BCA/Mandiri)"
  3. "Akses konsultasi & development mulai langsung setelah pembayaran"
  4. "Invoice & dokumentasi lengkap ter-update di dashboard"
Fine print: "Link approval berlaku 7 hari. Pembayaran aman & terenkripsi via Midtrans."