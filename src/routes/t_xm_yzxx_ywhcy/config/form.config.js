export default {
  '0': {
    key: 0,
    title: '业主委员会成员',
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
            {type: 'string', required: true, message: '请输入姓名'},
            {max: 20, message: '最大长度不允许超过20'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入身份证号',
            defaultValue: '',
            style: {}
          },
          varName: 'ssfzh',
          label: '身份证号',
          rules: [
            {type: 'string', required: true, message: '请输入身份证号'},
            {max: 20, message: '最大长度不允许超过20'},
            {
              pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
              message: '请输入正确的身份证号码'
            }
          ]
        }
      ],
      1: [
        {
          control: {
            name: 'select',
            size: 'small',
            placeholder: '性别',
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
            {required: true, message: '请输入性别'}
          ]
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
      2: [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请输入出生日期',
            showTime: true
          },
          varName: 'dcsrq',
          label: '出生日期',
          rules: [
            {required: true, message: '请输入出生日期'}
          ]
        },
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
          varName: 'sxl',
          label: '学历'
        }
      ],
      3: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入(原)工作单位',
            defaultValue: '',
            style: {}
          },
          varName: 'sgzdw',
          label: '(原)工作单位',
          rules: [
            {type: 'string', required: true, message: '请输入(原)工作单位'},
            {max: 100, message: '最大长度不允许超过100'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入(原)职务',
            defaultValue: '',
            style: {}
          },
          varName: 'szw',
          label: '(原)职务',
          rules: [
            {type: 'string', required: true, message: '请输入(原)职务'},
            {max: 30, message: '最大长度不允许超过30'}
          ]
        }
      ],
      4: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入联系电话',
            defaultValue: '',
            style: {}
          },
          varName: 'slxdh',
          label: '联系电话',
          rules: [
            {type: 'string', required: true, message: '请输入(原)工作单位'},
            {pattern: /^[0-9]*$/, message: '请输入正确的联系电话'},
            {max: 30, message: '最大长度不允许超过30'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'szw',
          label: '职称',
          rules: [
            {max: 20, message: '最大长度不允许超过20'}
          ]
        }
      ],
      5: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'sjtzz',
          label: '家庭住址',
          rules: [
            {max: 100, message: '最大长度不允许超过100'}
          ]
        },
        {
          // TODO: 代码表
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入所任职务',
            defaultValue: '',
            style: {}
          },
          varName: 'szw',
          label: '所任职务',
          rules: [
            {type: 'string', required: true, message: '请输入所任职务'},
            {max: 100, message: '最大长度不允许超过100'}
          ]
        }
      ],
      6: [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请输入任期时间',
            showTime: true
          },
          varName: 'drqsj',
          label: '任期时间',
          rules: [
            {required: true, message: '请输入任期时间'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入任期年限',
            defaultValue: '',
            style: {}
          },
          varName: 'irqnx',
          label: '任期年限',
          rules: [
            {type: 'number', required: true, message: '请输入所任职务'}
          ]
        }
      ],
      7: [
        {

          control: {
            name: 'TextArea',
            type: 'text',
            size: 'default',
            placeholder: '请输入备注',
            defaultValue: '',
            style: {}
          },
          varName: 'sbz',
          label: '备注',
          rules: [
            {type: 'string', required: true, message: '请输入备注'},
            {max: 200, message: '最大长度不允许超过200'}
          ]

        }
      ],
      length: 8
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
