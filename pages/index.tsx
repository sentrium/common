import type { NextPage } from 'next'
import Button from '../components/Button'

const Home: NextPage = () => {
  return <>
    <h1> Hello</h1>

    <Button
      href='/'
      text='login'
      className=''
    />
  </>

}
export default Home
