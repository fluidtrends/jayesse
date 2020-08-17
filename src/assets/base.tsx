export const assetPath = (base: string, locale: string, id: string, category: string = 'images') => `${base}assets/${locale}/${category}/${id}`

export const assetsPaths = (base: string, locale: string, all: any, category: string) => {
    let result: any = {}
    Object.keys(all).map((asset: string) => result[asset] = assetPath(base, locale, all[asset], category))
    return result
}