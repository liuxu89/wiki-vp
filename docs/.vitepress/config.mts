import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wiki-vp",
  lang: 'zh-CN',
  description: "A VitePress Site",
  markdown: {math: true},
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Yearbook', link: '/yearbook/2020', activeMatch: '/yearbook/'}
    ],

    sidebar: { 
        'Example': [{
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        }],

        '/yearbook/': {
            base: '/yearbook/',
            items: [
                {text: '2020-2029', link: '2020'},
                {text: '2010-2019', link: '2010'},
                {text: '2000-2009', link: '2000'}
            ]
        }
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
