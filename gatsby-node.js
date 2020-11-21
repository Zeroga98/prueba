const { router } = require("./config/router")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)

  const newRouter = router[page.path]

  createPage({
    ...page,
    matchPath: page.path.match(/^\/app/) ? "/app/*" : undefined,
    path: newRouter ? newRouter.transform : page.path,
    context: {
      ...page.context,
    },
  })

}