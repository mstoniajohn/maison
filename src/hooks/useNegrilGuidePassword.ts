import {
  setNegrilPassword,
  setShowPassword,
} from '@/features/negril/negrilSlice'
import { useAppDispatch, useAppSelector } from '@/app/store'
import { useEffect, useState } from 'react'
import NegrilPassword from '@/utils/helpers'
import { toast } from 'react-toastify'

const useNegrilGuidePassword = () => {
  const dispatch = useAppDispatch()
  const [canView, setCanView] = useState(false)
  const {
    negrilGuides,
    negrilPassword,
    createGuideState,
    sectionState,
    deleteGuideState,
    showPassword,
  } = useAppSelector((state) => state.negril)
  useEffect(() => {
    if (negrilPassword) {
      setShowPassword(true)
      setPassword(negrilPassword)
    }
  }, [negrilPassword])
  const [password, setPassword] = useState(negrilPassword)
  const handleClickShowPassword = () => dispatch(setShowPassword(!showPassword))

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
  const onChange = (e: any) => {
    setPassword(e.target.value)
    setNegrilPassword(e.target.value)
  }
  const onSubmit = (e: any) => {
    e.preventDefault()
    if (password && NegrilPassword.checkPassword(password)) {
      dispatch(setNegrilPassword({ password: password }))
      setCanView(true)
    } else {
      toast('Invalid password. Try again.')
    }
  }

  useEffect(() => {
    // location.reload()
    if (password && NegrilPassword.checkPassword(password)) {
      setCanView(true)
    }
  }, [])

  console.log(negrilPassword, password, canView)

  return {
    canView,
    handleClickShowPassword,
    handleMouseDownPassword,
    onChange,
    onSubmit,
    showPassword,
    password,
    negrilGuides,
    createGuideState,
    sectionState,
    deleteGuideState,
  }
}

export default useNegrilGuidePassword
