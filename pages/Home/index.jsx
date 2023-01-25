import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Creator from '../../components/Creator'
import { useEffect, useState} from 'react'




const home = () => {

  const [account, setAccount] = useState()

  useEffect(() => {

    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => setAccount(res[0]))
    } else {
      alert('install metamask extension!!')
    }


  })
function App() {
  return (
    <div style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")` 
    }}>
    </div>
  );
}
export default home
