import {Component} from 'react'
import MyForm from '../../components/Form/index'
import FormConfig from './config/form.config'

export default class QwqwComponent extends Component {
  render () {
    return (
      <div className='qwqw'>
        <MyForm config={FormConfig} />
      </div>
    )
  }
}
