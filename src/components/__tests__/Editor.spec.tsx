import * as React from 'react';
import { render,screen, fireEvent } from "@testing-library/react"; // Importing the render function from the testing library
import Editor from "../Editor"; // Importing the Header component

test('should render default editor',() => {
     render(<Editor />);
     const el = screen.getByRole('textbox');
    expect(el).toBeDefined();
});


test.skip('should render new html when user edits',() => {
    render(<Editor />);
    const markdown = "mbare" 
    const editor = screen.getByRole('textbox');
    fireEvent.change(editor, {target:{ value: markdown}})
    const preview = screen.getByTitle('editor-preview').nodeValue; 
   expect(preview).toContain('mbare');
});