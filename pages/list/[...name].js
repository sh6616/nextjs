import { useRouter } from "next/router"
export default () => {
  const router = useRouter();
  let name = router.query.name === undefined ? [7, 8, 9] : router.query.name
  return (
    <>
      {
        name.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))
      }
    </>
  )

}
