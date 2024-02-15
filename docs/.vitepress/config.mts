import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wiki-vp",
  lang: 'zh-CN',
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: { 
	    'Example': [{
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        }],

        'Yearbook': [{
            text: 'Yearbook',
            items: [
                {text: 'Yearbook', link: '/yearbook/'},
                {text: '2020-2029', link: '/yearbook/2020.md'},
                {text: '2010-2019', link: '/yearbook/2010.md'},
                {text: '2000-2009', link: '/yearbook/2000.md'},
            ]
        }]
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
