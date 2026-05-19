import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>((resolve, reject) => {
      try {
        let character: THREE.Object3D;
        loader.load(
          "/models/character.glb?v=2",
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                if (mesh.material) {
                  // Normalize into an array so we can handle multi-materials safely
                  const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
                  
                  materials.forEach((mat: any, idx: number) => {
                    if (mat && (mat.type === "MeshPhysicalMaterial" || mat.isMeshPhysicalMaterial)) {
                      const prevMaterial = mat;
                      const optimizedMaterial = new THREE.MeshStandardMaterial({
                        name: prevMaterial.name,
                        map: prevMaterial.map,
                        roughness: prevMaterial.roughness ?? 0.5,
                        metalness: prevMaterial.metalness ?? 0.0,
                        color: prevMaterial.color,
                        normalMap: prevMaterial.normalMap,
                        aoMap: prevMaterial.aoMap,
                        roughnessMap: prevMaterial.roughnessMap,
                        metalnessMap: prevMaterial.metalnessMap,
                        emissive: prevMaterial.emissive,
                        emissiveMap: prevMaterial.emissiveMap,
                        emissiveIntensity: prevMaterial.emissiveIntensity,
                        transparent: prevMaterial.transparent,
                        opacity: prevMaterial.opacity,
                        side: prevMaterial.side,
                        alphaTest: prevMaterial.alphaTest,
                      });

                      // Reassign back to the mesh safely
                      if (Array.isArray(mesh.material)) {
                        mesh.material[idx] = optimizedMaterial;
                      } else {
                        mesh.material = optimizedMaterial;
                      }
                      
                      prevMaterial.dispose(); // Free original VRAM instantly
                    }
                  });
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            const footR = character.getObjectByName("footR");
            if (footR) footR.position.y = 3.36;
            const footL = character.getObjectByName("footL");
            if (footL) footL.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
