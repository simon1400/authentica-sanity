import Tabs from "sanity-plugin-tabs"

export default (local) => ([
  {
    title: 'Název',
    name: 'title',
    type: 'string',
  },
  {
    title: 'Slug',
    name: 'slug',
    type: 'slug',
    options: {
      source: 'content.'+local+'.title'
    }
  }
])
