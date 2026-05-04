import type { Metadata } from 'next'
import './globals.css'
import './responsive.css'

export const metadata: Metadata = {
  title: 'PipeBorn — We Build Growth Systems For B2B Tech',
  description:
    'Connect with the right clients predictably and consistently — without expensive SDRs, unreliable referrals, or hit-and-miss agencies — powered by systems that keep your pipeline full.',
  keywords: [
    'B2B growth', 'lead generation', 'sales system', 'outbound',
    'pipeline', 'B2B tech', 'SDR alternative', 'PipeBorn',
  ],
  openGraph: {
    title: 'PipeBorn — We Build Growth Systems For B2B Tech',
    description: 'Connect with the right clients predictably and consistently.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
