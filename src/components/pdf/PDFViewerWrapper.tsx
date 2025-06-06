import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFViewerWrapper = ({ fileUrl }: {fileUrl:string}) => {
  return (
    <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
      <div className="pdf-container">
       { <Viewer fileUrl={fileUrl} />}
      </div>
    </Worker>
  );
};

export default PDFViewerWrapper;
