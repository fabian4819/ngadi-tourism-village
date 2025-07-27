export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author->{name},
  mainImage,
  publishedAt,
  categories[]->{title},
  "excerpt": pt::text(body[0])
}`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author->{name},
  mainImage,
  publishedAt,
  categories[]->{title},
  body
}`