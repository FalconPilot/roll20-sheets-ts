import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'

import { Mainframe } from './components'

export default ReactDOMServer.renderToStaticMarkup(<Mainframe />)
