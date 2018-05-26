import {Component} from 'react'
import MyForm from '../../components/Form/index'
import FormConfig from './config/form.config'
import './index.less'

export default class QyjcxxComponent extends Component {
  render () {
    return (
      <div className='qyjcxx'>
        <MyForm config={FormConfig} />
      </div>
    )
  }
}
