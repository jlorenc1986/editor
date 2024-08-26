import React, { useState } from "react";
import { Converter } from "showdown";

export default function Editor() {

    const [markdown, setMarkdown] = useState("")
    const [html, setHtml] = useState("")

    function handleRenderMarkdown(){
        const converter = new Converter();
        console.log(converter.makeMarkdown(markdown));
         setHtml(converter.makeHtml(markdown));

    }
    return (
        <div id="editor-wrapper">
            <textarea id="editor" cols={30} rows={5} value={markdown} onChange={e => setMarkdown(e.target.value)}></textarea>
            <div className="preview"  dangerouslySetInnerHTML={{__html: html}} ></div>
            <button onClick={handleRenderMarkdown}className="editor-button"> Render </button>
        </div>
    )
}
