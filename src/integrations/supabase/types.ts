export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      humanoid_robot_specifications: {
        Row: {
          actuators_actuatorType: string
          actuators_jointTorque: string
          actuators_peakTorque: string
          aiSystems_learningAdaptation: string
          aiSystems_multimodalAI: string
          aiSystems_realtimeProcessing: string
          anthropomorphic_armLength: string
          anthropomorphic_proportions: string
          anthropomorphic_thighLength: string
          applications_industrialSupport: string
          applications_researchEducation: string
          applications_serviceInteraction: string
          audio_audioSystems: string
          audio_microphoneArray: string
          audio_speechRecognition: string
          battery_capacity: string
          battery_chargingSpecs: string
          battery_consumptionProfile: string
          battery_runtime: string
          communication_fleetIntegration: string
          communication_remoteControl: string
          communication_wireless: string
          control_autonomousModes: string
          control_teachingByDemonstration: string
          control_voiceCommands: string
          control_vrControl: string
          development_frameworkCompatibility: string
          development_sdkSupport: string
          development_simulationIntegration: string
          environment_indoorOutdoor: string
          environment_operatingConditions: string
          environment_weatherResistance: string
          environmental_imuBalance: string
          environmental_tactileForce: string
          environmental_temperatureMonitoring: string
          formFactor_armSpan: string
          formFactor_compactDimensions: string
          formFactor_standingHeight: string
          formFactor_weight: string
          handDexterity_handDOF: string
          handDexterity_tactileFeedback: string
          limbs_armDOF: string
          limbs_headNeckDOF: string
          limbs_legDOF: string
          limbs_waistTorsoDOF: string
          loadCapacity_armLoad: string
          loadCapacity_manipulationRating: string
          loadCapacity_operatingPayload: string
          movement_movementModes: string
          movement_runningSpeed: string | null
          movement_walkingSpeed: string
          navigation_balanceSystems: string
          navigation_obstacleHeight: string
          navigation_stairClimbing: string
          navigation_terrainAdaptation: string
          overall_bodyDistribution: string
          overall_totalDOF: string
          power_aiComputing: string
          power_memoryStorage: string
          power_onboardComputing: string
          productId: string
          systems_emergencyProtocols: string
          systems_multilevelSecurity: string
          systems_protectionLevel: string
          vision_cameras: string
          vision_lidar3D: string
          vision_perception360: string
        }
        Insert: {
          actuators_actuatorType: string
          actuators_jointTorque: string
          actuators_peakTorque: string
          aiSystems_learningAdaptation: string
          aiSystems_multimodalAI: string
          aiSystems_realtimeProcessing: string
          anthropomorphic_armLength: string
          anthropomorphic_proportions: string
          anthropomorphic_thighLength: string
          applications_industrialSupport: string
          applications_researchEducation: string
          applications_serviceInteraction: string
          audio_audioSystems: string
          audio_microphoneArray: string
          audio_speechRecognition: string
          battery_capacity: string
          battery_chargingSpecs: string
          battery_consumptionProfile: string
          battery_runtime: string
          communication_fleetIntegration: string
          communication_remoteControl: string
          communication_wireless: string
          control_autonomousModes: string
          control_teachingByDemonstration: string
          control_voiceCommands: string
          control_vrControl: string
          development_frameworkCompatibility: string
          development_sdkSupport: string
          development_simulationIntegration: string
          environment_indoorOutdoor: string
          environment_operatingConditions: string
          environment_weatherResistance: string
          environmental_imuBalance: string
          environmental_tactileForce: string
          environmental_temperatureMonitoring: string
          formFactor_armSpan: string
          formFactor_compactDimensions: string
          formFactor_standingHeight: string
          formFactor_weight: string
          handDexterity_handDOF: string
          handDexterity_tactileFeedback: string
          limbs_armDOF: string
          limbs_headNeckDOF: string
          limbs_legDOF: string
          limbs_waistTorsoDOF: string
          loadCapacity_armLoad: string
          loadCapacity_manipulationRating: string
          loadCapacity_operatingPayload: string
          movement_movementModes: string
          movement_runningSpeed?: string | null
          movement_walkingSpeed: string
          navigation_balanceSystems: string
          navigation_obstacleHeight: string
          navigation_stairClimbing: string
          navigation_terrainAdaptation: string
          overall_bodyDistribution: string
          overall_totalDOF: string
          power_aiComputing: string
          power_memoryStorage: string
          power_onboardComputing: string
          productId: string
          systems_emergencyProtocols: string
          systems_multilevelSecurity: string
          systems_protectionLevel: string
          vision_cameras: string
          vision_lidar3D: string
          vision_perception360: string
        }
        Update: {
          actuators_actuatorType?: string
          actuators_jointTorque?: string
          actuators_peakTorque?: string
          aiSystems_learningAdaptation?: string
          aiSystems_multimodalAI?: string
          aiSystems_realtimeProcessing?: string
          anthropomorphic_armLength?: string
          anthropomorphic_proportions?: string
          anthropomorphic_thighLength?: string
          applications_industrialSupport?: string
          applications_researchEducation?: string
          applications_serviceInteraction?: string
          audio_audioSystems?: string
          audio_microphoneArray?: string
          audio_speechRecognition?: string
          battery_capacity?: string
          battery_chargingSpecs?: string
          battery_consumptionProfile?: string
          battery_runtime?: string
          communication_fleetIntegration?: string
          communication_remoteControl?: string
          communication_wireless?: string
          control_autonomousModes?: string
          control_teachingByDemonstration?: string
          control_voiceCommands?: string
          control_vrControl?: string
          development_frameworkCompatibility?: string
          development_sdkSupport?: string
          development_simulationIntegration?: string
          environment_indoorOutdoor?: string
          environment_operatingConditions?: string
          environment_weatherResistance?: string
          environmental_imuBalance?: string
          environmental_tactileForce?: string
          environmental_temperatureMonitoring?: string
          formFactor_armSpan?: string
          formFactor_compactDimensions?: string
          formFactor_standingHeight?: string
          formFactor_weight?: string
          handDexterity_handDOF?: string
          handDexterity_tactileFeedback?: string
          limbs_armDOF?: string
          limbs_headNeckDOF?: string
          limbs_legDOF?: string
          limbs_waistTorsoDOF?: string
          loadCapacity_armLoad?: string
          loadCapacity_manipulationRating?: string
          loadCapacity_operatingPayload?: string
          movement_movementModes?: string
          movement_runningSpeed?: string | null
          movement_walkingSpeed?: string
          navigation_balanceSystems?: string
          navigation_obstacleHeight?: string
          navigation_stairClimbing?: string
          navigation_terrainAdaptation?: string
          overall_bodyDistribution?: string
          overall_totalDOF?: string
          power_aiComputing?: string
          power_memoryStorage?: string
          power_onboardComputing?: string
          productId?: string
          systems_emergencyProtocols?: string
          systems_multilevelSecurity?: string
          systems_protectionLevel?: string
          vision_cameras?: string
          vision_lidar3D?: string
          vision_perception360?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_product"
            columns: ["productId"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      laser_cutter_specifications: {
        Row: {
          advanced_autoPassthrough: string
          advanced_curved3DEngraving: string
          advanced_electricLifting: string
          cameras_autofocusLidar: string
          cameras_cameraResolution: string
          cameras_previewArea: string
          cameras_visionAccuracy: string
          cutting_compatibleCuttingMaterials: string
          cutting_cuttingDepthByMaterial: string
          engraving_engravingMaterials: string
          engraving_materialParameters: string
          features_automaticLocks: string
          features_emergencyStop: string
          features_enclosedWorkspace: string
          features_safetyClassification: string
          features_warningSystems: string
          interface_controlMethods: string
          interface_displayLanguages: string
          interface_touchPanelSpecs: string
          operating_operatingTemperature: string
          operating_powerRequirements: string
          operating_storageTemperature: string
          options_ethernetPort: string
          options_mobileCompatibility: string
          options_usbConnections: string
          options_wifiCapabilities: string
          performance_imageResolution: string
          performance_maxEngravingSpeed: string
          performance_processingAccuracy: string
          performance_speedRange: string
          physical_machineDimensions: string
          physical_rotaryEngravingDiameter: string
          physical_totalWeight: string
          power_laserType: string
          power_outputPower: string
          power_spotSize: string
          power_tubeLifetime: string
          power_wavelength: string
          processing_maxCuttingThickness: string
          processing_maxWorkpieceHeight: string
          processing_tableSize: string
          processing_workAreaSize: string
          productId: string
          software_osCompatibility: string
          software_supportedFormats: string
          software_supportedPlatforms: string
          system_airAssist: string
          system_coolingCapacity: string
          system_exhaustFan: string
          system_smokeFiltering: string
        }
        Insert: {
          advanced_autoPassthrough: string
          advanced_curved3DEngraving: string
          advanced_electricLifting: string
          cameras_autofocusLidar: string
          cameras_cameraResolution: string
          cameras_previewArea: string
          cameras_visionAccuracy: string
          cutting_compatibleCuttingMaterials: string
          cutting_cuttingDepthByMaterial: string
          engraving_engravingMaterials: string
          engraving_materialParameters: string
          features_automaticLocks: string
          features_emergencyStop: string
          features_enclosedWorkspace: string
          features_safetyClassification: string
          features_warningSystems: string
          interface_controlMethods: string
          interface_displayLanguages: string
          interface_touchPanelSpecs: string
          operating_operatingTemperature: string
          operating_powerRequirements: string
          operating_storageTemperature: string
          options_ethernetPort: string
          options_mobileCompatibility: string
          options_usbConnections: string
          options_wifiCapabilities: string
          performance_imageResolution: string
          performance_maxEngravingSpeed: string
          performance_processingAccuracy: string
          performance_speedRange: string
          physical_machineDimensions: string
          physical_rotaryEngravingDiameter: string
          physical_totalWeight: string
          power_laserType: string
          power_outputPower: string
          power_spotSize: string
          power_tubeLifetime: string
          power_wavelength: string
          processing_maxCuttingThickness: string
          processing_maxWorkpieceHeight: string
          processing_tableSize: string
          processing_workAreaSize: string
          productId: string
          software_osCompatibility: string
          software_supportedFormats: string
          software_supportedPlatforms: string
          system_airAssist: string
          system_coolingCapacity: string
          system_exhaustFan: string
          system_smokeFiltering: string
        }
        Update: {
          advanced_autoPassthrough?: string
          advanced_curved3DEngraving?: string
          advanced_electricLifting?: string
          cameras_autofocusLidar?: string
          cameras_cameraResolution?: string
          cameras_previewArea?: string
          cameras_visionAccuracy?: string
          cutting_compatibleCuttingMaterials?: string
          cutting_cuttingDepthByMaterial?: string
          engraving_engravingMaterials?: string
          engraving_materialParameters?: string
          features_automaticLocks?: string
          features_emergencyStop?: string
          features_enclosedWorkspace?: string
          features_safetyClassification?: string
          features_warningSystems?: string
          interface_controlMethods?: string
          interface_displayLanguages?: string
          interface_touchPanelSpecs?: string
          operating_operatingTemperature?: string
          operating_powerRequirements?: string
          operating_storageTemperature?: string
          options_ethernetPort?: string
          options_mobileCompatibility?: string
          options_usbConnections?: string
          options_wifiCapabilities?: string
          performance_imageResolution?: string
          performance_maxEngravingSpeed?: string
          performance_processingAccuracy?: string
          performance_speedRange?: string
          physical_machineDimensions?: string
          physical_rotaryEngravingDiameter?: string
          physical_totalWeight?: string
          power_laserType?: string
          power_outputPower?: string
          power_spotSize?: string
          power_tubeLifetime?: string
          power_wavelength?: string
          processing_maxCuttingThickness?: string
          processing_maxWorkpieceHeight?: string
          processing_tableSize?: string
          processing_workAreaSize?: string
          productId?: string
          software_osCompatibility?: string
          software_supportedFormats?: string
          software_supportedPlatforms?: string
          system_airAssist?: string
          system_coolingCapacity?: string
          system_exhaustFan?: string
          system_smokeFiltering?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_product"
            columns: ["productId"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      printer_specifications: {
        Row: {
          automation_autoFeed: string
          automation_autoLeveling: string
          automation_sensors: string
          buildVolume_area: string
          buildVolume_dimensions: string
          buildVolume_maxLength: string
          connectivity_ethernet: string
          connectivity_usb: string
          connectivity_wifi: string
          dimensions_printerSize: string
          dimensions_requiredSpace: string
          dimensions_weight: string
          interface_controlType: string
          interface_displaySpecs: string
          interface_languages: string
          materials_cartridgeSpecs: string
          materials_supportedMaterials: string
          materials_temperatureRange: string
          operating_humidity: string | null
          operating_temperatureRange: string
          power_consumption: string
          power_frequency: string
          power_voltage: string
          printingTechnology_implementation: string
          printingTechnology_type: string
          productId: string
          qualityControl_forceSensing: string
          qualityControl_realTimeMonitoring: string
          qualityControl_temperatureControl: string
          resolution_dimensionalAccuracy: string
          resolution_layerHeight: string
          resolution_minWallThickness: string
          resolution_xyResolution: string
          software_compatibleOS: string
          software_fileFormats: string
          software_systemRequirements: string
          speed_materialDependent: string | null
          speed_maxSpeed: string
          speed_typicalRange: string
        }
        Insert: {
          automation_autoFeed: string
          automation_autoLeveling: string
          automation_sensors: string
          buildVolume_area: string
          buildVolume_dimensions: string
          buildVolume_maxLength: string
          connectivity_ethernet: string
          connectivity_usb: string
          connectivity_wifi: string
          dimensions_printerSize: string
          dimensions_requiredSpace: string
          dimensions_weight: string
          interface_controlType: string
          interface_displaySpecs: string
          interface_languages: string
          materials_cartridgeSpecs: string
          materials_supportedMaterials: string
          materials_temperatureRange: string
          operating_humidity?: string | null
          operating_temperatureRange: string
          power_consumption: string
          power_frequency: string
          power_voltage: string
          printingTechnology_implementation: string
          printingTechnology_type: string
          productId: string
          qualityControl_forceSensing: string
          qualityControl_realTimeMonitoring: string
          qualityControl_temperatureControl: string
          resolution_dimensionalAccuracy: string
          resolution_layerHeight: string
          resolution_minWallThickness: string
          resolution_xyResolution: string
          software_compatibleOS: string
          software_fileFormats: string
          software_systemRequirements: string
          speed_materialDependent?: string | null
          speed_maxSpeed: string
          speed_typicalRange: string
        }
        Update: {
          automation_autoFeed?: string
          automation_autoLeveling?: string
          automation_sensors?: string
          buildVolume_area?: string
          buildVolume_dimensions?: string
          buildVolume_maxLength?: string
          connectivity_ethernet?: string
          connectivity_usb?: string
          connectivity_wifi?: string
          dimensions_printerSize?: string
          dimensions_requiredSpace?: string
          dimensions_weight?: string
          interface_controlType?: string
          interface_displaySpecs?: string
          interface_languages?: string
          materials_cartridgeSpecs?: string
          materials_supportedMaterials?: string
          materials_temperatureRange?: string
          operating_humidity?: string | null
          operating_temperatureRange?: string
          power_consumption?: string
          power_frequency?: string
          power_voltage?: string
          printingTechnology_implementation?: string
          printingTechnology_type?: string
          productId?: string
          qualityControl_forceSensing?: string
          qualityControl_realTimeMonitoring?: string
          qualityControl_temperatureControl?: string
          resolution_dimensionalAccuracy?: string
          resolution_layerHeight?: string
          resolution_minWallThickness?: string
          resolution_xyResolution?: string
          software_compatibleOS?: string
          software_fileFormats?: string
          software_systemRequirements?: string
          speed_materialDependent?: string | null
          speed_maxSpeed?: string
          speed_typicalRange?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_product"
            columns: ["productId"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          brand: string
          category: string
          createdAt: string
          demoVideo: string | null
          features: string[]
          fts_document: unknown | null
          fullDescription: string
          id: string
          images: string[]
          leadTime: string
          name: string
          popular: boolean | null
          power: string | null
          pricing: Json
          rating: number
          reviewCount: number
          shipping: Json
          shortDescription: string
          slug: string | null
          stockStatus: Database["public"]["Enums"]["stock_status"]
          type: string | null
          updatedAt: string
        }
        Insert: {
          brand: string
          category: string
          createdAt?: string
          demoVideo?: string | null
          features: string[]
          fts_document?: unknown | null
          fullDescription: string
          id?: string
          images: string[]
          leadTime: string
          name: string
          popular?: boolean | null
          power?: string | null
          pricing: Json
          rating?: number
          reviewCount?: number
          shipping: Json
          shortDescription: string
          slug?: string | null
          stockStatus: Database["public"]["Enums"]["stock_status"]
          type?: string | null
          updatedAt?: string
        }
        Update: {
          brand?: string
          category?: string
          createdAt?: string
          demoVideo?: string | null
          features?: string[]
          fts_document?: unknown | null
          fullDescription?: string
          id?: string
          images?: string[]
          leadTime?: string
          name?: string
          popular?: boolean | null
          power?: string | null
          pricing?: Json
          rating?: number
          reviewCount?: number
          shipping?: Json
          shortDescription?: string
          slug?: string | null
          stockStatus?: Database["public"]["Enums"]["stock_status"]
          type?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          author: string
          comment: string
          createdAt: string
          date: string
          id: number
          productId: string
          rating: number
          userId: string | null
        }
        Insert: {
          author: string
          comment: string
          createdAt?: string
          date: string
          id?: number
          productId: string
          rating: number
          userId?: string | null
        }
        Update: {
          author?: string
          comment?: string
          createdAt?: string
          date?: string
          id?: number
          productId?: string
          rating?: number
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_productId_fkey"
            columns: ["productId"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      robotic_arm_specifications: {
        Row: {
          accuracy_absoluteAccuracy: string
          accuracy_pathAccuracy: string
          accuracy_positioningAccuracy: string
          accuracy_repeatability: string
          applications_endEffectorTypes: string
          applications_multiAxisMachining: string
          applications_pickPlaceOptimization: string
          applications_weldingAssembly: string
          collaborative_advancedSafetyFeatures: string
          collaborative_forceSensing: string
          collaborative_safeOperatingModes: string
          collaborative_speedSeparation: string
          communication_endEffectorComm: string
          communication_ethernet: string
          communication_usb: string
          communication_wireless: string
          degreesOfFreedom_axesCount: string
          degreesOfFreedom_infiniteRotation: string
          degreesOfFreedom_jointRange: string
          development_autonomousProgramming: string
          development_cadCamIntegration: string
          development_simulation3D: string
          development_trajectoryRecording: string
          functions_collisionDetection: string
          functions_emergencyStop: string
          functions_forceTorqueLimiting: string
          functions_safetyBoundaries: string
          functions_selfCollisionPrevention: string
          io_analogIO: string
          io_digitalIO: string
          io_endEffectorProtocols: string
          io_toolConnectorIO: string
          methods_gestureVision: string
          methods_mobileApp: string
          methods_pcSoftware: string
          methods_voiceControl: string
          operating_cleanroomClass: string
          operating_humidity: string | null
          operating_ipRating: string
          operating_temperatureRange: string
          payload_maxPayload: string
          payload_maxReach: string
          payload_momentInertia: string
          payload_nominalPayload: string
          physical_baseDimensions: string
          physical_constructionMaterial: string
          physical_manipulatorWeight: string
          physical_mountingOptions: string
          productId: string
          programming_dragDropInterface: string
          programming_graphicalEnvironments: string
          programming_programmingLanguages: string
          programming_teachByDemonstration: string
          requirements_currentRequirements: string
          requirements_inputVoltage: string
          requirements_powerConsumption: string
          speed_acceleration: string
          speed_cycleTime: string
          speed_jointAngularSpeed: string
          speed_maxToolSpeed: string
        }
        Insert: {
          accuracy_absoluteAccuracy: string
          accuracy_pathAccuracy: string
          accuracy_positioningAccuracy: string
          accuracy_repeatability: string
          applications_endEffectorTypes: string
          applications_multiAxisMachining: string
          applications_pickPlaceOptimization: string
          applications_weldingAssembly: string
          collaborative_advancedSafetyFeatures: string
          collaborative_forceSensing: string
          collaborative_safeOperatingModes: string
          collaborative_speedSeparation: string
          communication_endEffectorComm: string
          communication_ethernet: string
          communication_usb: string
          communication_wireless: string
          degreesOfFreedom_axesCount: string
          degreesOfFreedom_infiniteRotation: string
          degreesOfFreedom_jointRange: string
          development_autonomousProgramming: string
          development_cadCamIntegration: string
          development_simulation3D: string
          development_trajectoryRecording: string
          functions_collisionDetection: string
          functions_emergencyStop: string
          functions_forceTorqueLimiting: string
          functions_safetyBoundaries: string
          functions_selfCollisionPrevention: string
          io_analogIO: string
          io_digitalIO: string
          io_endEffectorProtocols: string
          io_toolConnectorIO: string
          methods_gestureVision: string
          methods_mobileApp: string
          methods_pcSoftware: string
          methods_voiceControl: string
          operating_cleanroomClass: string
          operating_humidity?: string | null
          operating_ipRating: string
          operating_temperatureRange: string
          payload_maxPayload: string
          payload_maxReach: string
          payload_momentInertia: string
          payload_nominalPayload: string
          physical_baseDimensions: string
          physical_constructionMaterial: string
          physical_manipulatorWeight: string
          physical_mountingOptions: string
          productId: string
          programming_dragDropInterface: string
          programming_graphicalEnvironments: string
          programming_programmingLanguages: string
          programming_teachByDemonstration: string
          requirements_currentRequirements: string
          requirements_inputVoltage: string
          requirements_powerConsumption: string
          speed_acceleration: string
          speed_cycleTime: string
          speed_jointAngularSpeed: string
          speed_maxToolSpeed: string
        }
        Update: {
          accuracy_absoluteAccuracy?: string
          accuracy_pathAccuracy?: string
          accuracy_positioningAccuracy?: string
          accuracy_repeatability?: string
          applications_endEffectorTypes?: string
          applications_multiAxisMachining?: string
          applications_pickPlaceOptimization?: string
          applications_weldingAssembly?: string
          collaborative_advancedSafetyFeatures?: string
          collaborative_forceSensing?: string
          collaborative_safeOperatingModes?: string
          collaborative_speedSeparation?: string
          communication_endEffectorComm?: string
          communication_ethernet?: string
          communication_usb?: string
          communication_wireless?: string
          degreesOfFreedom_axesCount?: string
          degreesOfFreedom_infiniteRotation?: string
          degreesOfFreedom_jointRange?: string
          development_autonomousProgramming?: string
          development_cadCamIntegration?: string
          development_simulation3D?: string
          development_trajectoryRecording?: string
          functions_collisionDetection?: string
          functions_emergencyStop?: string
          functions_forceTorqueLimiting?: string
          functions_safetyBoundaries?: string
          functions_selfCollisionPrevention?: string
          io_analogIO?: string
          io_digitalIO?: string
          io_endEffectorProtocols?: string
          io_toolConnectorIO?: string
          methods_gestureVision?: string
          methods_mobileApp?: string
          methods_pcSoftware?: string
          methods_voiceControl?: string
          operating_cleanroomClass?: string
          operating_humidity?: string | null
          operating_ipRating?: string
          operating_temperatureRange?: string
          payload_maxPayload?: string
          payload_maxReach?: string
          payload_momentInertia?: string
          payload_nominalPayload?: string
          physical_baseDimensions?: string
          physical_constructionMaterial?: string
          physical_manipulatorWeight?: string
          physical_mountingOptions?: string
          productId?: string
          programming_dragDropInterface?: string
          programming_graphicalEnvironments?: string
          programming_programmingLanguages?: string
          programming_teachByDemonstration?: string
          requirements_currentRequirements?: string
          requirements_inputVoltage?: string
          requirements_powerConsumption?: string
          speed_acceleration?: string
          speed_cycleTime?: string
          speed_jointAngularSpeed?: string
          speed_maxToolSpeed?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_product"
            columns: ["productId"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      robotic_dog_specifications: {
        Row: {
          battery_capacity: string
          battery_hotSwap: string
          battery_runtime: string
          battery_type: string
          communication_bluetooth: string
          communication_ethernet: string
          communication_remoteRange: string
          communication_wifi: string
          computing_additionalModules: string
          computing_memory: string
          computing_processor: string
          consumption_average: string
          consumption_chargingSpecs: string
          consumption_peak: string
          degreesOfFreedom_movementRange: string
          degreesOfFreedom_torqueSpecs: string
          degreesOfFreedom_totalJoints: string
          emergencySystems_emergencyStop: string
          emergencySystems_failsafeBehavior: string
          emergencySystems_remoteStop: string
          environment_humidity: string
          environment_temperatureRange: string
          environment_weatherProtection: string
          expansion_mountingPoints: string
          expansion_peripheralPower: string
          expansion_ports: string
          expansion_sdkSupport: string
          formFactor_compactDimensions: string
          formFactor_groundClearance: string
          formFactor_totalWeight: string
          formFactor_workingDimensions: string
          loadCapacity_armPayload: string | null
          loadCapacity_movingPayload: string
          loadCapacity_staticPayload: string
          operatingModes_fullAutonomous: string
          operatingModes_manual: string
          operatingModes_semiAutonomous: string
          operatingModes_simulationCompatibility: string
          productId: string
          sensing_cameras: string
          sensing_imuSensors: string
          sensing_lidar: string
          sensing_sensorIntegration: string
          speedMovement_maxSpeed: string
          speedMovement_movementModes: string
          speedMovement_typicalRange: string
          terrainCapabilities_maxGradient: string
          terrainCapabilities_obstacleHeight: string
          terrainCapabilities_stairClimbing: string
          terrainCapabilities_surfaceCompatibility: string
        }
        Insert: {
          battery_capacity: string
          battery_hotSwap: string
          battery_runtime: string
          battery_type: string
          communication_bluetooth: string
          communication_ethernet: string
          communication_remoteRange: string
          communication_wifi: string
          computing_additionalModules: string
          computing_memory: string
          computing_processor: string
          consumption_average: string
          consumption_chargingSpecs: string
          consumption_peak: string
          degreesOfFreedom_movementRange: string
          degreesOfFreedom_torqueSpecs: string
          degreesOfFreedom_totalJoints: string
          emergencySystems_emergencyStop: string
          emergencySystems_failsafeBehavior: string
          emergencySystems_remoteStop: string
          environment_humidity: string
          environment_temperatureRange: string
          environment_weatherProtection: string
          expansion_mountingPoints: string
          expansion_peripheralPower: string
          expansion_ports: string
          expansion_sdkSupport: string
          formFactor_compactDimensions: string
          formFactor_groundClearance: string
          formFactor_totalWeight: string
          formFactor_workingDimensions: string
          loadCapacity_armPayload?: string | null
          loadCapacity_movingPayload: string
          loadCapacity_staticPayload: string
          operatingModes_fullAutonomous: string
          operatingModes_manual: string
          operatingModes_semiAutonomous: string
          operatingModes_simulationCompatibility: string
          productId: string
          sensing_cameras: string
          sensing_imuSensors: string
          sensing_lidar: string
          sensing_sensorIntegration: string
          speedMovement_maxSpeed: string
          speedMovement_movementModes: string
          speedMovement_typicalRange: string
          terrainCapabilities_maxGradient: string
          terrainCapabilities_obstacleHeight: string
          terrainCapabilities_stairClimbing: string
          terrainCapabilities_surfaceCompatibility: string
        }
        Update: {
          battery_capacity?: string
          battery_hotSwap?: string
          battery_runtime?: string
          battery_type?: string
          communication_bluetooth?: string
          communication_ethernet?: string
          communication_remoteRange?: string
          communication_wifi?: string
          computing_additionalModules?: string
          computing_memory?: string
          computing_processor?: string
          consumption_average?: string
          consumption_chargingSpecs?: string
          consumption_peak?: string
          degreesOfFreedom_movementRange?: string
          degreesOfFreedom_torqueSpecs?: string
          degreesOfFreedom_totalJoints?: string
          emergencySystems_emergencyStop?: string
          emergencySystems_failsafeBehavior?: string
          emergencySystems_remoteStop?: string
          environment_humidity?: string
          environment_temperatureRange?: string
          environment_weatherProtection?: string
          expansion_mountingPoints?: string
          expansion_peripheralPower?: string
          expansion_ports?: string
          expansion_sdkSupport?: string
          formFactor_compactDimensions?: string
          formFactor_groundClearance?: string
          formFactor_totalWeight?: string
          formFactor_workingDimensions?: string
          loadCapacity_armPayload?: string | null
          loadCapacity_movingPayload?: string
          loadCapacity_staticPayload?: string
          operatingModes_fullAutonomous?: string
          operatingModes_manual?: string
          operatingModes_semiAutonomous?: string
          operatingModes_simulationCompatibility?: string
          productId?: string
          sensing_cameras?: string
          sensing_imuSensors?: string
          sensing_lidar?: string
          sensing_sensorIntegration?: string
          speedMovement_maxSpeed?: string
          speedMovement_movementModes?: string
          speedMovement_typicalRange?: string
          terrainCapabilities_maxGradient?: string
          terrainCapabilities_obstacleHeight?: string
          terrainCapabilities_stairClimbing?: string
          terrainCapabilities_surfaceCompatibility?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_product"
            columns: ["productId"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      scanner_specifications: {
        Row: {
          captureRange_depthOfField: string
          captureRange_fieldOfView: string
          captureRange_singleScanRange: string
          captureRange_workingDistance: string
          equipmentCharacteristics_cableAndConnectivity: string
          equipmentCharacteristics_portabilityClassification: string
          equipmentCharacteristics_weightAndDimensions: string
          objectSizeCapabilities_maximum: string
          objectSizeCapabilities_minimum: string
          objectSizeCapabilities_recommended: string
          operatingConditions_environmentalConstraints: string
          operatingConditions_indoorOutdoorCapabilities: string
          operatingConditions_lightingRequirements: string
          outputCompatibility_mobileCompatibility: string
          outputCompatibility_operatingSystems: string
          outputCompatibility_supportedFileFormats: string
          pointAccuracy_measurement: string
          pointAccuracy_range: string
          pointAccuracy_typical: string
          productId: string
          qualityControl_autoCalibration: string
          qualityControl_errorDetectionCorrection: string
          qualityControl_qualityAssessmentTools: string
          resolution_measurementResolution: string
          resolution_outputMeshResolution: string
          resolution_pointDistance: string
          scanningModes_multipleOptions: string
          scanningModes_realtimeVsPostprocessing: string
          scanningModes_textureColorCapture: string
          scanningTechnology_camerasAndProjectors: string
          scanningTechnology_lightSourceCharacteristics: string
          scanningTechnology_type: string
          sizeConstraints_maximumScannable: string
          sizeConstraints_recommendedRange: string
          sizeConstraints_typicalCharacteristics: string
          speed_dataCollectionSpeed: string
          speed_frameRate: string
          speed_measurementSpeed: string
          surfaceRequirements_compatibleSurfaces: string
          surfaceRequirements_limitations: string
          surfaceRequirements_processingRecommendations: string
          systemRequirements_minimumSpecs: string
          systemRequirements_ramGpuCpuRequirements: string
          systemRequirements_recommendedSpecs: string
          trackingAndPositioning_alignmentMethods: string
          trackingAndPositioning_markerSupport: string
          trackingAndPositioning_trackingCapabilities: string
          volumetricAccuracy_baseAccuracy: string
          volumetricAccuracy_distanceCoefficient: string
          volumetricAccuracy_formula: string
        }
        Insert: {
          captureRange_depthOfField: string
          captureRange_fieldOfView: string
          captureRange_singleScanRange: string
          captureRange_workingDistance: string
          equipmentCharacteristics_cableAndConnectivity: string
          equipmentCharacteristics_portabilityClassification: string
          equipmentCharacteristics_weightAndDimensions: string
          objectSizeCapabilities_maximum: string
          objectSizeCapabilities_minimum: string
          objectSizeCapabilities_recommended: string
          operatingConditions_environmentalConstraints: string
          operatingConditions_indoorOutdoorCapabilities: string
          operatingConditions_lightingRequirements: string
          outputCompatibility_mobileCompatibility: string
          outputCompatibility_operatingSystems: string
          outputCompatibility_supportedFileFormats: string
          pointAccuracy_measurement: string
          pointAccuracy_range: string
          pointAccuracy_typical: string
          productId: string
          qualityControl_autoCalibration: string
          qualityControl_errorDetectionCorrection: string
          qualityControl_qualityAssessmentTools: string
          resolution_measurementResolution: string
          resolution_outputMeshResolution: string
          resolution_pointDistance: string
          scanningModes_multipleOptions: string
          scanningModes_realtimeVsPostprocessing: string
          scanningModes_textureColorCapture: string
          scanningTechnology_camerasAndProjectors: string
          scanningTechnology_lightSourceCharacteristics: string
          scanningTechnology_type: string
          sizeConstraints_maximumScannable: string
          sizeConstraints_recommendedRange: string
          sizeConstraints_typicalCharacteristics: string
          speed_dataCollectionSpeed: string
          speed_frameRate: string
          speed_measurementSpeed: string
          surfaceRequirements_compatibleSurfaces: string
          surfaceRequirements_limitations: string
          surfaceRequirements_processingRecommendations: string
          systemRequirements_minimumSpecs: string
          systemRequirements_ramGpuCpuRequirements: string
          systemRequirements_recommendedSpecs: string
          trackingAndPositioning_alignmentMethods: string
          trackingAndPositioning_markerSupport: string
          trackingAndPositioning_trackingCapabilities: string
          volumetricAccuracy_baseAccuracy: string
          volumetricAccuracy_distanceCoefficient: string
          volumetricAccuracy_formula: string
        }
        Update: {
          captureRange_depthOfField?: string
          captureRange_fieldOfView?: string
          captureRange_singleScanRange?: string
          captureRange_workingDistance?: string
          equipmentCharacteristics_cableAndConnectivity?: string
          equipmentCharacteristics_portabilityClassification?: string
          equipmentCharacteristics_weightAndDimensions?: string
          objectSizeCapabilities_maximum?: string
          objectSizeCapabilities_minimum?: string
          objectSizeCapabilities_recommended?: string
          operatingConditions_environmentalConstraints?: string
          operatingConditions_indoorOutdoorCapabilities?: string
          operatingConditions_lightingRequirements?: string
          outputCompatibility_mobileCompatibility?: string
          outputCompatibility_operatingSystems?: string
          outputCompatibility_supportedFileFormats?: string
          pointAccuracy_measurement?: string
          pointAccuracy_range?: string
          pointAccuracy_typical?: string
          productId?: string
          qualityControl_autoCalibration?: string
          qualityControl_errorDetectionCorrection?: string
          qualityControl_qualityAssessmentTools?: string
          resolution_measurementResolution?: string
          resolution_outputMeshResolution?: string
          resolution_pointDistance?: string
          scanningModes_multipleOptions?: string
          scanningModes_realtimeVsPostprocessing?: string
          scanningModes_textureColorCapture?: string
          scanningTechnology_camerasAndProjectors?: string
          scanningTechnology_lightSourceCharacteristics?: string
          scanningTechnology_type?: string
          sizeConstraints_maximumScannable?: string
          sizeConstraints_recommendedRange?: string
          sizeConstraints_typicalCharacteristics?: string
          speed_dataCollectionSpeed?: string
          speed_frameRate?: string
          speed_measurementSpeed?: string
          surfaceRequirements_compatibleSurfaces?: string
          surfaceRequirements_limitations?: string
          surfaceRequirements_processingRecommendations?: string
          systemRequirements_minimumSpecs?: string
          systemRequirements_ramGpuCpuRequirements?: string
          systemRequirements_recommendedSpecs?: string
          trackingAndPositioning_alignmentMethods?: string
          trackingAndPositioning_markerSupport?: string
          trackingAndPositioning_trackingCapabilities?: string
          volumetricAccuracy_baseAccuracy?: string
          volumetricAccuracy_distanceCoefficient?: string
          volumetricAccuracy_formula?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_product"
            columns: ["productId"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: number
          role: string
          user_id: string
        }
        Insert: {
          id?: number
          role: string
          user_id: string
        }
        Update: {
          id?: number
          role?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      stock_status:
        | "in-stock"
        | "out-of-stock"
        | "backorder"
        | "discontinued"
        | "pre-order"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      stock_status: [
        "in-stock",
        "out-of-stock",
        "backorder",
        "discontinued",
        "pre-order",
      ],
    },
  },
} as const
