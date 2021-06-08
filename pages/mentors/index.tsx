import React from 'react'

import { Autocomplete, Pane, TextInput } from 'evergreen-ui'

import Container from '../../components/container'
import HomeNav from '../../components/homeNav'
import MentorPreview from '../../components/mentorPreview'
import { connectToDB } from '../../db'
import { getMentors } from '../../db/mentor'

export default function Mentors({ mentors }) {
  console.log(mentors)
  return (
    <Pane>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container>
          <Autocomplete
            title="Fruits"
            onChange={changedItem => console.log(changedItem)}
            items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}
          >
            {props => {
              const { getInputProps, getRef, inputValue } = props
              return (
                <TextInput
                  placeholder="Fruits"
                  value={inputValue}
                  ref={getRef}
                  {...getInputProps()}
                />
              )
            }}
          </Autocomplete>
        </Container>
        <Container>
          {mentors.map((mentor, i) => (
            <MentorPreview mentor={mentor} key={i} />
          ))}
        </Container>
      </main>
    </Pane>
  )
}

export async function getServerSideProps(ctx) {
  const { db } = await connectToDB()
  const mentors = await getMentors(db)

  console.log(mentors)

  return { props: { mentors: mentors.map((m) => ({ name: m.name, image: m.image })) } }
}
