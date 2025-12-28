import React from 'react'
import { Button } from '../ui/button'
import { Check, X } from 'lucide-react'

const ReplaceMobile = ({setShowEffectCard}) => {

  const cancel = ()=> {
    setShowEffectCard(false)
  }
  return (
    <div>
      <section className='flex items-center justify-center'>
        <p className='text-neutral-400 dark:text-neutral-500'>this feature is tempraly unavailable</p>
      </section>
      
      <section className='flex flex-row justify-between items-center mt-4'>
        <Button variant="outline" onClick={cancel}><X /></Button>
        <div>Replace Object</div>
        <Button variant="outline" onClick={() => { setShowEffectCard(false) }}><Check /></Button>
      </section>
    </div>
  )
}

export default ReplaceMobile