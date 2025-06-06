import { CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaCheckCircle } from 'react-icons/fa'
// import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '@/app/store'
import Layout from '@/components/layout/Layout'
import { activate, reset } from '@/features/auth/authSlice'

// import Spinner from '../components/Spinner'
// import Title from '../components/Title'
// import { activate, reset } from '@/features/auth/authSlice'

const ActivatePage = () => {
  const router = useRouter()
  const { uid, token } = router.query

  const dispatch = useAppDispatch()

  const { isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      router.push('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, message, router, dispatch])

  const submitHandler = () => {
    const userData = {
      uid,
      token,
    }

    dispatch(activate({ user: userData }))
    toast.success('Your account has been activated! You can login now')
  }

  return (
    <Layout title="Activate User">
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <section>
              <h1>
                <FaCheckCircle /> Activate your account
              </h1>
              <hr className="hr-text" />
            </section>
          </Col>
        </Row>
        {isLoading && <CircularProgress />}
        <Row className="mt-3">
          <Col className="text-center">
            <Button
              type="submit"
              variant="outline-success"
              size="lg"
              className="large-btn mt-3"
              onClick={submitHandler}
            >
              Activate
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ActivatePage
