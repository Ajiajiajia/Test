export default {
  '0': {
    key: 0,
    title: '企业外包公司信息',
    content: {
      '0': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入外包公司名称',
            style: {}
          },
          varName: 'swbgsmc',
          label: '外包公司名称',
          rules: [
            {required: true, message: '外包公司名称必填'},
            {max: 200, message: '最大长度不允许超过200'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入法人代表',
            style: {}
          },
          varName: 'sfddbr',
          label: '法人代表',
          rules: [
            {required: true, message: '法人代表必填'},
            {max: 40, message: '最大长度不允许超过40'}
          ]
        }
      ],
      '1': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入社会信用代码'
          },
          varName: 'sshxydm',
          label: '社会信用代码',
          rules: [
            {required: true, message: '社会信用代码必填'},
            {max: 40, message: '最大长度不允许超过40'}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: false
          },
          label: '成立日期',
          varName: 'dclrq',
          rules: [
            {required: true, message: '成立日期必填'}
          ]
        }
      ],
      '2': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入营业期限'
          },
          varName: 'iyyqx',
          label: '营业期限',
          rules: [
            {required: true, message: '营业期限必填'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default'
          },
          varName: 'nzczj',
          label: '注册资金',
          rules: [
            {required: true, message: '注册资金必填'},
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        }
      ],
      '3': [
        {
          control: {
            name: 'input',
            size: 'default',
            type: 'text',
            placeholder: '请输入联系电话'
          },
          varName: 'slxdh',
          label: '联系电话',
          rules: [
            {required: true, message: '联系电话必填'},
            {max: 40, message: '最大长度不允许超过40'}
          ]
        }
      ],
      '4': [
        {
          control: {
            name: 'TextArea',
            size: 'default',
            type: 'text',
            placeholder: '请输入备注信息'
          },
          varName: 'sbz',
          label: '备注'
        }
      ],
      length: 5
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
