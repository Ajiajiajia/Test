export default {
  '0': {
    key: 0,
    title: '物业项目基本信息',
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
          varName: 'sxmbh',
          label: '项目名称',
          rules: [
            {max: 100, message: '最大长度不允许超过100'},
            {type: 'string', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入项目编号',
            defaultValue: '',
            style: {}
          },
          varName: 'sxmmc',
          label: '项目编号',
          rules: [
            {max: 50, message: '最大长度不允许超过50'},
            {type: 'string', required: true}
          ]
        }
      ],
      1: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入项目推广名',
            defaultValue: '',
            style: {}
          },
          varName: 'sxmtgm',
          label: '项目推广名',
          rules: [
            {max: 20, message: '最大长度不允许超过20'},
            {type: 'string'}
          ]
        },
        {
          control: {
            name: 'searchSelect',
            size: 'small',
            placeholder: '规划类型',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'sghlx',
          label: '规划类型',
          rules: [
            {required: true, message: '必选'}
          ]
        }
      ],
      2: [
        {
          control: {
            name: 'searchSelect',
            size: 'small',
            placeholder: '请选择项目类型',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'sxmlx',
          label: '项目类型',
          rules: [
            {required: true, message: '必选'}
          ]
        },
        {
          control: {
            name: 'select',
            size: 'default',
            placeholder: '请选择项目所属区（县）',
            select: [
              {
                value: 'a',
                label: '代码表拉取'
              }
            ]
          },
          varName: 'sssqx',
          label: '项目所属区（县）',
          rules: [
            {required: true, message: '必选'}
          ]
        }
      ],
      3: [
        {
          control: {
            name: 'select',
            size: 'default',
            placeholder: '请选择项目所属街道（乡镇）',
            select: [
              {
                value: 'a',
                label: '代码表拉取'
              }
            ]
          },
          varName: 'sssjd',
          label: '项目所属街道（乡镇）',
          rules: [
            {required: true, message: '必选'}
          ]
        },
        {
          control: {
            name: 'select',
            size: 'default',
            placeholder: '请选择项目所属居（村）委会',
            select: [
              {
                value: 'a',
                label: '代码表拉取'
              }
            ]
          },
          varName: 'sssjwh',
          label: '项目所属居（村）委会',
          rules: [
            {required: true, message: '必选'}
          ]
        }
      ],
      4: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'szldd',
          label: '坐落地点',
          rules: [
            {max: 100, message: '最大长度不允许超过100'},
            {type: 'string', required: true}
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
          varName: 'skfjsdw',
          label: '开发建设单位名称',
          rules: [
            {max: 100, message: '最大长度不允许超过100'},
            {type: 'string', required: true}
          ]
        }
      ],
      5: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入建筑面积',
            defaultValue: '',
            style: {}
          },
          varName: 'njzmj',
          label: '建筑面积(万m²)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {type: 'string', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入项目规模',
            defaultValue: '',
            style: {}
          },
          varName: 'nxmgm',
          label: '项目规模(万m²)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {type: 'string', required: true}
          ]
        }
      ],
      6: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入建筑面积',
            defaultValue: '',
            style: {}
          },
          varName: 'nrjl',
          label: '容积率(%)',
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
            placeholder: '请输入房屋幢数',
            defaultValue: '',
            style: {}
          },
          varName: 'ifwzs',
          label: '房屋幢数（幢）',
          rules: [
            {type: 'int', required: true}
          ]
        }
      ],
      7: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入地上面积',
            defaultValue: '',
            style: {}
          },
          varName: 'ndsmj',
          label: '地上面积(万m²)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {type: 'string', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入地下面积',
            defaultValue: '',
            style: {}
          },
          varName: 'ndxmj',
          label: '地下面积(万m²)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {type: 'string', required: true}
          ]
        }
      ],
      8: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入住宅规模',
            defaultValue: '',
            style: {}
          },
          varName: 'nzzgm',
          label: '住宅规模(万m²)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {type: 'string', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入非住宅规模',
            defaultValue: '',
            style: {}
          },
          varName: 'nfzzgm',
          label: '非住宅规模(万m²)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {type: 'string', required: true}
          ]
        }
      ],
      9: [
        {
          control: {
            name: 'searchSelect',
            size: 'small',
            placeholder: '请选择住宅规模类型',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'szzgmlx',
          label: '住宅规模类型',
          rules: [
            {required: true, message: '必选'}
          ]
        },
        {
          control: {
            name: 'searchSelect',
            size: 'small',
            placeholder: '请选择非住宅规模类型',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'sfzzgmlx',
          label: '非住宅规模类型',
          rules: [
            {required: true, message: '必选'}
          ]
        }
      ],
      10: [
        {
          control: {
            name: 'searchSelect',
            size: 'default',
            placeholder: '请选择项目状态',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'sxmzt',
          label: '项目状态',
          rules: [
            {required: true, message: '必选'}
          ]
        },
        {
          control: {
            name: 'select',
            size: 'default',
            placeholder: '请输入规划建设期数',
            select: [
              {
                value: 'a',
                label: '代码表拉取'
              }
            ]
          },
          varName: 'ighjsqs',
          label: '规划建设期数',
          rules: [
            {required: true, type: 'int', message: '必选'}
          ]
        }
      ],
      11: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入房屋总套数',
            defaultValue: '',
            style: {}
          },
          varName: 'ifwzts',
          label: '房屋总套数(套)',
          rules: [
            {type: 'int', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入住宅套数',
            defaultValue: '',
            style: {}
          },
          varName: 'izzts',
          label: '住宅套数(套)',
          rules: [
            {type: 'int', required: true}
          ]
        }
      ],
      12: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入非住宅套数',
            defaultValue: '',
            style: {}
          },
          varName: 'ifzzts',
          label: '非住宅套数(套)',
          rules: [
            {type: 'int', required: true}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: true
          },
          varName: 'dsqjgsj',
          label: '首期竣工时间',
          rules: [
            {required: true, message: '首期竣工时间必选'}
          ]
        }
      ],
      13: [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: true
          },
          varName: 'dsqkgsj',
          label: '首期接管时间',
          rules: [
            {required: true, message: '首期接管时间必选'}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: true
          },
          varName: 'dsqrzsj',
          label: '首期入住时间',
          rules: [
            {required: true, message: '首期入住时间必选'}
          ]
        }
      ],
      14: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            style: {}
          },
          varName: 'iyrzqs',
          label: '已入住期数(期)',
          rules: [
            {type: 'int'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入未入住面积',
            defaultValue: '',
            style: {}
          },
          varName: 'nwrjmj',
          label: '未入住面积(万m²)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {type: 'string', required: true}
          ]
        }
      ],
      15: [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: true
          },
          varName: 'dxqrzsj',
          label: '下期入住时间',
          rules: [
            {required: true, message: '下期入住时间必选'}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            showTime: true
          },
          varName: 'dyzdhclsj',
          label: '业主大会成立时间',
          rules: [
            {required: true, message: '业主大会成立时间必选'}
          ]
        }
      ],
      16: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入物业管理用房面积',
            defaultValue: '',
            style: {}
          },
          varName: 'nwyglyfmj',
          label: '物业管理用房面积(万m²)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {type: 'string', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            defaultValue: '',
            placeholder: '请输入物业管理用房具体位置',
            style: {}
          },
          varName: 'swyglyfwz',
          label: '物业管理用房具体位置',
          rules: [
            {max: 100, message: '最大长度不允许超过100'},
            {type: 'string', required: true}
          ]
        }
      ],
      17: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入绿化面积',
            defaultValue: '',
            style: {}
          },
          varName: 'nlhmj',
          label: '绿化面积(万m²)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {type: 'string', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入湖体面积',
            defaultValue: '',
            style: {}
          },
          varName: 'nhtmj',
          label: '湖体面积(万m²)',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {type: 'string', required: true}
          ]
        }
      ],
      18: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入绿化率',
            defaultValue: '',
            style: {}
          },
          varName: 'nlhv',
          label: '绿化率（%）',
          rules: [
            {pattern: /.[0-9]{4}$/, message: '请保留四位小数'},
            {type: 'string', required: true}
          ]
        }
      ],
      19: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入规划停车位',
            defaultValue: '',
            style: {}
          },
          varName: 'ightcw',
          label: '规划停车位(个)',
          rules: [
            {type: 'int', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入地上停车位',
            defaultValue: '',
            style: {}
          },
          varName: 'idstcw',
          label: '地上停车位(个)',
          rules: [
            {type: 'int', required: true}
          ]
        }
      ],
      20: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入地下停车位',
            defaultValue: '',
            style: {}
          },
          varName: 'idxtcw',
          label: '地下停车位(个)',
          rules: [
            {type: 'int', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入地上停车位',
            defaultValue: '',
            style: {}
          },
          varName: 'ilstcw',
          label: '临时停车位(个)',
          rules: [
            {type: 'int', required: true}
          ]
        }
      ],
      21: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入规划户均车位',
            defaultValue: '',
            style: {}
          },
          varName: 'nghhucw',
          label: '规划户均车位(个/户)',
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
            placeholder: '请输入实际户均车位',
            defaultValue: '',
            style: {}
          },
          varName: 'nsjhjcw',
          label: '实际户均车位(个/户)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'},
            {type: 'string', required: true}
          ]
        }
      ],
      length: 22
    }
  },
  '1': {
    key: 1,
    title: '企业资质信息',
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
            placeholder: '请输入电梯',
            defaultValue: '',
            style: {}
          },
          varName: 'idts',
          label: '电梯(部)',
          rules: [
            {required: true, message: '请输入电梯'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入生活水泵(台)',
            defaultValue: '',
            style: {}
          },
          varName: 'ishsb',
          label: '生活水泵(台)',
          rules: [
            {required: true, message: '请输入生活水泵(台)'}
          ]
        }
      ],
      1: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入地热水泵(台)',
            defaultValue: '',
            style: {}
          },
          varName: 'idrsb',
          label: '地热水泵(台)',
          rules: [
            {required: true, message: '请输入地热水泵(台)'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入监控系统(套)',
            defaultValue: '',
            style: {}
          },
          varName: 'ijkxt',
          label: '监控系统(套)',
          rules: [
            {required: true, message: '请输入监控系统(套)'}
          ]
        }
      ],
      2: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入中水泵(台)',
            defaultValue: '',
            style: {}
          },
          varName: 'izsb',
          label: '中水泵(台)',
          rules: [
            {required: true, message: '请输入中水泵(台)'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入消防水泵(台)',
            defaultValue: '',
            style: {}
          },
          varName: 'ixfsb',
          label: '消防水泵(台)',
          rules: [
            {required: true, message: '请输入消防水泵(台)'}
          ]
        }
      ],
      3: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入直饮水泵(台)',
            defaultValue: '',
            style: {}
          },
          varName: 'izysb',
          label: '直饮水泵(台)',
          rules: [
            {required: true, message: '请输入直饮水泵(台)'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入制冷(热)设备(台)',
            defaultValue: '',
            style: {}
          },
          varName: 'izlsb',
          label: '制冷(热)设备(台)',
          rules: [
            {required: true, message: '请输入制冷(热)设备(台)'}
          ]
        }
      ],
      4: [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入直饮水泵(台)',
            defaultValue: '',
            style: {}
          },
          varName: 'izysb',
          label: '直饮水泵(台)',
          rules: [
            {required: true, message: '请输入直饮水泵(台)'}
          ]
        },
        {
          // TODO:代码表
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入选聘前期物业服务企业方式',
            defaultValue: '',
            style: {}
          },
          varName: 'sxpwyfs',
          label: '选聘前期物业服务企业方式',
          rules: [
            {required: true, message: '请输入选聘前期物业服务企业方式'}
          ]
        }
      ],
      5: [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请输入中标时间',
            showTime: true
          },
          varName: 'dzbsj',
          label: '中标时间',
          rules: [
            {required: true, message: '请输入接管该项目时间'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入中标企业名称',
            defaultValue: '',
            style: {}
          },
          varName: 'szbqymc',
          label: '中标企业名称',
          rules: [
            {required: true, message: '请输入中标企业名称'},
            {max: 100, message: '最大长度不允许超过100'}
          ]
        }
      ],
      length: 6
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
  length: 2
}
