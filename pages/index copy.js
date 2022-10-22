


import { withRouter } from "next/router";


const Index = ({ router }) => {
  return (
    <div>
      <h1>index</h1>

      <button onClick={() => { router.push("/about") }}>withRouter跳转about</button>

    </div>
  )
}

export default withRouter(Index)