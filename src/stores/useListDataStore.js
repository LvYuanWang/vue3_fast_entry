import { defineStore } from "pinia";

export const useListDataStore = defineStore("listData", {
  state: () => ({
    checkboxData: [
      { id: 1, name: '吃饭', checked: false },
      { id: 2, name: '睡觉', checked: false },
      { id: 3, name: '打豆豆', checked: false },
      { id: 4, name: '看电视', checked: true },
      { id: 5, name: '玩游戏', checked: false },
      { id: 6, name: '学习', checked: true },
      { id: 7, name: '写代码', checked: false },
      { id: 8, name: '看书', checked: false },
      { id: 9, name: '逛街', checked: false },
      { id: 10, name: '旅游', checked: false },
      { id: 11, name: '看电影', checked: false },
      { id: 12, name: '听音乐', checked: false },
      { id: 13, name: '跳舞', checked: false },
      { id: 14, name: '唱歌', checked: false },
      { id: 15, name: '画画', checked: false },
      { id: 16, name: '写字', checked: false },
      { id: 17, name: '健身', checked: false },
      { id: 18, name: '跑步', checked: false },
      { id: 19, name: '骑车', checked: false },
      { id: 20, name: '游泳', checked: false },
      { id: 21, name: '爬山', checked: false },
      { id: 22, name: '滑雪', checked: false },
      { id: 23, name: '滑板', checked: false },
      { id: 24, name: '滑冰', checked: false },
      { id: 25, name: '钓鱼', checked: false },
      { id: 26, name: '植物', checked: false },
      { id: 27, name: '养宠物', checked: false },
      { id: 28, name: '养花', checked: false },
    ]
  }),
  actions: {
    updateCheckboxData(newData) {
      this.checkboxData = this.checkboxData.map(item => {
        if (item.id === newData.id) {
          return {
            ...item,
            ...newData
          }
        }
        return item
      })
    }
  }
})