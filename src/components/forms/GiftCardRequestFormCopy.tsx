'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState } from 'react'

import { toast } from 'react-toastify'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { some } from 'lodash'
import H2 from '../layout/fonts/H2'
import { Loader2 } from 'lucide-react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
  Typography,
} from '@mui/material'
import '@react-pdf-viewer/core/lib/styles/index.css'
import Paragraph from '../layout/fonts/Paragraph'
import { Check, Close } from '@mui/icons-material'
import CreditCardForm, { useCreditCardForm } from './CreditCardForm'
import usePostGiftCard from '@/hooks/postGiftCard'

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  amount: z.string(),
  otherAmount: z.string(),
})

function GiftCardRequestForm() {
  // form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      amount: '',
      otherAmount: '',
    },
  })
  const [otherValueSelected, setOtherValueSelected] = useState(false)
  const { mutateAsync, isSuccess, isPending, isError, data } = usePostGiftCard()
  const [openPdfDialog, setOpenPdfDialog] = useState(false)

  const {
    state: formData,
    handleInputChange,
    handleInputFocus,
    handleSubmit,
    date,
    setAddress,
    generateAndSendPDF,
    pdfFile,
    loading,
    setDrawing,
    setPdfFile,
    setDate,
    address,
  } = useCreditCardForm({
    handleClose: () => setOpenPdfDialog(false),
    amount: form.getValues().otherAmount || form.getValues().amount,

    guest: form.getValues().name,
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      amount: values.otherAmount ? values.otherAmount : values.amount,

      file: pdfFile,
    }

    const res = await mutateAsync(data)
    if (res?.success) {
      console.log(isSuccess, res, data)
      form.reset()
      form.setValue('amount', '')
      setPdfFile(null)
      handleSubmit()
      toast.success(`${res?.message}`)
      // redirect
    }
  }
  console.log(isSuccess, data, isError)

  const formHasEmptyFields = () => {
    return (
      form.getValues().name === '' ||
      form.getValues().email === '' ||
      form.getValues().phone === '' ||
      form.getValues().amount === ''
    )
  }

  return (
    <div className="mx-auto h-full rounded-lg p-2 shadow-sm">
      <H2 className="text[22px] text-center md:text-xl">Gift card form</H2>
      {isSuccess && data?.success ? (
        <div className="container mx-auto py-4">
          <Paragraph className="font-bold">
            {' '}
            <Check className="text-[green]" />
            Gift card request submitted successfully.
          </Paragraph>
          <Paragraph className="text-sm">
            Purchaser: {data?.gift_card?.name}
          </Paragraph>
          <Paragraph className="text-sm">
            Amount: ${data?.gift_card?.amount}
          </Paragraph>
          <Paragraph className="text-sm">
            Phone: {data?.gift_card?.phone_number}
          </Paragraph>
          <Paragraph className="text-sm">
            Email: {data?.gift_card?.email}
          </Paragraph>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 "
          >
            <FormField
              control={form.control}
              name="name"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purchaser Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Purchaser Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purchaser Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Purchaser Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purchaser Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Purchaser Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="recipientName"
              disabled={isPending}
              
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipient's full name:</FormLabel>
                  <FormControl>
                    <Input placeholder="Recipient's full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
                <FormField
              control={form.control}
              name="recipientEmail"
              disabled={isPending}

              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipient Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Recipient's Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => {
                if (field.value === 'other') {
                  setOtherValueSelected(true)
                } else setOtherValueSelected(false)
                return (
                  <FormItem>
                    <FormLabel>Gift card value</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={isPending}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Amount" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel className="font-semibold text-gray-800">
                              Choose a gift card amount
                            </SelectLabel>
                            <SelectItem value="100" className="text-gray-700">
                              $100
                            </SelectItem>
                            <SelectItem value="250" className="text-gray-700">
                              $250
                            </SelectItem>
                            <SelectItem value="500" className="text-gray-700">
                              $500
                            </SelectItem>
                            <SelectItem value="1000" className="text-gray-700">
                              $1000
                            </SelectItem>
                          </SelectGroup>
                          <SelectGroup>
                            <SelectItem value="other" className="text-gray-700">
                              Enter a custom amount
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            {otherValueSelected ? (
              <FormField
                control={form.control}
                name="otherAmount"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custom Amount</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Other Amount"
                        {...field}
                        type="number"
                      />
                    </FormControl>
                    <FormDescription>Enter the custom amount</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : null}

            <Paragraph className="text-sm text-gray-700">
              To complete your gift card purchase, please click the button below
              to open and complete the{' '}
              <strong>Credit Card Authorization Form</strong>. Please fill out
              all fields.
            </Paragraph>
            <Button
              type="button"
              disabled={formHasEmptyFields() || pdfFile !== null}
              className="w-full text-wrap  border-2 border-blue font-bold uppercase text-blue  hover:bg-blue hover:text-gray-100"
              variant="outline"
              size="lg"
              onClick={() => setOpenPdfDialog(true)}
            >
              {pdfFile ? 'Form completed' : 'Credit Card Form'}
            </Button>
            {pdfFile ? (
              <>
                <Paragraph className="text-green-600 text-sm font-semibold">
                  Authorization form saved securely{' '}
                  <Check fontSize="small" color="success" />.
                </Paragraph>
                {URL.createObjectURL(pdfFile)}
              </>
            ) : null}

            <Button
              className="w-full bg-blue font-bold uppercase hover:text-blue"
              type="submit"
              disabled={
                isPending ||
                form.formState.isSubmitting ||
                some(form.formState.dirtyFields, (field) => !field) ||
                !pdfFile
              }
            >
              {isPending ? <Loader2 className="animate-spin" /> : null}

              {isPending ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
          <Dialog
            open={openPdfDialog}
            onClose={() => setOpenPdfDialog(false)}
            fullScreen
            scroll="paper"
          >
            <DialogTitle className="text-center">
              <Typography variant="h3" color="primary">
                Skylark Credit Card Authorization Form
              </Typography>
              <Close
                className="absolute right-4 top-2 cursor-pointer"
                onClick={() => setOpenPdfDialog(false)}
              />
            </DialogTitle>
            <DialogContent>
              <CreditCardForm
                state={formData}
                handleInputChange={handleInputChange}
                handleInputFocus={handleInputFocus}
                date={date}
                setDate={setDate}
                setDrawing={setDrawing}
                address={address}
                setAddress={setAddress}
                handleSubmit={handleSubmit}
              />
              {/* <Signature onSubmit={(data) => setDrawing?.(data as any)} /> */}
            </DialogContent>
            <DialogActions>
              <Button
                className="bg-blue text-gray-100 hover:bg-gray-100 hover:text-blue"
                disabled={
                  formData.name === '' ||
                  formData.number === '' ||
                  formData.expiry === '' ||
                  formData.cvc === ''
                }
                onClick={() => {
                  generateAndSendPDF()
                  setOpenPdfDialog(false)
                }}
              >
                Save & Close
              </Button>
              <Button
                className="bg-[red] text-gray-100 hover:bg-gray-100 hover:text-[red]"
                onClick={() => setOpenPdfDialog(false)}
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}

      {isPending ? <LinearProgress /> : null}
    </div>
  )
}

export default GiftCardRequestForm
