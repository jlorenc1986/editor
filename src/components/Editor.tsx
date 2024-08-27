import React, { useState } from "react";
import Preview from "../Preview";

const Editor = ()  => {
    const [markdown, setMarkdown] = useState("")
    return (
        <div id="editor-wrapper">
            <textarea id="editor" cols={30} rows={5} value={markdown} onChange={e => setMarkdown(e.target.value)}></textarea>
            <Preview md={markdown}></Preview>
        </div>
    )
}

export default Editor;