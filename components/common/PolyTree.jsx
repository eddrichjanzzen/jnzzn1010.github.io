/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 poly_tree_draco.gltf
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function PolyTree(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    '/assets/3d-assets/poly_tree_draco.gltf'
  );
  useFrame((_state, delta) => (group.current.rotation.y += delta));

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Tree_lp_11"
          geometry={nodes.Tree_lp_11.geometry}
          material={materials.Material}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -2, 0]}
          scale={0.0016}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/3d-assets/poly_tree_draco.gltf');