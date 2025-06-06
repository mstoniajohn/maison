import { useAppSelector } from '@/app/store'
import usePostSendGiftCardInEmail from '@/components/api/postSendGiftCard'
import SignInSide from '@/components/auth/SignIn'
import H1 from '@/components/layout/fonts/H1'
import Paragraph from '@/components/layout/fonts/Paragraph'
import PageWrapper from '@/components/layout/PageWrapper'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { isEmpty } from 'lodash'
import { Info, Loader2 } from 'lucide-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

// code: 0413f3a2
const formSchema = z.object({
  code: z.string().min(8, {
    message: 'Code must be more 8 characters long',
  }),
})

function Send() {
  const [isAdmin, setIsAdmin] = React.useState(false)
  // get user from cache
  const queryClient = useQueryClient()
  // const user = queryClient.getQueryData(['user_info'])
  const { currentUser } = useAppSelector((state) => state.auth)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '',
    },
  })
  const {
    mutateAsync: sendGiftCard,
    error,
    isError,
    isSuccess,
    isPending,
    data,
  } = usePostSendGiftCardInEmail()
  async function submitForm(values: z.infer<typeof formSchema>) {
    const data = await sendGiftCard(values.code)
    if (data?.success) {
      toast.success(data?.message)
      form.reset()
    } else {
      toast.error(data?.message)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user') || '{}')
      setIsAdmin(user.admin)
    }
  }, [])

  return (
    <PageWrapper title="Rockhouse Admin">
      {!currentUser?.admin ? (
        <SignInSide />
      ) : (
        <div className="mx-auto max-w-screen-sm space-y-10 py-10">
          <H1 className="text-center">Send Gift Cards</H1>
          <Paragraph>
            <strong>
              <em>Note:</em>
            </strong>{' '}
            Before sending, confirm the gift card for the matching code has been
            paid and the code is correct.
          </Paragraph>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitForm)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="code"
                disabled={isPending}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Gift Card Code" {...field} />
                    </FormControl>
                    <FormDescription className="flex items-center space-x-4">
                      <Info className="text-warning h-5" /> Please confirm that
                      the gift card is paid for and the code is correct before
                      sending.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button
                  disabled={form.formState.isSubmitting || isPending}
                  type="submit"
                  className="bg-blue font-bold uppercase hover:text-blue"
                >
                  {isPending ? <Loader2 className="animate-spin" /> : null}

                  {isPending ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </PageWrapper>
  )
}

export default Send
