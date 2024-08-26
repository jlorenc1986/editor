import React from "react";

export default function Editor() {
    return (
        <div id="editor-wrapper">
            <textarea id="editor">editor</textarea>
            <div className="preview"></div>
            <button className="editor-button"> render markdown</button>
        </div>
    )
}