
export interface HumanoidRobotSpecifications {
  dimensions: {
    formFactor: {
      standingHeight: string;
      totalWeight: string;
      foldedDimensions: string;
      armSpan: string;
    };
    anthropomorphicMeasurements: {
      thighShinLength: string;
      totalArmLength: string;
      humanProportions: string;
    };
  };
  mobility: {
    speedCapabilities: {
      maxWalkingSpeed: string;
      runningCapabilities: string;
      movementModes: string;
    };
    terrainNavigation: {
      stairClimbing: string;
      obstacleHeight: string;
      terrainAdaptation: string;
      balanceRecovery: string;
    };
  };
  degreesOfFreedom: {
    totalDOF: {
      totalSystemDOF: string;
      bodySegmentDistribution: string;
    };
    limbDOF: {
      legDOF: string;
      armDOF: string;
      waistTorsoDOF: string;
      headNeckDOF: string;
    };
    handDexterity: {
      handDOF: string;
      fingertipSensors: string;
    };
  };
  power: {
    actuatorCharacteristics: {
      maxJointTorques: string;
      peakTorqueCapabilities: string;
      actuatorType: string;
    };
    loadCapacity: {
      maxOperatingPayload: string;
      maxArmLoad: string;
      manipulationStrength: string;
    };
    batteryPowerManagement: {
      batteryCapacity: string;
      operatingTime: string;
      chargingSpecs: string;
      powerConsumptionProfiles: string;
    };
  };
  sensors: {
    visionSystems: {
      cameraSpecs: string;
      lidarCapabilities: string;
      perception360: string;
    };
    audioCommunication: {
      microphoneArray: string;
      audioSystems: string;
      speechRecognitionAccuracy: string;
    };
    environmentalSensors: {
      imuBalanceSensors: string;
      tactileForceSensing: string;
      temperatureEnvironmentalMonitoring: string;
    };
  };
  computing: {
    computationalPower: {
      onboardComputing: string;
      aiComputingCapabilities: string;
      memoryStorage: string;
    };
    aiControlSystems: {
      multimodalAI: string;
      realtimeProcessing: string;
      learningAdaptation: string;
    };
  };
  connectivity: {
    communication: {
      wirelessConnectivity: string;
      remoteControlCapabilities: string;
      networkIntegration: string;
    };
    controlModes: {
      voiceCommands: string;
      vrRemoteControl: string;
      teachingByDemonstration: string;
      autonomousModes: string;
    };
  };
  safety: {
    safetySystems: {
      multilayerSafety: string;
      emergencyStopProtocols: string;
      protectionLevel: string;
    };
    operatingConditions: {
      temperatureHumidityRanges: string;
      indoorOutdoorCapabilities: string;
      weatherResistance: string;
    };
  };
  software: {
    developmentPlatform: {
      sdkDevelopmentTools: string;
      frameworkCompatibility: string;
      simulationIntegration: string;
    };
    applicationModes: {
      serviceInteraction: string;
      industrialProduction: string;
      researchEducational: string;
    };
  };
}
