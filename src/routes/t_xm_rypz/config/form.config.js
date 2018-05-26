export default {
  '0': {
    key: 0,
    title: '人员配置',
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
            placeholder: '请输入物业服务企业名称',
            defaultValue: '',
            style: {}
          },
          varName: 'swyqymc',
          label: '物业服务企业名称',
          rules: [
            {type: 'string', required: true, message: '请输入物业服务企业名称'},
            {max: 100, message: '最大长度不允许超过100'}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请输入接管该项目时间',
            showTime: true
          },
          varName: 'djgxmsj',
          label: '接管该项目时间',
          rules: [
            {required: true, message: '请输入接管该项目时间'}
          ]
        }
      ],
      1: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入项目联系电话',
            defaultValue: '',
            style: {}
          },
          varName: 'slxdh',
          label: '项目联系电话',
          rules: [
            {type: 'string', required: true, message: '请输入项目联系电话'},
            {pattern: /^[0-9]*$/, message: '请输入正确的联系电话'},
            {max: 30, message: '最大长度不允许超过30'}
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
          label: '物业服务企业与开发建设单位关系'
        }
      ],
      2: [
        {

          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请输入合同起始时间',
            showTime: true
          },
          varName: 'dhtqssj',
          label: '合同起始时间'

        },
        {

          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请输入合同终止时间',
            showTime: true
          },
          varName: 'dhtzzsj',
          label: '合同终止时间'

        }
      ],
      3: [
        {
          control: {
            name: 'select',
            size: 'default',
            placeholder: '请选择是否在区县房管局办理合同备案',
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
          varName: 'ssfba',
          label: '是否在区县房管局办理合同备案',
          rules: [
            {required: true, message: '必填'}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请输入备案时间',
            showTime: true
          },
          varName: 'dbasj',
          label: '备案时间',
          rules: [
            {required: true, message: '请输入备案时间'}
          ]
        }
      ],
      4: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入合同备案号',
            defaultValue: '',
            style: {}
          },
          varName: 'dhtbah',
          label: '合同备案号',
          rules: [
            {type: 'string', required: true, message: '请输入合同备案号'},
            {max: 30, message: '最大长度不允许超过30'}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请输入合同延至日期',
            showTime: true
          },
          varName: 'dhtyzrq',
          label: '合同延至日期'

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
          varName: 'shtyqsm',
          label: '合同延期原因说明'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入项目人员总数',
            defaultValue: '',
            style: {}
          },
          varName: 'ixmzrs',
          label: '项目人员总数(名)',
          rules: [
            {required: true, message: '请输入项目人员总数'}
          ]
        }
      ],
      6: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'iglfwryzs',
          label: '管理服务人员总数(名)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'iczryzs',
          label: '操作人员总数(名)'
        }
      ],
      7: [
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'ixmjl',
          label: '项目经理(名)'

        },
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'igly',
          label: '管理员(名)'

        }
      ],
      8: [
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'ijdry',
          label: '接待人员(名)'

        },
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'ibjy',
          label: '保洁员(名)'

        }
      ],
      9: [
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
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
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'izxwhry',
          label: '秩序维护员(名)'

        }
      ],
      10: [
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'ilhry',
          label: '绿化人员(名)'

        },
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'iqtry',
          label: '其他人员(名)'

        }
      ],
      11: [
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'izjyry',
          label: '再就业人员数(名)'

        },
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'izygsryzs',
          label: '聘用专业公司人员总数(名)'

        }
      ],
      12: [
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'izygsgcjsry',
          label: '聘用专业公司工程技术人员(名)'

        },
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'izygsbjry',
          label: '聘用专业公司保洁员(名)'

        }
      ],
      13: [
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'izygslhry',
          label: '聘用专业公司绿化人员(名)'

        },
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'izygsqtry',
          label: '聘用专业公司其他人员(名)'

        }
      ],
      14: [
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'izygszjyry',
          label: '聘用专业公司再就业人员(名)'

        },
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'izygsqtry',
          label: '聘用专业公司其他人员(名)'

        }
      ],
      length: 15
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
