<script setup>
import { defineProps } from 'vue'
import { defineEmits } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: 'Имя',
  },
  modelValue: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form__block">
    <label :for="props.name" class="form__block-name">{{ props.label }}</label>
    <input
      type="text"
      :name="props.name"
      class="form__block-input"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      required
    />
  </div>
</template>
<style scoped>
.form__block {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid var(--color-silver-light);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  height: 3.5rem;
  margin: 0.625rem 0;
}

.form__block-name {
  font-size: 0.8125rem;
  color: var(--color-silver);
}

.form__block-input {
  width: 100%;
  height: 100%;
  font-size: 0.875rem;
  color: var(--color-base);
}
</style>
