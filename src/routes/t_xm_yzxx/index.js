import React, { PureComponent } from 'react'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import routerPush from 'utils/routerPush'
import {fromJS} from 'immutable'
/* import {namesMap} from 'routerForm'
const {HomePage2} = namesMap */
import MyForm from '../../components/Form'
import xmyzxxConfig from './config/form.config'
import './index.less'

@routerPush
@immutableRenderDecorator
export default class XmyzxxPage extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
    }
  }


  render () {
    return (
      <div className='t_xm_yzxx'>
        <MyForm config={xmyzxxConfig} />
      </div>
    )
  }
}
