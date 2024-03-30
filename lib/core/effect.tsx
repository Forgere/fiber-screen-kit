import { useThree } from "@react-three/fiber"
import { EffectComposer, Outline, N8AO, TiltShift2, ToneMapping } from "@react-three/postprocessing"


export function Effects() {
  const { size } = useThree()
  
//  useFrame((state, delta) => {
//    easing.damp3(state.camera.position, [state.pointer.x, 1 + state.pointer.y / 2, 8 + Math.atan(state.pointer.x * 2)], 0.3, delta)
//    state.camera.lookAt(state.camera.position.x * 0.9, 0, -4)
//  })

  return (
    <EffectComposer stencilBuffer enableNormalPass={false} autoClear={false} multisampling={4}>
      <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} />
      <Outline visibleEdgeColor={0xff2c00} hiddenEdgeColor={0x00000000} blur width={size.width * 1.25} edgeStrength={10} />
      <TiltShift2 samples={5} blur={0.1} />
      <ToneMapping />
    </EffectComposer>
  )
}
