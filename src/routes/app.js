import React from 'react'
import { Redirect, Route, Switch } from 'dva/router'
import Homepage from './home'
import NotFound from './404'
import dynamic from 'dva/dynamic'
import Layout from 'components/Layout'
import DemoPage from './demo/index'
import QywbgsxxPage from './t_qyjbxx_wbgs/index'
import QyjcxxPage from './t_qyjbxx_jcjl/index'
import QyjbxxPage from './t_qyjbxx/index'
import path, {namesMap} from 'routerForm'
const {HomePage, AsyncPage, Page404} = namesMap

const App = (props) => {
  const AsyncDemo = dynamic({component: () => System.import('./asyncDemo')})
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/home' component={Homepage} />
        <Route path='/demo' component={DemoPage} />
        <Route path='/qywbgsxx' component={QywbgsxxPage} /> // 企业公司外包信息
        <Route path='/qyjcxx' component={QyjcxxPage} /> // 企业奖惩信息
        <Route path='/qyjbxx' component={QyjbxxPage} /> // 企业基本信息
        <Route path={path(AsyncPage)} component={AsyncDemo} />
        <Route path={path(Page404)} component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </Layout>
  )
}

export default App
