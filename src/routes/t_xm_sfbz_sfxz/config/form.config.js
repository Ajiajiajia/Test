export default {
  '0': {
    key: 0,
    title: '项目收费标准细则信息',
    content: {
      0: [
        {
          control: {
            name: 'searchSelect',
            size: 'default',
            placeholder: '收费类型',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'sxmbh',
          label: '收费类型',
          rules: [
            {required: true, message: '必选'}
          ]
        }
      ],
      1: [
        {
          control: {
            name: 'searchSelect',
            size: 'default',
            placeholder: '规划类型',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'sghlx',
          label: '规划类型',
          rules: [
            {required: true, message: '必选'}
          ]
        },
        {
          control: {
            name: 'searchSelect',
            size: 'default',
            placeholder: '房屋类型',
            selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'}
          },
          varName: 'sfwlx',
          label: '房屋类型',
          rules: [
            {required: true, message: '必选'}
          ]
        }
      ],
      2: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入收费面积',
            defaultValue: '',
            style: {}
          },
          varName: 'nsfmj',
          label: '收费面积(万m²)',
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
            placeholder: '请输入消费标准',
            defaultValue: '',
            style: {}
          },
          varName: 'nsfbz',
          label: '收费标准(万m²)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'},
            {type: 'string', required: true}
          ]
        }
      ],
      '3': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入其他业务收入',
            defaultValue: '',
            style: {}
          },
          varName: 'ssffw',
          label: '收费范围',
          rules: [
            {max: 100, message: '最大长度不允许超过100'},
            {type: 'string', required: true}
          ]
        }
      ],
      length: 4
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
