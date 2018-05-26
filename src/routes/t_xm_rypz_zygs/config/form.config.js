export default {
  '0': {
    key: 0,
    title: '外包类型及外包公司信息',
    content: {
      '0': [
        {
          control: {
            name: 'searchSelect',
            size: 'default',
            placeholder: '请输入外包类别',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'swblb',
          label: '外包类别',
          rules: [
            {required: true, message: '外包类别必填'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入外包公司名称',
            style: {}
          },
          varName: 'sgxmc',
          label: '外包公司名称',
          rules: [
            {required: true, message: '外包公司名称必填'},
            {max: 100, message: '最大长度不允许超过100'}
          ]
        }
      ],
      '1': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入公司法人代表',
            style: {}
          },
          varName: 'sfrdb',
          label: '公司法人代表',
          rules: [
            {required: true, message: '公司法人代表必填'},
            {max: 30, message: '最大长度不允许超过30'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入工商营业执照',
            style: {}
          },
          varName: 'sgszhhm',
          label: '工商营业执照',
          rules: [
            {required: true, message: '工商营业执照必填'},
            {max: 30, message: '最大长度不允许超过30'}
          ]
        }
      ],
      '2': [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请选择时间',
            showTime: false
          },
          varName: 'dzzfzsj',
          label: '营业执照发证时间',
          rules: [
            {required: true, message: '营业执照发证时间必填'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入执照有效期',
            style: {}
          },
          varName: 'izzyxqx',
          label: '执照有效期(年)'
        }
      ],
      '3': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入注册资金',
            style: {}
          },
          varName: 'nzczj',
          label: '注册资金(万元)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入公司电话',
            style: {}
          },
          varName: 'sgsdh',
          label: '公司电话',
          rules: [
            {required: true, message: '公司电话必填'},
            {max: 30, message: '最大长度不允许超过30'},
            {pattern: /^[0-9]*$/, message: '请输入正确的电话号码'}
          ]
        }
      ],
      length: 4
    }
  },
  '1': {
    key: 1,
    title: '外包人员配置信息',
    content: {
      '0': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入外包人员总数',
            style: {}
          },
          varName: 'iwbryzs',
          label: '外包人员总数',
          rules: [
            {required: true, message: '外包人员总数必填'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'ibjy',
          label: '保洁员(名)'
        }
      ],
      '1': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'igcjsry',
          label: '工程技术人员(名)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'izxwhry',
          label: '秩序维护员(名)'
        }
      ],
      '2': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default'
          },
          varName: 'ilhry',
          label: '绿化人员(名)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default'
          },
          varName: 'iqtry',
          label: '其他人员(名)'
        }
      ],
      '3': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default'
          },
          varName: 'izjyry',
          label: '再就业人员(名)'
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
  length: 2
}
