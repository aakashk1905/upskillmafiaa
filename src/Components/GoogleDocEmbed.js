import React, { Component } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "./Embed.css";

import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = { numPages: null, pageNumber: 1 };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () => {
    const { pageNumber } = this.state;
    if (pageNumber !== 1) {
      this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
    }
  };
  goToNextPage = () => {
    const { pageNumber, numPages } = this.state;
    if (pageNumber !== numPages) {
      this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
    }
  };
  getPages = () => {
    const items = [];
    let i = 1;
    let { numPages } = this.state;
    while (i <= numPages) {
      items.push(
        <Page
          pageNumber={i}
          key={i * Math.floor(Math.random() * 1000) + 1}
        />
      );
      i++;
    }
    return items;
  };

  render() {
    return (
      <div className="doc-cont">
        <div className="doc-title">
          {`Weekly Task `}
        </div>
        <div>
          <Document
            file={
              "https://docs.google.com/document/d/1e8h46S9_pVgnczwD_Qj8gIEFO40MORMLFoQg4m50Rzk/export?format=pdf"
            }
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            {this.getPages()}
          </Document>
        </div>
      </div>
    );
  }
}

export default Catalogue;

