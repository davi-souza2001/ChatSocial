import Cookie from "js-cookie"

import TopBar from '../components/TopBar'
import ListMessages from '../components/ListMessages'
import MessageContent from '../components/MessageContent'

import useAuth from '../service/hook/useAuth'

import styles from '../styles/Principal.module.css'
import { useState } from "react"

export default function index() {

  


  return (
    <>
      <TopBar />
      <div className={styles.contentGeral}>
        <ListMessages />
        <MessageContent />
      </div>
    </>
  )
}