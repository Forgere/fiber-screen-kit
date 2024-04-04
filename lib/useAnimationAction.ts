import {useEffect, useRef} from 'react'
import {Vector3} from 'three'
import {gsap} from 'gsap'

const useAnimationAction = (ins, animations, action) => {
    
    console.log(ins, action)
    
    const $tl = useRef(gsap.timeline({ repeat: -1, paused: true, immediateRender: false}));
    
    useEffect(() => {
        if (!ins) return

        tl.clear()

        animations.forEach((animation) => {

            const originVector = new Vector3(...animation.from)
            const toVector = new Vector3(...animation.to)
            const duration = animation.duration
            const ease = animation.ease || 'power1.inOut'

            if (ins && ins[animation.property]) {
                tl.fromTo(meshRef.current[animation.property], originVector, {
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
        
        console.log(1)
        tl.play()

        return () => {
          tl.kill()
        }
    }, [ins])
 }

export default useAnimationAction