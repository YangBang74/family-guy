import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    name: '',
    age: '',
    childs: [],
  }),
  actions: {
    addChild() {
      if (this.childs.length < 5) {
        this.childs.push({ name: '', age: '' })
      }
    },
    removeChild(index) {
      this.childs.splice(index, 1)
    },
    saveForm() {
      const data = {
        name: this.name,
        age: this.age,
        childs: this.childs,
      }
      localStorage.setItem('formData', JSON.stringify(data))
    },
    loadForm() {
      const data = localStorage.getItem('formData')
      if (data) {
        const parsed = JSON.parse(data)
        this.name = parsed.name || ''
        this.age = parsed.age || ''
        this.childs = parsed.childs || []
      }
    },
  },
})
