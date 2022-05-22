import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-953546a4","/test.html",{"title":""},["/test","/test.md"]],
  ["v-73cbea89","/%E5%90%8E%E7%AB%AF/axios.html",{"title":"axios笔记"},["/后端/axios.html","/%E5%90%8E%E7%AB%AF/axios","/后端/axios.md","/%E5%90%8E%E7%AB%AF/axios.md"]],
  ["v-973dedc0","/%E5%89%8D%E7%AB%AF/web2.html",{"title":""},["/前端/web2.html","/%E5%89%8D%E7%AB%AF/web2","/前端/web2.md","/%E5%89%8D%E7%AB%AF/web2.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
