export default {
  '0': {
    key: 0,
    title: '企业管理人员',
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
            placeholder: '请输入姓名',
            defaultValue: '',
            style: {}
          },
          varName: 'sxm',
          label: '姓名',
          rules: [
            {max: 20, message: '最大长度不允许超过20'},
            {type: 'string', required: true}
          ]
        },
        {
          key: 1,
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: 'a',
                label: '男'
              },
              {
                value: 'b',
                label: '女'
              }
            ]
          },
          varName: 'sxb',
          label: '性别',
          rules: [
          {required: true, message: '性别必选'}
          ]
        }
      ],
      1: [
        {
          key: 0,
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD HH:mm:ss',
            size: 'default',
            showTime: true
          },
          varName: 'dcsrq',
          label: '出生日期',
          rules: [
            {required: true, message: '出生日期必选'}
          ]
        },
        {
          key: 1,
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD HH:mm:ss',
            size: 'default',
            showTime: true
          },
          varName: 'drzrq',
          label: '任职日期',
          rules: [
            {required: true, message: '任职日期必选'}
          ]
        }
      ],
      2: [
        {
          key: 0,
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
          varName: 'sxl',
          label: '学历',
          rules: [
            {required: true, message: '学历必选'}
          ]
        },
        {
          key: 1,
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: 'a',
                label: '博士生'
              }
            ]
          },
          varName: 'sxrzw',
          label: '现任职务',
          rules: [
            {required: true, message: '现任职务必选'}
          ]
        }
      ],
      '3': [
        {
          key: 0,
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '身份证',
                label: '身份证'
              },
              {
                value: '军人证',
                label: '军人证'
              },
              {
                value: '居住证',
                label: '居住证'
              },
              {
                value: '签证',
                label: '签证'
              },
              {
                value: '护照',
                label: '护照'
              },
              {
                value: '户口本',
                label: '户口本'
              },
              {
                value: '团员证',
                label: '团员证'
              },
              {
                value: '党员证',
                label: '党员证'
              },
              {
                value: '其他',
                label: '其他'
              }
            ]
          },
          varName: 'szjlx',
          label: '证件类型',
          rules: [
            {required: true, message: '证件类型必填'}
          ]
        },
        {
          key: 0,
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: 'a',
                label: '党员'
              },
              {
                value: 'b',
                label: '群众'
              },
              {
                value: 'c',
                label: '团员'
              },
              {
                value: 'd',
                label: '其他'
              }
            ]
          },
          varName: 'szzmm',
          label: '政治面貌',
          rules: [
            {required: true, message: '政治面貌必选'}
          ]
        }
      ],
      '4': [
        {
          key: 0,
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'szjhm',
          label: '证件号码',
          rules: [
            {max: 100, message: '最大长度不允许超过100'},
            {required: true, message: '证件号码必填'}
          ]
        }
      ],
      '5': [
        {
          key: 0,
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'szslx',
          label: '证书类型',
          rules: [
            {max: 50, message: '最大长度不允许超过50'},
            {type: 'string'}
          ]
        },
        {
          key: 1,
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'szsbh',
          label: '证书编号',
          rules: [
            {max: 50, message: '最大长度不允许超过50'},
            {type: 'string'}
          ]
        }
      ],
      '6': [
        {
          key: 0,
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: 'a',
                label: '助理工程师'
              }
            ]
          },
          varName: 'szc',
          label: '职称',
          rules: [
            {message: ''}
          ]
        },
        {
          key: 1,
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'szcbh',
          label: '职称证书号',
          rules: [
            {max: 50, message: '最大长度不允许超过50'},
            {type: 'string'}
          ]
        }
      ],
      '7': [
        {
          key: 0,
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'shjrq',
          label: '获奖情况',
          rules: [
            {max: 1000, message: '最大长度不允许超过1000'},
            {type: 'string'}
          ]
        }
      ],
      '8': [
        {
          key: 0,
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'scfqk',
          label: '受罚情况',
          rules: [
            {max: 1000, message: '最大长度不允许超过1000'},
            {type: 'string'}
          ]
        }
      ],
      length: 9
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
  length: 1
}
