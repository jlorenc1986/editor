import showdown from "showdown";
import DOMPurify from "dompurify";
import React from "react";

export default function Preview(md: string){

  const converter = new showdown.Converter();
  const html = converter.makeHtml(md);
  const sanitizedHTML = DOMPurify.sanitize(html);

  return (
    <div

      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    ></div>
  );
}