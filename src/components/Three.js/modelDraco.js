import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Three.Js/Batman/modelDraco.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Color_24}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Color_26_56630_bump}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Decoration_3626d783}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.Decoration_3814d676}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Color_26}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Color_26}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Color_26}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Three.Js/Batman/modelDraco.gltf");
