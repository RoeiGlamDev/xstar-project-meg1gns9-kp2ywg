import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { useSpring } from '@react-spring/web';

const FloatingElement = () => {
  const props = useSpring({
    from: { position: [0, 0, 0] },
    to: { position: [0, 0.5, 0] },
    config: { tension: 100, friction: 10 },
    loop: { reverse: true },
  });

  return (
    <a.mesh position={props.position}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="purple" />
    </a.mesh>
  );
};

const FloatingElements = () => {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
    </Canvas>
  );
};

const CleanSSR = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-purple-600">CleanSSR</h1>
        <p className="text-lg text-gray-600">Innovative Cleaning Solutions for a Modern World</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-purple-600 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-xl">
          At CleanSSR, we leverage cutting-edge technology to provide superior cleaning services. Our team
          utilizes the latest tools and methodologies to ensure a spotless environment, whether it's for your
          home or business.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-purple-600 mb-4">Customer Reviews</h2>
        <div className="flex flex-col space-y-4">
          <blockquote className="border-l-4 border-purple-600 pl-4 italic">
            "CleanSSR transformed our office! The attention to detail is unmatched." - Alex T.
          </blockquote>
          <blockquote className="border-l-4 border-purple-600 pl-4 italic">
            "I love coming home to a house that feels brand new, thanks to CleanSSR!" - Sarah M.
          </blockquote>
          <blockquote className="border-l-4 border-purple-600 pl-4 italic">
            "Professional, efficient, and reliable. Highly recommend CleanSSR!" - James R.
          </blockquote>
        </div>
      </section>

      <footer className="text-center">
        <p className="text-gray-600">&copy; 2023 CleanSSR. All rights reserved.</p>
      </footer>

      <div className="absolute top-0 left-0 w-full h-full">
        <FloatingElements />
      </div>
    </div>
  );
};

export default CleanSSR;