

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router";
import Router from "next/router";

const Index = () => {
  const [count, setConunt] = useState(0);
  const RouterT = useRouter();
  return (
    <div>
      <h1>index</h1>
      {/* <h3 style={{height:'2000px'}}>index</h3> */}
      <Link href="/about" as="aboutaaaa" scroll={false}>
        <button>link跳转Home</button>
      </Link>

      <button onClick={() => { RouterT.push("/about") }}>useRouter跳转about</button>
      <button onClick={() => { Router.push("/about") }}>Router跳转about</button>

      <button onClick={() => { Router.push({ pathname: '/about', query: { "name": "index to about" } }) }}>Router跳转about,对象传参</button>
      <h3>{count}</h3>
      <button onClick={() => { setConunt(count + 1) }}>加1</button>

      <h3>动态路由</h3>
      <button onClick={() => { RouterT.push("/list") }}>动态路由</button>
      <h3>getInitialProps获取数据</h3>
      <button onClick={() => { RouterT.push({ pathname: '/getInitialProps', query: { "name": "getInitialProps" } }) }}>获取数据</button>
    </div >
  )
}

export default Index;