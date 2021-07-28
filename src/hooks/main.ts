import { useEffect, useState } from 'react'

export const useGitHubDocs = (repo: string, root: string, branch: string, path: string) => {
  const [content, setContent] = useState()
  const [sections, setSections] = useState()
  const [error, setError] = useState()

  const baseUrl = `https://raw.githubusercontent.com/${repo}/${branch || 'master'}/${root}`

  const fetchData = async () => {
    try {
      const sectionsResponse = await fetch(`${baseUrl}/sections.json`)
      const contentResponse = await fetch(`${baseUrl}/${path}/README.md`)

      const sections = JSON.parse(await sectionsResponse.text())
      const content: any = await contentResponse.text()

      setSections(sections)
      setContent(content)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [path])

  return Object.assign({}, 
    content && { content },
    sections && { sections }, 
    error && { error })
}

export const useText = (url: string) => {
    const [text, setText] = useState("")

    useEffect(() => {
      (async function() {
        try {
            const response = await fetch(url)
            const text = await response.text()
            setText(text)
        } catch {
        }
    })()
    }, []);

    return text
}
