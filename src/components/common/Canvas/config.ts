export const CANVAS_CONFIG = {
  camera: {
    position: [0, 0, 10] as const,
    fov: 50,
  },
  dpr: [1, 2] as [number, number],
  gl: {
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance' as const,
    preserveDrawingBuffer: false,
  },
} as const;
