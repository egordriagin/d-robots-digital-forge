
export interface RoboticArmSpecifications {
  loadCapacity: {
    payloadCapacity: {
      maxPayload: string;
      maxReach: string;
      nominalPayloadAtMaxReach: string;
      momentOfInertia: string;
    };
  };
  accuracy: {
    repeatability: string;
    positioningAccuracy: string;
    pathAccuracy: string;
    absoluteAccuracy: string;
  };
  speed: {
    maxToolSpeed: string;
    jointAngularVelocities: string;
    accelerationCharacteristics: string;
    cycleTimePerformance: string;
  };
  mechanical: {
    degreesOfFreedom: {
      axesJoints: string;
      jointRangeCharacteristics: string;
      continuousRotationCapabilities: string;
    };
    physicalCharacteristics: {
      manipulatorWeight: string;
      baseDimensions: string;
      mountingOptions: string;
      constructionMaterial: string;
    };
  };
  control: {
    programmingInterfaces: {
      graphicalProgramming: string;
      teachByHand: string;
      programmingLanguageSupport: string;
      dragDropInterface: string;
    };
    controlMethods: {
      pcControlSoftware: string;
      mobileAppControl: string;
      voiceControlCapabilities: string;
      gestureVisionControl: string;
    };
  };
  connectivity: {
    communicationProtocols: {
      ethernetConnectivity: string;
      usbConnectivity: string;
      wirelessOptions: string;
      endEffectorCommunication: string;
    };
    ioCapabilities: {
      digitalIO: string;
      analogIO: string;
      toolConnectorIO: string;
      endEffectorProtocols: string;
    };
  };
  power: {
    powerRequirements: {
      inputVoltageRange: string;
      powerConsumption: string;
      currentEfficiencyRatings: string;
    };
    operatingConditions: {
      temperatureRange: string;
      humidityCharacteristics: string;
      ipRating: string;
      cleanroomClassification: string;
    };
  };
  safety: {
    safetyFeatures: {
      collisionDetection: string;
      safetyBoundaries: string;
      emergencyStopFunctionality: string;
      forceTorqueLimiting: string;
      selfCollisionPrevention: string;
    };
    collaborativeFeatures: {
      advancedSafetyFeatures: string;
      forceSensingCapabilities: string;
      speedSeparationMonitoring: string;
      safeOperatingModes: string;
    };
  };
  software: {
    developmentEnvironment: {
      simulation3D: string;
      autonomousProgramming: string;
      pathRecordingPlayback: string;
      cadCamIntegration: string;
    };
    applicationSupport: {
      endEffectorCompatibility: string;
      multiAxisMachining: string;
      pickPlaceOptimization: string;
      weldingAssemblyApplications: string;
    };
  };
}
