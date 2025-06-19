
// 3D Scanner Specifications Types
export interface ScannerSpecifications {
  accuracy: AccuracySpecs;
  speed: SpeedSpecs;
  captureRange: CaptureRangeSpecs;
  technology: TechnologySpecs;
  compatibility: CompatibilitySpecs;
  software: SoftwareSpecs;
  hardware: HardwareSpecs;
  advanced: AdvancedSpecs;
}

export interface AccuracySpecs {
  pointAccuracy: {
    range: string;
    typical: string;
    measurement: string;
  };
  volumetricAccuracy: {
    baseAccuracy: string;
    distanceCoefficient: string;
    formula: string;
  };
  resolution: {
    measurementResolution: string;
    pointDistance: string;
    outputMeshResolution: string;
  };
}

export interface SpeedSpecs {
  frameRate: {
    fps: string;
    range: string;
    conditions: string;
  };
  measurementSpeed: {
    pointsPerSecond: string;
    measurementsPerSecond: string;
    dataAcquisition: string;
  };
  scanningModes: {
    fastMode: string;
    precisionMode: string;
    standardMode: string;
  };
}

export interface CaptureRangeSpecs {
  fieldOfView: {
    singleScan: string;
    width: string;
    height: string;
  };
  depthOfField: {
    range: string;
    optimal: string;
    minimum: string;
  };
  workingDistance: {
    range: string;
    optimal: string;
    objectDistance: string;
  };
  objectSize: {
    minimum: string;
    maximum: string;
    recommended: string;
  };
}

export interface TechnologySpecs {
  scanningTechnology: {
    type: string;
    implementation: string;
    lightSource: string;
  };
  hardware: {
    cameras: string;
    projectors: string;
    laserClass?: string;
  };
  tracking: {
    alignmentMethods: string[];
    trackingMode: string;
    markerSupport: string;
  };
}

export interface CompatibilitySpecs {
  objectSize: {
    recommendedRange: string;
    typicalCharacteristics: string;
    maximumSize: string;
  };
  surfaceRequirements: {
    compatibleSurfaces: string[];
    surfaceTreatment: string;
    limitations: string[];
  };
  materials: {
    supported: string[];
    challenging: string[];
    preprocessing: string;
  };
}

export interface SoftwareSpecs {
  outputFormats: {
    fileFormats: string[];
    meshFormats: string[];
    cloudFormats: string[];
  };
  systemCompatibility: {
    operatingSystems: string[];
    mobileSupport: string;
    cloudProcessing: string;
  };
  requirements: {
    minimumSpecs: {
      ram: string;
      processor: string;
      graphics: string;
      storage: string;
    };
    recommendedSpecs: {
      ram: string;
      processor: string;
      graphics: string;
      storage: string;
    };
  };
}

export interface HardwareSpecs {
  physicalSpecs: {
    scannerWeight: string;
    scannerDimensions: string;
    portability: string;
  };
  connectivity: {
    cableSpecs: string;
    connectionType: string;
    wirelessOptions?: string;
  };
  classification: {
    type: "handheld" | "desktop" | "stationary" | "hybrid";
    mobility: string;
    setupTime: string;
  };
}

export interface AdvancedSpecs {
  operatingConditions: {
    indoorOutdoor: string;
    lightingRequirements: string;
    environmentalLimitations: string[];
  };
  scanningModes: {
    availableModes: string[];
    textureCapture: string;
    colorCapture: string;
    realTimeProcessing: string;
  };
  qualityControl: {
    autoCalibration: string;
    errorDetection: string;
    qualityAssessment: string;
    softwareTools: string[];
  };
}
