async function getInfo(){
  const res = await fetch("http://localhost:4000/")
  const resJson = await res.json()
  return resJson
}