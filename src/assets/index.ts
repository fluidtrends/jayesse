import { image, images, cover, covers } from './images'

export default (base: string) => ({
    image: (id: string) => image(base, id),
    images: images(base),
    cover: (id: string) => cover(base, id),
    covers: covers(base)
})