// app/page.tsx
import { client } from './client'

export async function getStaticProps() {
  const staff = await client.fetch('*[_type == "staff"]')

  return {
    props: {
      staff,
    },
  }
}