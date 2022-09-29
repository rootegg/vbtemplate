import React from 'react'

type Prop = {
  name: String
}

const App = (props: Prop) => {
  return <div>{props.name} hi1,react!</div>
}
export default App
