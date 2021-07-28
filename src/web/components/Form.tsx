import React from 'react'
import { Layout, Button, } from 'antd'
import { SlideProps, SlideSetProps } from '../../types/components'
import { Text } from '../components'
import { useHistory } from "react-router-dom"
import Wufoo from 'react-wufoo-embed'

const { Content } = Layout

export const Form: React.FC<SlideSetProps> = props => {
  const { username, hash } = props 

  return (<div style={{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#ffffff",
        flexDirection: "column"
    }}>
          <Wufoo
            width="90vw"
            userName={username}
            formHash={hash}
        />
    </div>)
  }


