import React from 'react'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className='bg-[rgb(19,19,19)]'>
            {children}
        </body>
      </html>
    )
  }