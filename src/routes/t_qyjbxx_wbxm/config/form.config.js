export default {
  '0': {
    key: 0,
    title: '企业外埠项目信息',
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
            placeholder: '请输入项目名称',
            defaultValue: '',
            style: {}
          },
          varName: 'sxmmc',
          label: '项目名称',
          rules: [
            {type: 'string', required: true, message: '请输入项目名称'},
            {max: 100, message: '最大长度不允许超过100'}
          ]
        },
        {

          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入所属区划',
            defaultValue: '',
            style: {}
          },
          varName: 'sssqh',
          label: '所属区划',
          rules: [
            {type: 'string', required: true, message: '请输入所属区划'}
          ]
          // key: 1,
          // control: {
          //   name: 'DatePicker',
          //   format: 'YYYY-MM-DD HH:mm:ss',
          //   size: 'default',
          //   placeholder: '请输入信息',
          //   showTime: true
          // },
          // varName: 'date',
          // label: '日期',
          // rules: [
          //   {required: true, message: '日期必填'}
          // ]
        }
      ],
      1: [
        {

          control: {
            name: 'select',
            size: 'default',
            placeholder: '请选择规划类型',
            select: [
              {
                value: 'a',
                label: 'A'
              },
              {
                value: 'b',
                label: 'B'
              }
            ]
          },
          varName: 'sghlx',
          label: '规划类型',
          rules: [
            {required: true, message: '必填'}
          ]
          // key: 0,
          // control: {
          //   name: 'MonthPicker',
          //   size: 'default',
          //   placeholder: '请输入信息',
          //   format: 'YYYY-MM'
          // },
          // varName: 'time',
          // label: '时间',
          // rules: [
          //   {required: true, message: '时间必填'}
          // ]
        },
        {

          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入坐落地址',
            defaultValue: '',
            style: {}
          },
          varName: 'szldz',
          label: '坐落地址',
          rules: [
            {type: 'string', required: true, message: '请输入坐落地址'}
          ]
          // key: 1,
          // control: {
          //   name: 'RangePicker',
          //   size: 'small',
          //   placeholder: '请输入信息',
          //   showTime: true,
          //   format: 'YYYY-MM-DD HH:mm:ss',
          //   defaultValue: ''
          // },
          // varName: 'range',
          // label: '时间1',
          // rules: [
          //   {required: true, message: '类型为字符串'}
          // ]
        }
      ],
      2: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入建筑面积（万m²）',
            defaultValue: '',
            style: {}
          },
          varName: 'njzmj',
          label: '建筑面积',
          rules: [
            {type: 'string', required: true, message: '请输入建筑面积(万m²)'},
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
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
          varName: 'ifwzts',
          label: '房屋总套数'
          // key: 1,
          // control: {
          //   name: 'checkBox',
          //   size: 'small',
          //   placeholder: '请输入信息',
          //   plainOptions: ['Apple', 'Pear', 'Orange'],
          //   defaultValue: ['Apple', 'Orange']
          // },
          // varName: 'rangneaa',
          // label: '时间1',
          // rules: [
          //   {required: true, message: '必选'}
          // ]
        }
      ],
      '3': [
        {

          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入项目获得称号',
            defaultValue: '',
            style: {}
          },
          varName: 'sxmhdch',
          label: '项目获得称号',
          rules: [
            {type: 'string', required: true, message: '请输入项目获得称号'},
            {max: 100, message: '最大长度不允许超过100'}
          ]

          // control: {
          //   name: 'TextArea',
          //   size: 'small',
          //   placeholder: '请输入信息',
          // },
          // varName: 'rangnedaa',
          // label: '时间1',
          // rules: [
          //   {required: true, message: '必选'}
          // ]
        }
      ],
      4: [
        {

          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请输入合同起始日期',
            showTime: true
          },
          varName: 'dhtqsrq',
          label: '合同起始日期'

        },
        {

          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请输入合同终止日期',
            showTime: true
          },
          varName: 'dhzzzrq',
          label: '合同终止日期'

        }
      ],
      5: [
        {

          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入基础物业费',
            defaultValue: '',
            style: {}
          },
          varName: 'njcwyf',
          label: '基础物业费(元/m²*月)',
          rules: [
            {type: 'string', required: true, message: '请输入基础物业费'},
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]

        },
        {

          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入设备设施养护费用',
            defaultValue: '',
            style: {}
          },
          varName: 'nsbssyhfy',
          label: '设备设施养护费用(元/m²*月)',
          rules: [
            {type: 'string', required: true, message: '请输入设备设施养护费用'},
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]

        }
      ],
      6: [
        {

          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入业费年度收缴率',
            defaultValue: '',
            style: {}
          },
          varName: 'nwyfndsjl',
          label: '业费年度收缴率(%)',
          rules: [
            {type: 'string', required: true, message: '请输入业费年度收缴率'},
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]

        },
        {

          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入满意度评测',
            defaultValue: '',
            style: {}
          },
          varName: 'nmydpc',
          label: '满意度评测(%)',
          rules: [
            {type: 'string', required: true, message: '请输入满意度评测'},
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
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
