import * as React from 'react';
import { render } from "@testing-library/react"; // Importing the render function from the testing library
import Preview from "../Preview"; // Importing the Header component
import { markdownHeaderLevelOne } from '../../constants/test.mocks';

test('should render last markdown from user',() => {
    const markdown = markdownHeaderLevelOne;
    const expected = 'A first-level heading';
    const {container} = render(<Preview md={markdown}/>);    
    expect(container.getElementsByTagName('h1').item(0)?.innerHTML).toEqual(expected);
});


