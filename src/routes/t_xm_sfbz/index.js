import {Component} from 'react'
import MyForm from '../../components/Form/index'
import FormConfig from './config/form.config'
import './index.less'

export default class XmsfbzComponent extends Component {
  render () {
    return (
      <div className='xmsfbz'>
        <MyForm config={FormConfig} />
      </div>
    )
  }
}
