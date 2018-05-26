export default {
  '0': {
    key: 0,
    title: '房屋分类信息',
    content: {
      '0': [
        {
          control: {
            name: 'searchSelect',
            size: 'default',
            placeholder: '请输入规划类型',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'sghlx',
          label: '规划类型',
          rules: [
            {required: true, message: '规划类型必填'},
            {max: 20, message: '最大长度不允许超过20'}
          ]
        },
        {
          control: {
            name: 'searchSelect',
            size: 'default',
            placeholder: '请输入房屋类型',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'sfwlx',
          label: '房屋类型',
          rules: [
            {required: true, message: '房屋类型必填'},
            {max: 20, message: '最大长度不允许超过20'}
          ]
        }
      ],
      '1': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入入住期数',
            style: {}
          },
          varName: 'irzqs',
          label: '入住期数',
          rules: [
            {required: true, message: '入住期数必填'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入房屋幢数',
            style: {}
          },
          varName: 'ifwzs',
          label: '房屋幢数(幢)',
          rules: [
            {required: true, message: '房屋幢数必填'}
          ]
        }
      ],
      '2': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入面积',
            style: {}
          },
          varName: 'nmj',
          label: '面积(万平方米)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {required: true, message: '面积必填'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入电梯部数',
            style: {}
          },
          varName: 'idtbs',
          label: '电梯部数(部)',
          rules: [
            {required: true, message: '电梯部数必填'}
          ]
        }
      ],
      '3': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入入住套数',
            style: {}
          },
          varName: 'rzts',
          label: '入住套数(套)',
          rules: [
            {required: true, message: '入住套数必填'}
          ]
        }
      ],
      length: 4
    }
  },
  submit: {
    text: '确认提交',
    type: 'primary',
    url: '/',
    method: 'post',
    cb: (err, data, message) => {
      if (err) {
        console.log(message, err)
        return message.error('发生错误')
      }
      console.log(data)
      message.success('保存成功')
    }
  },
  length: 1
}
