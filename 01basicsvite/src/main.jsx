import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const reactelm=React.createElement(
    'a',
    {
        href:"https://www.google.com",
        target:"_blank"
    },
    "Click to visit google website"
)
// just put this element in createRoot to add this


createRoot(document.getElementById('root')).render(

    reactelm

)