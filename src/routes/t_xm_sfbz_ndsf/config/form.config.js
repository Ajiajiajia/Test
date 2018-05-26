export default {
  '0': {
    key: 0,
    title: '年度',
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
            name: 'DatePicker',
            format: 'YYYY',
            size: 'default',
            placeholder: '请输物业费收入年份',
            showTime: true
          },
          varName: 'ind',
          label: '年度',
          rules: [
            {required: true, message: '请输物业费收入年份'}
          ]
        }
      ],
      length: 1
    }
  },
  '1': {
    key: 1,
    title: '物业费用季度收费情况',
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
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'nwyfyjdys1',
          label: '物业费一季度应收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'nwyfyjdss1',
          label: '物业费一季度实收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
        }
      ],
      1: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'nwyfyjdys2',
          label: '物业费二季度应收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'nwyfyjdss2',
          label: '物业费二季度实收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
        }
      ],
      2: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'nwyfyjdys3',
          label: '物业费三季度应收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'nwyfyjdss3',
          label: '物业费三季度实收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
        }
      ],
      3: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'nwyfyjdys4',
          label: '物业费四季度应收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'nwyfyjdss4',
          label: '物业费四季度实收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
        }
      ],
      4: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'nwyfyjdsjl1',
          label: '物业费一季度收缴率(%)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '保留两位小数'}
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
          varName: 'nwyfyjdsjl2',
          label: '物业费二季度收缴率(%)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '保留两位小数'}
          ]
        }
      ],
      5: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'nwyfyjdsjl3',
          label: '物业费三季度收缴率(%)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '保留两位小数'}
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
          varName: 'nwyfyjdsjl4',
          label: '物业费四季度收缴率(%)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留两位小数'}
          ]
        }
      ],
      length: 6
    }
  },
  '2': {
    key: 2,
    title: '物业费用年度收费情况',
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
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'nwyfnys',
          label: '物业费年应收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'nwyfnss',
          label: '物业费年实收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
        }
      ],
      1: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'nzysys',
          label: '直饮水应收(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'nzysss',
          label: '直饮水实收(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
        }
      ],
      2: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'nwyfnsjl',
          label: '物业费年收缴率(%)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '保留两位小数'}
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
          varName: 'nzyssjl',
          label: '直饮水收缴率(%)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '保留两位小数'}
          ]
        }
      ],
      3: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'ntyfwf',
          label: '特约服务费收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'ndbfwf',
          label: '代办服务费收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
        }
      ],
      4: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'nzsys',
          label: '中水应收(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'nzsss',
          label: '中水实收(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
        }
      ],
      5: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'nzsys',
          label: '中水收缴率(%)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '保留两位小数'}
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
          varName: 'nzsss',
          label: '地下停车场管理费收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'ndrsys',
          label: '地热水应收(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'ndrsss',
          label: '地热水实收(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
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
          varName: 'ndrssjl',
          label: '地热水收缴率(%)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '保留两位小数'}
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
          varName: 'sggysyt',
          label: '公共用水用途',
          rules: [
            {max: 50, message: '最大长度不允许超过50'}
          ]
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
          varName: 'nggysl',
          label: '公共用水年度用水量(吨)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'nggyszc',
          label: '公共用水支出总数(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
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
          varName: 'nggydl',
          label: '公共用电年度用电量(度)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '保留两位小数'}
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
          varName: 'nggydzc',
          label: '公共用电支出总数(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
        }
      ],
      10: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '',
            defaultValue: '',
            style: {}
          },
          varName: 'sggydyt',
          label: '公共用电用途',
          rules: [
            {max: 50, message: '最大长度不允许超过50'}
          ]
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
          varName: 'nghdstcwys',
          label: '规划地上停车位应收(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'nggdstcwss',
          label: '规划地上停车位实收(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
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
          varName: 'nlsdstcwys',
          label: '临时地上停车位场地占用费应收(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'nlsdstcwss',
          label: '临时地上停车位场地占用费实收(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
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
          varName: 'nggdstcwsjl',
          label: '规划地上停车位收缴率(%)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '保留两位小数'}
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
          varName: 'nlsdstcwsjl',
          label: '临时地上停车位场地占用费收缴率(%)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '保留两位小数'}
          ]
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
          varName: 'dggsr',
          label: '广告收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
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
          varName: 'dqtsr',
          label: '其他收入(万元)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '保留四位小数'}
          ]
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
  length: 3
}
