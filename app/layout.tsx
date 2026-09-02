import './global.css'

export const metadata = {
  title: 'Jose L. Treff — Performance Marketing',
  description: 'Senior Performance Marketer und Shopify-Entwickler.',
  verification: {
    google: '6q0NbyMbBJracr9bB66UZLLx9We-ApBn94rVl2z1rmA',
  },
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
