import { image, images, cover, covers } from './images'
import { strings, text } from './text'

let _cache: any = {
    strings: {},
    text: {}
}

export default (base: string, locale: string = "en") => {
    _cache.strings = strings(base, locale)

    return {
        image: (id: string) => image(base, locale, id),
        images: images(base, locale),
        cover: (id: string) => cover(base, locale, id),
        covers: covers(base, locale),
        strings: _cache.strings,
        string: (id: string) => _cache.strings[id] || id,
        text: (id: string) => {
            _cache.text[id] = _cache.text[id] || text(base, locale, id)
            return _cache.text[id]            
        }
    }
}