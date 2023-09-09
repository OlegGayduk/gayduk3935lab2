import React from 'react'
import {createRoot} from 'react-dom/client'
import App from "./App";

export async function initApp() {

    const root = createRoot(document.getElementById('app'))
    root.render(
        <div>
            <App/>
        </div>,
    )
}
