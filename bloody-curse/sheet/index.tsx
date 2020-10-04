import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'

import { App } from './app'

export default ReactDOMServer.renderToStaticMarkup(<App />)

