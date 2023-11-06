import Image from 'next/image'
import { CookieConsent } from '@/components/cookie-consent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CookieConsent />
    </main>
  )
}
