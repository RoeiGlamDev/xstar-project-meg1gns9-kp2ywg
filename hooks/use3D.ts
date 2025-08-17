import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for managing 3D interactions for CleanSSR.
 * This hook utilizes three.js to create interactive 3D elements
 * that enhance the user experience on the CleanSSR website.
 * 
 * @returns {object} - Contains functions to initialize and update 3D scene.
 */
const use3D = () => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  /
   * Initializes the 3D scene.
   */
  const initializeScene = () => {
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(rendererRef.current.domElement);

    // Set background color to white
    sceneRef.current.background = new THREE.Color(0xffffff);
    
    // Add lights
    const light = new THREE.AmbientLight(0x404040); // soft white light
    sceneRef.current.add(light);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    sceneRef.current.add(directionalLight);
  };

  /
   * Creates a simple 3D object (cube) for demonstration.
   */
  const create3DObject = () => {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x800080 }); // Purple
    const cube = new THREE.Mesh(geometry, material);
    sceneRef.current?.add(cube);
  };

  /
   * Animation loop to render the scene.
   */
  const animate = () => {
    requestAnimationFrame(animate);
    if (sceneRef.current && cameraRef.current && rendererRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  /
   * Handles window resize events.
   */
  const handleResize = () => {
    if (cameraRef.current && rendererRef.current) {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
  };

  useEffect(() => {
    initializeScene();
    create3DObject();
    animate();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return {
    scene: sceneRef.current,
    camera: cameraRef.current,
    renderer: rendererRef.current,
  };
};

export default use3D;