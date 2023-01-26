import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Creator from '../../components/Creator'
import { useEffect, useState} from 'react'
import React from 'react'
import VideoBackground from 'react-video-background'




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
  
function home() {
  return (
    <VideoBackground
      videoSrc="https://youtu.be/-MKapbz0GIo"
      overlayColor="rgba(0, 0, 0, 0.5)"
    >
    </VideoBackground>
  );
}

export default home
}
