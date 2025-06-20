
export interface RoboticArmSpecifications {
  capacity: {
    payload: {
      maxPayload: string;
      maxReach: string;
      nominalPayload: string;
      momentInertia: string;
    };
    accuracy: {
      repeatability: string;
      positioningAccuracy: string;
      pathAccuracy: string;
      absoluteAccuracy: string;
    };
    speed: {
      maxToolSpeed: string;
      jointAngularSpeed: string;
      acceleration: string;
      cycleTime: string;
    };
  };
  mechanical: {
    degreesOfFreedom: {
      axesCount: string;
      jointRange: string;
      infiniteRotation: string;
    };
    physical: {
      manipulatorWeight: string;
      baseDimensions: string;
      mountingOptions: string;
      constructionMaterial: string;
    };
  };
  control: {
    programming: {
      graphicalEnvironments: string;
      teachByDemonstration: string;
      programmingLanguages: string;
      dragDropInterface: string;
    };
    methods: {
      pcSoftware: string;
      mobileApp: string;
      voiceControl: string;
      gestureVision: string;
    };
  };
  connectivity: {
    communication: {
      ethernet: string;
      usb: string;
      wireless: string;
      endEffectorComm: string;
    };
    io: {
      digitalIO: string;
      analogIO: string;
      toolConnectorIO: string;
      endEffectorProtocols: string;
    };
  };
  power: {
    requirements: {
      inputVoltage: string;
      powerConsumption: string;
      currentRequirements: string;
    };
    operating: {
      temperatureRange: string;
      humidity?: string;
      ipRating: string;
      cleanroomClass: string;
    };
  };
  safety: {
    functions: {
      collisionDetection: string;
      safetyBoundaries: string;
      emergencyStop: string;
      forceTorqueLimiting: string;
      selfCollisionPrevention: string;
    };
    collaborative: {
      advancedSafetyFeatures: string;
      forceSensing: string;
      speedSeparation: string;
      safeOperatingModes: string;
    };
  };
  software: {
    development: {
      simulation3D: string;
      autonomousProgramming: string;
      trajectoryRecording: string;
      cadCamIntegration: string;
    };
    applications: {
      endEffectorTypes: string;
      multiAxisMachining: string;
      pickPlaceOptimization: string;
      weldingAssembly: string;
    };
  };
}
