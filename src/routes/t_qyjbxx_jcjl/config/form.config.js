export default {
  '0': {
    key: 0,
    title: '企业奖惩信息',
    content: {
      '0': [
        {
          control: {
            name: 'radio',
            size: 'default',
            defaultValue: '0',
            select: [
              {
                value: '0',
                label: '奖励'
              },
              {
                value: '1',
                label: '处罚'
              }
            ]
          },
          varName: 'slx',
          label: '类型',
          rules: [
            {required: true, message: '奖惩类型必填'}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请选择时间',
            showTime: false
          },
          varName: 'djcrq',
          label: '奖惩日期',
          rules: [
            {required: true, message: '奖惩日期必填'}
          ]
        }
      ],
      '1': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入奖惩内容'
          },
          varName: 'sjcnr',
          label: '奖惩内容',
          rules: [
            {required: true, message: '奖惩内容必填'},
            {max: 1000, message: '最大长度不允许超过1000'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入奖惩机关'
          },
          varName: 'sjcjg',
          label: '奖惩机关',
          rules: [
            {required: true, message: '奖惩机关必填'}
          ]
        }
      ],
      '2': [
        {
          control: {
            name: 'searchSelect',
            size: 'default',
            placeholder: '请输入奖惩级别',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'sjcjb',
          label: '奖惩级别',
          rules: [
            {required: true, message: '奖惩级别必填'}
          ]
        }
      ],
      length: 3
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
