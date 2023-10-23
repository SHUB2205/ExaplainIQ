import React, { useState, useRef } from 'react';
import pdfjs from 'pdfjs-dist/build/pdf';

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.577/pdf.worker.min.js';

const PdfTextSelection = () => {
  const [selectedText, setSelectedText] = useState('');
  const fileInputRef = useRef(null);

  const handlePdfUpload = async (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (!file) {
      return;
    }

    const fileData = new FormData();
    fileData.append('pdf', file);

    try {
      // Send the PDF to your server for processing
      const response = await fetch('', {
        method: 'POST',
        body: fileData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload PDF');
      }

      const pdfData = await response.blob();

      const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
      const page = await pdf.getPage(1);
      const textContent = await page.getTextContent();
      const textLayer = document.createElement('div');
      textLayer.style.position = 'absolute';
      textLayer.style.zIndex = 1;

      textContent.items.forEach((textItem) => {
        const span = document.createElement('span');
        span.textContent = textItem.str;
        span.style.transform = `matrix(${textItem.width}, 0, 0, 1, ${textItem.transform[4]}, ${textItem.transform[5]})`;
        textLayer.appendChild(span);
      });

      const pdfContainer = document.getElementById('pdfContainer');
      pdfContainer.appendChild(textLayer);

      textLayer.addEventListener('mouseup', () => {
        const selection = window.getSelection();
        if (selection) {
          setSelectedText(selection.toString());
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Upload a PDF File</h1>
      <form id="pdfForm" encType="multipart/form-data" onSubmit={handlePdfUpload}>
        <input type="file" ref={fileInputRef} name="pdfFile" accept=".pdf" />
        <button type="submit">Upload PDF</button>
      </form>
      <h2>Selected Text</h2>
      <div id="selectedText">{selectedText}</div>
      <div id="pdfContainer" style={{ height: '500px' }}></div>
    </div>
  );
};

export default PdfTextSelection;
