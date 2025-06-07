export default {
  name: '李嘉俊',
  tel: '15195382735',
  email: 'wy15195382735@163.com',
  github: 'https://github.com/QAQDFAFD',
  konwledge: 'https://lijiajun999.xlog.app',
  website: 'https://lijiajun.site',
  zhihu: 'https://www.zhihu.com/people/li-jia-jun-31-10',
  edus: [
    {
      left: '南京信息工程大学',
      right: '江苏南京',
      children: [
        {
          left: '专业：机器人工程，GPA: 3.453 / 5.0',
          right: '2020年9月 - 2024年6月'
        }
      ]
    }
  ],
  honor: [
    '2022 第十届“赢在南京”青年大学生创业大赛雨花台区决赛优胜奖',
    '2022 南京信息工程大学第十三届挑战杯中国大学生创业计划竞赛二等奖',
    '2022 南京信息工程大学第八届互联网+大学生创新创业大赛校内选拔赛铜奖',
    '2023 蓝桥杯第十四届软件类Web应用开发大学组省二等奖',
    '校三好学生，校一等奖学金，校二等奖学金，软件著作权一份',
    '英语四、六级证书，计算机二、三级证书'
  ],
  skills: {
    techs: ['Vue.js', 'HTML5', 'JavaScript', 'Node.js', 'uni-app', 'TypeScript', 'ES6', 'CSS3', 'SCSS', 'Webpack']
    // tests: ['Jest'],
  },
  works: [
    {
      left: '百胜中国-RSC数字化研发中心 前端工程师',
      link: '',
      right: '2023年6月 - 至今',
      children: []
    },
    {
      left: ' 南京迈趣儿科技发展有限责任公司 前端工程师',
      link: '',
      right: '2021年10月 - 2023年5月',
      children: []
    }
  ],
  projects: [
    {
      name: 'MLOps 运维工具平台',
      time: '2023年6月 - 至今',
      company: '百胜中国',
      intro:
        '：该项目是一个公司内部使用的运维工具平台，具有库表数据的监控、数据源的配置、数据表及字段级别的标注、SQL在线执行、数据集的配置、告警配置等功能，可以帮助大数据工程师完成一系列的数据方面的便捷操作。配合相关已有平台作为公司 AI 团队的重要环节，执行数据治理，异常定位等功能。团队成员由1个技术leader+3个大数据+1个后端+1个前端组成。',
      techStack: 'Vue2 + vue-router + vuex + Antdv1.7.8 + axios + animate.css + codeMirror',
      responsibility: [
        { left: '引入 codemirror 第三方库作为编辑器开发的基础，简化了编辑器开发的成本' },
        { left: '引入 animate.css 作为动画库，提高了前端页面的流畅性' },
        { left: '利用 Vue 全家桶全程参与开发了数据源配置页面、控制台页面、数据集指标配置页面' },
        { left: '完善了 prettier 和 eslint 的格式化规则，加强了开发的规范性' },
        { left: '优化 webpack 配置，减小了项目的打包体积和提高了打包速度' },
        { left: '挖掘项目新需求，提出新的功能点，比如控制台编辑器的历史记录功能、SQL模板功能、上下键切换功能' }
      ],

      harvest:
        '了解了中大型公司业务的复杂性，感受到了团队配合的密切，充分认识到了团队之间沟通的重要性，对前后端协作开发的理解进一步加深。'
    },
    {
      name: 'GBA 测评小程序/h5',
      time: '2021年10月 - 2023年5月',
      company: '南京迈趣儿科技发展有限责任公司',
      intro:
        '该项目是一个移动端微信小程序的游戏化测评（后期重构 H5 版本），小程序基于专业的认知神经心理学原理、以游戏化测评为主要表现形式的能力测评工具，致力于为青年人才提供专业的人才测评服务。团队成员由2个产品+1个UI+4个前端+1个后端组成。',
      techStack: 'uni-app +Vue2 + Vuex + 秋云 ucharts /(重构) vue3 + pinia + element-plus + axios + swiper',
      responsibility: [
        { left: '确定项目的技术栈为 uni-app，负责项目初始化和后期的工作分配' },
        { left: '引入秋云 ucharts 取代 echarts，符合产品的多端属性定位，减小了小程序的打包体积' },
        { left: '确定产品同学提出的想法和具体的心理学实验是否有游戏化的可能性' },
        { left: '主导后期小程序重构为 h5 的工作，共负责制作7/27的游戏关卡' }
      ],
      harvest:
        '迈趣儿是大学生创新创业团队，作为主创人之一，担任前端开发小组负责人，根据需求确定前端技术的选型，使用 Github、腾讯文档、阿里云效等工具来管理前 端小组人员的任务安排，通过定期组会的形式协调开发进度，收获了一定的团队协作的经验，了解产品从想法到落实的具体过程，熟悉了团队协作开发的流程，能够很好地和后端对接相关的工作。'
    }
  ]
}
