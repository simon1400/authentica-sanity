import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
  "homepage",
  "nav",
  "footer",
  "category",
  "settings",
  "job"
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

      S.listItem()
        .title('Přehled pracovních pozic')
        .child(
          S.editor()
            .schemaType('job')
            .documentId('job')
        ),

      ...S.documentTypeListItems()
          .filter(hiddenDocTypes),

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
