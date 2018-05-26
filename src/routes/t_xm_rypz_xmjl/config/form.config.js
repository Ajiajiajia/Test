export default {
  '0': {
    key: 0,
    title: '项目经理基本信息',
    content: {
      '0': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入项目经理姓名',
            style: {}
          },
          varName: 'sxm',
          label: '项目经理姓名',
          rules: [
            {required: true, message: '项目经理姓名必填'},
            {max: 30, message: '最大长度不允许超过30'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入身份证号',
            style: {}
          },
          varName: 'ssfz',
          label: '身份证号',
          rules: [
            {required: true, message: '身份证号必填'},
            {max: 20, message: '最大长度不允许超过20'},
            {pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, message: '请输入正确的身份证号码'}
          ]
        }
      ],
      '1': [
        {
          control: {
            name: 'radio',
            size: 'default',
            defaultValue: '男',
            select: [
              {
                value: '男',
                label: '男'
              },
              {
                value: '女',
                label: '女'
              }
            ]
          },
          varName: 'sxb',
          label: '性别',
          rules: [
            {type: 'string', required: true, message: '性别必选'}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请选择出生日期',
            showTime: false
          },
          varName: 'dcsrq',
          label: '出生日期',
          rules: [
            {required: true, message: '出生日期必填'}
          ]
        }
      ],
      '2': [
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '小学',
                label: '小学'
              },
              {
                value: '初中',
                label: '初中'
              },
              {
                value: '高中',
                label: '高中'
              },
              {
                value: '本科',
                label: '本科'
              },
              {
                value: '专业',
                label: '专业'
              },
              {
                value: '研究生',
                label: '研究生'
              },
              {
                value: '博士生',
                label: '博士生'
              },
              {
                value: '硕士生',
                label: '硕士生'
              },
              {
                value: '其他',
                label: '其他'
              }
            ]
          },
          varName: 'swhcd',
          label: '文化程度'
        },
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '党员',
                label: '党员'
              },
              {
                value: '群众',
                label: '群众'
              },
              {
                value: '团员',
                label: '团员'
              },
              {
                value: '其他',
                label: '其他'
              }
            ]
          },
          varName: 'szzmm',
          label: '政治面貌'
        }
      ],
      '3': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            style: {}
          },
          varName: 'syzbm',
          label: '邮政编码',
          rules: [
            {max: 20, message: '最大长度不允许超过20'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            style: {}
          },
          varName: 'sjtzz',
          label: '家庭住址',
          rules: [
            {max: 100, message: '最大长度不允许超过100'}
          ]
        }
      ],
      '4': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            style: {}
          },
          varName: 'shkszd',
          label: '户口所在地',
          rules: [
            {max: 50, message: '最大长度不允许超过50'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            style: {}
          },
          varName: 'stxdz',
          label: '通讯地址',
          rules: [
            {max: 100, message: '最大长度不允许超过100'}
          ]
        }
      ],
      '5': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            style: {}
          },
          varName: 'slxdh',
          label: '联系电话(固话)',
          rules: [
            {max: 30, message: '最大长度不允许超过30'},
            {pattern: /^[0-9]*$/, message: '请输入正确的电话号码'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            style: {}
          },
          varName: 'ssj',
          label: '手机',
          rules: [
            {required: true, message: '手机号码必填'},
            {max: 30, message: '最大长度不允许超过30'},
            {pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: '请输入正确的手机号码'}
          ]
        }
      ],
      '6': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            style: {}
          },
          varName: 'sdzyx',
          label: '电子邮箱',
          rules: [
            {max: 30, message: '最大长度不允许超过30'}
          ]
        },
        {
          control: {
            name: 'radio',
            size: 'default',
            defaultValue: '是',
            select: [
              {
                value: '是',
                label: '是'
              },
              {
                value: '否',
                label: '否'
              }
            ]
          },
          varName: 'ssfyz',
          label: '是否有证'
        }
      ],
      '7': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            style: {}
          },
          varName: 'sxmjlzsh',
          label: '项目经理证书号',
          rules: [
            {max: 30, message: '最大长度不允许超过30'}
          ]
        },
        {
          control: {
            name: 'radio',
            size: 'default',
            defaultValue: '是',
            select: [
              {
                value: '是',
                label: '是'
              },
              {
                value: '否',
                label: '否'
              }
            ]
          },
          varName: 'ssfwys',
          label: '是否物业管理师'
        }
      ],
      '8': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            style: {}
          },
          varName: 'swyszsh',
          label: '物业管理师证号',
          rules: [
            {max: 20, message: '最大长度不允许超过30'}
          ]
        }
      ],
      length: 9
    }
  },
  '1': {
    key: 1,
    title: '项目经理就职信息',
    content: {
      '0': [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: false
          },
          varName: 'drzsj',
          label: '入职时间'
        },
        {
          control: {
            name: 'TextArea',
            type: 'text',
            size: 'default',
            style: {}
          },
          varName: 'sbz',
          label: '备注',
          rules: [
            {max: 200, message: '最大长度不允许超过200'}
          ]
        }
      ],
      length: 1
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
