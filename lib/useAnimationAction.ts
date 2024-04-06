import {useEffect, useRef} from 'react'
import {Mesh, Vector3} from 'three'
import {gsap} from 'gsap'
import { TAnimate, TAction } from './utils'

type TRef = {
    current: Mesh
}

const useAnimationAction = (insRef: TRef, animations: TAnimate[], action: TAction) => {
    const $tl = useRef(gsap.timeline({ repeat: -1, paused: true, immediateRender: false}))
    
    useEffect(() => {
        if (!insRef) return
        const ins = insRef.current
        const tl = $tl.current

        tl.clear()

        animations.forEach((animation) => {

            const originVector = new Vector3(...animation.from)
            const toVector = new Vector3(...animation.to)
            const duration = animation.duration
            const ease = animation.ease || 'power1.inOut'

            if (ins && ins[animation.property]) {
                tl.fromTo(ins[animation.property], originVector, {
                    ...toVector,
                    duration: duration,
                    ease: ease,
                    delay: animation.delay || 0,
                    immediateRender: false,
                    onStart: () => {
                        if (animation.onStart) {
                            animation.onStart(action)
                        }
                    },
                    onComplete: () => {
                        if (animation.onComplete) {
                            animation.onComplete(action)
                        }
                    }
                }, animation.start)
            }
        })
        
        tl.play()

        return () => {
            tl.kill()
        }
    }, [])
 }

export default useAnimationAction