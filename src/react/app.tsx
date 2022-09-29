import React from 'react'

type Prop = {
  name: String
}

const App = (props: Prop) => {
  return <div>{props.name} hi,react!</div>
}
export default App
