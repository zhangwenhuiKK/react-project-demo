import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from './routers/AppRouter';

ReactDom.render(
    <AppRouter/>,
    document.getElementById("app")
)

if(module.hot) {
    module.hot.accept(err => {
      if(err) {
         console.error('module.hot，', err);
      }
    })
}