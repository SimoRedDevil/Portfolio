import React from 'react'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
          <title>Mohamed El Youssfi | Portfolio</title>
        </head>
        <body className='bg-[rgb(19,19,19)]'>
            {children}
        </body>
      </html>
    )
  }