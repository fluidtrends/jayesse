import React, { useCallback, useState, useEffect } from 'react'
import { useGitHubDocs } from '../../hooks'
import { useHistory, withRouter, useLocation } from "react-router-dom"
import { Layout, Skeleton, Menu } from 'antd'
import { Fade } from 'react-awesome-reveal'
import ReactMarkdown from 'react-markdown'
import { MenuItemProps } from '../../types/components'
import { SideMenu } from '.'
import highlightStyle from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import MediaQuery from 'react-responsive'

const CodeBlock: React.FC<{ language: string, value: string }> = props => {
    const { language, value } = props
    return (
        <SyntaxHighlighter language={language} style={highlightStyle}>
            {value}
        </SyntaxHighlighter>
    )
}

const { Content } = Layout

export const Document = withRouter((props: any) => {
  const { repo, branch, root, mount } = props
    
  const history = useHistory()
  const location = useLocation()
  const path = location.pathname.substring(mount.length + 1)

  const [selected, setSelected] = useState(location.pathname)
  const { sections, content } = useGitHubDocs(repo, root, branch, path)

  useEffect(() => {
    if (!sections || !selected) return
    const found: MenuItemProps | undefined = findItem(selected, sections)
    found && found.path && history.push(found.path)
  }, [selected])

  const findItem = (query: string, items: MenuItemProps[]): MenuItemProps | undefined => {      
    let found = items.find(item => (item as any).path === query)
    if (found) return found

    const children: (MenuItemProps | undefined)[] = items.map(item => item.items && findItem(query, item.items)).filter(i => i)
    found = children.find(item => (item as any).path === query)

    return found
  }

  const onSelect = useCallback((select: string) => {
    setSelected(select)
  }, [])

  const renderers = { code: CodeBlock }
  const plugins = [require('remark-shortcodes')]

  return (
    <Layout style={{ width: "100%" }}>
        <MediaQuery minWidth={768}>
            { sections ? <SideMenu {...props} selected={selected} items={sections} onSelect={onSelect}/> 
                              : <Skeleton loading={true} active paragraph={{ rows: 10 }} title />
            }
        </MediaQuery>
        <Layout style={{ 
                width: "100%", 
                backgroundColor: "#ffffff",
                borderLeft: "1px solid #EEEEEE",
            }}>
            <Content style={{ padding: 20, boxShadow: "2px 2px #333333" }}>
                <Fade style={{ width: "100%" }}>
                    <Content style={{ alignItems: 'flex-start' }}>
                    { content ? <ReactMarkdown source={content} renderers={renderers} plugins={plugins} />
                                 : <Skeleton loading={true} active paragraph={{ rows: 10 }} title />
                    }
                    </Content>      
                </Fade>        
            </Content>
        </Layout>
    </Layout>
    )
})

