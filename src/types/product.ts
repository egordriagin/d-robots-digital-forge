

import { PrinterSpecifications } from "./printer-specifications";
import { ScannerSpecifications } from "./scanner-specifications";
import { RoboticDogSpecifications } from "./robotic-dog-specifications";
import { HumanoidRobotSpecifications } from "./humanoid-robot-specifications";
import { RoboticArmSpecifications } from "./robotic-arm-specifications";
import { LaserCutterSpecifications } from "./laser-cutter-specifications";

export type StockStatus = "in-stock" | "out-of-stock" | "backorder" | "discontinued" | "pre-order";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  pricing: {
    base: string;
    withAMS?: string;
    withAccessories?: string;
  };
  leadTime: string;
  stockStatus: StockStatus;
  rating: number;
  reviewCount: number;
  features: string[];
  shipping: {
    cost: string;
    freeThreshold: string;
  };
  demoVideo: string;
  reviews: Array<{
    id: number;
    author: string;
    rating: number;
    date: string;
    comment: string;
  }>;
  popular?: boolean;
  type?: string;
  power?: string;
  printerSpecifications?: PrinterSpecifications;
  scannerSpecifications?: ScannerSpecifications;
  roboticDogSpecifications?: RoboticDogSpecifications;
  humanoidRobotSpecifications?: HumanoidRobotSpecifications;
  roboticArmSpecifications?: RoboticArmSpecifications;
  laserCutterSpecifications?: LaserCutterSpecifications;
}

