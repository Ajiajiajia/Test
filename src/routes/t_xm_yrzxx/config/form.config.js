export default {
  '0': {
    key: 0,
    title: '已入住基本信息',
    content: {
      '0': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入入住期数',
            style: {}
          },
          varName: 'irzqs',
          label: '入住期数',
          rules: [
            {required: true, message: '入住期数必填'}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请选择本期竣工时间',
            showTime: false
          },
          varName: 'dbqjgsj',
          label: '本期竣工时间',
          rules: [
            {required: true, message: '本期竣工时间必填'}
          ]
        }
      ],
      '1': [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请选择本期入住时间',
            showTime: false
          },
          varName: 'dbqrzsj',
          label: '本期入住时间',
          rules: [
            {required: true, message: '本期入住时间必填'}
          ]
        }
      ],
      length: 2
    }
  },
  '1': {
    key: 1,
    title: '房屋情况',
    content: {
      '0': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入入住规模',
            style: {}
          },
          varName: 'nrzgm',
          label: '入住规模(万平方米)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'},
            {required: true, message: '入住规模必填'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            placeholder: '请输入入住范围',
            size: 'default',
            style: {}
          },
          varName: 'srzfw',
          label: '入住范围',
          rules: [
            {required: true, message: '入住范围必填'},
            {max: 50, message: '最大长度不允许超过50'}
          ]
        }
      ],
      '1': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入房屋幢数',
            style: {}
          },
          varName: 'ifwzs',
          label: '房屋幢数(幢)',
          rules: [
            {required: true, message: '房屋幢数必填'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入入住套数',
            style: {}
          },
          varName: 'ifwts',
          label: '入住套数(套)',
          rules: [
            {required: true, message: '入住套数必填'}
          ]
        }
      ],
      '2': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'ihz',
          label: '砖混(幢)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'igh',
          label: '钢混(幢)'
        }
      ],
      '3': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'igjg',
          label: '钢结构(幢)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'iqt',
          label: '其他(幢)'
        }
      ],
      length: 4
    }
  },
  '2': {
    key: 2,
    title: '配套设施设备情况',
    content: {
      '0': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'ighlstcw',
          label: '规划落实停车位(个)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'idstcw',
          label: '地上停车位(个)'
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
          varName: 'idstcw',
          label: '地下停车位(个)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'ilstcw',
          label: '临时停车位(个)'
        }
      ],
      '2': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'idt',
          label: '电梯(部)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'isssb',
          label: '生活水泵(台)'
        }
      ],
      '3': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'idrsb',
          label: '地热水泵(台)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'ijkxt',
          label: '监控系统(套)'
        }
      ],
      '4': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'izsb',
          label: '中水泵(台)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'ixfsb',
          label: '消防水泵(台)'
        }
      ],
      '5': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'izysb',
          label: '直饮水泵(台)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'izlsb',
          label: '制冷(热)设备(台)'
        }
      ],
      '6': [
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '有',
                label: '有'
              },
              {
                value: '无',
                label: '无'
              }
            ]
          },
          varName: 'sywhg',
          label: '有无会馆'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'nhgmj',
          label: '会馆建筑面积(平方米)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        }
      ],
      '7': [
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '有',
                label: '有'
              },
              {
                value: '无',
                label: '无'
              }
            ]
          },
          varName: 'sywyyc',
          label: '有无游泳设施'
        },
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '有',
                label: '有'
              },
              {
                value: '无',
                label: '无'
              }
            ]
          },
          varName: 'sywwqc',
          label: '有无网球场'
        }
      ],
      '8': [
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '有',
                label: '有'
              },
              {
                value: '无',
                label: '无'
              }
            ]
          },
          varName: 'sywlqc',
          label: '有无篮球场'
        },
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '有',
                label: '有'
              },
              {
                value: '无',
                label: '无'
              }
            ]
          },
          varName: 'sywksdj',
          label: '有无可视对讲'
        }
      ],
      '9': [
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '有',
                label: '有'
              },
              {
                value: '无',
                label: '无'
              }
            ]
          },
          varName: 'sywsxt',
          label: '监控系统-有无摄像头'
        },
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '有',
                label: '有'
              },
              {
                value: '无',
                label: '无'
              }
            ]
          },
          varName: 'sywyhw',
          label: '监控系统-有无远红外'
        }
      ],
      '10': [
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '有',
                label: '有'
              },
              {
                value: '无',
                label: '无'
              }
            ]
          },
          varName: 'sywzzbj',
          label: '有无自动报警'
        },
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '有',
                label: '有'
              },
              {
                value: '无',
                label: '无'
              }
            ]
          },
          varName: 'sywszxh',
          label: '有无电子巡更'
        }
      ],
      '11': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'ixfs',
          label: '消防栓(个)'
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'ixfsx',
          label: '消防水箱(个)'
        }
      ],
      '12': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            style: {}
          },
          varName: 'imhq',
          label: '灭火器(个)'
        },
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '有',
                label: '有'
              },
              {
                value: '无',
                label: '无'
              }
            ]
          },
          varName: 'sywyg',
          label: '消防设备-有无烟感'
        }
      ],
      '13': [
        {
          control: {
            name: 'select',
            size: 'default',
            select: [
              {
                value: '有',
                label: '有'
              },
              {
                value: '无',
                label: '无'
              }
            ]
          },
          varName: 'sywpl',
          label: '消防设备-有无喷淋'
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            style: {}
          },
          varName: 'sqt',
          label: '其他',
          rules: [
            {max: 100, message: '最大长度不允许超过100'}
          ]
        }
      ],
      '14': [
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
      length: 15
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
  length: 3
}
