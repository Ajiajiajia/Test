import {Component} from 'react'
import MyForm from '../../components/Form/index'
import FormConfig from './config/form.config'

export default class TestComponent extends Component {
  render () {
    return (
      <div className='demo'>
        <MyForm config={FormConfig} />
      </div>
    )
  }
}
