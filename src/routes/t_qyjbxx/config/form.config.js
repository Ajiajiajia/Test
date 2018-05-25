export default {
  '0': {
    key: 0,
    title: '物业服务企业基本信息',
    content: {
      '0': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入企业编码',
            style: {}
          },
          varName: 'sqybm',
          label: '企业编码',
          rules: [
            {required: true, message: '企业编码必填'},
            {max: 50, message: '最大长度不允许超过50'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入企业名称',
            style: {}
          },
          varName: 'sqymc',
          label: '企业名称',
          rules: [
            {required: true, message: '企业名称必填'},
            {max: 200, message: '最大长度不允许超过200'}
          ]
        }
      ],
      '1': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入办公地址'
          },
          varName: 'sbgdz',
          label: '办公地址',
          rules: [
            {required: true, message: '办公地址必填'},
            {max: 200, message: '最大长度不允许超过200'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入办公地址经度'
          },
          varName: 'nbgdzjd',
          label: '办公地址经度',
          rules: [
            {required: true, message: '办公地址经度必填'},
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        }
      ],
      '2': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入办公地址纬度'
          },
          varName: 'nbgdzwd',
          label: '办公地址纬度',
          rules: [
            {required: true, message: '办公地址纬度必填'},
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入联系人'
          },
          varName: 'slxr',
          label: '联系人',
          rules: [
            {required: true, message: '联系人必填'},
            {max: 50, message: '最大长度不允许超过50'}
          ]
        }
      ],
      '3': [
        {
          control: {
            name: 'input',
            size: 'default',
            type: 'text',
            placeholder: '请输入联系电话(固话)'
          },
          varName: 'slxdh_gh',
          label: '联系电话(固话)',
          rules: [
            {required: true, message: '联系电话(固话)必填'},
            {max: 50, message: '最大长度不允许超过50'}
          ]
        },
        {
          control: {
            name: 'input',
            size: 'default',
            type: 'text',
            placeholder: '请输入联系电话(手机)'
          },
          varName: 'slxdh_sj',
          label: '联系电话(手机)',
          rules: [
            {required: true, message: '联系电话(手机)必填'},
            {max: 50, message: '最大长度不允许超过50'}
          ]
        }
      ],
      '4': [
        {
          control: {
            name: 'radio',
            size: 'default',
            defaultValue: '0',
            select: [
              {
                value: '0',
                label: '否'
              },
              {
                value: '1',
                label: '是'
              }
            ]
          },
          varName: 'ssfkfjsdwps',
          label: '是否开发建设单位派生',
          rules: [
            {type: 'string', required: true, message: '类型为字符串'}
          ]
        },
        {
          control: {
            name: 'input',
            size: 'default',
            type: 'text',
            placeholder: '请输入建设单位名称'
          },
          varName: 'sjsdwmc',
          label: '建设单位名称',
          rules: [
            {max: 200, message: '最大长度不允许超过200'}
          ]
        }
      ],
      '5': [
        {
          control: {
            name: 'input',
            size: 'default',
            type: 'text',
            placeholder: '请输入行政区划'
          },
          varName: 'sxzqh',
          label: '行政区划',
          rules: [
            {required: true, message: '行政区划必填'},
            {max: 20, message: '最大长度不允许超过20'}
          ]
        },
        {
          control: {
            name: 'input',
            size: 'default',
            type: 'text',
            placeholder: '请输入社会信用代码'
          },
          varName: 'sshxydm',
          label: '社会信用代码',
          rules: [
            {required: true, message: '社会信用代码必填'},
            {max: 50, message: '最大长度不允许超过50'}
          ]
        }
      ],
      '6': [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请选择成立日期',
            showTime: false
          },
          varName: 'dclrq',
          label: '成立日期',
          rules: [
            {required: true, message: '成立日期必填'}
          ]
        },
        {
          control: {
            name: 'input',
            size: 'default',
            type: 'text',
            placeholder: '请输入营业期限(年)'
          },
          varName: 'iyyqx',
          label: '营业期限(年)',
          rules: [
            {required: true, message: '营业期限(年)必填'}
          ]
        }
      ],
      length: 6
    }
  },
  '1': {
    key: 0,
    title: '企业营业执照及资质等级情况',
    content: {
      '0': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入法定人代表',
            style: {}
          },
          varName: 'sfddbr',
          label: '法定人代表',
          rules: [
            {required: true, message: '法定人代表必填'},
            {max: 50, message: '最大长度不允许超过50'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入法人身份证件号码',
            style: {}
          },
          varName: 'sfrsfzjhm',
          label: '法人身份证件号码',
          rules: [
            {required: true, message: '法人身份证件号码必填'},
            {max: 50, message: '最大长度不允许超过50'}
          ]
        }
      ],
      '1': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入法人联系电话'
          },
          varName: 'sfrlxdh',
          label: '法人联系电话',
          rules: [
            {required: true, message: '法人联系电话必填'},
            {max: 50, message: '最大长度不允许超过50'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入登记注册类型'
          },
          varName: 'sdjzclx',
          label: '登记注册类型',
          rules: [
            {required: true, message: '登记注册类型必填'},
            {max: 10, message: '最大长度不允许超过10'}
          ]
        }
      ],
      '2': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入经营范围'
          },
          varName: 'sjyfw',
          label: '经营范围',
          rules: [
            {required: true, message: '经营范围必填'},
            {max: 2000, message: '最大长度不允许超过2000'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入注册资金(万元)'
          },
          varName: 'nzczj',
          label: '注册资金(万元)',
          rules: [
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
            placeholder: '请输入资质等级'
          },
          varName: 'szzdj',
          label: '资质等级',
          rules: [
            {max: 40, message: '最大长度不允许超过40'}
          ]
        },
        {
          control: {
            name: 'input',
            size: 'default',
            type: 'text',
            placeholder: '请输入资质证号'
          },
          varName: 'szzzh',
          label: '资质证号',
          rules: [
            {max: 50, message: '最大长度不允许超过50'}
          ]
        }
      ],
      '4': [
        {
          control: {
            name: 'input',
            size: 'default',
            type: 'text',
            placeholder: '请输入电子邮箱'
          },
          varName: 'sdzyx',
          label: '电子邮箱',
          rules: [
            {max: 100, message: '最大长度不允许超过100'}
          ]
        },
        {
          control: {
            name: 'input',
            size: 'default',
            type: 'text',
            placeholder: '请输入企业网址'
          },
          varName: 'sqywz',
          label: '企业网址',
          rules: [
            {max: 200, message: '最大长度不允许超过200'}
          ]
        }
      ],
      '5': [
        {
          control: {
            name: 'radio',
            size: 'default',
            defaultValue: '1',
            select: [
              {
                value: '0',
                label: '否'
              },
              {
                value: '1',
                label: '是'
              }
            ]
          },
          varName: 'ssfbsqy',
          label: '是否本市企业',
          rules: [
            {type: 'string', required: true, message: '类型为字符串'}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请选择外埠进秦日期',
            showTime: false
          },
          varName: 'dwbjqrq',
          label: '外埠进秦日期'
        }
      ],
      '6': [
        {
          control: {
            name: 'radio',
            size: 'default',
            defaultValue: '1',
            select: [
              {
                value: '0',
                label: '否'
              },
              {
                value: '1',
                label: '是'
              }
            ]
          },
          varName: 'ssfxhcydw',
          label: '是否物业管理协会成员单位'
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请选择入会日期',
            showTime: false
          },
          varName: 'drhrq',
          label: '入会日期'
        }
      ],
      length: 7
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
