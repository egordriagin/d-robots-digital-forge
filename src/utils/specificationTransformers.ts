
import { 
  DatabasePrinterSpecs,
  DatabaseScannerSpecs, 
  DatabaseRoboticDogSpecs,
  DatabaseHumanoidRobotSpecs,
  DatabaseRoboticArmSpecs,
  DatabaseLaserCutterSpecs
} from "@/services/supabase/specifications";
import { PrinterSpecifications } from "@/types/printer-specifications";
import { ScannerSpecifications } from "@/types/scanner-specifications";
import { RoboticDogSpecifications } from "@/types/robotic-dog-specifications";
import { HumanoidRobotSpecifications } from "@/types/humanoid-robot-specifications";
import { RoboticArmSpecifications } from "@/types/robotic-arm-specifications";
import { LaserCutterSpecifications } from "@/types/laser-cutter-specifications";

export const transformDatabasePrinterSpecs = (dbSpecs: DatabasePrinterSpecs): PrinterSpecifications => {
  return {
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
        materialDependent: dbSpecs.speed_material_dependent || ''
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
        humidity: dbSpecs.operating_humidity || ''
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
  };
};

export const transformDatabaseScannerSpecs = (dbSpecs: DatabaseScannerSpecs): ScannerSpecifications => {
  return {
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
  };
};

export const transformDatabaseRoboticDogSpecs = (dbSpecs: DatabaseRoboticDogSpecs): RoboticDogSpecifications => {
  return {
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
        armPayload: dbSpecs.dimensions_arm_payload || ''
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
  };
};

export const transformDatabaseHumanoidRobotSpecs = (dbSpecs: DatabaseHumanoidRobotSpecs): HumanoidRobotSpecifications => {
  return {
    dimensions: {
      formFactor: {
        standingHeight: dbSpecs.dimensions_standing_height || '',
        weight: dbSpecs.dimensions_weight || '',
        compactDimensions: dbSpecs.dimensions_compact_dimensions || '',
        armSpan: dbSpecs.dimensions_arm_span || ''
      },
      anthropomorphic: {
        thighLength: dbSpecs.dimensions_thigh_length || '',
        armLength: dbSpecs.dimensions_arm_length || '',
        proportions: dbSpecs.dimensions_proportions || ''
      }
    },
    mobility: {
      movement: {
        walkingSpeed: dbSpecs.mobility_walking_speed || '',
        runningSpeed: dbSpecs.mobility_running_speed || '',
        movementModes: dbSpecs.mobility_movement_modes || ''
      },
      navigation: {
        stairClimbing: dbSpecs.mobility_stair_climbing || '',
        obstacleHeight: dbSpecs.mobility_obstacle_height || '',
        terrainAdaptation: dbSpecs.mobility_terrain_adaptation || '',
        balanceSystems: dbSpecs.mobility_balance_systems || ''
      }
    },
    degreesOfFreedom: {
      overall: {
        totalDOF: dbSpecs.dof_total_dof || '',
        bodyDistribution: dbSpecs.dof_body_distribution || ''
      },
      limbs: {
        legDOF: dbSpecs.dof_leg_dof || '',
        armDOF: dbSpecs.dof_arm_dof || '',
        waistTorsoDOF: dbSpecs.dof_waist_torso_dof || '',
        headNeckDOF: dbSpecs.dof_head_neck_dof || ''
      },
      handDexterity: {
        handDOF: dbSpecs.dof_hand_dof || '',
        tactileFeedback: dbSpecs.dof_tactile_feedback || ''
      }
    },
    power: {
      actuators: {
        jointTorque: dbSpecs.power_joint_torque || '',
        peakTorque: dbSpecs.power_peak_torque || '',
        actuatorType: dbSpecs.power_actuator_type || ''
      },
      loadCapacity: {
        operatingPayload: dbSpecs.power_operating_payload || '',
        armLoad: dbSpecs.power_arm_load || '',
        manipulationRating: dbSpecs.power_manipulation_rating || ''
      },
      battery: {
        capacity: dbSpecs.power_battery_capacity || '',
        runtime: dbSpecs.power_battery_runtime || '',
        chargingSpecs: dbSpecs.power_battery_charging_specs || '',
        consumptionProfile: dbSpecs.power_consumption_profile || ''
      }
    },
    sensing: {
      vision: {
        cameras: dbSpecs.sensing_cameras || '',
        lidar3D: dbSpecs.sensing_lidar_3d || '',
        perception360: dbSpecs.sensing_perception_360 || ''
      },
      audio: {
        microphoneArray: dbSpecs.sensing_microphone_array || '',
        audioSystems: dbSpecs.sensing_audio_systems || '',
        speechRecognition: dbSpecs.sensing_speech_recognition || ''
      },
      environmental: {
        imuBalance: dbSpecs.sensing_imu_balance || '',
        tactileForce: dbSpecs.sensing_tactile_force || '',
        temperatureMonitoring: dbSpecs.sensing_temperature_monitoring || ''
      }
    },
    computing: {
      power: {
        onboardComputing: dbSpecs.computing_onboard_computing || '',
        aiComputing: dbSpecs.computing_ai_computing || '',
        memoryStorage: dbSpecs.computing_memory_storage || ''
      },
      aiSystems: {
        multimodalAI: dbSpecs.computing_multimodal_ai || '',
        realtimeProcessing: dbSpecs.computing_realtime_processing || '',
        learningAdaptation: dbSpecs.computing_learning_adaptation || ''
      }
    },
    connectivity: {
      communication: {
        wireless: dbSpecs.connectivity_wireless || '',
        remoteControl: dbSpecs.connectivity_remote_control || '',
        fleetIntegration: dbSpecs.connectivity_fleet_integration || ''
      },
      control: {
        voiceCommands: dbSpecs.connectivity_voice_commands || '',
        vrControl: dbSpecs.connectivity_vr_control || '',
        teachingByDemonstration: dbSpecs.connectivity_teaching_by_demonstration || '',
        autonomousModes: dbSpecs.connectivity_autonomous_modes || ''
      }
    },
    safety: {
      systems: {
        multilevelSecurity: dbSpecs.safety_multilevel_security || '',
        emergencyProtocols: dbSpecs.safety_emergency_protocols || '',
        protectionLevel: dbSpecs.safety_protection_level || ''
      },
      environment: {
        operatingConditions: dbSpecs.safety_operating_conditions || '',
        indoorOutdoor: dbSpecs.safety_indoor_outdoor || '',
        weatherResistance: dbSpecs.safety_weather_resistance || ''
      }
    },
    software: {
      development: {
        sdkSupport: dbSpecs.software_sdk_support || '',
        frameworkCompatibility: dbSpecs.software_framework_compatibility || '',
        simulationIntegration: dbSpecs.software_simulation_integration || ''
      },
      applications: {
        serviceInteraction: dbSpecs.software_service_interaction || '',
        industrialSupport: dbSpecs.software_industrial_support || '',
        researchEducation: dbSpecs.software_research_education || ''
      }
    }
  };
};

export const transformDatabaseRoboticArmSpecs = (dbSpecs: DatabaseRoboticArmSpecs): RoboticArmSpecifications => {
  return {
    capacity: {
      payload: {
        maxPayload: dbSpecs.capacity_max_payload || '',
        maxReach: dbSpecs.capacity_max_reach || '',
        nominalPayload: dbSpecs.capacity_nominal_payload || '',
        momentInertia: dbSpecs.capacity_moment_inertia || ''
      },
      accuracy: {
        repeatability: dbSpecs.capacity_repeatability || '',
        positioningAccuracy: dbSpecs.capacity_positioning_accuracy || '',
        pathAccuracy: dbSpecs.capacity_path_accuracy || '',
        absoluteAccuracy: dbSpecs.capacity_absolute_accuracy || ''
      },
      speed: {
        maxToolSpeed: dbSpecs.capacity_max_tool_speed || '',
        jointAngularSpeed: dbSpecs.capacity_joint_angular_speed || '',
        acceleration: dbSpecs.capacity_acceleration || '',
        cycleTime: dbSpecs.capacity_cycle_time || ''
      }
    },
    mechanical: {
      degreesOfFreedom: {
        axesCount: dbSpecs.mechanical_axes_count || '',
        jointRange: dbSpecs.mechanical_joint_range || '',
        infiniteRotation: dbSpecs.mechanical_infinite_rotation || ''
      },
      physical: {
        manipulatorWeight: dbSpecs.mechanical_manipulator_weight || '',
        baseDimensions: dbSpecs.mechanical_base_dimensions || '',
        mountingOptions: dbSpecs.mechanical_mounting_options || '',
        constructionMaterial: dbSpecs.mechanical_construction_material || ''
      }
    },
    control: {
      programming: {
        graphicalEnvironments: dbSpecs.control_graphical_environments || '',
        teachByDemonstration: dbSpecs.control_teach_by_demonstration || '',
        programmingLanguages: dbSpecs.control_programming_languages || '',
        dragDropInterface: dbSpecs.control_drag_drop_interface || ''
      },
      methods: {
        pcSoftware: dbSpecs.control_pc_software || '',
        mobileApp: dbSpecs.control_mobile_app || '',
        voiceControl: dbSpecs.control_voice_control || '',
        gestureVision: dbSpecs.control_gesture_vision || ''
      }
    },
    connectivity: {
      communication: {
        ethernet: dbSpecs.connectivity_ethernet || '',
        usb: dbSpecs.connectivity_usb || '',
        wireless: dbSpecs.connectivity_wireless || '',
        endEffectorComm: dbSpecs.connectivity_end_effector_comm || ''
      },
      io: {
        digitalIO: dbSpecs.connectivity_digital_io || '',
        analogIO: dbSpecs.connectivity_analog_io || '',
        toolConnectorIO: dbSpecs.connectivity_tool_connector_io || '',
        endEffectorProtocols: dbSpecs.connectivity_end_effector_protocols || ''
      }
    },
    power: {
      requirements: {
        inputVoltage: dbSpecs.power_input_voltage || '',
        powerConsumption: dbSpecs.power_consumption || '',
        currentRequirements: dbSpecs.power_current_requirements || ''
      },
      operating: {
        temperatureRange: dbSpecs.power_temperature_range || '',
        humidity: dbSpecs.power_humidity || '',
        ipRating: dbSpecs.power_ip_rating || '',
        cleanroomClass: dbSpecs.power_cleanroom_class || ''
      }
    },
    safety: {
      functions: {
        collisionDetection: dbSpecs.safety_collision_detection || '',
        safetyBoundaries: dbSpecs.safety_boundaries || '',
        emergencyStop: dbSpecs.safety_emergency_stop || '',
        forceTorqueLimiting: dbSpecs.safety_force_torque_limiting || '',
        selfCollisionPrevention: dbSpecs.safety_self_collision_prevention || ''
      },
      collaborative: {
        advancedSafetyFeatures: dbSpecs.safety_advanced_safety_features || '',
        forceSensing: dbSpecs.safety_force_sensing || '',
        speedSeparation: dbSpecs.safety_speed_separation || '',
        safeOperatingModes: dbSpecs.safety_safe_operating_modes || ''
      }
    },
    software: {
      development: {
        simulation3D: dbSpecs.software_simulation_3d || '',
        autonomousProgramming: dbSpecs.software_autonomous_programming || '',
        trajectoryRecording: dbSpecs.software_trajectory_recording || '',
        cadCamIntegration: dbSpecs.software_cad_cam_integration || ''
      },
      applications: {
        endEffectorTypes: dbSpecs.software_end_effector_types || '',
        multiAxisMachining: dbSpecs.software_multi_axis_machining || '',
        pickPlaceOptimization: dbSpecs.software_pick_place_optimization || '',
        weldingAssembly: dbSpecs.software_welding_assembly || ''
      }
    }
  };
};

export const transformDatabaseLaserCutterSpecs = (dbSpecs: DatabaseLaserCutterSpecs): LaserCutterSpecifications => {
  return {
    laser: {
      power: {
        outputPower: dbSpecs.laser_output_power || '',
        laserType: dbSpecs.laser_type || '',
        wavelength: dbSpecs.laser_wavelength || '',
        spotSize: dbSpecs.laser_spot_size || '',
        tubeLifetime: dbSpecs.laser_tube_lifetime || ''
      },
      performance: {
        maxEngravingSpeed: dbSpecs.laser_max_engraving_speed || '',
        processingAccuracy: dbSpecs.laser_processing_accuracy || '',
        imageResolution: dbSpecs.laser_image_resolution || '',
        speedRange: dbSpecs.laser_speed_range || ''
      }
    },
    workArea: {
      processing: {
        workAreaSize: dbSpecs.work_area_size || '',
        tableSize: dbSpecs.work_table_size || '',
        maxWorkpieceHeight: dbSpecs.work_max_workpiece_height || '',
        maxCuttingThickness: dbSpecs.work_max_cutting_thickness || ''
      },
      physical: {
        machineDimensions: dbSpecs.work_machine_dimensions || '',
        totalWeight: dbSpecs.work_total_weight || '',
        rotaryEngravingDiameter: dbSpecs.work_rotary_engraving_diameter || ''
      }
    },
    vision: {
      cameras: {
        cameraResolution: dbSpecs.vision_camera_resolution || '',
        visionAccuracy: dbSpecs.vision_accuracy || '',
        previewArea: dbSpecs.vision_preview_area || '',
        autofocusLidar: dbSpecs.vision_autofocus_lidar || ''
      },
      advanced: {
        curved3DEngraving: dbSpecs.vision_curved_3d_engraving || '',
        autoPassthrough: dbSpecs.vision_auto_passthrough || '',
        electricLifting: dbSpecs.vision_electric_lifting || ''
      }
    },
    control: {
      interface: {
        touchPanelSpecs: dbSpecs.control_touch_panel_specs || '',
        controlMethods: dbSpecs.control_methods || '',
        displayLanguages: dbSpecs.control_display_languages || ''
      },
      software: {
        supportedPlatforms: dbSpecs.control_supported_platforms || '',
        osCompatibility: dbSpecs.control_os_compatibility || '',
        supportedFormats: dbSpecs.control_supported_formats || ''
      }
    },
    connectivity: {
      options: {
        wifiCapabilities: dbSpecs.connectivity_wifi_capabilities || '',
        ethernetPort: dbSpecs.connectivity_ethernet_port || '',
        usbConnections: dbSpecs.connectivity_usb_connections || '',
        mobileCompatibility: dbSpecs.connectivity_mobile_compatibility || ''
      }
    },
    safety: {
      features: {
        safetyClassification: dbSpecs.safety_classification || '',
        enclosedWorkspace: dbSpecs.safety_enclosed_workspace || '',
        emergencyStop: dbSpecs.safety_emergency_stop || '',
        automaticLocks: dbSpecs.safety_automatic_locks || '',
        warningSystems: dbSpecs.safety_warning_systems || ''
      },
      operating: {
        operatingTemperature: dbSpecs.safety_operating_temperature || '',
        storageTemperature: dbSpecs.safety_storage_temperature || '',
        powerRequirements: dbSpecs.safety_power_requirements || ''
      }
    },
    cooling: {
      system: {
        coolingCapacity: dbSpecs.cooling_capacity || '',
        airAssist: dbSpecs.cooling_air_assist || '',
        exhaustFan: dbSpecs.cooling_exhaust_fan || '',
        smokeFiltering: dbSpecs.cooling_smoke_filtering || ''
      }
    },
    materials: {
      cutting: {
        compatibleCuttingMaterials: dbSpecs.materials_compatible_cutting || '',
        cuttingDepthByMaterial: dbSpecs.materials_cutting_depth_by_material || ''
      },
      engraving: {
        engravingMaterials: dbSpecs.materials_engraving_materials || '',
        materialParameters: dbSpecs.materials_parameters || ''
      }
    }
  };
};
