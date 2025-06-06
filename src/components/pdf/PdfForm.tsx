import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { Button } from "../ui/button";
import Signature from "./Signature";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";


const usePdfForm = ({handleClose, amount}:{handleClose:any; amount: any}) => {
    const [drawing, setDrawing] = useState();
    const [formData, setFormData] = useState({
        guest_name: "",
        name: "",
        card_number: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        exp: "",
        cvc: "",
        amount: amount,
        date: "",
        card_type: "visa",
      });
    const [pdfFile, setPdfFile] = useState<any>(null);   
    const [loading, setLoading] = useState(false);
        // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateAndSendPDF = async () => {
    setLoading(true);
    const doc = new jsPDF();

    // Add content to the PDF
    // Add form data
    doc.setFontSize(12);
    doc.text(`Card Type: ${formData.card_type}`, 20, 30);
    doc.text(`Guest Name: ${formData.guest_name}`, 20, 40);
    doc.text(`Name on Card: ${formData.name}`, 20, 50);
    doc.text(`Card Number: ${formData.card_number}`, 20, 60);
    doc.text(`Expiration Date: ${formData.exp}`, 20, 70);
    doc.text(`CVC: ${formData.cvc}`, 20, 80);
    doc.text(`Email: ${formData.email}`, 20, 90);
    doc.text(`Amount: $${amount}`, 20, 100);
    doc.text(`Date: ${formData.date}`, 20, 110);
    doc.text(`Address: ${formData.street}, ${formData.city}, ${formData.state}, ${formData.country} ${formData.zip}`, 20, 120);
    // Add the signature image
    if (drawing) {
        doc.addImage(drawing, "PNG", 20, 130, 80, 30); // Adjust dimensions as needed
      } else {
        doc.text("Signature: Not Provided", 20, 130);
      }
   
    // Generate the PDF as a Blob
    const pdfBlob = doc.output("blob");

    // Prepare FormData
    const formDataToSend = new FormData();
    formDataToSend.append("file", pdfBlob, "form-data.pdf");
   
    // Set the generated PDF file
    setPdfFile(pdfBlob);
    setLoading(false);
    handleClose()
  };
  return {formData, handleChange, generateAndSendPDF, pdfFile, loading, setDrawing, setPdfFile} };
    



function PdfForm({
    formData,
    handleChange,
    generateAndSendPDF,
  loading,
  setDrawing,
  amount
}:{
    formData: any,
    handleChange: any,
    generateAndSendPDF: any
    loading: boolean;
    setDrawing: any;
    amount: any;

}) {
    

    const saveSignature = (e:any, data:any) => {
      setDrawing(data);
    };



  return (
    <div className="container mx-auto max-w-lg">
      <Typography fontWeight={600}>Amount: ${amount}</Typography>
      <form className="space-y-4">
        
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Card Type</FormLabel>
      <RadioGroup
      sx={{
        '& .MuiFormControlLabel-label': {
            paddingBottom: '0'
        }
    }}
      
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={handleChange}
        className="justify-center"
        row
      >
        <FormControlLabel  value="visa" control={<Radio size='small' />} label="VISA" />
        <FormControlLabel value="master_card" control={<Radio size='small' />} label="MASTER CARD" />
        <FormControlLabel value="amex" control={<Radio size='small'/>} label="AMEX" />
        <FormControlLabel value="discover" control={<Radio size='small'/>} label="DISCOVER" />

      </RadioGroup>
    </FormControl>
        <TextField fullWidth name="guest_name" value={formData.guest_name} onChange={handleChange} label="Guest Name" variant='filled' />
        <TextField fullWidth name="card_number" value={formData.card_number} onChange={handleChange} label="Card Number" variant='filled' />
        <TextField fullWidth name="name" value={formData.name} onChange={handleChange} label="Name on Card" variant='filled' />
        <TextField fullWidth type='email'  name="email" value={formData.email} onChange={handleChange} label="Email" variant='filled' />

        <div className="grid grid-cols-2 gap-4 space-y-2">
          <TextField  fullWidth name="exp" value={formData.exp} onChange={handleChange} label="MM/YYYY" variant='filled' />
          <TextField fullWidth name="cvc" value={formData.cvc} onChange={handleChange} label="CVC Code" variant='filled' />

 
        </div>
       
      <h6 className="text-md font-semibold">Credit Card Billing Address</h6>

     
          <TextField fullWidth name="street" value={formData.street} onChange={handleChange} label="Street" variant='filled' />
      
       <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
       <div>
          <TextField fullWidth name="city" value={formData.city} onChange={handleChange} label="City" variant='filled' />
        </div>
        <div>
          <TextField fullWidth name="state" value={formData.state} onChange={handleChange} label="State" variant='filled' />
        </div>
       <div>
            <TextField fullWidth name="zip" value={formData.zip} onChange={handleChange} label="Zip Code" variant='filled' />
        </div>
        <div>
          <TextField fullWidth name="country" value={formData.country} onChange={handleChange} label="Country" variant='filled' />
        </div>
        
       </div>
        <p className="text-sm">As the credit card holder or authorized user, I understand and consent to the use of the above
credit card without my signature on the charge slip, that the details	filled out in this Credit Card
Authorization will serve as an original, and that this Authorization cannot be revoked. I agree to all
the terms as described above and authorize the above card being charged by Inhouse Hotels
Limited doing business as Rockhouse Hotel.</p>
    <Signature onSubmit={(data) => setDrawing(data)} />
    <div>
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        />
  
    </div>
    <p className="text-sm text-gray-700"><em>Your completion of this Authorization form will help us protect you, our valued customer, from credit
    card fraud. All information entered on this form will be kept strictly confidential by Rockhouse Hotel.</em></p>
      
        <Button
          type="button"
          onClick={generateAndSendPDF}
          disabled={loading}
          className="bg-blue hover:text-blue font-bold uppercase"
        
        >
            {loading? 'Loading...' : 'Save & Close'}

        </Button>
      </form>
  


    </div>
  );
}

export {usePdfForm}

export default PdfForm;
