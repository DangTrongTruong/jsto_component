import React from 'react'
import JButton from '../component/Button/JButton'
const ButtonPage = () => {
  return (
    <>
      <div>Button page</div>
      <JButton text="このアカウントを停止する" className='no-icon button button--32A5F7 me-2' actionClick={() => (alert('check'))} />
      <JButton icon="https://www.svgrepo.com/show/75701/lock.svg" className='has-icon button button--494A52 me-2' text="ssssa" />
    </>
  )
}

export default ButtonPage