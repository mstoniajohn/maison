import React, { useState } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import Signature from '../pdf/Signature'
import { jsPDF } from 'jspdf'
import { TextField } from '@mui/material'

const getCardType = (number: string) => {
  const cardTypes: Record<string, RegExp> = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  }
  return Object.keys(cardTypes).find((type: string) =>
    cardTypes[type].test(number)
  )
}

const useCreditCardForm = ({
  amount,
  handleClose,
  guest,
}: {
  amount: any
  handleClose: any
  guest: string
}) => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    issuer: '',
    focus: '',
  })
  const [pdfFile, setPdfFile] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [drawing, setDrawing] = useState(null)
  const [date, setDate] = useState()
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    country: '',
    zip: '',
  })

  const handleInputChange = (evt: any) => {
    const { name, value } = evt.target
    setState((prev) => ({ ...prev, [name]: value }))
    if (name === 'number') {
      const issuer = getCardType(value)
      setState((prev) => ({ ...prev, issuer: issuer ? issuer : '' }))
    }
  }

  const handleInputFocus = (evt: any) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }))
  }
  const handleSubmit = () => {
    setState({
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      issuer: '',
      focus: '',
    })
    setAddress({
      street: '',
      city: '',
      state: '',
      country: '',
      zip: '',
    })
  }

  const generateAndSendPDF = async () => {
    setLoading(true)
    const doc = new jsPDF()

    // Add content to the PDF
    // Add form data
    doc.setFontSize(12)
    doc.text(`Skylark Credit Card Details for ${guest}`, 20, 10)
    doc.text(`Card Type: ${state.issuer}`, 20, 20)
    // doc.text(`Guest Name: ${formData.guest_name}`, 20, 40);
    doc.text(`Name on Card: ${state.name}`, 20, 30)
    doc.text(`Card Number: ${state.number}`, 20, 40)
    doc.text(`Expiration Date: ${state.expiry}`, 20, 50)
    doc.text(`CVC: ${state.cvc}`, 20, 60)
    doc.text(`Amount: $${amount}`, 20, 70)
    doc.text(`Date: ${date}`, 20, 80)
    doc.text(
      `Address: ${address.street}, ${address.city}, ${address.state}, ${address.country} ${address.zip}`,
      20,
      90
    )
    // Add the signature image
    if (drawing) {
      doc.addImage(drawing, 'PNG', 20, 90, 100, 30) // Adjust dimensions as needed
    } else {
      doc.text('Signature: Not Provided', 20, 100)
    }

    // Generate the PDF as a Blob
    const pdfBlob = doc.output('blob')

    // Prepare FormData
    const formDataToSend = new FormData()
    formDataToSend.append('file', pdfBlob, 'form-data.pdf')

    // Set the generated PDF file
    setPdfFile(pdfBlob)
    setLoading(false)
    handleClose()
  }
  console.log(state, date, address)

  return {
    state,
    handleInputChange,
    handleInputFocus,
    handleSubmit,
    date,
    address,
    setAddress,
    generateAndSendPDF,
    pdfFile,
    setLoading,
    loading,
    setDrawing,
    setDate,
    setPdfFile,
    setState,
  }
}
interface CreditCardFormProps {
  state: {
    number: string
    expiry: string
    cvc: string
    name: string
    issuer: string
    focus: string
  }
  setState?: (data: any) => void
  handleInputChange: (e: any) => void
  handleInputFocus: (e: any) => void
  handleSubmit?: (e: any) => void
  setDrawing?: (data: any) => void
  date: any
  address: any
  setAddress?: (data: any) => void
  generateAndSendPDF?: () => void
  pdfFile?: any
  loading?: boolean
  setPdfFile?: (data: any) => void
  setDate: (data: any) => void
}

function CreditCardForm({
  state,
  handleInputChange,
  handleInputFocus,
  handleSubmit,
  setDrawing,
  date,
  setDate,
  address,
  setAddress,
}: CreditCardFormProps) {
  const handleSetAddress = (e: any) => {
    setAddress?.({ ...address, [e.target.name]: e.target.value })
  }

  return (
    <div className="mx-auto w-full max-w-lg">
      <Cards
        number={state.number}
        name={state.name}
        expiry={state.expiry}
        cvc={state.cvc}
        focused={state.focus as any}
        issuer={state.issuer}
      />
      <form className="space-y-3">
        <div className="mt-5 grid grid-cols-1 gap-2">
          <input
            type="number"
            name="number"
            className="col-span-2 rounded  border-2 shadow"
            placeholder="Card Number*"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          <input
            type="text"
            name="name"
            className="col-span-2 rounded border-2 shadow"
            placeholder="Full Name*"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            autoComplete="off"
            required
          />

          <input
            id="expiry"
            type="number"
            name="expiry"
            className="col-span-1 rounded  border-2 shadow"
            placeholder="Card Expiry (MMYY)*"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            autoComplete="off"
            required
          />

          <input
            type="number"
            name="cvc"
            className="col-span-1 rounded  border-2 shadow"
            placeholder="CVC*"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            autoComplete="off"
            required
          />
        </div>
        <div className="grid w-full gap-3">
          <h6 className="text-md font-semibold">Credit Card Billing Address</h6>
          <TextField
            fullWidth
            name="street"
            value={address.street}
            onChange={handleSetAddress}
            label="Street"
          />
          <div>
            <TextField
              fullWidth
              name="city"
              value={address.city}
              onChange={handleSetAddress}
              label="City"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <TextField
              fullWidth
              name="state"
              value={address.state}
              onChange={handleSetAddress}
              label="State"
            />
            <TextField
              fullWidth
              name="zip"
              value={address.zip}
              onChange={handleSetAddress}
              label="Zip Code"
            />
          </div>
          <div>
            <TextField
              fullWidth
              name="country"
              value={address.country}
              onChange={handleSetAddress}
              label="Country"
            />
          </div>
        </div>
        <p className="my-2 text-sm text-gray-800">
          As the credit card holder or authorized user, I understand and consent
          to the use of the above credit card without my signature on the charge
          slip, that the details filled out in this Credit Card Authorization
          will serve as an original, and that this Authorization cannot be
          revoked. I agree to all the terms as described above and authorize the
          above card being charged by Inhouse Hotels Limited doing business as
          Skylark Negril.
        </p>
        <div className="my-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-1/2 rounded border px-2 py-1"
          />
        </div>
      </form>
      {/* date */}

      <Signature onSubmit={(data) => setDrawing?.(data)} />
      {/* <CanvasDraw onSubmit={(data) => setDrawing?.(data)} /> */}

      <p className="my-2 text-sm text-gray-700">
        <em>
          Your completion of this Authorization form will help us protect you,
          our valued customer, from credit card fraud. All information entered
          on this form will be kept strictly confidential by Skylark Negril
          Beach Resort.
        </em>
      </p>
    </div>
  )
}

export { useCreditCardForm }

export default CreditCardForm
