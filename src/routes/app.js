import React from 'react'
import { Redirect, Route, Switch } from 'dva/router'
import Homepage from './home'
import NotFound from './404'
import dynamic from 'dva/dynamic'
import Layout from 'components/Layout'
import QywbgsxxPage from './t_qyjbxx_wbgs/index'
import QyjcxxPage from './t_qyjbxx_jcjl/index'
import QyjbxxPage from './t_qyjbxx/index'
import XmsfbzPage from './t_xm_sfbz/index'
import XmRypzZygsPage from './t_xm_rypz_zygs/index'
import XmRypzXmjlPage from './t_xm_rypz_xmjl/index'
import XmYrzxxLbflPage from './t_xm_yrzxx_lbfl/index'
import XmYrzxxPage from './t_xm_yrzxx/index'
import SearchPage from './search'
import path, {namesMap} from 'routerForm'
const {HomePage, AsyncPage, Page404} = namesMap

const App = (props) => {
  const AsyncDemo = dynamic({component: () => System.import('./asyncDemo')})
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/home' component={Homepage} />
        <Route path='/qywbgsxx' component={QywbgsxxPage} /> // 企业公司外包信息
        <Route path='/qyjcxx' component={QyjcxxPage} /> // 企业奖惩信息
        <Route path='/qyjbxx' component={QyjbxxPage} /> // 企业基本信息
        <Route path='/xmsfbz' component={XmsfbzPage} /> // 项目收费标准
        <Route path='/xmrypzzygs' component={XmRypzZygsPage} /> // 项目人员配置-聘用专业公司
        <Route path='/xmrypzxmjl' component={XmRypzXmjlPage} /> // 项目人员配置-项目经理
        <Route path='/xmyrzxxlbfl' component={XmYrzxxLbflPage} /> // 项目——已入住信息——按类别分类
        <Route path='/xmyrzxx' component={XmYrzxxPage} /> // 项目——已入住信息
        <Route path='/search' component={SearchPage} />
        <Route path={path(AsyncPage)} component={AsyncDemo} />
        <Route path={path(Page404)} component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </Layout>
  )
}

export default App
