import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import RouterMap from './router/routerMap'

// 测试redux-demo
// import fn from './redux-demo'
// fn()

import './static/css/common.less'

// 创建Redux的stroe对象
const store = configureStore()

render(
    <Provider store={store}>
        <RouterMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)
