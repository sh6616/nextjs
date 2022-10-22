import Link from "next/link";
import { useRouter } from "next/router"

export default () => {
  let arr = ['1', '2', '3']
  let name = ['4', '5', '6']
  const router = useRouter();
  const fn = () => {
    router.push()
  }
  return (
    <div>
      <h2>list使用link列表页</h2>
      {
        arr.map((item, index) => (
          <Link href='/list/[id]' key={index} as={`/list/${index}`}>
            <a>新闻{index}</a>
          </Link>
        ))
      }
      <h2>传递多个参数</h2>
      <Link href={{pathname:'/list/[...name]',query:{name}}}>
        <a>传递多个参数{name}</a>
      </Link>
    </div>
  )
}