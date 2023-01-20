import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function createPDF(data) {
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
        text: data.name,
        margin: [0, 0, 0, 10]
      },
      {
        text: 'Age:',
        bold: true
      },
      {
        text: data.age,
        margin: [0, 0, 0, 10]
      },
      {
        text: 'Address:',
        bold: true
      },
      {
        text: data.address,
        margin: [0, 0, 0, 20]
      }
    ]
  };

  pdfMake.createPdf(docDefinition).download('form.pdf');
}



