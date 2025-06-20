
export interface RoboticDogSpecifications {
  dimensions: {
    formFactor: {
      workingDimensions: string;
      compactDimensions: string;
      totalWeight: string;
      groundClearance: string;
    };
    loadCapacity: {
      staticPayload: string;
      movingPayload: string;
      armPayload?: string;
    };
  };
  mobility: {
    speedMovement: {
      maxSpeed: string;
      typicalRange: string;
      movementModes: string;
    };
    terrainCapabilities: {
      maxGradient: string;
      obstacleHeight: string;
      stairClimbing: string;
      surfaceCompatibility: string;
    };
    environment: {
      temperatureRange: string;
      humidity: string;
      weatherProtection: string;
    };
  };
  power: {
    battery: {
      capacity: string;
      type: string;
      runtime: string;
      hotSwap: string;
    };
    consumption: {
      average: string;
      peak: string;
      chargingSpecs: string;
    };
  };
  control: {
    degreesOfFreedom: {
      totalJoints: string;
      torqueSpecs: string;
      movementRange: string;
    };
    sensing: {
      cameras: string;
      lidar: string;
      imuSensors: string;
      sensorIntegration: string;
    };
    computing: {
      processor: string;
      memory: string;
      additionalModules: string;
    };
  };
  connectivity: {
    communication: {
      wifi: string;
      bluetooth: string;
      ethernet: string;
      remoteRange: string;
    };
    expansion: {
      ports: string;
      mountingPoints: string;
      peripheralPower: string;
      sdkSupport: string;
    };
  };
  safety: {
    emergencySystems: {
      emergencyStop: string;
      remoteStop: string;
      failsafeBehavior: string;
    };
    operatingModes: {
      manual: string;
      semiAutonomous: string;
      fullAutonomous: string;
      simulationCompatibility: string;
    };
  };
}
