
export interface ScannerSpecifications {
  accuracy: {
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
  };
  speed: {
    frameRate: string;
    measurementSpeed: string;
    dataCollectionSpeed: string;
  };
  captureRange: {
    singleScanRange: string;
    fieldOfView: string;
    depthOfField: string;
    workingDistance: string;
    objectSizeCapabilities: {
      minimum: string;
      maximum: string;
      recommended: string;
    };
  };
  technology: {
    scanningTechnology: {
      type: string;
      lightSourceCharacteristics: string;
      camerasAndProjectors: string;
    };
    trackingAndPositioning: {
      alignmentMethods: string;
      trackingCapabilities: string;
      markerSupport: string;
    };
  };
  compatibility: {
    sizeConstraints: {
      recommendedRange: string;
      typicalCharacteristics: string;
      maximumScannable: string;
    };
    surfaceRequirements: {
      compatibleSurfaces: string;
      processingRecommendations: string;
      limitations: string;
    };
  };
  software: {
    outputCompatibility: {
      supportedFileFormats: string;
      operatingSystems: string;
      mobileCompatibility: string;
    };
    systemRequirements: {
      minimumSpecs: string;
      recommendedSpecs: string;
      ramGpuCpuRequirements: string;
    };
  };
  hardware: {
    equipmentCharacteristics: {
      weightAndDimensions: string;
      cableAndConnectivity: string;
      portabilityClassification: string;
    };
    operatingConditions: {
      indoorOutdoorCapabilities: string;
      lightingRequirements: string;
      environmentalConstraints: string;
    };
  };
  advanced: {
    scanningModes: {
      multipleOptions: string;
      textureColorCapture: string;
      realtimeVsPostprocessing: string;
    };
    qualityControl: {
      autoCalibration: string;
      errorDetectionCorrection: string;
      qualityAssessmentTools: string;
    };
  };
}
