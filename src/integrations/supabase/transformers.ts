// Transformation functions to convert flat database columns to nested TypeScript objects

import { Tables } from './types';
import { ScannerSpecifications } from '@/types/scanner-specifications';
import { PrinterSpecifications } from '@/types/printer-specifications';
import { RoboticDogSpecifications } from '@/types/robotic-dog-specifications';
import { HumanoidRobotSpecifications } from '@/types/humanoid-robot-specifications';
import { RoboticArmSpecifications } from '@/types/robotic-arm-specifications';
import { LaserCutterSpecifications } from '@/types/laser-cutter-specifications';

export function transformScannerSpecifications(
  data: Tables<'scanner_specifications'> | null
): ScannerSpecifications | undefined {
  if (!data) return undefined;

  return {
    accuracy: {
      pointAccuracy: {
        range: data.pointAccuracy_range || '',
        typical: data.pointAccuracy_typical || '',
        measurement: data.pointAccuracy_measurement || ''
      },
      volumetricAccuracy: {
        baseAccuracy: data.volumetricAccuracy_baseAccuracy || '',
        distanceCoefficient: data.volumetricAccuracy_distanceCoefficient || '',
        formula: data.volumetricAccuracy_formula || ''
      },
      resolution: {
        measurementResolution: data.resolution_measurementResolution || '',
        pointDistance: data.resolution_pointDistance || '',
        outputMeshResolution: data.resolution_outputMeshResolution || ''
      }
    },
    speed: {
      frameRate: data.speed_frameRate || '',
      measurementSpeed: data.speed_measurementSpeed || '',
      dataCollectionSpeed: data.speed_dataCollectionSpeed || ''
    },
    captureRange: {
      singleScanRange: data.captureRange_singleScanRange || '',
      fieldOfView: data.captureRange_fieldOfView || '',
      depthOfField: data.captureRange_depthOfField || '',
      workingDistance: data.captureRange_workingDistance || '',
      objectSizeCapabilities: {
        minimum: data.objectSizeCapabilities_minimum || '',
        maximum: data.objectSizeCapabilities_maximum || '',
        recommended: data.objectSizeCapabilities_recommended || ''
      }
    },
    technology: {
      scanningTechnology: {
        type: data.scanningTechnology_type || '',
        lightSourceCharacteristics: data.scanningTechnology_lightSourceCharacteristics || '',
        camerasAndProjectors: data.scanningTechnology_camerasAndProjectors || ''
      },
      trackingAndPositioning: {
        alignmentMethods: data.trackingAndPositioning_alignmentMethods || '',
        trackingCapabilities: data.trackingAndPositioning_trackingCapabilities || '',
        markerSupport: data.trackingAndPositioning_markerSupport || ''
      }
    },
    compatibility: {
      sizeConstraints: {
        recommendedRange: data.sizeConstraints_recommendedRange || '',
        typicalCharacteristics: data.sizeConstraints_typicalCharacteristics || '',
        maximumScannable: data.sizeConstraints_maximumScannable || ''
      },
      surfaceRequirements: {
        compatibleSurfaces: data.surfaceRequirements_compatibleSurfaces || '',
        processingRecommendations: data.surfaceRequirements_processingRecommendations || '',
        limitations: data.surfaceRequirements_limitations || ''
      }
    },
    software: {
      outputCompatibility: {
        supportedFileFormats: data.outputCompatibility_supportedFileFormats || '',
        operatingSystems: data.outputCompatibility_operatingSystems || '',
        mobileCompatibility: data.outputCompatibility_mobileCompatibility || ''
      },
      systemRequirements: {
        minimumSpecs: data.systemRequirements_minimumSpecs || '',
        recommendedSpecs: data.systemRequirements_recommendedSpecs || '',
        ramGpuCpuRequirements: data.systemRequirements_ramGpuCpuRequirements || ''
      }
    },
    hardware: {
      equipmentCharacteristics: {
        weightAndDimensions: data.equipmentCharacteristics_weightAndDimensions || '',
        cableAndConnectivity: data.equipmentCharacteristics_cableAndConnectivity || '',
        portabilityClassification: data.equipmentCharacteristics_portabilityClassification || ''
      },
      operatingConditions: {
        indoorOutdoorCapabilities: data.operatingConditions_indoorOutdoorCapabilities || '',
        lightingRequirements: data.operatingConditions_lightingRequirements || '',
        environmentalConstraints: data.operatingConditions_environmentalConstraints || ''
      }
    },
    advanced: {
      scanningModes: {
        multipleOptions: data.scanningModes_multipleOptions || '',
        textureColorCapture: data.scanningModes_textureColorCapture || '',
        realtimeVsPostprocessing: data.scanningModes_realtimeVsPostprocessing || ''
      },
      qualityControl: {
        autoCalibration: data.qualityControl_autoCalibration || '',
        errorDetectionCorrection: data.qualityControl_errorDetectionCorrection || '',
        qualityAssessmentTools: data.qualityControl_qualityAssessmentTools || ''
      }
    }
  };
}

export function transformPrinterSpecifications(
  data: Tables<'printer_specifications'> | null
): PrinterSpecifications | undefined {
  if (!data) return undefined;

  return {
    printVolume: {
      buildVolume: {
        dimensions: data.buildVolume_dimensions || '',
        area: data.buildVolume_area || '',
        maxLength: data.buildVolume_maxLength || ''
      }
    },
    printQuality: {
      resolution: {
        layerHeight: data.resolution_layerHeight || '',
        xyResolution: data.resolution_xyResolution || '',
        dimensionalAccuracy: data.resolution_dimensionalAccuracy || '',
        minWallThickness: data.resolution_minWallThickness || ''
      },
      speed: {
        maxSpeed: data.speed_maxSpeed || '',
        typicalRange: data.speed_typicalRange || '',
        materialDependent: data.speed_materialDependent || ''
      }
    },
    technology: {
      printingTechnology: {
        type: data.printingTechnology_type || '',
        implementation: data.printingTechnology_implementation || ''
      },
      materials: {
        supportedMaterials: data.materials_supportedMaterials || '',
        cartridgeSpecs: data.materials_cartridgeSpecs || '',
        temperatureRange: data.materials_temperatureRange || ''
      }
    },
    physical: {
      dimensions: {
        printerSize: data.dimensions_printerSize || '',
        weight: data.dimensions_weight || '',
        requiredSpace: data.dimensions_requiredSpace || ''
      }
    },
    control: {
      interface: {
        controlType: data.interface_controlType || '',
        displaySpecs: data.interface_displaySpecs || '',
        languages: data.interface_languages || ''
      },
      connectivity: {
        wifi: data.connectivity_wifi || '',
        ethernet: data.connectivity_ethernet || '',
        usb: data.connectivity_usb || ''
      }
    },
    environmental: {
      operating: {
        temperatureRange: data.operating_temperatureRange || '',
        humidity: data.operating_humidity || ''
      },
      power: {
        voltage: data.power_voltage || '',
        consumption: data.power_consumption || '',
        frequency: data.power_frequency || ''
      }
    },
    features: {
      automation: {
        autoLeveling: data.automation_autoLeveling || '',
        sensors: data.automation_sensors || '',
        autoFeed: data.automation_autoFeed || ''
      },
      software: {
        compatibleOS: data.software_compatibleOS || '',
        fileFormats: data.software_fileFormats || '',
        systemRequirements: data.software_systemRequirements || ''
      },
      qualityControl: {
        forceSensing: data.qualityControl_forceSensing || '',
        temperatureControl: data.qualityControl_temperatureControl || '',
        realTimeMonitoring: data.qualityControl_realTimeMonitoring || ''
      }
    }
  };
}

// Similar transformers for other specification types...
// I'll implement the most critical ones for now

export function transformRoboticDogSpecifications(
  data: Tables<'robotic_dog_specifications'> | null
): RoboticDogSpecifications | undefined {
  if (!data) return undefined;

  return {
    dimensions: {
      formFactor: {
        workingDimensions: data.formFactor_workingDimensions || '',
        compactDimensions: data.formFactor_compactDimensions || '',
        totalWeight: data.formFactor_totalWeight || '',
        groundClearance: data.formFactor_groundClearance || ''
      },
      loadCapacity: {
        staticPayload: data.loadCapacity_staticPayload || '',
        movingPayload: data.loadCapacity_movingPayload || '',
        armPayload: data.loadCapacity_armPayload || undefined
      }
    },
    mobility: {
      speedMovement: {
        maxSpeed: data.speedMovement_maxSpeed || '',
        typicalRange: data.speedMovement_typicalRange || '',
        movementModes: data.speedMovement_movementModes || ''
      },
      terrainCapabilities: {
        maxGradient: data.terrainCapabilities_maxGradient || '',
        obstacleHeight: data.terrainCapabilities_obstacleHeight || '',
        stairClimbing: data.terrainCapabilities_stairClimbing || '',
        surfaceCompatibility: data.terrainCapabilities_surfaceCompatibility || ''
      },
      environment: {
        temperatureRange: data.environment_temperatureRange || '',
        humidity: data.environment_humidity || '',
        weatherProtection: data.environment_weatherProtection || ''
      }
    },
    power: {
      battery: {
        capacity: data.battery_capacity || '',
        type: data.battery_type || '',
        runtime: data.battery_runtime || '',
        hotSwap: data.battery_hotSwap || ''
      },
      consumption: {
        average: data.consumption_average || '',
        peak: data.consumption_peak || '',
        chargingSpecs: data.consumption_chargingSpecs || ''
      }
    },
    control: {
      degreesOfFreedom: {
        totalJoints: data.degreesOfFreedom_totalJoints || '',
        torqueSpecs: data.degreesOfFreedom_torqueSpecs || '',
        movementRange: data.degreesOfFreedom_movementRange || ''
      },
      sensing: {
        cameras: data.sensing_cameras || '',
        lidar: data.sensing_lidar || '',
        imuSensors: data.sensing_imuSensors || '',
        sensorIntegration: data.sensing_sensorIntegration || ''
      },
      computing: {
        processor: data.computing_processor || '',
        memory: data.computing_memory || '',
        additionalModules: data.computing_additionalModules || ''
      }
    },
    connectivity: {
      communication: {
        wifi: data.communication_wifi || '',
        bluetooth: data.communication_bluetooth || '',
        ethernet: data.communication_ethernet || '',
        remoteRange: data.communication_remoteRange || ''
      },
      expansion: {
        ports: data.expansion_ports || '',
        mountingPoints: data.expansion_mountingPoints || '',
        peripheralPower: data.expansion_peripheralPower || '',
        sdkSupport: data.expansion_sdkSupport || ''
      }
    },
    safety: {
      emergencySystems: {
        emergencyStop: data.emergencySystems_emergencyStop || '',
        remoteStop: data.emergencySystems_remoteStop || '',
        failsafeBehavior: data.emergencySystems_failsafeBehavior || ''
      },
      operatingModes: {
        manual: data.operatingModes_manual || '',
        semiAutonomous: data.operatingModes_semiAutonomous || '',
        fullAutonomous: data.operatingModes_fullAutonomous || '',
        simulationCompatibility: data.operatingModes_simulationCompatibility || ''
      }
    }
  };
}

export function transformHumanoidRobotSpecifications(
  data: Tables<'humanoid_robot_specifications'> | null
): HumanoidRobotSpecifications | undefined {
  if (!data) return undefined;

  return {
    dimensions: {
      formFactor: {
        standingHeight: data.formFactor_standingHeight || '',
        weight: data.formFactor_weight || '',
        compactDimensions: data.formFactor_compactDimensions || '',
        armSpan: data.formFactor_armSpan || ''
      },
      anthropomorphic: {
        thighLength: data.anthropomorphic_thighLength || '',
        armLength: data.anthropomorphic_armLength || '',
        proportions: data.anthropomorphic_proportions || ''
      }
    },
    mobility: {
      movement: {
        walkingSpeed: data.movement_walkingSpeed || '',
        runningSpeed: data.movement_runningSpeed || undefined,
        movementModes: data.movement_movementModes || ''
      },
      navigation: {
        stairClimbing: data.navigation_stairClimbing || '',
        obstacleHeight: data.navigation_obstacleHeight || '',
        terrainAdaptation: data.navigation_terrainAdaptation || '',
        balanceSystems: data.navigation_balanceSystems || ''
      }
    },
    degreesOfFreedom: {
      overall: {
        totalDOF: data.overall_totalDOF || '',
        bodyDistribution: data.overall_bodyDistribution || ''
      },
      limbs: {
        legDOF: data.limbs_legDOF || '',
        armDOF: data.limbs_armDOF || '',
        waistTorsoDOF: data.limbs_waistTorsoDOF || '',
        headNeckDOF: data.limbs_headNeckDOF || ''
      },
      handDexterity: {
        handDOF: data.handDexterity_handDOF || '',
        tactileFeedback: data.handDexterity_tactileFeedback || ''
      }
    },
    power: {
      actuators: {
        jointTorque: data.actuators_jointTorque || '',
        peakTorque: data.actuators_peakTorque || '',
        actuatorType: data.actuators_actuatorType || ''
      },
      loadCapacity: {
        operatingPayload: data.loadCapacity_operatingPayload || '',
        armLoad: data.loadCapacity_armLoad || '',
        manipulationRating: data.loadCapacity_manipulationRating || ''
      },
      battery: {
        capacity: data.battery_capacity || '',
        runtime: data.battery_runtime || '',
        chargingSpecs: data.battery_chargingSpecs || '',
        consumptionProfile: data.battery_consumptionProfile || ''
      }
    },
    sensing: {
      vision: {
        cameras: data.vision_cameras || '',
        lidar3D: data.vision_lidar3D || '',
        perception360: data.vision_perception360 || ''
      },
      audio: {
        microphoneArray: data.audio_microphoneArray || '',
        audioSystems: data.audio_audioSystems || '',
        speechRecognition: data.audio_speechRecognition || ''
      },
      environmental: {
        imuBalance: data.environmental_imuBalance || '',
        tactileForce: data.environmental_tactileForce || '',
        temperatureMonitoring: data.environmental_temperatureMonitoring || ''
      }
    },
    computing: {
      power: {
        onboardComputing: data.power_onboardComputing || '',
        aiComputing: data.power_aiComputing || '',
        memoryStorage: data.power_memoryStorage || ''
      },
      aiSystems: {
        multimodalAI: data.aiSystems_multimodalAI || '',
        realtimeProcessing: data.aiSystems_realtimeProcessing || '',
        learningAdaptation: data.aiSystems_learningAdaptation || ''
      }
    },
    connectivity: {
      communication: {
        wireless: data.communication_wireless || '',
        remoteControl: data.communication_remoteControl || '',
        fleetIntegration: data.communication_fleetIntegration || ''
      },
      control: {
        voiceCommands: data.control_voiceCommands || '',
        vrControl: data.control_vrControl || '',
        teachingByDemonstration: data.control_teachingByDemonstration || '',
        autonomousModes: data.control_autonomousModes || ''
      }
    },
    safety: {
      systems: {
        multilevelSecurity: data.systems_multilevelSecurity || '',
        emergencyProtocols: data.systems_emergencyProtocols || '',
        protectionLevel: data.systems_protectionLevel || ''
      },
      environment: {
        operatingConditions: data.environment_operatingConditions || '',
        indoorOutdoor: data.environment_indoorOutdoor || '',
        weatherResistance: data.environment_weatherResistance || ''
      }
    },
    software: {
      development: {
        sdkSupport: data.development_sdkSupport || '',
        frameworkCompatibility: data.development_frameworkCompatibility || '',
        simulationIntegration: data.development_simulationIntegration || ''
      },
      applications: {
        serviceInteraction: data.applications_serviceInteraction || '',
        industrialSupport: data.applications_industrialSupport || '',
        researchEducation: data.applications_researchEducation || ''
      }
    }
  };
}

export function transformRoboticArmSpecifications(
  data: Tables<'robotic_arm_specifications'> | null
): RoboticArmSpecifications | undefined {
  if (!data) return undefined;

  return {
    capacity: {
      payload: {
        maxPayload: data.payload_maxPayload || '',
        maxReach: data.payload_maxReach || '',
        nominalPayload: data.payload_nominalPayload || '',
        momentInertia: data.payload_momentInertia || ''
      },
      accuracy: {
        repeatability: data.accuracy_repeatability || '',
        positioningAccuracy: data.accuracy_positioningAccuracy || '',
        pathAccuracy: data.accuracy_pathAccuracy || '',
        absoluteAccuracy: data.accuracy_absoluteAccuracy || ''
      },
      speed: {
        maxToolSpeed: data.speed_maxToolSpeed || '',
        jointAngularSpeed: data.speed_jointAngularSpeed || '',
        acceleration: data.speed_acceleration || '',
        cycleTime: data.speed_cycleTime || ''
      }
    },
    mechanical: {
      degreesOfFreedom: {
        axesCount: data.degreesOfFreedom_axesCount || '',
        jointRange: data.degreesOfFreedom_jointRange || '',
        infiniteRotation: data.degreesOfFreedom_infiniteRotation || ''
      },
      physical: {
        manipulatorWeight: data.physical_manipulatorWeight || '',
        baseDimensions: data.physical_baseDimensions || '',
        mountingOptions: data.physical_mountingOptions || '',
        constructionMaterial: data.physical_constructionMaterial || ''
      }
    },
    control: {
      programming: {
        graphicalEnvironments: data.programming_graphicalEnvironments || '',
        teachByDemonstration: data.programming_teachByDemonstration || '',
        programmingLanguages: data.programming_programmingLanguages || '',
        dragDropInterface: data.programming_dragDropInterface || ''
      },
      methods: {
        pcSoftware: data.methods_pcSoftware || '',
        mobileApp: data.methods_mobileApp || '',
        voiceControl: data.methods_voiceControl || '',
        gestureVision: data.methods_gestureVision || ''
      }
    },
    connectivity: {
      communication: {
        ethernet: data.communication_ethernet || '',
        usb: data.communication_usb || '',
        wireless: data.communication_wireless || '',
        endEffectorComm: data.communication_endEffectorComm || ''
      },
      io: {
        digitalIO: data.io_digitalIO || '',
        analogIO: data.io_analogIO || '',
        toolConnectorIO: data.io_toolConnectorIO || '',
        endEffectorProtocols: data.io_endEffectorProtocols || ''
      }
    },
    power: {
      requirements: {
        inputVoltage: data.requirements_inputVoltage || '',
        powerConsumption: data.requirements_powerConsumption || '',
        currentRequirements: data.requirements_currentRequirements || ''
      },
      operating: {
        temperatureRange: data.operating_temperatureRange || '',
        humidity: data.operating_humidity || '',
        ipRating: data.operating_ipRating || '',
        cleanroomClass: data.operating_cleanroomClass || ''
      }
    },
    safety: {
      functions: {
        collisionDetection: data.functions_collisionDetection || '',
        safetyBoundaries: data.functions_safetyBoundaries || '',
        emergencyStop: data.functions_emergencyStop || '',
        forceTorqueLimiting: data.functions_forceTorqueLimiting || '',
        selfCollisionPrevention: data.functions_selfCollisionPrevention || ''
      },
      collaborative: {
        advancedSafetyFeatures: data.collaborative_advancedSafetyFeatures || '',
        forceSensing: data.collaborative_forceSensing || '',
        speedSeparation: data.collaborative_speedSeparation || '',
        safeOperatingModes: data.collaborative_safeOperatingModes || ''
      }
    },
    software: {
      development: {
        simulation3D: data.development_simulation3D || '',
        autonomousProgramming: data.development_autonomousProgramming || '',
        trajectoryRecording: data.development_trajectoryRecording || '',
        cadCamIntegration: data.development_cadCamIntegration || ''
      },
      applications: {
        endEffectorTypes: data.applications_endEffectorTypes || '',
        multiAxisMachining: data.applications_multiAxisMachining || '',
        pickPlaceOptimization: data.applications_pickPlaceOptimization || '',
        weldingAssembly: data.applications_weldingAssembly || ''
      }
    }
  };
}

export function transformLaserCutterSpecifications(
  data: Tables<'laser_cutter_specifications'> | null
): LaserCutterSpecifications | undefined {
  if (!data) return undefined;

  return {
    laser: {
      power: {
        outputPower: data.power_outputPower || '',
        laserType: data.power_laserType || '',
        wavelength: data.power_wavelength || '',
        spotSize: data.power_spotSize || '',
        tubeLifetime: data.power_tubeLifetime || ''
      },
      performance: {
        maxEngravingSpeed: data.performance_maxEngravingSpeed || '',
        processingAccuracy: data.performance_processingAccuracy || '',
        imageResolution: data.performance_imageResolution || '',
        speedRange: data.performance_speedRange || ''
      }
    },
    workArea: {
      processing: {
        workAreaSize: data.processing_workAreaSize || '',
        tableSize: data.processing_tableSize || '',
        maxWorkpieceHeight: data.processing_maxWorkpieceHeight || '',
        maxCuttingThickness: data.processing_maxCuttingThickness || ''
      },
      physical: {
        machineDimensions: data.physical_machineDimensions || '',
        totalWeight: data.physical_totalWeight || '',
        rotaryEngravingDiameter: data.physical_rotaryEngravingDiameter || ''
      }
    },
    vision: {
      cameras: {
        cameraResolution: data.cameras_cameraResolution || '',
        visionAccuracy: data.cameras_visionAccuracy || '',
        previewArea: data.cameras_previewArea || '',
        autofocusLidar: data.cameras_autofocusLidar || ''
      },
      advanced: {
        curved3DEngraving: data.advanced_curved3DEngraving || '',
        autoPassthrough: data.advanced_autoPassthrough || '',
        electricLifting: data.advanced_electricLifting || ''
      }
    },
    control: {
      interface: {
        touchPanelSpecs: data.interface_touchPanelSpecs || '',
        controlMethods: data.interface_controlMethods || '',
        displayLanguages: data.interface_displayLanguages || ''
      },
      software: {
        supportedPlatforms: data.software_supportedPlatforms || '',
        osCompatibility: data.software_osCompatibility || '',
        supportedFormats: data.software_supportedFormats || ''
      }
    },
    connectivity: {
      options: {
        wifiCapabilities: data.options_wifiCapabilities || '',
        ethernetPort: data.options_ethernetPort || '',
        usbConnections: data.options_usbConnections || '',
        mobileCompatibility: data.options_mobileCompatibility || ''
      }
    },
    safety: {
      features: {
        safetyClassification: data.features_safetyClassification || '',
        enclosedWorkspace: data.features_enclosedWorkspace || '',
        emergencyStop: data.features_emergencyStop || '',
        automaticLocks: data.features_automaticLocks || '',
        warningSystems: data.features_warningSystems || ''
      },
      operating: {
        operatingTemperature: data.operating_operatingTemperature || '',
        storageTemperature: data.operating_storageTemperature || '',
        powerRequirements: data.operating_powerRequirements || ''
      }
    },
    cooling: {
      system: {
        coolingCapacity: data.system_coolingCapacity || '',
        airAssist: data.system_airAssist || '',
        exhaustFan: data.system_exhaustFan || '',
        smokeFiltering: data.system_smokeFiltering || ''
      }
    },
    materials: {
      cutting: {
        compatibleCuttingMaterials: data.cutting_compatibleCuttingMaterials || '',
        cuttingDepthByMaterial: data.cutting_cuttingDepthByMaterial || ''
      },
      engraving: {
        engravingMaterials: data.engraving_engravingMaterials || '',
        materialParameters: data.engraving_materialParameters || ''
      }
    }
  };
}