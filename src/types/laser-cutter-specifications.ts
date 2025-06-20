
export interface LaserCutterSpecifications {
  laser: {
    powerPerformance: {
      laserOutputPower: string;
      laserType: string;
      laserWavelength: string;
      laserSpotSize: string;
      laserTubeLifespan: string;
    };
    speedAccuracy: {
      maxEngravingSpeed: string;
      processingAccuracy: string;
      imageResolutionCapabilities: string;
      speedRangeCharacteristics: string;
    };
  };
  workingArea: {
    processingCapabilities: {
      workingAreaDimensions: string;
      tableSizeCharacteristics: string;
      maxWorkpieceHeight: string;
      maxCuttingThicknessByMaterial: string;
    };
    physicalCharacteristics: {
      machineDimensions: string;
      totalWeight: string;
      rotaryEngravingDiameter: string;
    };
  };
  vision: {
    cameraSystems: {
      cameraResolution: string;
      visionAccuracy: string;
      cameraPreviewArea: string;
      autofocusLidarCapabilities: string;
    };
    advancedFeatures: {
      curved3DEngravingCapabilities: string;
      autoPassthroughTechnology: string;
      electricLiftingPlatform: string;
    };
  };
  control: {
    userInterface: {
      touchPanelSpecs: string;
      controlMethods: string;
      displayLanguageOptions: string;
    };
    softwareCompatibility: {
      supportedSoftwarePlatforms: string;
      operatingSystemCompatibility: string;
      supportedFileFormats: string;
    };
  };
  connectivity: {
    connectionOptions: {
      wifiConnectivity: string;
      ethernetPort: string;
      usbConnectivity: string;
      mobileDeviceCompatibility: string;
    };
  };
  safety: {
    safetyFeatures: {
      safetyClassification: string;
      enclosedWorkspace: string;
      emergencyStopFunctionality: string;
      automaticLockingSystems: string;
      multipleWarningSystems: string;
    };
    operatingConditions: {
      operatingTemperatureRange: string;
      storageTemperatureCharacteristics: string;
      powerRequirements: string;
    };
  };
  cooling: {
    coolingSystems: {
      waterCoolingCapacity: string;
      builtInAirAssistCharacteristics: string;
      exhaustFanPerformance: string;
      smokeExtractionOptions: string;
    };
  };
  materials: {
    cuttingMaterials: {
      compatibleCuttingMaterials: string;
      maxCuttingDepthByMaterial: string;
    };
    engravingMaterials: {
      extendedEngravingMaterialsList: string;
      materialSpecificParameterRecommendations: string;
    };
  };
}
