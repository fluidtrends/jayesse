// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router } from "react-router-dom"
 
// import { App } from '..'
// import resolve from '../../resolve'

// ReactDOM.render(<Router>
//     <App { ...resolve('web') } />
// </Router>, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'
import { 
    BrowserRouter 
} from "react-router-dom"

import { App } from '..'
import resolve from '../../resolve'
import assets from '../../assets'

let basename = '/'
// const segments = window?.location?.pathname.split('/')

// if (segments && segments.length > 3 && ['ipfs', 'ipns'].includes(segments[1])) {
//     basename = `/${segments[1]}/${segments[2]}/`
// }

ReactDOM.render(<BrowserRouter basename={basename}>
    <App {...resolve('web')} basename={basename} assets={assets(basename)}/>
</BrowserRouter>, document.getElementById('app'))

// export default (options?: any) => {
//     <StaticRouter location="/">
//         <App { ...resolve('web') } />
//     </StaticRouter>

//     // const html = ReactDOMServer.renderToString(
//     // <ResponsiveContext.Provider value={{ width: 800 }}>
//     //     <ResponsiveContext.Provider value={{ width: 800 }}>
//     //     <App { ...resolve('web') } />
//     // </ResponsiveContext.Provider>
//     // </ResponsiveContext.Provider>)

//     // return html
// }