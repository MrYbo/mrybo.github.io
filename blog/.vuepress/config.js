const path = require("path");

module.exports = {
  title: "BoYang Blog",
  description: "This is BoYang's blog",
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  locales: {
    "/": {
      lang: "en-US"
    },
    "/zh/": {
      lang: "zh-CN"
    }
  },
  theme: "gungnir",
  themeConfig: {
    repo: "mrybo/mrybo.github.io",
    docsDir: "blog",
    docsBranch: "main",
    editLinks: true,
    lastUpdated: true,
    hitokoto: true,
    searchIcon: "ri-search-2-line",
    codeTheme: "gungnir-dark",
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        nav: require("./configs/nav/en")
      },
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        nav: require("./configs/nav/zh"),
      }
    },

    rss: {
      site_url: "https://mrybo.github.io",
      copyright: "mrybo 2018-2021",
      count: 20
    },

    katex: true,
    mdPlus: {
      all: true
    },

    readingTime: {
      excludes: ["/about", "/tags/.*", "/links"]
    },

    personalInfo: {
      name: "BoYang",
      avatar: "/img/avatar.jpg",
      description: "desc ...",
      sns: {
        github: "mrybo",
        twitter: "UBgMJZzxwfTd4Dj",
        zhihu: "zhu-mu-bai-3",
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
      },
      {
        path: "/img/home-bg/5.jpg"
      }
    ],

    pages: {
      tags: {
        title: "Tags",
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },

      links: {
        title: "Links",
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
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
    `
  },

    // comment: {
    //   owner: "This-is-an-Apple",
    //   repo: "gitalk-comments",
    //   clientId: "d6247712dc288a5a60ca",
    //   clientSecret: "ed1ec72417828343c79ed910a1b77d140fa715a7"
    // },
  
    analytics: {
      ga: "G-0WDP35ELK5",
    },
  
  markdown: {
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
