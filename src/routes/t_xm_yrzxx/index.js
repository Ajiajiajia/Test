import {Component} from 'react'
import MyForm from '../../components/Form/index'
import FormConfig from './config/form.config'
import './index.less'

export default class XmYrzxxComponent extends Component {
  render () {
    return (
      <div className='xm_yrzxx'>
        <MyForm config={FormConfig} />
      </div>
    )
  }
}
