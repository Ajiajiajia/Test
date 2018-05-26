import React from 'react'
import { Redirect, Route, Switch } from 'dva/router'
import Homepage from './home'
import NotFound from './404'
import dynamic from 'dva/dynamic'
import Layout from 'components/Layout'
import DemoPage from './demo/index'
import path, {namesMap} from 'routerForm'
import QynsxxPage from './t_qyjbxx_nsxx/index'
import QyglryPage from './t_qyjbxx_glry/index'
import XmyzxxPage from './t_xm_yzxx/index'
import SfbzsfxzPage from './t_xm_sfbz_sfxz/index'
import XmjbxxPage from './t_xm_jbxx/index'

import TestPage from './test'
import QwqwPage from './qwqw'
const {HomePage, AsyncPage, Page404} = namesMap

const App = (props) => {
  const AsyncDemo = dynamic({component: () => System.import('./asyncDemo')})
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/home' component={Homepage} />
        <Route path='/demo' component={DemoPage} />
        <Route path='/qynsxx' component={QynsxxPage} />
        <Route path='/qyglry' component={QyglryPage} />
        <Route path='/test' component={TestPage} />
        <Route path='/qwqw' component={QwqwPage} />
        <Route path='/sfbzsfxz' component={SfbzsfxzPage} />
        <Route path='/xmyzxx' component={XmyzxxPage} />
        <Route path='/xmjbxx' component={XmjbxxPage} />


        <Route path={path(AsyncPage)} component={AsyncDemo} />
        <Route path={path(Page404)} component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </Layout>
  )
}

export default App
