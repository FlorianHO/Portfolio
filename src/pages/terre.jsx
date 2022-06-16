import Head from "next/head";
import { motion } from "framer-motion"; 
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Navigation from "../components/Navigation";

const Terre = () => {
  let Box = () => {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />
      </mesh>
    )
  }

  useEffect(() => {

  }, []);

  return (
    <motion.div>
      <Head>
        <meta name="description" content="Yes" />
        <title>Terre · Houdu Florian 😎</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://florianhoudu.fr/portfolio" />
      </Head>
      <header>
        <Navigation />
      </header>
   <div className="earth-container">
      <Canvas id="earth">
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
         <Box />
      </Canvas>
   </div>
    </motion.div>
  );
};

export default Terre;
