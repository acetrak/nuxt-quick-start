# Nuxt 3 

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## 快速开始

1. 文件夹`components`下的组件无需导入即可使用
2. 文件夹`pages`下的文件路径即是路由
3. 文件夹`layouts`为布局组件，默认使用`default.vue`
4. 文件夹`public`下的图片资源可通过以下方式访问
```vue
<template>
  <img src="/nuxt.png" alt="Discover Nuxt 3" />
</template>
```
5. 文件夹 `assets`下的资源文件可通过以下方式访问
```vue
<template>
  <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```
