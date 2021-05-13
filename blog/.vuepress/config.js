module.exports = {
  title: "Bo Yang blog",
  description: "This is BoYang's blog",
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg" }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }]
  ],
  theme: "gungnir",
  locales: {
    "/": {
      lang: "zh-CN"
    },
    "/en/": {
      lang: "en-US"
    },
  },
  themeConfig: {
    repo: "Renovamen/vuepress-theme-gungnir",
    docsDir: "blog",
    editLinks: true,
    lastUpdated: true,
    hitokoto: true, // enable hitokoto (一言) or not?
    searchIcon: "ri-search-2-line",
    codeTheme: "gungnir-dark",
    languageIcon: "hi-translate",
    rss: {
      site_url: "https://mrybo.github.io",
      copyright: "Renovamen 2018-2021",
      count: 20
    },
    // comment: {
    //   owner: "This-is-an-Apple",
    //   repo: "gitalk-comments",
    //   clientId: "d6247712dc288a5a60ca",
    //   clientSecret: "ed1ec72417828343c79ed910a1b77d140fa715a7"
    // },
    // analytics: {
    //   ga: "UA-146858305-4",
    //   ba: "0958eaa31f4f4656f36bd33673332939"
    // },
    katex: true,
    mermaid: true,
    chartjs: true,
    roughviz: true,
    markmap: true,
    mdPlus: {
      all: true
    },
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        nav: require("./configs/nav/zh"),
        sidebar: require("./configs/sidebar/zh")
      },
      "/en/": {
        label: "English",
        selectText: "Languages",
        nav: require("./configs/nav/en"),
        sidebar: require("./configs/sidebar/en")
      },
    },
    personalInfo: {
      name: "Gungnir",
      avatar: "/img/avatar.jpeg",
      description: "A blog theme for VuePress.",
      sns: {
        github: "mrybo",
        twitter: "https://twitter.com/UBgMJZzxwfTd4Dj",
        zhihu: "https://www.zhihu.com/people/zhu-mu-bai-3",
        email: "aoeybo@gmail.com"
      }
    },
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      }
    ],
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },
    footer: `
      &copy; <a href="https://github.com/mrybo" target="_blank">Mrybo</a> 2018-2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a>
    `
  },
  
  markdown: {
    // lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5"]
  },

  configureWebpack: () => {
    const NODE_ENV = process.env.NODE_ENV;
    if (NODE_ENV === "production") {
      return {
        output: {
          publicPath:
            "https://cdn.jsdelivr.net/gh/mrybo/mrybo.github.io@gh-pages/"
        },
        resolve: {
          alias: {
            public: path.resolve(__dirname, "./public")
          }
        }
      };
    } else {
      return {
        resolve: {
          alias: {
            public: path.resolve(__dirname, "./public")
          }
        }
      };
    }
  }
};
