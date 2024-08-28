import React, { useState, useEffect } from "react";
import Preview from "./Preview";
import useLocalStorage from "../hooks/useLocalStorage";
import { DEFAULT_COLS, DEFAULT_ROWS } from "../constants/variables";

const Editor = ()  => {
    const [markdown, setMarkdown] = useLocalStorage('storedMarkdown', '')

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(e.target.value)
      }

    return (
        <div id="editor-wrapper">
            <textarea id="editor" cols={DEFAULT_COLS} rows={DEFAULT_ROWS} value={markdown} onChange={e => handleOnChange(e)}></textarea>
            <Preview md={markdown}></Preview>
        </div>
    )
}

export default Editor;