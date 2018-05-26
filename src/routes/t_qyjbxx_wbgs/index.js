import {Component} from 'react'
import MyForm from '../../components/Form/index'
import FormConfig from './config/form.config'
import './index.less'
export default class QywbgsxxComponent extends Component {
  render () {
    return (
      <div className='qywbgsxx'>
        <MyForm config={FormConfig} />
      </div>
    )
  }
}
