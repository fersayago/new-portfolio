import { GetServerSidePropsContext } from 'next';
import { services } from '../data'

const index = (props) => {
  console.log(services);
  
  return (
    <div>
      <h1>Bye bye world</h1>
    </div>
  )
}

export default index

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  // calculation

  const res = await fetch('http://localhost:3000/api/services')
  const data = res.json()
  console.log("SERVER", services);
  

  return {
    props:{
    }
  }
}
