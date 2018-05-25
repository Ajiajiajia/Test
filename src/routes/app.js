import React from 'react'
import { Redirect, Route, Switch } from 'dva/router'
import Homepage from './home'
import NotFound from './404'
import dynamic from 'dva/dynamic'
import Layout from 'components/Layout'
import DemoPage from './demo/index'
import qywbxmxxPage from './t_qyjbxx_wbxm/index'
import qyzzxxPage from './t_qyjbxx_zzxx/index'
import sfbzndsfPage from './t_xm_sfbz_ndsf/index'
import path, { namesMap } from 'routerForm'

const {HomePage, AsyncPage, Page404} = namesMap

const App = (props) => {
  const AsyncDemo = dynamic({component: () => System.import('./asyncDemo')})
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/home' component={Homepage} />
        <Route path='/demo' component={DemoPage} />
        <Route path='/qywbxmxx' component={qywbxmxxPage} />
        <Route path='/qyzzxx' component={qyzzxxPage} />
        <Route path='/sfbzndsf' component={sfbzndsfPage} />
        <Route path={path(AsyncPage)} component={AsyncDemo} />
        <Route path={path(Page404)} component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </Layout>
  )
}

export default App
