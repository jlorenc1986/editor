import showdown from "showdown";
import DOMPurify from "dompurify";
import React from "react";

type PreviewProps  = {
    md: string
}
const Preview = ({md}: PreviewProps) => {

  const converter = new showdown.Converter();
  const html = converter.makeHtml(md);
  const sanitizedHTML = DOMPurify.sanitize(html);

  return (
    <div className="preview"
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    ></div>
  );
}

export default Preview;