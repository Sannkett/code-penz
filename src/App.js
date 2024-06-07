import './App.css';
import React, {useEffect, useState} from 'react';
import Editor from './components/Editor'
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const[html, setHtml]= useLocalStorage('html','')
  const[css, setCss]= useLocalStorage('css','')
  const[js, setJs]= useLocalStorage('js','')

  // const[html, setHtml]= useState('')
  // const[css, setCss]= useState('')
  // const[js, setJs]= useState('')


  const[srcDoc, setSrcDoc]= useState('')

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
      <body>${html}</body>
      <style>${css}</<style>
      <script>${js}</scrit>
      </html>
    ` )
    }, 250);

    return () => clearTimeout(timeout)
  },[html, css, js])


  return (
    <>
    <div className="edit top-edit">
      <Editor title ='HTML' language='xml' value={html} onChange={setHtml} />
      <Editor title ='CSS' language='css' value={css} onChange={setCss}/>
      <Editor title ='JS' language='javascrips' value={js} onChange={setJs}/>
    </div>

    <div className="edit bottom-out">
      <iframe 
      srcDoc={srcDoc}
      title='output'
      sandbox='allow-scripts'
      frameBorder='0'
      width='100%'
      height='100%'
      />
    </div>

    </>
  );
}

export default App;
