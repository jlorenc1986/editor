import React from 'react';
import Editor from './components/Editor';
import { SALUTATION } from './constants/texts';

export const App = () => {
  return (
    <>
      <header>
        <h1>{SALUTATION}</h1>
      </header>
      <main>
        <Editor></Editor>
      </main>
      <footer className='footer'>
        <p className='footer-signature'>Made with <span className="heart">♥</span> in Berlin</p>
      </footer>
    </>
  );
};

export default App;
