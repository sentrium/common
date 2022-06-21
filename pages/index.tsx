import type { NextPage } from 'next'
import Btn from '../components/Btn'

const Home: NextPage = () => {
  return <>
    <h1> Hello</h1>

    <Btn
      href='/'
      text='login'
      className=''
    />
  </>

}
export default Home
