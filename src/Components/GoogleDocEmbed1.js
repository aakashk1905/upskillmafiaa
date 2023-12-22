// import React, { Component, useEffect } from "react";
// import { pdfjs, Document, Page } from "react-pdf";
// import "./Embed.css";

// import "react-pdf/dist/Page/AnnotationLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// class Catalogue extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { numPages: null, pageNumber: 1 };
//   }

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   goToPrevPage = () => {
//     const { pageNumber } = this.state;
//     if (pageNumber !== 1) {
//       this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
//     }
//   };
//   goToNextPage = () => {
//     const { pageNumber, numPages } = this.state;
//     if (pageNumber !== numPages) {
//       this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
//     }
//   };
//   getPages = () => {
//     const items = [];
//     let i = 1;
//     let { numPages } = this.state;
//     while (i <= numPages) {
//       items.push(
//         <Page pageNumber={i} key={i * Math.floor(Math.random() * 1000) + 1} />
//       );
//       i++;
//     }
//     return items;
//   };

//   render() {
//     return (
//       <div className="doc-cont">
//         <div className="doc-title">{`Hackathon Task `}</div>
//         <div>
//           <Document
//             file={
//               "https://docs.google.com/document/d/1MxRFBDNMS_aGEgaP_6Am-hTExoWOpm6KLl8pFy0LpQw/export?format=pdf"
//             }
//             onLoadSuccess={this.onDocumentLoadSuccess}
//           >
//             {this.getPages()}
//           </Document>
//         </div>
//       </div>
//     );
//   }
// }

// export default Catalogue;

import React, { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "./Embed.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Cookies from "js-cookie";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Catalogue = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const email = Cookies.get("user_email");
    if (!email) {
      window.location.href = "https://upskillmafia.com/dashboard";
    }
  }, []);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    if (pageNumber !== 1) {
      setPageNumber((prevPageNumber) => prevPageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber !== numPages) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  const getPages = () => {
    const items = [];
    let i = 1;
    while (i <= numPages) {
      items.push(
        <Page pageNumber={i} key={i * Math.floor(Math.random() * 1000) + 1} />
      );
      i++;
    }
    return items;
  };

  return (
    <div className="doc-cont">
      <div className="doc-title">{`Hackathon Task `}</div>
      <div>
        <Document
          file={
            "https://docs.google.com/document/d/1MxRFBDNMS_aGEgaP_6Am-hTExoWOpm6KLl8pFy0LpQw/export?format=pdf"
          }
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {getPages()}
        </Document>
      </div>
    </div>
  );
};

export default Catalogue;
