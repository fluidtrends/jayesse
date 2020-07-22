import { assetPath, assetsPaths } from './base'

export const logo = 'logo.png'
export const logoInverted = 'logo-inverted.png'

export const allImages: any = { logo, logoInverted }
export const allCovers: any = { main: 'main.r.png' }

export const image = (base: string, id: string) => assetPath(base, id, 'images')
export const cover = (base: string, id: string) => assetPath(base, id, 'images/covers')

export const images = (base: string) => assetsPaths(base, allImages, 'images')
export const covers = (base: string) => assetsPaths(base, allCovers, 'images/covers')