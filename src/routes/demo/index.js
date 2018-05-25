import {Component} from 'react'
import MyForm from '../../components/Form/index'
import FormConfig from './config/form.config'

export default class DemoComponent extends Component {
  render () {
    return (
      <div className='qywbgsxx'>
        <MyForm config={FormConfig} />
      </div>
    )
  }
}
