import React, { FC } from 'react'

import { Avatar, Heading, majorScale, Pane } from 'evergreen-ui'

const MentorPreview: FC<{ mentor: { name: string; image: string }; key: string }> = ({ mentor, key }) => {
  return (
    <Pane
      key={key}
      elevation={0}
      float="left"
      backgroundColor="white"
      width={200}
      height={220}
      marginTop={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding={majorScale(2)}
      marginRight={majorScale(2)}
    >
      <Pane
        elevation={1}
        background="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="100%"
      >
        <Avatar src={mentor.image} size={48} cursor="pointer" />
      </Pane>
      <Pane flex={1} alignItems="center" display="flex" marginTop={14}>
        <Heading size={200}>{mentor.name}</Heading>
      </Pane>
      <Pane flex={1} alignItems="center" display="flex" elevation={1} marginTop={14} padding={2}>
        <Heading size={200}>Programming</Heading>
      </Pane>
      <Pane flex={1} alignItems="center" display="flex" marginTop={14}>
        <Heading size={200}>Typescript, JavaScript</Heading>
      </Pane>

      <Pane flex={2} alignItems="left" display="flex" marginTop={24}>
        <Pane flex={1} alignItems="left" display="flex" paddingRight={12}>
          <Heading size={200}>Ranking</Heading>
        </Pane>
        <Pane flex={1} alignItems="left" display="flex" paddingLeft={12}>
          <Heading size={200}>9.87</Heading>
        </Pane>
      </Pane>

      <Pane flex={2} alignItems="left" display="flex">
        <Pane flex={1} alignItems="left" display="flex" paddingRight={12}>
          <Heading size={200}>Students</Heading>
        </Pane>
        <Pane flex={1} alignItems="left" display="flex" paddingLeft={12}>
          <Heading size={200}>147</Heading>
        </Pane>
      </Pane>
    </Pane>
  )
}
export default MentorPreview
