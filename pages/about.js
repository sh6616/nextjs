import Link from "next/link"
import React from "react"
import { withRouter } from "next/router";
const ReadLink = React.forwardRef((props, ref) => {
  return (
    <a href={props.href} ref={ref}>click me</a>
  )
})

const About = ({ router }) => {
  console.group(router.query)
  return <div>
    <h1>about</h1>
    {/* <h3 style={{height:'2000px'}}>index</h3> */}
    <Link href="/" passHref scroll={false}>
      {/* <button>index</button> */}
      <ReadLink></ReadLink>
    </Link>

    <button onClick={() => { router.push({ pathname: '/', query: { "name": "about to index" } }) }}>Router跳转about,对象传参</button>
  </div>
}

export default withRouter(About);