import { assetPath, assetsPaths } from './base'

export const logo = 'logo.png'
export const logoLight = 'logo-light.png'

export const allImages: any = { logo, logoLight }
export const allCovers: any = { main: 'main' }

export const image = (base: string, locale: string, id: string) => assetPath(base, locale, id, `images`)
export const cover = (base: string, locale: string, id: string) => assetPath(base, locale, id, `images/covers`)

export const images = (base: string, locale: string) => assetsPaths(base, locale, allImages, `images`)
export const covers = (base: string, locale: string) => assetsPaths(base, locale, allCovers, `images/covers`)