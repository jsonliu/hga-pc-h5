import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null as any
  }),
  actions: {
    setUserInfo(info: any) {
      this.userInfo = info
    }
  },
  persist: true
})