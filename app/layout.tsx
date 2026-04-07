import '@/app/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white antialiased pt-16">
        {children}
      </body>
    </html>
  )
}
