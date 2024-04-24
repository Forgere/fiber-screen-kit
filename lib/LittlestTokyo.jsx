/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/LittlestTokyo.glb --transform 
Files: public/LittlestTokyo.glb [4.13MB] > /workspace/LittlestTokyo-transformed.glb [1.57MB] (62%)
Author: glenatron (https://sketchfab.com/glenatron)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
Title: Littlest Tokyo
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    props.url || "/LittlestTokyo-transformed.glb"
  );

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='OSG_Scene'>
        <group
          name='Object078'
          position={[76.075, 163.937, 118.597]}
          rotation={[-Math.PI / 3, 0, 0]}
          scale={3.099}
        >
          <group position={[-97.409, -7.128, -96.27]}>
            <mesh
              castShadow
              receiveShadow
              name='Object078_Plastic_Soft_0'
              geometry={nodes.Object078_Plastic_Soft_0.geometry}
              material={materials.Plastic_Soft}
            />
          </group>
        </group>
        <group
          name='body'
          position={[41.054, -198.364, 208.679]}
          rotation={[-Math.PI / 2, 0, 0.947]}
        >
          <group name='leaf' position={[-0.015, 1.307, 8.04]}>
            <group position={[0.015, -1.561, -6.223]}>
              <mesh
                castShadow
                receiveShadow
                name='leaf_normal_0'
                geometry={nodes.leaf_normal_0.geometry}
                material={materials.normal}
              />
            </group>
          </group>
          <group
            name='hand2'
            position={[2.127, -0.734, 5.063]}
            rotation={[0, Math.PI / 3, 0]}
          >
            <group position={[-2.127, 0.48, -3.246]}>
              <mesh
                castShadow
                receiveShadow
                name='hand2_normal_0'
                geometry={nodes.hand2_normal_0.geometry}
                material={materials.normal}
              />
            </group>
          </group>
          <group
            name='hand1'
            position={[-2.169, -0.734, 5.084]}
            rotation={[0, -Math.PI / 3, 0]}
          >
            <group position={[2.169, 0.48, -3.267]}>
              <mesh
                castShadow
                receiveShadow
                name='hand1_normal_0'
                geometry={nodes.hand1_normal_0.geometry}
                material={materials.normal}
              />
            </group>
          </group>
          <group name='foot2' position={[2.428, -0.923, 2.02]}>
            <group position={[-2.428, 0.669, -0.203]}>
              <mesh
                castShadow
                receiveShadow
                name='foot2_normal_0'
                geometry={nodes.foot2_normal_0.geometry}
                material={materials.normal}
              />
            </group>
          </group>
          <group name='foot1' position={[-2.491, -0.923, 1.978]}>
            <group position={[2.491, 0.669, -0.161]}>
              <mesh
                castShadow
                receiveShadow
                name='foot1_normal_0'
                geometry={nodes.foot1_normal_0.geometry}
                material={materials.normal}
              />
            </group>
          </group>
          <group position={[0, -0.254, 1.817]}>
            <mesh
              castShadow
              receiveShadow
              name='body_normal_0'
              geometry={nodes.body_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Object608'
          position={[-54.38, 114.483, -87.573]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.099}
        >
          <group position={[-55.32, -73.646, -80.314]}>
            <mesh
              castShadow
              receiveShadow
              name='Object608_metalmat_0'
              geometry={nodes.Object608_metalmat_0.geometry}
              material={materials.metalmat}
            />
            <mesh
              castShadow
              receiveShadow
              name='Object608_paintmat_0'
              geometry={nodes.Object608_paintmat_0.geometry}
              material={materials.paintmat}
            />
          </group>
        </group>

        <group
          name='wire7'
          position={[53.443, -91.07, 179.833]}
          rotation={[-1.534, 0, 0]}
        >
          <group position={[-138.488, 205.266, 96.473]}>
            <mesh
              castShadow
              receiveShadow
              name='wire7_normal_0'
              geometry={nodes.wire7_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Object675'
          position={[85.462, -196.519, -246.386]}
          rotation={[-Math.PI / 2, 0, 3.113]}
        >
          <group name='Object680' position={[-12.887, 0, 8.351]}>
            <group position={[12.887, 0, 68.079]}>
              <mesh
                castShadow
                receiveShadow
                name='Object680_metalmat_0'
                geometry={nodes.Object680_metalmat_0.geometry}
                material={materials.metalmat}
              />
            </group>
          </group>
          <group name='Object681' position={[14.29, 0, 8.351]}>
            <group position={[12.887, 0, 68.079]}>
              <mesh
                castShadow
                receiveShadow
                name='Object681_metalmat_0'
                geometry={nodes.Object681_metalmat_0.geometry}
                material={materials.metalmat}
              />
            </group>
          </group>
          <group position={[0, 0, 76.43]}>
            <mesh
              castShadow
              receiveShadow
              name='Object675_metalmat_0'
              geometry={nodes.Object675_metalmat_0.geometry}
              material={materials.metalmat}
            />
            <mesh
              castShadow
              receiveShadow
              name='Object675_paintmat_0'
              geometry={nodes.Object675_paintmat_0.geometry}
              material={materials.paintmat}
            />
            <mesh
              castShadow
              receiveShadow
              name='Object675_glassmat_0'
              geometry={nodes.Object675_glassmat_0.geometry}
              material={materials.glassmat}
            />
            <mesh
              castShadow
              receiveShadow
              name='Object675_outline_0'
              geometry={nodes.Object675_outline_0.geometry}
              material={materials.outline}
            />
          </group>
        </group>
        <group
          name='Object532'
          position={[-29.258, -38.731, -7.815]}
          rotation={[-Math.PI / 2, 0, -0.698]}
          scale={3.099}
        >
          <group
            position={[-17.707, -77.448, -30.882]}
            rotation={[0, 0, 0.698]}
          >
            <mesh
              castShadow
              receiveShadow
              name='Object532_normal_0'
              geometry={nodes.Object532_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Object689'
          position={[-245.525, -161.782, -259.308]}
          rotation={[-1.627, -0.067, -0.7]}
        >
          <group rotation={[0, 0, 0.698]}>
            <mesh
              castShadow
              receiveShadow
              name='Object689_metalmat_0'
              geometry={nodes.Object689_metalmat_0.geometry}
              material={materials.metalmat}
            />
          </group>
        </group>
        <group
          name='Plane001'
          position={[-101.44, 184.595, -141.828]}
          rotation={[-Math.PI / 2, 0, -0.14]}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane001_normal_0'
              geometry={nodes.Plane001_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Plane003'
          position={[-95.311, 184.595, -140.965]}
          rotation={[Math.PI / 2, 0, 0.14]}
          scale={-1}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane003_normal_0'
              geometry={nodes.Plane003_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Plane104'
          position={[-83.171, 184.595, -140.38]}
          rotation={[-Math.PI / 2, 0, 0.3]}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane104_normal_0'
              geometry={nodes.Plane104_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Plane103'
          position={[-77.258, 184.595, -142.209]}
          rotation={[Math.PI / 2, 0, -0.3]}
          scale={-1}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane103_normal_0'
              geometry={nodes.Plane103_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Plane105'
          position={[133.481, 48.269, -68.276]}
          rotation={[-Math.PI / 2, 0, -1.892]}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane105_normal_0'
              geometry={nodes.Plane105_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Plane106'
          position={[131.529, 48.269, -62.403]}
          rotation={[Math.PI / 2, 0, 1.892]}
          scale={-1}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane106_normal_0'
              geometry={nodes.Plane106_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Plane108'
          position={[148.082, 111.708, 190.16]}
          rotation={[-Math.PI / 2, 0, 2.969]}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane108_normal_0'
              geometry={nodes.Plane108_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Plane107'
          position={[141.985, 111.708, 189.096]}
          rotation={[Math.PI / 2, 0, -2.969]}
          scale={-1}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane107_normal_0'
              geometry={nodes.Plane107_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Plane109'
          position={[172.103, 108.396, 188.554]}
          rotation={[-Math.PI / 2, 0, 2.068]}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane109_normal_0'
              geometry={nodes.Plane109_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Plane110'
          position={[169.153, 108.396, 183.113]}
          rotation={[Math.PI / 2, 0, -2.068]}
          scale={-1}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane110_normal_0'
              geometry={nodes.Plane110_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Plane111'
          position={[38.825, 198.597, 68.564]}
          rotation={[1.571, 0, -0.135]}
          scale={-1}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane111_normal_0'
              geometry={nodes.Plane111_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Plane112'
          position={[32.692, 198.597, 69.394]}
          rotation={[-Math.PI / 2, 0, 0.135]}
        >
          <group position={[-0.965, -3.606, -2.09]}>
            <mesh
              castShadow
              receiveShadow
              name='Plane112_normal_0'
              geometry={nodes.Plane112_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Object704'
          position={[-134.881, -36.701, -123.583]}
          rotation={[-1.576, 0.01, -0.018]}
        >
          <group position={[49.835, -98.15, 42.104]}>
            <mesh
              castShadow
              receiveShadow
              name='Object704_Plastic_Soft_0'
              geometry={nodes.Object704_Plastic_Soft_0.geometry}
              material={materials.Plastic_Soft}
            />
            <mesh
              castShadow
              receiveShadow
              name='Object704_metalmat_0'
              geometry={nodes.Object704_metalmat_0.geometry}
              material={materials.metalmat}
            />
          </group>
        </group>
        <group
          name='wire1'
          position={[11.349, -53.562, -65.672]}
          rotation={[-1.748, -0.095, 0.141]}
        >
          <group
            position={[-101.137, -36.732, 53.01]}
            rotation={[0.189, 0, -0.143]}
          >
            <mesh
              castShadow
              receiveShadow
              name='wire1_Plastic_Soft_0'
              geometry={nodes.wire1_Plastic_Soft_0.geometry}
              material={materials.Plastic_Soft}
            />
          </group>
        </group>
        <group
          name='wire2'
          position={[51.826, -43.974, -45.541]}
          rotation={[-1.607, -0.035, -0.803]}
        >
          <group
            name='Object081'
            position={[3.654, -65.195, -24.493]}
            rotation={[0.043, 0.012, -2.868]}
            scale={3.099}
          >
            <group
              position={[-91.861, 2.868, -19.124]}
              rotation={[0, 0, -0.519]}
            >
              <mesh
                castShadow
                receiveShadow
                name='Object081_normal_0'
                geometry={nodes.Object081_normal_0.geometry}
                material={materials.normal}
              />
            </group>
          </group>
          <group
            name='Object332'
            position={[3.799, -102.162, -21.43]}
            rotation={[0.051, -0.078, -2.349]}
            scale={3.099}
          >
            <group position={[-78.668, -54.735, -19.124]}>
              <mesh
                castShadow
                receiveShadow
                name='Object332_normal_0'
                geometry={nodes.Object332_normal_0.geometry}
                material={materials.normal}
              />
            </group>
          </group>
          <group
            name='Object682'
            position={[0.542, -22.699, -18.803]}
            rotation={[0.076, -0.03, -1.641]}
            scale={3.099}
          >
            <group position={[-78.668, -54.735, -19.124]}>
              <mesh
                castShadow
                receiveShadow
                name='Object682_normal_0'
                geometry={nodes.Object682_normal_0.geometry}
                material={materials.normal}
              />
            </group>
          </group>
          <group position={[-80.707, -112.36, 49.377]} rotation={[0, 0, 0.802]}>
            <mesh
              castShadow
              receiveShadow
              name='wire2_Plastic_Soft_0'
              geometry={nodes.wire2_Plastic_Soft_0.geometry}
              material={materials.Plastic_Soft}
            />
          </group>
        </group>
        <group
          name='wire3'
          position={[-3.768, -84.443, -56.369]}
          rotation={[-Math.PI / 2, 0, 0.069]}
        >
          <group
            position={[-83.209, -25.286, 89.846]}
            rotation={[0, 0, -0.069]}
          >
            <mesh
              castShadow
              receiveShadow
              name='wire3_normal_0'
              geometry={nodes.wire3_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='wire4'
          position={[50.921, -99.013, -52.273]}
          rotation={[-1.559, 0.072, -0.166]}
        >
          <group
            position={[-129.692, -48.861, 104.416]}
            rotation={[0, 0, 0.165]}
          >
            <mesh
              castShadow
              receiveShadow
              name='wire4_normal_0'
              geometry={nodes.wire4_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='wire5'
          position={[77.672, -109.814, -59.703]}
          rotation={[-1.557, -0.049, 0.285]}
        >
          <group
            position={[-165.796, 12.777, 115.217]}
            rotation={[0, 0, -0.284]}
          >
            <mesh
              castShadow
              receiveShadow
              name='wire5_normal_0'
              geometry={nodes.wire5_normal_0.geometry}
              material={materials.normal}
            />
          </group>
        </group>
        <group
          name='Object706'
          position={[26.374, -164.473, 185.106]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group position={[-111.42, 210.54, 169.876]}>
            <mesh
              castShadow
              receiveShadow
              name='Object706_Material_#5518_0'
              geometry={nodes["Object706_Material_#5518_0"].geometry}
              material={materials.Material_5518}
            />
          </group>
        </group>
        <group
          name='Object707'
          position={[26.374, -163.141, 185.106]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group position={[-111.42, 210.54, 168.544]}>
            <mesh
              castShadow
              receiveShadow
              name='Object707_Material_#5518_0'
              geometry={nodes["Object707_Material_#5518_0"].geometry}
              material={materials.Material_5518}
            />
          </group>
        </group>
        <group
          name='Object708'
          position={[-121.509, 153.741, 54.209]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group position={[-111.42, 210.54, 169.876]}>
            <mesh
              castShadow
              receiveShadow
              name='Object708_Material_#5518_0'
              geometry={nodes["Object708_Material_#5518_0"].geometry}
              material={materials.Material_5518}
            />
          </group>
        </group>
        <group
          name='Object709'
          position={[-121.509, 155.073, 54.209]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group position={[-111.42, 210.54, 168.544]}>
            <mesh
              castShadow
              receiveShadow
              name='Object709_Material_#5518_0'
              geometry={nodes["Object709_Material_#5518_0"].geometry}
              material={materials.Material_5518}
            />
          </group>
        </group>
        <primitive object={nodes._rootJoint} />
        <mesh
          castShadow
          receiveShadow
          name='Object649_normal_0'
          geometry={nodes.Object649_normal_0.geometry}
          material={materials.normal}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object649_paintmat_0'
          geometry={nodes.Object649_paintmat_0.geometry}
          material={materials.paintmat}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object649_metalmat_0'
          geometry={nodes.Object649_metalmat_0.geometry}
          material={materials.metalmat}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object649_Plastic_Soft_0'
          geometry={nodes.Object649_Plastic_Soft_0.geometry}
          material={materials.Plastic_Soft}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object649_alpha_glass_0'
          geometry={nodes.Object649_alpha_glass_0.geometry}
          material={materials.alpha_glass}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object649_glassmat_0'
          geometry={nodes.Object649_glassmat_0.geometry}
          material={materials.glassmat}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object649_Material_#5511_0'
          geometry={nodes["Object649_Material_#5511_0"].geometry}
          material={materials.Material_5511}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object649_Material_#5512_0'
          geometry={nodes["Object649_Material_#5512_0"].geometry}
          material={materials.Material_5512}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object649_glass_transp_0'
          geometry={nodes.Object649_glass_transp_0.geometry}
          material={materials.glass_transp}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object649_interiors_0'
          geometry={nodes.Object649_interiors_0.geometry}
          material={materials.interiors}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object649_alpha_0'
          geometry={nodes.Object649_alpha_0.geometry}
          material={materials.alpha}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object674_outline_0'
          geometry={nodes.Object674_outline_0.geometry}
          material={materials.outline}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object705_Material_#5516_0'
          geometry={nodes["Object705_Material_#5516_0"].geometry}
          material={materials.Material_5516}
          position={[-85.046, 5.403, -25.433]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          name='Object619_alpha_0'
          geometry={nodes.Object619_alpha_0.geometry}
          material={materials.alpha_0}
          position={[-80.312, -138.966, 183.664]}
          rotation={[-1.891, 0.86, -1.371]}
          scale={0.792}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          name='Object224_normal_0'
          geometry={nodes.Object224_normal_0.geometry}
          material={materials.normal}
          skeleton={nodes.Object224_normal_0.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          name='Object224_metalmat_0'
          geometry={nodes.Object224_metalmat_0.geometry}
          material={materials.metalmat}
          skeleton={nodes.Object224_metalmat_0.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          name='Object688_normal_0'
          geometry={nodes.Object688_normal_0.geometry}
          material={materials.normal}
          skeleton={nodes.Object688_normal_0.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          name='Object687_normal_0'
          geometry={nodes.Object687_normal_0.geometry}
          material={materials.normal}
          skeleton={nodes.Object687_normal_0.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          name='Object697_normal_0'
          geometry={nodes.Object697_normal_0.geometry}
          material={materials.normal}
          skeleton={nodes.Object697_normal_0.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          name='Object698_normal_0'
          geometry={nodes.Object698_normal_0.geometry}
          material={materials.normal}
          skeleton={nodes.Object698_normal_0.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          name='Object699_normal_0'
          geometry={nodes.Object699_normal_0.geometry}
          material={materials.normal}
          skeleton={nodes.Object699_normal_0.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          name='Object700_normal_0'
          geometry={nodes.Object700_normal_0.geometry}
          material={materials.normal}
          skeleton={nodes.Object700_normal_0.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/LittlestTokyo-transformed.glb");
