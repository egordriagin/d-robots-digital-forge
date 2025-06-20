
export interface LaserCutterSpecifications {
  laser: {
    power: {
      outputPower: string;
      laserType: string;
      wavelength: string;
      spotSize: string;
      tubeLifetime: string;
    };
    performance: {
      maxEngravingSpeed: string;
      processingAccuracy: string;
      imageResolution: string;
      speedRange: string;
    };
  };
  workArea: {
    processing: {
      workAreaSize: string;
      tableSize: string;
      maxWorkpieceHeight: string;
      maxCuttingThickness: string;
    };
    physical: {
      machineDimensions: string;
      totalWeight: string;
      rotaryEngravingDiameter: string;
    };
  };
  vision: {
    cameras: {
      cameraResolution: string;
      visionAccuracy: string;
      previewArea: string;
      autofocusLidar: string;
    };
    advanced: {
      curved3DEngraving: string;
      autoPassthrough: string;
      electricLifting: string;
    };
  };
  control: {
    interface: {
      touchPanelSpecs: string;
      controlMethods: string;
      displayLanguages: string;
    };
    software: {
      supportedPlatforms: string;
      osCompatibility: string;
      supportedFormats: string;
    };
  };
  connectivity: {
    options: {
      wifiCapabilities: string;
      ethernetPort: string;
      usbConnections: string;
      mobileCompatibility: string;
    };
  };
  safety: {
    features: {
      safetyClassification: string;
      enclosedWorkspace: string;
      emergencyStop: string;
      automaticLocks: string;
      warningSystems: string;
    };
    operating: {
      operatingTemperature: string;
      storageTemperature: string;
      powerRequirements: string;
    };
  };
  cooling: {
    system: {
      coolingCapacity: string;
      airAssist: string;
      exhaustFan: string;
      smokeFiltering: string;
    };
  };
  materials: {
    cutting: {
      compatibleCuttingMaterials: string;
      cuttingDepthByMaterial: string;
    };
    engraving: {
      engravingMaterials: string;
      materialParameters: string;
    };
  };
}
