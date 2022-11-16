import {MDXProvider} from '@mdx-js/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { components } from '../src/md'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
  )
}

export default MyApp
