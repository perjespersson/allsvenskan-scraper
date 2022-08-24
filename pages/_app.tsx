import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}
