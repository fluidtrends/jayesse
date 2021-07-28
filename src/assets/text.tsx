import { assetPath } from './base'

export const strings = (base: string, locale: string = "en") => require(`carmel/assets/${locale}/text/strings.json`)
export const text = (base: string, locale: string = "en", id: string) => assetPath(base, locale, `${id}.md`, `text`)
export const post = (base: string, locale: string = "en", id: string) => assetPath(base, locale, `${id}.md`, `text/posts`)
export const posts = (base: string, locale: string = "en") => require(`carmel/assets/${locale}/text/posts.json`)
export const authors = (base: string, locale: string = "en") => require(`carmel/assets/${locale}/text/authors.json`)
