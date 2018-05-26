export default {
  '0': {
    key: 0,
    title: '企业纳税信息',
    content: {
      0: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入企业名称',
            defaultValue: '',
            style: {}
          },
          varName: 'qyid',
          label: '企业名称',
          rules: [
            {type: 'string', required: true}
          ]
        },
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD HH:mm:ss',
            size: 'default',
            showTime: true
          },
          varName: 'nnd',
          label: '年度',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'},
            {required: true, message: '年度必选'}
          ]
        }
      ],
      1: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入年营业收入',
            defaultValue: '',
            style: {}
          },
          varName: 'nnyysr',
          label: '年营业收入(万元)',
          rules: [
            {type: 'string', required: true}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入缴税金额',
            defaultValue: '',
            style: {}
          },
          varName: 'nnsje',
          label: '缴税金额(万元)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'},
            {type: 'string', required: true}
          ]
        }
      ],
      2: [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入主营业务收入',
            defaultValue: '',
            style: {}
          },
          varName: 'nzyywsr',
          label: '主营业务收入(万元)',
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
            placeholder: '请输入主营业务收入应交税金及附加',
            defaultValue: '',
            style: {}
          },
          varName: 'nzyyjsj',
          label: '主营业务收入应交税金及附加(万元)',
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
            placeholder: '请输入其他业务收入应交税金及附加',
            defaultValue: '',
            style: {}
          },
          varName: 'nqtyjsj',
          label: '其他业务收入应交税金及附加(万元)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'},
            {type: 'string', required: true}
          ]
        }
      ],
      '4': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入营业利润',
            defaultValue: '',
            style: {}
          },
          varName: 'nyylr',
          label: '营业利润(万元)',
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
            placeholder: '请输入利润总额',
            defaultValue: '',
            style: {}
          },
          varName: 'nlrze',
          label: '利润总额(万元)',
          rules: [
            {pattern: /.[0-9]{2}$/, message: '请保留两位小数'},
            {type: 'string', required: true}
          ]
        }
      ],
      length: 5
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
