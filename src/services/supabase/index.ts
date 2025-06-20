
export { productService } from './products';
export { specificationService } from './specifications';

// Re-export database types (temporary placeholders during Phase 1)
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
