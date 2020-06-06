export default {
  list: [
    { title: '餐具份数', txt: '未选择', handleEvent: 'handleTabwarePopup' },
    { title: '订单备注', txt: '口味、偏好', handleEvent: 'handleNotesPopup' },
    { title: '发票信息', txt: '不需要开发票', handleEvent: 'handleBillPopup' }
  ],
  popup: {
    tabware: {
      list: ['不需要餐具', '1份', '2份', '3份', '4份', '5份', '6份'],
      curIdx: -1,
    },
    notes: {
      text: '',
      curIdx: -1,
      selectedRadioTag: '',
      selectedCheckTags: [],
      radioTags: ['不要辣', '微辣', '中辣', '魔鬼辣'],
      checkTags: [
        { txt: '多点醋', check: false },
        { txt: '多点葱花', check: false },
        { txt: '不要洋葱', check: false },
        { txt: '不要香菜', check: false }
      ]
    }
  }
}