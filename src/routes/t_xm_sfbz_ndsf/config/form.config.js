export default {
  '0': {
    key: 0,
    title: '年度',
    /**
     * 表单的内容
     * type: 控件的类型
     * placeholder: 占位标识
     * varName: 对应的变量名
     * defaultValue: 默认值
     * label: 标签
     * customVerify: 自定义校验，返回对象，传入的值为输入的值或者控件的值
     * 对象中status可以是Boolean类型，status为true表示验证通过，false表示不通过，也可以为字符串'success', 'warning', 'error', 'validating'
     * message为不通过显示的信息
     */
    content: {
      0: [
        {
          key: 0,
          control: {
            name: 'DatePicker',
            format: 'YYYY',
            size: 'default',
            placeholder: '请输物业费收入年份',
            showTime: true
          },
          varName: 'ind',
          label: '年度',
          rules: [
            {required: true, message: '请输物业费收入年份'}
          ]
        }
      ],
      length: 1
    }
  },
  '1': {
    key: 1,
    title: '物业费用季度收费情况',
    /**
     * 表单的内容
     * type: 控件的类型
     * placeholder: 占位标识
     * varName: 对应的变量名
     * defaultValue: 默认值
     * label: 标签
     * customVerify: 自定义校验，返回对象，传入的值为输入的值或者控件的值
     * 对象中status可以是Boolean类型，status为true表示验证通过，false表示不通过，也可以为字符串'success', 'warning', 'error', 'validating'
     * message为不通过显示的信息
     */
    content: {
      0: [
        {
          key: 0,
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输物业费收入年份',
            defaultValue: '',
            style: {}
          },
          varName: 'ind',
          label: '年度',
          rules: [
            {type: 'string', required: true, message: '请输物业费收入年份'},
            {max: 2 , message: 'jhdfghab'},
            {pattern: /.[0-9]{2}$/, message: '保留两位小数'}
          ]
        }
      ],
      length: 1
    }
  },
  submit: {
    text: '提交',
    size: 'default',
    type: 'primary',
    style: {},
    url: '/',
    method: 'post',
    cb: (err, data, message) => {
      if (err) {
        return message.error('发生错误')
      }
      console.log(data)
    }
  },
  length: 2
}
