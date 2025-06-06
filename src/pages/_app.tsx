import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'

import createEmotionCache from '@/styles/createEmotionCache'
import * as gtag from '@/utils/gtag'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import TagManager from 'react-gtm-module'
import theme from '@/styles/theme'
import { store } from '@/app/store'
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


let persistor = persistStore(store)

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

// Google conversion tracking tag
// const tagManagerArgs = {
//   gtmId: 'G-Z2Z78V7EFB',
// }
// <!-- Google Tag Manager -->
// html head
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-MMMPFFK');</script>
// <!-- End Google Tag Manager -->

// <!-- Google Tag Manager (noscript) body -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMMPFFK"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  // useAsyncScript('https://maison-labs.com/agent-inject.bundle.js')
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const router = useRouter()
  const [queryClient] = useState(() => new QueryClient())
  // const page = path?.replace(path[0], path[0].toUpperCase);
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={pageProps.dehydratedState}>
            <PersistGate loading={null} persistor={persistor}>
              <ThemeProvider theme={theme}>
                <CssBaseline />

                <Component {...pageProps} />

                <ReactQueryDevtools initialIsOpen={false} position="left" />
              </ThemeProvider>
            </PersistGate>
          </HydrationBoundary>
        </QueryClientProvider>
      </Provider>
    </CacheProvider>
  )
}

export default MyApp
