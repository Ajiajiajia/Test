import {Component} from 'react'
import MyForm from '../../components/Form/index'
import FormConfig from './config/form.config'
import './index.less'

export default class RypzZygsComponent extends Component {
  render () {
    return (
      <div className='rypz_xmjl'>
        <MyForm config={FormConfig} />
      </div>
    )
  }
}
