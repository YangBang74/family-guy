# Family Guy

Шаблон проекта на Vue 3 с Vite, предназначенный для быстрого старта разработки.

## 🚀 Описание

Проект `family-guy` — это каркас на базе Vue 3 + Vite, включающий:

* Настроенный сборщик Vite
* Поддержку современных стандартов ES modules
* Настройки ESLint и Prettier
* Структуру для быстрой разработки компонентов

## 📋 Пререквизиты

* **Node.js** версии **>=22.15.0**
* **npm** версии **>=10.9.2**

## ⚙️ Установка

1. Клонируйте репозиторий:

   ```bash
   ```

git clone [https://github.com/YangBang74/family-guy.git](https://github.com/YangBang74/family-guy.git)
cd family-guy

````
2. Установите зависимости:
   ```bash
npm install
````

> При необходимости можно явно указать версии движка в `package.json`:
>
> ```json
> "engines": {
>   "node": ">=22.15.0",
>   "npm": ">=10.9.2"
> }
> ```

## 🛠️ Скрипты

* `npm run dev` — запуск режима разработки с хот-релоудом.
* `npm run build` — сборка проекта для production.
* `npm run preview` — локальный просмотр собранной версии.

## 🎨 Структура проекта

```
family-guy/
├── public/          # Статические файлы
├── src/             # Исходники приложения
│   ├── assets/      # Изображения и стили
│   ├── components/  # Vue-компоненты
│   ├── views/       # Страницы/роуты
│   ├── App.vue
│   └── main.js      # Точка входа
├── .gitignore       # Исключения Git
├── package.json
├── vite.config.js   # Конфиг Vite
└── README.md        # Документация (этот файл)
```

## 🤝 Contributing

Пулл-реквесты приветствуются! Пожалуйста, соблюдайте стиль кода и добавляйте тесты для новых функций.

## 📜 Лицензия

MIT © YangBang74
