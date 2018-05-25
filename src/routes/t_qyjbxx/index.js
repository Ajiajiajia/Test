import {Component} from 'react'
import MyForm from '../../components/Form/index'
import FormConfig from './config/form.config'

export default class QyjbxxComponent extends Component {
  render () {
    return (
      <div className='qyjbxx'>
        <MyForm config={FormConfig} />
      </div>
    )
  }
}
