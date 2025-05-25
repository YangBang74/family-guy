<script setup>
import { useFormStore } from '@/stores/dates'
import Input from '@/components/Input.vue'
import Icons from '@/components/Icons.vue'
import { onMounted } from 'vue'

const form = useFormStore()
onMounted(() => {
  form.loadForm()
})

const handleSubmit = (e) => {
  e.preventDefault()
  form.saveForm()
  alert('Сохранено!')
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
