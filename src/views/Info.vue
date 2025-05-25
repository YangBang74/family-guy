<script setup>
import { useFormStore } from '@/stores/dates'
import { onMounted } from 'vue'
const form = useFormStore()
onMounted(() => {
  form.loadForm()
})
</script>

<template>
  <section class="personal">
    <div class="container">
      <div class="personal__info">
        <h1 class="personal__info-title">Персональные данные</h1>
        <p class="personal__info-name">{{ form.name }}, {{ form.age }} лет</p>
      </div>
      <div class="childs">
        <h2 class="childs__title">Дети</h2>
        <div class="childs__list">
          <div class="childs__item" v-for="(child, index) in form.childs" :key="index">
            <p class="childs__name">{{ child.name }}, {{ child.age }} лет</p>
          </div>
        </div>
        <div v-if="form.childs.length === 0" class="childs__empty">Нет детей</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.personal {
  min-height: 80vh;
  margin: 30px 0;
}

.personal__info-title {
  font-weight: 500;
  margin-bottom: 1.25rem;
}

.personal__info-name {
  font-size: 1.25rem;
  font-weight: 700;
}

.childs {
  margin: 3.75rem 0;
}

.childs__title {
  font-weight: 500;
  margin-bottom: 1.25rem;
}

.childs__item {
  display: inline-block;
  padding: 0.625rem 1.25rem;
  border-radius: 4px;
  background-color: var(--color-gray);
  font-weight: 700;
}
</style>
