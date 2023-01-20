import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function MyComponent() {
  const [formData, setFormData] = useState({});

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    const docDefinition = {
      content: [
        {
          text: 'Form',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          text: 'Name:',
          bold: true
        },
        {
          text: formData.name,
          margin: [0, 0, 0, 10]
        },
        {
          text: 'Age:',
          bold: true
        },
        {
          text: formData.age,
          margin: [0, 0, 0, 10]
        },
        {
          text: 'Address:',
          bold: true
        },
        {
          text: formData.address,
          margin: [0, 0, 0, 20]
        }
      ]
    };

    pdfMake.createPdf(docDefinition).download('form.pdf');
  };

  return (
    <form>
      <TextField
        label="Name"
        name="name"
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        required
      />
      <TextField
        label="Age"
        name="age"
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        required
      />
      <TextField
        label="Address"
        name="address"
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        required
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Download PDF
      </Button>
    </form>
  );
}
