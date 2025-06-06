import React from 'react'

import Layout from '@/components/layout/Layout'
import SignInSide from '@/components/auth/SignIn'

export default function login() {
  return (
    <Layout title="Sign In">
      <SignInSide />
    </Layout>
  )
}
