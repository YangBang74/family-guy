<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__body">
        <div class="header__logo">
          <img src="/logo.svg" alt="Alef development" />
        </div>
        <nav class="header__menu">
          <RouterLink class="header__menu-link" to="/">Форма</RouterLink>
          <RouterLink class="header__menu-link" to="/info">Превью</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="footer">
    <div class="container">
      <div class="footer__copy">all rights reserved</div>
    </div>
  </footer>
</template>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  left: 0;
  border-bottom: 1px solid var(--color-silver-light);
  background-color: var(--color-white);
}

.header .container {
  max-width: clamp(320px, 95%, 1274px);
  margin: 0 auto;
  padding: 0 50px;
}

.header__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  width: 6.25rem;
}

.header__menu {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.header__menu-link {
  font-size: 0.875rem;
  color: var(--color-silver);
  padding: 1.5625rem 0;
}

.header__menu-link:hover {
  color: var(--color-base);
}

main {
  padding-top: 4.4375rem;
}

.footer__copy {
  text-align: center;
  font-size: 0.8125rem;
  padding: 30px 0;
  color: var(--color-base);
}
</style>
