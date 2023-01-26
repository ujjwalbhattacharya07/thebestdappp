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
return (
<div className="bg-cyan-900">
<Head>
<style>
{ body { background-image: url(https://www.youtube.com/watch?v=-MKapbz0GIo&list=PPSV) background-size: cover; } }
</style>
</Head>
<Header />
<Creator />
<Footer />
</div>
)
}
export default home
