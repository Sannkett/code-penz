import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControledEditor } from 'react-codemirror2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'



export default function Editor(props) {

    const{title, value,  language, onChange}=props

  const handleChange=(editor, data, value)=>{
    onChange(value)
  };

  const[open, setOpen]=useState(true)

  return (
    <div className={`editor-box ${open? '': 'collapse'}`}>

      <div className="editor-title">
        {title}
        <button className='btn' onClick={()=>{
            
            setOpen(prevOpen => !prevOpen)
        }}>
            <FontAwesomeIcon icon={open? faCompressAlt:faExpandAlt}/>
        </button>
      </div>

      <ControledEditor
      onBeforeChange={handleChange}
      value={value}
      className='code-mirror-wrapper'
      options={{
        lineWrapping: true,
        lint: true, 
        mode: language,
        lineNumbers:true,
        theme:'material'
      }}
      />

    </div>
  )
}
