export default {
  '0': {
    key: 0,
    title: '业主情况',
    content: {
      0: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入业主户数',
            defaultValue: '',
            style: {}
          },
          varName: 'iyzhs',
          label: '业主户数',
          rules: [
            {type: 'int', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'irkzs',
          label: '人口总数',
          rules: [
            {type: 'int'}
          ]
        }
      ],
      1: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'ssqx',
          label: '所属区县',
          rules: [
            {type: 'string'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入房屋总套数',
            style: {}
          },
          varName: 'ifwzts',
          label: '房屋总套数(套)',
          rules: [
            {type: 'int', required: true}
          ]
        }
      ],
      2: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'ssjwh',
          label: '所属居委会',
          rules: [
            {type: 'string'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入业主已入住套数',
            style: {}
          },
          varName: 'iyzrzts',
          label: '业主已入住套数(套)',
          rules: [
            {type: 'int', required: true}
          ]
        }
      ],
      3: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入其他业务收入',
            defaultValue: '',
            style: {}
          },
          varName: 'nqtsr',
          label: '其他收入(万元)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'},
            {type: 'string', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入开发建设单位空置房套数',
            style: {}
          },
          varName: 'ijsdwkzfs',
          label: '开发建设单位空置房套数',
          rules: [
            {type: 'int', required: true}
          ]
        }
      ],
      length: 4
    }
  },
  '1': {
    key: 1,
    title: '业主大会情况',
    content: {
      0: [
        {
          control: {
            name: 'select',
            size: 'default',
            placeholder: '请选择是否成立业主大会',
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
          varName: 'ssfclywh',
          label: '是否成立业主大会',
          rules: [
            {required: true, message: '必选'}
          ]
        }
      ],
      1: [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: true
          },
          varName: 'dywhclsj',
          label: '业主大会成立时间'
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: true
          },
          varName: 'dywhbzsj',
          label: '业主大会备案时间'
        }
      ],
      length: 2
    }
  },
  '2': {
    key: 2,
    title: '业主委员会情况',
    content: {
      0: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'iywhcyzs',
          label: '业委会成员总数',
          rules: [
            {type: 'int'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'iywhzrs',
          label: '其中主任、副主任数',
          rules: [
            {type: 'int'}
          ]
        }
      ],
      1: [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: true
          },
          varName: 'dywhqssj',
          label: '业委会任期起始时间',
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: true
          },
          varName: 'dywhhjsj',
          label: '业委会到期换届时间',
        }
      ],
      2: [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: true
          },
          varName: 'dhjzcyzsj',
          label: '最迟延至日期',
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'shjycyy',
          label: '换届延迟原因',
          rules: [
            {max: 100, message: '最大长度不允许超过100'},
            {type: 'string'}
          ]
        }
      ],
      3: [
        {
          control: {
            name: 'select',
            size: 'default',
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
          varName: 'snfzcgz',
          label: '能否正常开展工作',
          rules: [
            {}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'sfzcgzyy',
          label: '非正常工作原因',
          rules: [
            {max: 100, message: '最大长度不允许超过100'},
            {type: 'string'}
          ]
        }
      ],
      length: 4
    }
  },
  '3': {
    key: 3,
    title: '业主委员会成员变更',
    content: {
      0: [
        {
          control: {
            name: 'select',
            size: 'default',
            defaultValue: '该字段在PDF中有，Excel中无，暂未确定',
            placeholder: '请选择是否成立业主大会',
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
          varName: 'ssfclywh',
          label: '该字段未作处理',
          rules: [
            {required: true, message: '必选'}
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
  length: 4
}
