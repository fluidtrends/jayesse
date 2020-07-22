export const assetPath = (base: string, id: string, category: string = 'images') => `${base}assets/${category}/${id}`

export const assetsPaths = (base: string, all: any, category: string) => {
    let result: any = {}
    Object.keys(all).map((asset: string) => result[asset] = assetPath(base, all[asset], category))
    return result
}