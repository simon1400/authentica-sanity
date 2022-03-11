import S from "@sanity/desk-tool/structure-builder";
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

const hiddenDocTypes = listItem => ![
  "homepage",
  "nav",
  "footer",
  "category",
  "settings",
  "blogSort",
  "blogItem",
  "job",
  "jobOff"
].includes(listItem.getId())

export default () =>
  S.list()
    .title("Obsah")
    .items([
      S.listItem()
        .title('Homepage')
        .child(
          S.editor()
            .schemaType('homepage')
            .documentId('homepage')
        ),

      S.divider(),

      S.listItem()
        .title('Přehled pracovních pozic')
        .child(
          S.editor()
            .schemaType('job')
            .documentId('job')
        ),

      orderableDocumentListDeskItem({ title: "Pracovní pozice", type: 'jobOff'}),

      S.divider(),
        
      S.listItem()
        .title('Blog')
        .child(
          S.editor()
            .schemaType('blogSort')
            .documentId('blogSort')
        ),

      orderableDocumentListDeskItem({title: "Příspěvky v blogu", type: 'blogItem'}),

      S.divider(),

      ...S.documentTypeListItems()
          .filter(hiddenDocTypes),

      S.divider(),

      S.listItem()
        .title('Navigace')
        .child(
          S.editor()
            .schemaType('nav')
            .documentId('nav')
        ),
      S.listItem()
        .title('Patička')
        .child(
          S.editor()
            .schemaType('footer')
            .documentId('footer')
        ),
      S.listItem()
        .title('Nastavení')
        .child(
          S.editor()
            .schemaType('settings')
            .documentId('settings')
        ),


    ]);
