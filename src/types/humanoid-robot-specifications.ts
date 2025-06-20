
export interface HumanoidRobotSpecifications {
  dimensions: {
    formFactor: {
      standingHeight: string;
      weight: string;
      compactDimensions: string;
      armSpan: string;
    };
    anthropomorphic: {
      thighLength: string;
      armLength: string;
      proportions: string;
    };
  };
  mobility: {
    movement: {
      walkingSpeed: string;
      runningSpeed?: string;
      movementModes: string;
    };
    navigation: {
      stairClimbing: string;
      obstacleHeight: string;
      terrainAdaptation: string;
      balanceSystems: string;
    };
  };
  degreesOfFreedom: {
    overall: {
      totalDOF: string;
      bodyDistribution: string;
    };
    limbs: {
      legDOF: string;
      armDOF: string;
      waistTorsoDOF: string;
      headNeckDOF: string;
    };
    handDexterity: {
      handDOF: string;
      tactileFeedback: string;
    };
  };
  power: {
    actuators: {
      jointTorque: string;
      peakTorque: string;
      actuatorType: string;
    };
    loadCapacity: {
      operatingPayload: string;
      armLoad: string;
      manipulationRating: string;
    };
    battery: {
      capacity: string;
      runtime: string;
      chargingSpecs: string;
      consumptionProfile: string;
    };
  };
  sensing: {
    vision: {
      cameras: string;
      lidar3D: string;
      perception360: string;
    };
    audio: {
      microphoneArray: string;
      audioSystems: string;
      speechRecognition: string;
    };
    environmental: {
      imuBalance: string;
      tactileForce: string;
      temperatureMonitoring: string;
    };
  };
  computing: {
    power: {
      onboardComputing: string;
      aiComputing: string;
      memoryStorage: string;
    };
    aiSystems: {
      multimodalAI: string;
      realtimeProcessing: string;
      learningAdaptation: string;
    };
  };
  connectivity: {
    communication: {
      wireless: string;
      remoteControl: string;
      fleetIntegration: string;
    };
    control: {
      voiceCommands: string;
      vrControl: string;
      teachingByDemonstration: string;
      autonomousModes: string;
    };
  };
  safety: {
    systems: {
      multilevelSecurity: string;
      emergencyProtocols: string;
      protectionLevel: string;
    };
    environment: {
      operatingConditions: string;
      indoorOutdoor: string;
      weatherResistance: string;
    };
  };
  software: {
    development: {
      sdkSupport: string;
      frameworkCompatibility: string;
      simulationIntegration: string;
    };
    applications: {
      serviceInteraction: string;
      industrialSupport: string;
      researchEducation: string;
    };
  };
}
