import { 
  DatabasePrinterSpecs,
  DatabaseScannerSpecs,
  DatabaseRoboticDogSpecs,
  DatabaseHumanoidRobotSpecs,
  DatabaseRoboticArmSpecs,
  DatabaseLaserCutterSpecs
} from "@/services/supabase";
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
        maxLength: dbSpecs.build_volume_max_length || '',
      },
      resolution: {
        layerHeight: dbSpecs.resolution_layer_height || '',
        xyResolution: dbSpecs.resolution_xy_resolution || '',
        dimensionalAccuracy: dbSpecs.dimensional_accuracy || '',
        minWallThickness: dbSpecs.min_wall_thickness || '',
      },
      speed: {
        maxSpeed: dbSpecs.speed_max_speed || '',
        typicalRange: dbSpecs.speed_typical_range || '',
        materialDependent: dbSpecs.speed_material_dependent || undefined,
      },
    },
    technology: {
      printingTechnology: {
        type: dbSpecs.printing_technology_type || '',
        implementation: dbSpecs.printing_technology_implementation || '',
      },
      materials: {
        supportedMaterials: dbSpecs.materials_supported_materials || '',
        cartridgeSpecs: dbSpecs.materials_cartridge_specs || '',
        temperatureRange: dbSpecs.materials_temperature_range || '',
      },
    },
    hardware: {
      dimensions: {
        printerSize: dbSpecs.dimensions_printer_size || '',
        weight: dbSpecs.dimensions_weight || '',
        requiredSpace: dbSpecs.dimensions_required_space || '',
      },
      interface: {
        controlType: dbSpecs.interface_control_type || '',
        displaySpecs: dbSpecs.interface_display_specs || '',
        languages: dbSpecs.interface_languages || '',
      },
      connectivity: {
        wifi: dbSpecs.connectivity_wifi || '',
        ethernet: dbSpecs.connectivity_ethernet || '',
        usb: dbSpecs.connectivity_usb || '',
      },
    },
    environment: {
      operating: {
        temperatureRange: dbSpecs.operating_temperature_range || '',
        humidity: dbSpecs.operating_humidity || undefined,
      },
      power: {
        voltage: dbSpecs.power_voltage || '',
        consumption: dbSpecs.power_consumption || '',
        frequency: dbSpecs.power_frequency || '',
      },
    },
    advanced: {
      automation: {
        autoLeveling: dbSpecs.automation_auto_leveling || '',
        sensors: dbSpecs.automation_sensors || '',
        autoFeed: dbSpecs.automation_auto_feed || '',
      },
      software: {
        compatibleOS: dbSpecs.software_compatible_os || '',
        fileFormats: dbSpecs.software_file_formats || '',
        systemRequirements: dbSpecs.software_system_requirements || '',
      },
      qualityControl: {
        forceSensing: dbSpecs.quality_control_force_sensing || '',
        temperatureControl: dbSpecs.quality_control_temperature_control || '',
        realTimeMonitoring: dbSpecs.quality_control_real_time_monitoring || '',
      },
    },
  };
};

export const transformDatabaseScannerSpecs = (dbSpecs: DatabaseScannerSpecs): ScannerSpecifications => {
  return {
    accuracy: {
      pointAccuracy: {
        range: dbSpecs.point_accuracy_range || '',
        typical: dbSpecs.point_accuracy_typical || '',
        measurement: dbSpecs.point_accuracy_measurement || '',
      },
      volumetricAccuracy: {
        baseAccuracy: dbSpecs.volumetric_accuracy_base_accuracy || '',
        distanceCoefficient: dbSpecs.volumetric_accuracy_distance_coefficient || '',
        formula: dbSpecs.volumetric_accuracy_formula || '',
      },
      resolution: {
        measurementResolution: dbSpecs.resolution_measurement_resolution || '',
        pointDistance: dbSpecs.resolution_point_distance || '',
        outputMeshResolution: dbSpecs.resolution_output_mesh_resolution || '',
      },
    },
    speed: {
      frameRate: dbSpecs.speed_frame_rate || '',
      measurementSpeed: dbSpecs.speed_measurement_speed || '',
      dataCollectionSpeed: dbSpecs.speed_data_collection_speed || '',
    },
    captureRange: {
      singleScanRange: dbSpecs.capture_range_single_scan_range || '',
      fieldOfView: dbSpecs.capture_range_field_of_view || '',
      depthOfField: dbSpecs.capture_range_depth_of_field || '',
      workingDistance: dbSpecs.capture_range_working_distance || '',
      objectSizeCapabilities: {
        minimum: dbSpecs.object_size_capabilities_minimum || '',
        maximum: dbSpecs.object_size_capabilities_maximum || '',
        recommended: dbSpecs.object_size_capabilities_recommended || '',
      },
    },
    technology: {
      scanningTechnology: {
        type: dbSpecs.scanning_technology_type || '',
        lightSourceCharacteristics: dbSpecs.scanning_technology_light_source_characteristics || '',
        camerasAndProjectors: dbSpecs.scanning_technology_cameras_and_projectors || '',
      },
      trackingAndPositioning: {
        alignmentMethods: dbSpecs.tracking_and_positioning_alignment_methods || '',
        trackingCapabilities: dbSpecs.tracking_and_positioning_tracking_capabilities || '',
        markerSupport: dbSpecs.tracking_and_positioning_marker_support || '',
      },
    },
    compatibility: {
      sizeConstraints: {
        recommendedRange: dbSpecs.size_constraints_recommended_range || '',
        typicalCharacteristics: dbSpecs.size_constraints_typical_characteristics || '',
        maximumScannable: dbSpecs.size_constraints_maximum_scannable || '',
      },
      surfaceRequirements: {
        compatibleSurfaces: dbSpecs.surface_requirements_compatible_surfaces || '',
        processingRecommendations: dbSpecs.surface_requirements_processing_recommendations || '',
        limitations: dbSpecs.surface_requirements_limitations || '',
      },
    },
    software: {
      outputCompatibility: {
        supportedFileFormats: dbSpecs.output_compatibility_supported_file_formats || '',
        operatingSystems: dbSpecs.output_compatibility_operating_systems || '',
        mobileCompatibility: dbSpecs.output_compatibility_mobile_compatibility || '',
      },
      systemRequirements: {
        minimumSpecs: dbSpecs.system_requirements_minimum_specs || '',
        recommendedSpecs: dbSpecs.system_requirements_recommended_specs || '',
        ramGpuCpuRequirements: dbSpecs.system_requirements_ram_gpu_cpu_requirements || '',
      },
    },
    hardware: {
      equipmentCharacteristics: {
        weightAndDimensions: dbSpecs.equipment_characteristics_weight_and_dimensions || '',
        cableAndConnectivity: dbSpecs.equipment_characteristics_cable_and_connectivity || '',
        portabilityClassification: dbSpecs.equipment_characteristics_portability_classification || '',
      },
      operatingConditions: {
        indoorOutdoorCapabilities: dbSpecs.operating_conditions_indoor_outdoor_capabilities || '',
        lightingRequirements: dbSpecs.operating_conditions_lighting_requirements || '',
        environmentalConstraints: dbSpecs.operating_conditions_environmental_constraints || '',
      },
    },
    advanced: {
      scanningModes: {
        multipleOptions: dbSpecs.scanning_modes_multiple_options || '',
        textureColorCapture: dbSpecs.scanning_modes_texture_color_capture || '',
        realtimeVsPostprocessing: dbSpecs.scanning_modes_realtime_vs_postprocessing || '',
      },
      qualityControl: {
        autoCalibration: dbSpecs.quality_control_auto_calibration || '',
        errorDetectionCorrection: dbSpecs.quality_control_error_detection_correction || '',
        qualityAssessmentTools: dbSpecs.quality_control_quality_assessment_tools || '',
      },
    },
  };
};

export const transformDatabaseRoboticDogSpecs = (dbSpecs: DatabaseRoboticDogSpecs): RoboticDogSpecifications => {
  return {
    dimensions: {
      formFactor: {
        workingDimensions: dbSpecs.working_dimensions || '',
        compactDimensions: dbSpecs.compact_dimensions || '',
        totalWeight: dbSpecs.total_weight || '',
        groundClearance: dbSpecs.ground_clearance || '',
      },
      loadCapacity: {
        staticPayload: dbSpecs.static_payload || '',
        movingPayload: dbSpecs.moving_payload || '',
        armPayload: dbSpecs.arm_payload || undefined,
      },
    },
    mobility: {
      speedMovement: {
        maxSpeed: dbSpecs.max_speed || '',
        typicalRange: dbSpecs.typical_range || '',
        movementModes: dbSpecs.movement_modes || '',
      },
      terrainCapabilities: {
        maxGradient: dbSpecs.max_gradient || '',
        obstacleHeight: dbSpecs.obstacle_height || '',
        stairClimbing: dbSpecs.stair_climbing || '',
        surfaceCompatibility: dbSpecs.surface_compatibility || '',
      },
      environment: {
        temperatureRange: dbSpecs.temperature_range || '',
        humidity: dbSpecs.humidity || '',
        weatherProtection: dbSpecs.weather_protection || '',
      },
    },
    power: {
      battery: {
        capacity: dbSpecs.battery_capacity || '',
        type: dbSpecs.battery_type || '',
        runtime: dbSpecs.battery_runtime || '',
        hotSwap: dbSpecs.battery_hot_swap || '',
      },
      consumption: {
        average: dbSpecs.average_consumption || '',
        peak: dbSpecs.peak_consumption || '',
        chargingSpecs: dbSpecs.charging_specs || '',
      },
    },
    control: {
      degreesOfFreedom: {
        totalJoints: dbSpecs.total_joints || '',
        torqueSpecs: dbSpecs.torque_specs || '',
        movementRange: dbSpecs.movement_range || '',
      },
      sensing: {
        cameras: dbSpecs.cameras || '',
        lidar: dbSpecs.lidar || '',
        imuSensors: dbSpecs.imu_sensors || '',
        sensorIntegration: dbSpecs.sensor_integration || '',
      },
      computing: {
        processor: dbSpecs.processor || '',
        memory: dbSpecs.memory || '',
        additionalModules: dbSpecs.additional_modules || '',
      },
    },
    connectivity: {
      communication: {
        wifi: dbSpecs.wifi || '',
        bluetooth: dbSpecs.bluetooth || '',
        ethernet: dbSpecs.ethernet || '',
        remoteRange: dbSpecs.remote_range || '',
      },
      expansion: {
        ports: dbSpecs.ports || '',
        mountingPoints: dbSpecs.mounting_points || '',
        peripheralPower: dbSpecs.peripheral_power || '',
        sdkSupport: dbSpecs.sdk_support || '',
      },
    },
    safety: {
      emergencySystems: {
        emergencyStop: dbSpecs.emergency_stop || '',
        remoteStop: dbSpecs.remote_stop || '',
        failsafeBehavior: dbSpecs.failsafe_behavior || '',
      },
      operatingModes: {
        manual: dbSpecs.manual_mode || '',
        semiAutonomous: dbSpecs.semi_autonomous_mode || '',
        fullAutonomous: dbSpecs.full_autonomous_mode || '',
        simulationCompatibility: dbSpecs.simulation_compatibility || '',
      },
    },
  };
};

export const transformDatabaseHumanoidRobotSpecs = (dbSpecs: DatabaseHumanoidRobotSpecs): HumanoidRobotSpecifications => {
  return {
    dimensions: {
      formFactor: {
        standingHeight: dbSpecs.standing_height || '',
        weight: dbSpecs.weight || '',
        compactDimensions: dbSpecs.compact_dimensions || '',
        armSpan: dbSpecs.arm_span || '',
      },
      anthropomorphic: {
        thighLength: dbSpecs.thigh_length || '',
        armLength: dbSpecs.arm_length || '',
        proportions: dbSpecs.proportions || '',
      },
    },
    mobility: {
      movement: {
        walkingSpeed: dbSpecs.walking_speed || '',
        runningSpeed: dbSpecs.running_speed || undefined,
        movementModes: dbSpecs.movement_modes || '',
      },
      navigation: {
        stairClimbing: dbSpecs.stair_climbing || '',
        obstacleHeight: dbSpecs.obstacle_height || '',
        terrainAdaptation: dbSpecs.terrain_adaptation || '',
        balanceSystems: dbSpecs.balance_systems || '',
      },
    },
    degreesOfFreedom: {
      overall: {
        totalDOF: dbSpecs.total_dof || '',
        bodyDistribution: dbSpecs.body_distribution || '',
      },
      limbs: {
        legDOF: dbSpecs.leg_dof || '',
        armDOF: dbSpecs.arm_dof || '',
        waistTorsoDOF: dbSpecs.waist_torso_dof || '',
        headNeckDOF: dbSpecs.head_neck_dof || '',
      },
      handDexterity: {
        handDOF: dbSpecs.hand_dof || '',
        tactileFeedback: dbSpecs.tactile_feedback || '',
      },
    },
    power: {
      actuators: {
        jointTorque: dbSpecs.joint_torque || '',
        peakTorque: dbSpecs.peak_torque || '',
        actuatorType: dbSpecs.actuator_type || '',
      },
      loadCapacity: {
        operatingPayload: dbSpecs.operating_payload || '',
        armLoad: dbSpecs.arm_load || '',
        manipulationRating: dbSpecs.manipulation_rating || '',
      },
      battery: {
        capacity: dbSpecs.battery_capacity || '',
        runtime: dbSpecs.battery_runtime || '',
        chargingSpecs: dbSpecs.charging_specs || '',
        consumptionProfile: dbSpecs.consumption_profile || '',
      },
    },
    sensing: {
      vision: {
        cameras: dbSpecs.cameras || '',
        lidar3D: dbSpecs.lidar_3d || '',
        perception360: dbSpecs.perception_360 || '',
      },
      audio: {
        microphoneArray: dbSpecs.microphone_array || '',
        audioSystems: dbSpecs.audio_systems || '',
        speechRecognition: dbSpecs.speech_recognition || '',
      },
      environmental: {
        imuBalance: dbSpecs.imu_balance || '',
        tactileForce: dbSpecs.tactile_force || '',
        temperatureMonitoring: dbSpecs.temperature_monitoring || '',
      },
    },
    computing: {
      power: {
        onboardComputing: dbSpecs.onboard_computing || '',
        aiComputing: dbSpecs.ai_computing || '',
        memoryStorage: dbSpecs.memory_storage || '',
      },
      aiSystems: {
        multimodalAI: dbSpecs.multimodal_ai || '',
        realtimeProcessing: dbSpecs.realtime_processing || '',
        learningAdaptation: dbSpecs.learning_adaptation || '',
      },
    },
    connectivity: {
      communication: {
        wireless: dbSpecs.wireless || '',
        remoteControl: dbSpecs.remote_control || '',
        fleetIntegration: dbSpecs.fleet_integration || '',
      },
      control: {
        voiceCommands: dbSpecs.voice_commands || '',
        vrControl: dbSpecs.vr_control || '',
        teachingByDemonstration: dbSpecs.teaching_by_demonstration || '',
        autonomousModes: dbSpecs.autonomous_modes || '',
      },
    },
    safety: {
      systems: {
        multilevelSecurity: dbSpecs.multilevel_security || '',
        emergencyProtocols: dbSpecs.emergency_protocols || '',
        protectionLevel: dbSpecs.protection_level || '',
      },
      environment: {
        operatingConditions: dbSpecs.operating_conditions || '',
        indoorOutdoor: dbSpecs.indoor_outdoor || '',
        weatherResistance: dbSpecs.weather_resistance || '',
      },
    },
    software: {
      development: {
        sdkSupport: dbSpecs.sdk_support || '',
        frameworkCompatibility: dbSpecs.framework_compatibility || '',
        simulationIntegration: dbSpecs.simulation_integration || '',
      },
      applications: {
        serviceInteraction: dbSpecs.service_interaction || '',
        industrialSupport: dbSpecs.industrial_support || '',
        researchEducation: dbSpecs.research_education || '',
      },
    },
  };
};

export const transformDatabaseRoboticArmSpecs = (dbSpecs: DatabaseRoboticArmSpecs): RoboticArmSpecifications => {
  return {
    capacity: {
      payload: {
        maxPayload: dbSpecs.max_payload || '',
        maxReach: dbSpecs.max_reach || '',
        nominalPayload: dbSpecs.nominal_payload || '',
        momentInertia: dbSpecs.moment_inertia || '',
      },
      accuracy: {
        repeatability: dbSpecs.repeatability || '',
        positioningAccuracy: dbSpecs.positioning_accuracy || '',
        pathAccuracy: dbSpecs.path_accuracy || '',
        absoluteAccuracy: dbSpecs.absolute_accuracy || '',
      },
      speed: {
        maxToolSpeed: dbSpecs.max_tool_speed || '',
        jointAngularSpeed: dbSpecs.joint_angular_speed || '',
        acceleration: dbSpecs.acceleration || '',
        cycleTime: dbSpecs.cycle_time || '',
      },
    },
    mechanical: {
      degreesOfFreedom: {
        axesCount: dbSpecs.axes_count || '',
        jointRange: dbSpecs.joint_range || '',
        infiniteRotation: dbSpecs.infinite_rotation || '',
      },
      physical: {
        manipulatorWeight: dbSpecs.manipulator_weight || '',
        baseDimensions: dbSpecs.base_dimensions || '',
        mountingOptions: dbSpecs.mounting_options || '',
        constructionMaterial: dbSpecs.construction_material || '',
      },
    },
    control: {
      programming: {
        graphicalEnvironments: dbSpecs.graphical_environments || '',
        teachByDemonstration: dbSpecs.teach_by_demonstration || '',
        programmingLanguages: dbSpecs.programming_languages || '',
        dragDropInterface: dbSpecs.drag_drop_interface || '',
      },
      methods: {
        pcSoftware: dbSpecs.pc_software || '',
        mobileApp: dbSpecs.mobile_app || '',
        voiceControl: dbSpecs.voice_control || '',
        gestureVision: dbSpecs.gesture_vision || '',
      },
    },
    connectivity: {
      communication: {
        ethernet: dbSpecs.ethernet || '',
        usb: dbSpecs.usb || '',
        wireless: dbSpecs.wireless || '',
        endEffectorComm: dbSpecs.end_effector_comm || '',
      },
      io: {
        digitalIO: dbSpecs.digital_io || '',
        analogIO: dbSpecs.analog_io || '',
        toolConnectorIO: dbSpecs.tool_connector_io || '',
        endEffectorProtocols: dbSpecs.end_effector_protocols || '',
      },
    },
    power: {
      requirements: {
        inputVoltage: dbSpecs.input_voltage || '',
        powerConsumption: dbSpecs.power_consumption || '',
        currentRequirements: dbSpecs.current_requirements || '',
      },
      operating: {
        temperatureRange: dbSpecs.temperature_range || '',
        humidity: dbSpecs.humidity || undefined,
        ipRating: dbSpecs.ip_rating || '',
        cleanroomClass: dbSpecs.cleanroom_class || '',
      },
    },
    safety: {
      functions: {
        collisionDetection: dbSpecs.collision_detection || '',
        safetyBoundaries: dbSpecs.safety_boundaries || '',
        emergencyStop: dbSpecs.emergency_stop || '',
        forceTorqueLimiting: dbSpecs.force_torque_limiting || '',
        selfCollisionPrevention: dbSpecs.self_collision_prevention || '',
      },
      collaborative: {
        advancedSafetyFeatures: dbSpecs.advanced_safety_features || '',
        forceSensing: dbSpecs.force_sensing || '',
        speedSeparation: dbSpecs.speed_separation || '',
        safeOperatingModes: dbSpecs.safe_operating_modes || '',
      },
    },
    software: {
      development: {
        simulation3D: dbSpecs.simulation_3d || '',
        autonomousProgramming: dbSpecs.autonomous_programming || '',
        trajectoryRecording: dbSpecs.trajectory_recording || '',
        cadCamIntegration: dbSpecs.cad_cam_integration || '',
      },
      applications: {
        endEffectorTypes: dbSpecs.end_effector_types || '',
        multiAxisMachining: dbSpecs.multi_axis_machining || '',
        pickPlaceOptimization: dbSpecs.pick_place_optimization || '',
        weldingAssembly: dbSpecs.welding_assembly || '',
      },
    },
  };
};

export const transformDatabaseLaserCutterSpecs = (dbSpecs: DatabaseLaserCutterSpecs): LaserCutterSpecifications => {
  return {
    laser: {
      power: {
        outputPower: dbSpecs.output_power || '',
        laserType: dbSpecs.laser_type || '',
        wavelength: dbSpecs.wavelength || '',
        spotSize: dbSpecs.spot_size || '',
        tubeLifetime: dbSpecs.tube_lifetime || '',
      },
      performance: {
        maxEngravingSpeed: dbSpecs.max_engraving_speed || '',
        processingAccuracy: dbSpecs.processing_accuracy || '',
        imageResolution: dbSpecs.image_resolution || '',
        speedRange: dbSpecs.speed_range || '',
      },
    },
    workArea: {
      processing: {
        workAreaSize: dbSpecs.work_area_size || '',
        tableSize: dbSpecs.table_size || '',
        maxWorkpieceHeight: dbSpecs.max_workpiece_height || '',
        maxCuttingThickness: dbSpecs.max_cutting_thickness || '',
      },
      physical: {
        machineDimensions: dbSpecs.machine_dimensions || '',
        totalWeight: dbSpecs.total_weight || '',
        rotaryEngravingDiameter: dbSpecs.rotary_engraving_diameter || '',
      },
    },
    vision: {
      cameras: {
        cameraResolution: dbSpecs.camera_resolution || '',
        visionAccuracy: dbSpecs.vision_accuracy || '',
        previewArea: dbSpecs.preview_area || '',
        autofocusLidar: dbSpecs.autofocus_lidar || '',
      },
      advanced: {
        curved3DEngraving: dbSpecs.curved_3d_engraving || '',
        autoPassthrough: dbSpecs.auto_passthrough || '',
        electricLifting: dbSpecs.electric_lifting || '',
      },
    },
    control: {
      interface: {
        touchPanelSpecs: dbSpecs.touch_panel_specs || '',
        controlMethods: dbSpecs.control_methods || '',
        displayLanguages: dbSpecs.display_languages || '',
      },
      software: {
        supportedPlatforms: dbSpecs.supported_platforms || '',
        osCompatibility: dbSpecs.os_compatibility || '',
        supportedFormats: dbSpecs.supported_formats || '',
      },
    },
    connectivity: {
      options: {
        wifiCapabilities: dbSpecs.wifi_capabilities || '',
        ethernetPort: dbSpecs.ethernet_port || '',
        usbConnections: dbSpecs.usb_connections || '',
        mobileCompatibility: dbSpecs.mobile_compatibility || '',
      },
    },
    safety: {
      features: {
        safetyClassification: dbSpecs.safety_classification || '',
        enclosedWorkspace: dbSpecs.enclosed_workspace || '',
        emergencyStop: dbSpecs.emergency_stop || '',
        automaticLocks: dbSpecs.automatic_locks || '',
        warningSystems: dbSpecs.warning_systems || '',
      },
      operating: {
        operatingTemperature: dbSpecs.operating_temperature || '',
        storageTemperature: dbSpecs.storage_temperature || '',
        powerRequirements: dbSpecs.power_requirements || '',
      },
    },
    cooling: {
      system: {
        coolingCapacity: dbSpecs.cooling_capacity || '',
        airAssist: dbSpecs.air_assist || '',
        exhaustFan: dbSpecs.exhaust_fan || '',
        smokeFiltering: dbSpecs.smoke_filtering || '',
      },
    },
    materials: {
      cutting: {
        compatibleCuttingMaterials: dbSpecs.compatible_cutting_materials || '',
        cuttingDepthByMaterial: dbSpecs.cutting_depth_by_material || '',
      },
      engraving: {
        engravingMaterials: dbSpecs.engraving_materials || '',
        materialParameters: dbSpecs.material_parameters || '',
      },
    },
  };
};
