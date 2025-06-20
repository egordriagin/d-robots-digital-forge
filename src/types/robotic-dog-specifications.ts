
export interface RoboticDogSpecifications {
  dimensions: {
    formFactor: {
      workingDimensions: string;
      foldedDimensions: string;
      totalWeight: string;
      groundClearance: string;
      minTurningRadius: string;
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
      typicalSpeedRange: string;
      movementModes: string;
    };
    terrainCapabilities: {
      maxClimbAngle: string;
      maxStepHeight: string;
      stairClimbingSpecs: string;
      surfaceCompatibility: string;
    };
    operatingConditions: {
      temperatureRange: string;
      humidity: string;
      weatherResistance: string;
    };
  };
  power: {
    batterySystem: {
      batterySpecs: string;
      batteryType: string;
      operatingTime: string;
      hotSwappable: string;
    };
    energyConsumption: {
      averageConsumption: string;
      peakPowerRequirements: string;
      chargingSpecs: string;
    };
  };
  control: {
    degreesOfFreedom: {
      totalJoints: string;
      jointTorqueSpecs: string;
      movementRange: string;
    };
    sensorsPerception: {
      cameraSpecs: string;
      lidarCapabilities: string;
      imuSensors: string;
      additionalSensors: string;
    };
    computingPlatform: {
      processorSpecs: string;
      memoryStorage: string;
      additionalModules: string;
    };
  };
  connectivity: {
    communication: {
      wifiStandards: string;
      bluetoothSpecs: string;
      ethernetOptions: string;
      remoteControlRange: string;
    };
    expansion: {
      expansionPorts: string;
      mountingPoints: string;
      peripheralPower: string;
      sdkSupport: string;
    };
  };
  safety: {
    emergencySystems: {
      emergencyStop: string;
      remoteEmergencyStop: string;
      failsafeBehavior: string;
    };
    operatingModes: {
      manualControl: string;
      semiAutonomous: string;
      fullyAutonomous: string;
      simulationCompatibility: string;
    };
  };
}
