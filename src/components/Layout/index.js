/**
 * Created by out_xu on 17/7/13.
 */
import React from 'react'
import './index.less'
import { Layout, Menu, Icon, Breadcrumb} from 'antd'
import logo from '../../images/logo_white.png'
const { Header, Content, Footer, Sider } = Layout
// import path, {namesMap} from 'routerForm/index'
// const {HomePage, AsyncPage, HomePage2} = namesMap
const { SubMenu } = Menu
// const { Header, Content, Sider } = Layout;
const LayoutContent = (props) => (

  <div className='App'>
    <div className='App-side' />
    <div className='App-content'>
      <Layout>
        <Header className='header'>
          <div className='logo' >
            <img src={logo} alt='logo' />
          </div>
          <div className='Layout-top-title'>
            物业管理行政监管信息系统
          </div>
          <div className='Layout-top-user'>
            首页  &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;       <Icon type='user' />&nbsp;用户
          </div>
        </Header>
        <Layout>
          <Sider width={200} className='Layout-sider'>
            <Menu theme='dark'
              mode='inline'
              defaultSelectedKeys={['4']}
              style={{backgroundColor: '#C4DFFF'}} >
              <Menu.Item key='1'>
                <Icon type='user' />
                <span className='nav-text'>物业项目基本信息</span>
              </Menu.Item>
              <Menu.Item key='2'>
                <Icon type='video-camera' />
                <span className='nav-text'>已入驻信息</span>
              </Menu.Item>
              <Menu.Item key='3'>
                <Icon type='upload' />
                <span className='nav-text'>人员配置情况信息</span>
              </Menu.Item>
              <Menu.Item key='4'>
                <Icon type='bar-chart' />
                <span className='nav-text'>业主信息</span>
              </Menu.Item>
              <Menu.Item key='5'>
                <Icon type='cloud-o' />
                <span className='nav-text'>费用情况</span>
              </Menu.Item>
              <Menu.Item key='6'>
                <Icon type='appstore-o' />
                <span className='nav-text'>招商备案信息情况</span>
              </Menu.Item>
              <Menu.Item key='7'>
                <Icon type='team' />
                <span className='nav-text'>市区县检查记录</span>
              </Menu.Item>
              <Menu.Item key='8'>
                <Icon type='shop' />
                <span className='nav-text'>维修资金信息</span>
              </Menu.Item>
              <Menu.Item key='9'>
                <Icon type='shop' />
                <span className='nav-text'>信访记录</span>
              </Menu.Item>
              <Menu.Item key='10'>
                <Icon type='shop' />
                <span className='nav-text'>达标创优情况</span>
              </Menu.Item>
              <Menu.Item key='11'>
                <Icon type='shop' />
                <span className='nav-text'>联席会议制度落实</span>
              </Menu.Item>
              <Menu.Item key='12'>
                <Icon type='shop' />
                <span className='nav-text'>开放日制度落实</span>
              </Menu.Item>
              <Menu.Item key='13'>
                <Icon type='shop' />
                <span className='nav-text'>历史信息</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout >
            {/* <Breadcrumb style={{ margin: '16px 0' }}> */}
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
            {/* <Breadcrumb.Item>List</Breadcrumb.Item> */}
            {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
            {/* </Breadcrumb> */}
            <Content>
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>

    </div>
  </div>
)

export default LayoutContent
