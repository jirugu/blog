import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
const base = "/blog/"
export default defineConfig({
  base,
  title: "记如故的Blog",
  description: "记录前端学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown', link: '/markdown-examples' },
          { text: 'Runtime API', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
