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
import QynsxxPage from './t_qyjbxx_nsxx/index'
import QyglryPage from './t_qyjbxx_glry/index'
import XmyzxxPage from './t_xm_yzxx/index'
import SfbzsfxzPage from './t_xm_sfbz_sfxz/index'
import XmjbxxPage from './t_xm_jbxx/index'

import qywbxmxxPage from './t_qyjbxx_wbxm/index'
import qyzzxxPage from './t_qyjbxx_zzxx/index'
import sfbzndsfPage from './t_xm_sfbz_ndsf/index'
import ywhcyfPage from './t_xm_yzxx_ywhcy/index'
import rypzPage from './t_xm_rypz/index'
import path, { namesMap } from 'routerForm'

const {HomePage, AsyncPage, Page404} = namesMap

const App = (props) => {
  const AsyncDemo = dynamic({component: () => System.import('./asyncDemo')})
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/home' component={Homepage} />
        //企业模块
        <Route path='/qywbxmxx' component={qywbxmxxPage} /> // 企业外埠项目信息
        <Route path='/qyzzxx' component={qyzzxxPage} /> // 企业奖惩信息
        <Route path='/qynsxx' component={QynsxxPage} /> //企业纳税信息
        <Route path='/qyglry' component={QyglryPage} /> //企业管理人员
        <Route path='/qywbgsxx' component={QywbgsxxPage} /> // 企业公司外包信息
        <Route path='/qyjcxx' component={QyjcxxPage} /> // 企业奖惩信息
        <Route path='/qyjbxx' component={QyjbxxPage} /> // 企业基本信息
        //项目模块
        <Route path='/sfbzndsf' component={sfbzndsfPage} /> // 项目——收费标准——年度收费
        <Route path='/ywhcy' component={ywhcyfPage} /> // 项目——业主情况——业委会成员
        <Route path='/rypz' component={rypzPage} /> // 项目——人员配置
        <Route path='/sfbzsfxz' component={SfbzsfxzPage} /> //项目——收费标准——细则
        <Route path='/xmyzxx' component={XmyzxxPage} />   // 项目——业主情况
        <Route path='/xmjbxx' component={XmjbxxPage} /> //项目——基本信息
        <Route path='/xmsfbz' component={XmsfbzPage} /> // 项目收费标准
        <Route path='/xmrypzzygs' component={XmRypzZygsPage} /> // 项目人员配置-聘用专业公司
        <Route path='/xmrypzxmjl' component={XmRypzXmjlPage} /> // 项目人员配置-项目经理
        <Route path='/xmyrzxxlbfl' component={XmYrzxxLbflPage} /> // 项目——已入住信息——按类别分类
        <Route path='/xmyrzxx' component={XmYrzxxPage} /> // 项目——已入住信息
        <Route path='/search' component={SearchPage} />
        //其他
        <Route path={path(AsyncPage)} component={AsyncDemo} />
        <Route path={path(Page404)} component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </Layout>
  )
}

export default App
