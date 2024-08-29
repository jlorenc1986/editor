import * as React from 'react';
import { render,screen, fireEvent } from "@testing-library/react"; // Importing the render function from the testing library
import Editor from "../Editor"; // Importing the Header component

test('should render default editor',() => {
     render(<Editor />);
     const el = screen.getByRole('textbox');
    expect(el).toBeDefined();
});

test('should render new html when user edits',() => {
    const {container } = render(<Editor />);
    const markdown = "mbare";
    const editor = screen.getByRole('textbox');
    fireEvent.change(editor, {target:{ value: markdown}})    
   expect(container.getElementsByClassName('preview').item(0)?.innerHTML).toEqual('<p>mbare</p>');
});

