<script setup>
import { useFormStore } from '@/stores/dates'
import Input from '@/components/Input.vue'
import Icons from '@/components/Icons.vue'
import { onMounted } from 'vue'

const form = useFormStore()
onMounted(() => {
  form.loadForm()
})

const validateForm = () => {
  if (/\d/.test(form.name)) {
    alert('Имя не должно содержать цифр')
    return false
  }
  if (!/^\d+$/.test(form.age) || +form.age > 150) {
    alert('Возраст должен быть числом ≤150')
    return false
  }
  for (let i = 0; i < form.childs.length; i++) {
    const child = form.childs[i]
    if (/\d/.test(child.name)) {
      alert(`Имя не должно содержать цифр`)
      return false
    }
    if (!/^\d+$/.test(child.age) || +child.age > 150 || child.age === '') {
      alert(`Не корреткный возраст`)
      return false
    }
    if (child.age === '' || form.age === '') {
      alert('Возраст не может быть пустым')
      return false
    }
    if (form.name === '' || child.name === '') {
      alert('Имя не может быть пустым')
      return false
    }
  }
  return true
}

const handleSubmit = (e) => {
  e.preventDefault()
  if (validateForm()) {
    form.saveForm()
    alert('Сохранено!')
  }
}
</script>

<template>
  <section class="form">
    <div class="container">
      <form class="form__body">
        <h1 class="form__body-title">Персональные данные</h1>
        <div class="form__block">
          <Input name="name" label="Имя" v-model="form.name" />
          <Input name="age" label="Возраст" v-model="form.age" />
        </div>
        <div class="form__child-title">
          <h2 class="form__child-head">Дети (макс. 5)</h2>
          <button type="button" class="form__child-button" @click="form.addChild">
            <Icons name="add" size="18" />
            Добавить ребенка
          </button>
        </div>
        <div class="form__childs" v-for="(child, index) in form.childs" :key="index">
          <div class="child__block">
            <Input name="childName" label="Имя" v-model="form.childs[index].name" />
          </div>
          <div class="child__block">
            <Input name="childAge" label="Возраст" v-model="form.childs[index].age" />
          </div>
          <button type="button" class="child__block-button" @click="form.removeChild(index)">
            Удалить
          </button>
        </div>
        <button type="submit" class="form__save" @click="handleSubmit">Сохранить</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.form {
  min-height: 80vh;
  margin: 30px 0;
}

.form__body-title {
  font-weight: 500;
  margin-bottom: 1.25rem;
}

.form__child-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 33px 0 10px;
}

.form__child-head {
  font-weight: 500;
}

.form__child-button {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.625rem 1.25rem;
  white-space: nowrap;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 100px;
}

.form__child-button:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.form__childs {
  display: flex;
  justify-content: space-between;
  gap: 18px;
}

.child__block-button {
  color: var(--color-primary);
}

.child__block-button:hover {
  color: var(--color-red);
}

.form__save {
  margin-top: 40px;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 0.625rem 1.25rem;
  border-radius: 100px;
}
</style>
