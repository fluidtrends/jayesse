const path = require('path')
const fs = require('fs-extra')

const makePacker = () => {
  const packerDir = process.env.CARMEL_PACKER_HOME
  const stackDir = process.env.CARMEL_STACK_HOME
  const contextDir = process.env.CARMEL_PRODUCT_HOME

  const { WebPacker } = require(packerDir)

  const destDir = path.resolve(contextDir, '.carmel', 'web')
  const templateFile = path.resolve(stackDir, 'assets', 'web', 'page.ejs')
  const entryFile = path.resolve(stackDir, 'src', 'web', 'main.tsx')

  const packer = new WebPacker({
    contextDir,
    entryFile,
    destDir,
    stackDir,
    templateFile,
    watch: true, 
    port: 9999
  })

  return packer
}

const linkDependencies = () => {
    const contextDir = process.env.CARMEL_PRODUCT_HOME
    
    const depsDir = path.resolve(contextDir, 'node_modules')
    if (fs.existsSync(depsDir)) return

    const stackDir = process.env.CARMEL_STACK_HOME
    const stack = process.env.CARMEL_STACK

    fs.symlinkSync(path.resolve(stackDir, 'node_modules'), depsDir, 'dir')
    fs.symlinkSync(path.resolve(stackDir, 'lib'), path.resolve(depsDir, stack), 'dir')
}

export default async () => {
  linkDependencies()

  const packer = makePacker()

  const handler = (event) => {
    console.log(event)
  }

  const instance = await packer.pack(handler)
  return instance
}