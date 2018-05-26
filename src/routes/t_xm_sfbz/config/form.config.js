export default {
  '0': {
    key: 0,
    title: '物业费用收费标准',
    content: {
      '0': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入住宅平均物业基础服务费',
            style: {}
          },
          varName: 'nzzjcf',
          label: '住宅平均物业基础服务费(元/㎡*月)',
          rules: [
            {required: true, message: '住宅平均物业基础服务费必填'},
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入非住宅平均物业基础服务费',
            style: {}
          },
          varName: 'nzzjcf',
          label: '非住宅平均物业基础服务费(元/㎡*月)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        }
      ],
      '1': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入住宅平均机电设施设备运行养护费',
            style: {}
          },
          varName: 'nzzyhf',
          label: '住宅平均机电设施设备运行养护费(元/㎡*月)',
          rules: [
            {required: true, message: '住宅平均机电设施设备运行养护费必填'},
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入非住宅平均机电设施设备运行养护费',
            style: {}
          },
          varName: 'nfzzyhf',
          label: '非住宅平均机电设施设备运行养护费(元/㎡*月)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        }
      ],
      '2': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入直饮水收费标准',
            style: {}
          },
          varName: 'nzys',
          label: '直饮水收费标准(元/吨)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入中水收费标准',
            style: {}
          },
          varName: 'nzs',
          label: '中水收费标准(元/吨)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        }
      ],
      '3': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入地热水收费标准',
            style: {}
          },
          varName: 'ndrs',
          label: '地热水收费标准(元/吨)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入公共用水价格',
            style: {}
          },
          varName: 'nggys',
          label: '公共用水价格(元/吨)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        }
      ],
      '4': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入公共用电价格',
            style: {}
          },
          varName: 'nggyd',
          label: '公共用电价格(元/度)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入地下停车场管理费收费标准',
            style: {}
          },
          varName: 'ndxtcf',
          label: '地下停车场管理费收费标准(元/月)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        }
      ],
      '5': [
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入规划地上停车位收费标准',
            style: {}
          },
          varName: 'ndstcf',
          label: '规划地上停车位收费标准(元/月)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'number',
            size: 'default',
            placeholder: '请输入临时地上停车位场地占用费收费标准',
            style: {}
          },
          varName: 'nlstcf',
          label: '临时地上停车位场地占用费收费标准(元/月)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'}
          ]
        }
      ],
      '6': [
        {
          control: {
            name: 'TextArea',
            type: 'text',
            size: 'default'
          },
          varName: 'sbz',
          label: '备注',
          rules: [
            {max: 200, message: '最大长度不允许超过200'}
          ]
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
  length: 1
}
