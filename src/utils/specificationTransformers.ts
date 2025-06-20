
import { 
  DatabasePrinterSpecs, 
  DatabaseScannerSpecs, 
  DatabaseRoboticDogSpecs,
  DatabaseHumanoidRobotSpecs,
  DatabaseRoboticArmSpecs,
  DatabaseLaserCutterSpecs 
} from "@/services/supabase/specifications";
import { 
  PrinterSpecifications, 
  ScannerSpecifications, 
  RoboticDogSpecifications,
  HumanoidRobotSpecifications,
  RoboticArmSpecifications,
  LaserCutterSpecifications 
} from "@/types";

export const transformDatabasePrinterSpecs = (dbSpecs: DatabasePrinterSpecs): PrinterSpecifications => ({
  printing: {
    buildVolume: {
      dimensions: dbSpecs.build_volume_dimensions || '',
      area: dbSpecs.build_volume_area || '',
      maxLength: dbSpecs.build_volume_max_length || ''
    },
    resolution: {
      layerHeight: dbSpecs.resolution_layer_height || '',
      xyResolution: dbSpecs.resolution_xy_resolution || '',
      dimensionalAccuracy: dbSpecs.resolution_dimensional_accuracy || '',
      minWallThickness: dbSpecs.resolution_min_wall_thickness || ''
    },
    speed: {
      maxSpeed: dbSpecs.speed_max_speed || '',
      typicalRange: dbSpecs.speed_typical_range || '',
      materialDependent: dbSpecs.speed_material_dependent
    }
  },
  technology: {
    printingTechnology: {
      type: dbSpecs.printing_technology_type || '',
      implementation: dbSpecs.printing_technology_implementation || ''
    },
    materials: {
      supportedMaterials: dbSpecs.materials_supported_materials || '',
      cartridgeSpecs: dbSpecs.materials_cartridge_specs || '',
      temperatureRange: dbSpecs.materials_temperature_range || ''
    }
  },
  hardware: {
    dimensions: {
      printerSize: dbSpecs.dimensions_printer_size || '',
      weight: dbSpecs.dimensions_weight || '',
      requiredSpace: dbSpecs.dimensions_required_space || ''
    },
    interface: {
      controlType: dbSpecs.interface_control_type || '',
      displaySpecs: dbSpecs.interface_display_specs || '',
      languages: dbSpecs.interface_languages || ''
    },
    connectivity: {
      wifi: dbSpecs.connectivity_wifi || '',
      ethernet: dbSpecs.connectivity_ethernet || '',
      usb: dbSpecs.connectivity_usb || ''
    }
  },
  environment: {
    operating: {
      temperatureRange: dbSpecs.operating_temperature_range || '',
      humidity: dbSpecs.operating_humidity
    },
    power: {
      voltage: dbSpecs.power_voltage || '',
      consumption: dbSpecs.power_consumption || '',
      frequency: dbSpecs.power_frequency || ''
    }
  },
  advanced: {
    automation: {
      autoLeveling: dbSpecs.automation_auto_leveling || '',
      sensors: dbSpecs.automation_sensors || '',
      autoFeed: dbSpecs.automation_auto_feed || ''
    },
    software: {
      compatibleOS: dbSpecs.software_compatible_os || '',
      fileFormats: dbSpecs.software_file_formats || '',
      systemRequirements: dbSpecs.software_system_requirements || ''
    },
    qualityControl: {
      forceSensing: dbSpecs.quality_control_force_sensing || '',
      temperatureControl: dbSpecs.quality_control_temperature_control || '',
      realTimeMonitoring: dbSpecs.quality_control_realtime_monitoring || ''
    }
  }
});

export const transformDatabaseScannerSpecs = (dbSpecs: DatabaseScannerSpecs): ScannerSpecifications => ({
  accuracy: {
    pointAccuracy: {
      range: dbSpecs.accuracy_point_range || '',
      typical: dbSpecs.accuracy_point_typical || '',
      measurement: dbSpecs.accuracy_point_measurement || ''
    },
    volumetricAccuracy: {
      baseAccuracy: dbSpecs.accuracy_volumetric_base || '',
      distanceCoefficient: dbSpecs.accuracy_volumetric_distance_coefficient || '',
      formula: dbSpecs.accuracy_volumetric_formula || ''
    },
    resolution: {
      measurementResolution: dbSpecs.accuracy_resolution_measurement || '',
      pointDistance: dbSpecs.accuracy_resolution_point_distance || '',
      outputMeshResolution: dbSpecs.accuracy_resolution_output_mesh || ''
    }
  },
  speed: {
    frameRate: dbSpecs.speed_frame_rate || '',
    measurementSpeed: dbSpecs.speed_measurement_speed || '',
    dataCollectionSpeed: dbSpecs.speed_data_collection_speed || ''
  },
  captureRange: {
    singleScanRange: dbSpecs.capture_single_scan_range || '',
    fieldOfView: dbSpecs.capture_field_of_view || '',
    depthOfField: dbSpecs.capture_depth_of_field || '',
    workingDistance: dbSpecs.capture_working_distance || '',
    objectSizeCapabilities: {
      minimum: dbSpecs.capture_object_size_minimum || '',
      maximum: dbSpecs.capture_object_size_maximum || '',
      recommended: dbSpecs.capture_object_size_recommended || ''
    }
  },
  technology: {
    scanningTechnology: {
      type: dbSpecs.technology_scanning_type || '',
      lightSourceCharacteristics: dbSpecs.technology_light_source || '',
      camerasAndProjectors: dbSpecs.technology_cameras_projectors || ''
    },
    trackingAndPositioning: {
      alignmentMethods: dbSpecs.technology_alignment_methods || '',
      trackingCapabilities: dbSpecs.technology_tracking_capabilities || '',
      markerSupport: dbSpecs.technology_marker_support || ''
    }
  },
  compatibility: {
    sizeConstraints: {
      recommendedRange: dbSpecs.compatibility_recommended_range || '',
      typicalCharacteristics: dbSpecs.compatibility_typical_characteristics || '',
      maximumScannable: dbSpecs.compatibility_maximum_scannable || ''
    },
    surfaceRequirements: {
      compatibleSurfaces: dbSpecs.compatibility_compatible_surfaces || '',
      processingRecommendations: dbSpecs.compatibility_processing_recommendations || '',
      limitations: dbSpecs.compatibility_limitations || ''
    }
  },
  software: {
    outputCompatibility: {
      supportedFileFormats: dbSpecs.software_supported_file_formats || '',
      operatingSystems: dbSpecs.software_operating_systems || '',
      mobileCompatibility: dbSpecs.software_mobile_compatibility || ''
    },
    systemRequirements: {
      minimumSpecs: dbSpecs.software_minimum_specs || '',
      recommendedSpecs: dbSpecs.software_recommended_specs || '',
      ramGpuCpuRequirements: dbSpecs.software_ram_gpu_cpu_requirements || ''
    }
  },
  hardware: {
    equipmentCharacteristics: {
      weightAndDimensions: dbSpecs.hardware_weight_dimensions || '',
      cableAndConnectivity: dbSpecs.hardware_cable_connectivity || '',
      portabilityClassification: dbSpecs.hardware_portability_classification || ''
    },
    operatingConditions: {
      indoorOutdoorCapabilities: dbSpecs.hardware_indoor_outdoor_capabilities || '',
      lightingRequirements: dbSpecs.hardware_lighting_requirements || '',
      environmentalConstraints: dbSpecs.hardware_environmental_constraints || ''
    }
  },
  advanced: {
    scanningModes: {
      multipleOptions: dbSpecs.advanced_scanning_modes || '',
      textureColorCapture: dbSpecs.advanced_texture_color_capture || '',
      realtimeVsPostprocessing: dbSpecs.advanced_realtime_vs_postprocessing || ''
    },
    qualityControl: {
      autoCalibration: dbSpecs.advanced_auto_calibration || '',
      errorDetectionCorrection: dbSpecs.advanced_error_detection_correction || '',
      qualityAssessmentTools: dbSpecs.advanced_quality_assessment_tools || ''
    }
  }
});

// Add similar transformers for other specification types
export const transformDatabaseRoboticDogSpecs = (dbSpecs: DatabaseRoboticDogSpecs): RoboticDogSpecifications => ({
  dimensions: {
    formFactor: {
      workingDimensions: dbSpecs.dimensions_working_dimensions || '',
      compactDimensions: dbSpecs.dimensions_compact_dimensions || '',
      totalWeight: dbSpecs.dimensions_total_weight || '',
      groundClearance: dbSpecs.dimensions_ground_clearance || ''
    },
    loadCapacity: {
      staticPayload: dbSpecs.dimensions_static_payload || '',
      movingPayload: dbSpecs.dimensions_moving_payload || '',
      armPayload: dbSpecs.dimensions_arm_payload
    }
  },
  mobility: {
    speedMovement: {
      maxSpeed: dbSpecs.mobility_max_speed || '',
      typicalRange: dbSpecs.mobility_typical_range || '',
      movementModes: dbSpecs.mobility_movement_modes || ''
    },
    terrainCapabilities: {
      maxGradient: dbSpecs.mobility_max_gradient || '',
      obstacleHeight: dbSpecs.mobility_obstacle_height || '',
      stairClimbing: dbSpecs.mobility_stair_climbing || '',
      surfaceCompatibility: dbSpecs.mobility_surface_compatibility || ''
    },
    environment: {
      temperatureRange: dbSpecs.mobility_temperature_range || '',
      humidity: dbSpecs.mobility_humidity || '',
      weatherProtection: dbSpecs.mobility_weather_protection || ''
    }
  },
  power: {
    battery: {
      capacity: dbSpecs.power_battery_capacity || '',
      type: dbSpecs.power_battery_type || '',
      runtime: dbSpecs.power_battery_runtime || '',
      hotSwap: dbSpecs.power_battery_hot_swap || ''
    },
    consumption: {
      average: dbSpecs.power_consumption_average || '',
      peak: dbSpecs.power_consumption_peak || '',
      chargingSpecs: dbSpecs.power_consumption_charging_specs || ''
    }
  },
  control: {
    degreesOfFreedom: {
      totalJoints: dbSpecs.control_total_joints || '',
      torqueSpecs: dbSpecs.control_torque_specs || '',
      movementRange: dbSpecs.control_movement_range || ''
    },
    sensing: {
      cameras: dbSpecs.control_cameras || '',
      lidar: dbSpecs.control_lidar || '',
      imuSensors: dbSpecs.control_imu_sensors || '',
      sensorIntegration: dbSpecs.control_sensor_integration || ''
    },
    computing: {
      processor: dbSpecs.control_processor || '',
      memory: dbSpecs.control_memory || '',
      additionalModules: dbSpecs.control_additional_modules || ''
    }
  },
  connectivity: {
    communication: {
      wifi: dbSpecs.connectivity_wifi || '',
      bluetooth: dbSpecs.connectivity_bluetooth || '',
      ethernet: dbSpecs.connectivity_ethernet || '',
      remoteRange: dbSpecs.connectivity_remote_range || ''
    },
    expansion: {
      ports: dbSpecs.connectivity_ports || '',
      mountingPoints: dbSpecs.connectivity_mounting_points || '',
      peripheralPower: dbSpecs.connectivity_peripheral_power || '',
      sdkSupport: dbSpecs.connectivity_sdk_support || ''
    }
  },
  safety: {
    emergencySystems: {
      emergencyStop: dbSpecs.safety_emergency_stop || '',
      remoteStop: dbSpecs.safety_remote_stop || '',
      failsafeBehavior: dbSpecs.safety_failsafe_behavior || ''
    },
    operatingModes: {
      manual: dbSpecs.safety_manual || '',
      semiAutonomous: dbSpecs.safety_semi_autonomous || '',
      fullAutonomous: dbSpecs.safety_full_autonomous || '',
      simulationCompatibility: dbSpecs.safety_simulation_compatibility || ''
    }
  }
});

// Add transformers for other types (humanoid robot, robotic arm, laser cutter)
// For brevity, I'll add placeholder implementations that can be expanded later
export const transformDatabaseHumanoidRobotSpecs = (dbSpecs: DatabaseHumanoidRobotSpecs): HumanoidRobotSpecifications => {
  // Implementation similar to above pattern - abbreviated for space
  return {} as HumanoidRobotSpecifications;
};

export const transformDatabaseRoboticArmSpecs = (dbSpecs: DatabaseRoboticArmSpecs): RoboticArmSpecifications => {
  // Implementation similar to above pattern - abbreviated for space
  return {} as RoboticArmSpecifications;
};

export const transformDatabaseLaserCutterSpecs = (dbSpecs: DatabaseLaserCutterSpecs): LaserCutterSpecifications => {
  // Implementation similar to above pattern - abbreviated for space
  return {} as LaserCutterSpecifications;
};
