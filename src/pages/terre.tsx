import Head from "next/head";
import { motion } from "framer-motion"; 
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Navigation from "../components/Navigation";
import Batman from "../components/Three.js/modelDraco"

const Terre = () => {
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
      <Canvas>
        <OrbitControls autoRotate={true} />
        <Stars />
        <ambientLight intensity={1} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Batman />
      </Canvas>
   </div>
    </motion.div>
  );
};

export default Terre;
