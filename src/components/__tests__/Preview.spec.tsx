import * as React from 'react';
import { render,screen, fireEvent } from "@testing-library/react"; // Importing the render function from the testing library
import Preview from "../Preview"; // Importing the Header component

test('should render last markdown from user',() => {
    const markdown = "mbare";

    render(<Preview md={markdown}/>);
    const el = screen.getByText(markdown);
    expect(el).toBeDefined();
});


