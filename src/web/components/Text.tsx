import React, { useCallback, useState, useEffect } from 'react'
import { useText } from '../../hooks'
import { Layout, Skeleton, Typography } from 'antd'
import ReactMarkdown from 'react-markdown'
import { ArticleProps } from '../../types/components'
import highlightStyle from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

const { Title, Paragraph } = Typography

const renderers = (styles: any) => ({
    code: (props: any) => (<SyntaxHighlighter language={props.language} style={highlightStyle}>
        { props.value }
    </SyntaxHighlighter>),
    heading: (props: any) => (<Title level={props.level} style={{
        textAlign: "center", 
        ...styles.layout,
        ...styles.heading
    }}>
        { props.children }
    </Title>),
    paragraph: (props: any) => (<Paragraph style={{
        textAlign: "justify",
        ...styles.layout,
        ...styles.paragraph
    }}>
        { props.children }
    </Paragraph>)
})

const { Content } = Layout

export const Text: React.FC<ArticleProps> = props => {
  const { source, assets } = props
  const text = useText(assets.text(source))

  const plugins = [require('remark-shortcodes')]

  const renderMarkdown = () => {
    if (!text) return (<Skeleton loading={true} active paragraph={{ rows: 10 }} title />)

    return <ReactMarkdown 
            source={text} 
            renderers={renderers(props)}
            plugins={plugins} />
  }
  return (
    <Layout style={{ 
            width: "100%", 
            alignItems: "center",
            justifyContent: "center",
        }}>
        <Content style={{
            color: props.theme.colors.text,
            padding: 40,
            ...props.layout || {},
        }}>
            { 
                renderMarkdown()
            }
        </Content>
    </Layout>
    )
}
