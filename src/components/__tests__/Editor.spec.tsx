import * as React from 'react';
import { render,screen } from "@testing-library/react"; // Importing the render function from the testing library
import Editor from "../Editor"; // Importing the Header component


test('should render default editor',() => {
     render(<Editor />);
     const el = screen.getByRole('textbox');
     console.log('>>>>>> ', el);
    expect(el).toBeDefined();
})