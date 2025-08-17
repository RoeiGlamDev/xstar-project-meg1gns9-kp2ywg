import { useEffect, useRef } from 'react';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { ParticleSystem } from 'three/examples/jsm/particles/ParticleSystem';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    const particlesRef = React.useRef<ParticleSystem | null>(null);

    useEffect(() => {
        if (particlesRef.current) {
            // Initialize particle system
            const particleSystem = new ParticleSystem();
            particlesRef.current.add(particleSystem);
        }
    }, []);

    useFrame(() => {
        if (particlesRef.current) {
            // Update particles each frame
            particlesRef.current.update();
        }
    });

    return (
        <div className="absolute inset-0">
            <Canvas>
                {/ Particle system component goes here /}
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
            </Canvas>
        </div>
    );
};

export default ParticleBackground;