import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

// https://www.npmjs.com/package/@cyntler/react-doc-viewer

function PdfComponent() {
    const docs = [
        { uri: "https://www.rockhouse.com/Rockhouse-Credit-Card-Authorization.pdf" }, // Remote file
      ];
  return (
    <div>
        <DocViewer 
        documents={docs}
        initialActiveDocument={docs[1]}
        pluginRenderers={DocViewerRenderers}
         />
    </div>
  )
}

export default PdfComponent