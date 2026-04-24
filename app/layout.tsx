import './global.css'

export const metadata = {
  title: 'Jose L. Treff — Performance Marketing',
  description: 'Senior Performance Marketer und Shopify-Entwickler.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="antialiased bg-[#0d0d12] text-white">
        {children}
      </body>
    </html>
  )
}
