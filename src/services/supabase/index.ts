
export { productService } from './products';
export { specificationService } from './specifications';

// Re-export database types
export type { 
  DatabaseProduct,
} from './products';

export type {
  DatabasePrinterSpecs,
  DatabaseScannerSpecs,
  DatabaseRoboticDogSpecs,
  DatabaseHumanoidRobotSpecs,
  DatabaseRoboticArmSpecs,
  DatabaseLaserCutterSpecs,
} from './specifications';
