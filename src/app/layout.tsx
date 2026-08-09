import { ThemeProvider } from '@/context/ThemeContext'
import { Analytics } from '@vercel/analytics/react'
import '../style.css'

export const metadata = {
  title: 'Walter Aluman',
  description: 'Frontend Developer Portfolio - Walter B.G Aluman',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var m=window.matchMedia("(prefers-color-scheme:dark)").matches;if(t==="dark"||(!t&&m)){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})()`
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
