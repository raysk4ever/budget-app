"use client"

import useAlerts from '@/hooks/use-alerts'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { BiCheck, BiCheckShield, BiHappy, BiHappyBeaming, BiSolidCheckShield } from 'react-icons/bi'
import { FaDiagramSuccessor } from 'react-icons/fa6'
import { GiLoveHowl, GiLoveLetter } from 'react-icons/gi'

const alertVarient = {
    hide: {
        x: 270
    },
    show: {
        x: 0
    }
}

const Alerts = () => {
    const {show, setShow} = useAlerts()
    // const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (show) {
            // audioRef.current?.play()
            setTimeout(() => {
                setShow('')
                // if (audioRef.current) {
                //     audioRef.current.pause()
                //     audioRef.current.currentTime = 0
                // }
            }, 1000)
        }
    }, [show, setShow])

    return (
        <>
            {/* <audio ref={audioRef} src="/level-up.mp3"></audio> */}
            <motion.div initial='hide' animate={show ? 'show' : 'hide'} variants={alertVarient}  className='alert-container'>
                <BiHappyBeaming />
                <p>{show}</p>
            </motion.div>
        </>
    );
}

export default Alerts;
