import { useEffect } from 'react'

export default function Home({ book }) {

  useEffect(()=>{
      // Client-side request are mocked by `mocks/browser.js`.
      fetch('/reviews')
      .then((res) => res.json())
      .then((res)=>console.log("Hello", res))
  })
  return (
    <div>
      Welcome to Next.JS + Netlify + MSW
    </div>
  )
}
