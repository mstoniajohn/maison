import Layout from '@/components/layout/Layout'
import NegrilGuideFooter from '@/components/layout/NegrilGuideFooter'
import GuideUnlockForm from '@/components/negril-guide/forms/GuideUnlockForm'
import useNegrilGuideAccess from '@/hooks/useNegrilGuideAccess'
import useNegrilGuidePassword from '@/hooks/useNegrilGuidePassword'
import { CircularProgress } from '@mui/material'
import dynamic from 'next/dynamic'
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'
const GuideContent = dynamic(
  () => import('@/components/negril-guide/GuidePageContent'),
  {
    ssr: false,
  }
)

export default function NegrilGuidePage() {
  const { enqueueSnackbar } = useSnackbar()
  const { state, error, actions } = useNegrilGuideAccess()

  useEffect(() => {
    if (state.unlocked && state.password) {
      enqueueSnackbar(`Password: ${state.password}`, { persist: false })
    }
  }, [state.unlocked, state.password, enqueueSnackbar])
  if (state.loading) {
    return (
      <Layout
        title="Negril Guide"
        showGuideButton={false}
        hideGuideButton={true}
        footerComponent={<NegrilGuideFooter />}
      >
        <div className="flex h-screen items-center justify-center">
          <CircularProgress />
        </div>
      </Layout>
    )
  }

  if (state.unlocked) {
    return (
      <Layout
        title="Negril Guide"
        showGuideButton={false}
        hideGuideButton={true}
        footerComponent={<NegrilGuideFooter />}
      >
        <GuideContent />
      </Layout>
    )
  }
  return (
    <Layout
      title="Negril Guide"
      showGuideButton={false}
      hideGuideButton={true}
      footerComponent={<NegrilGuideFooter />}
    >
      <GuideUnlockForm onSubmit={actions.requestAccess} />
    </Layout>
  )
}
