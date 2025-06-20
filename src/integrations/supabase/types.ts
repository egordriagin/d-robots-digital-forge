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
          computing_ai_computing: string | null
          computing_learning_adaptation: string | null
          computing_memory_storage: string | null
          computing_multimodal_ai: string | null
          computing_onboard_computing: string | null
          computing_realtime_processing: string | null
          connectivity_autonomous_modes: string | null
          connectivity_fleet_integration: string | null
          connectivity_remote_control: string | null
          connectivity_teaching_by_demonstration: string | null
          connectivity_voice_commands: string | null
          connectivity_vr_control: string | null
          connectivity_wireless: string | null
          created_at: string | null
          dimensions_arm_length: string | null
          dimensions_arm_span: string | null
          dimensions_compact_dimensions: string | null
          dimensions_proportions: string | null
          dimensions_standing_height: string | null
          dimensions_thigh_length: string | null
          dimensions_weight: string | null
          dof_arm_dof: string | null
          dof_body_distribution: string | null
          dof_hand_dof: string | null
          dof_head_neck_dof: string | null
          dof_leg_dof: string | null
          dof_tactile_feedback: string | null
          dof_total_dof: string | null
          dof_waist_torso_dof: string | null
          id: string
          mobility_balance_systems: string | null
          mobility_movement_modes: string | null
          mobility_obstacle_height: string | null
          mobility_running_speed: string | null
          mobility_stair_climbing: string | null
          mobility_terrain_adaptation: string | null
          mobility_walking_speed: string | null
          power_actuator_type: string | null
          power_arm_load: string | null
          power_battery_capacity: string | null
          power_battery_charging_specs: string | null
          power_battery_runtime: string | null
          power_consumption_profile: string | null
          power_joint_torque: string | null
          power_manipulation_rating: string | null
          power_operating_payload: string | null
          power_peak_torque: string | null
          product_id: string | null
          safety_emergency_protocols: string | null
          safety_indoor_outdoor: string | null
          safety_multilevel_security: string | null
          safety_operating_conditions: string | null
          safety_protection_level: string | null
          safety_weather_resistance: string | null
          sensing_audio_systems: string | null
          sensing_cameras: string | null
          sensing_imu_balance: string | null
          sensing_lidar_3d: string | null
          sensing_microphone_array: string | null
          sensing_perception_360: string | null
          sensing_speech_recognition: string | null
          sensing_tactile_force: string | null
          sensing_temperature_monitoring: string | null
          software_framework_compatibility: string | null
          software_industrial_support: string | null
          software_research_education: string | null
          software_sdk_support: string | null
          software_service_interaction: string | null
          software_simulation_integration: string | null
        }
        Insert: {
          computing_ai_computing?: string | null
          computing_learning_adaptation?: string | null
          computing_memory_storage?: string | null
          computing_multimodal_ai?: string | null
          computing_onboard_computing?: string | null
          computing_realtime_processing?: string | null
          connectivity_autonomous_modes?: string | null
          connectivity_fleet_integration?: string | null
          connectivity_remote_control?: string | null
          connectivity_teaching_by_demonstration?: string | null
          connectivity_voice_commands?: string | null
          connectivity_vr_control?: string | null
          connectivity_wireless?: string | null
          created_at?: string | null
          dimensions_arm_length?: string | null
          dimensions_arm_span?: string | null
          dimensions_compact_dimensions?: string | null
          dimensions_proportions?: string | null
          dimensions_standing_height?: string | null
          dimensions_thigh_length?: string | null
          dimensions_weight?: string | null
          dof_arm_dof?: string | null
          dof_body_distribution?: string | null
          dof_hand_dof?: string | null
          dof_head_neck_dof?: string | null
          dof_leg_dof?: string | null
          dof_tactile_feedback?: string | null
          dof_total_dof?: string | null
          dof_waist_torso_dof?: string | null
          id?: string
          mobility_balance_systems?: string | null
          mobility_movement_modes?: string | null
          mobility_obstacle_height?: string | null
          mobility_running_speed?: string | null
          mobility_stair_climbing?: string | null
          mobility_terrain_adaptation?: string | null
          mobility_walking_speed?: string | null
          power_actuator_type?: string | null
          power_arm_load?: string | null
          power_battery_capacity?: string | null
          power_battery_charging_specs?: string | null
          power_battery_runtime?: string | null
          power_consumption_profile?: string | null
          power_joint_torque?: string | null
          power_manipulation_rating?: string | null
          power_operating_payload?: string | null
          power_peak_torque?: string | null
          product_id?: string | null
          safety_emergency_protocols?: string | null
          safety_indoor_outdoor?: string | null
          safety_multilevel_security?: string | null
          safety_operating_conditions?: string | null
          safety_protection_level?: string | null
          safety_weather_resistance?: string | null
          sensing_audio_systems?: string | null
          sensing_cameras?: string | null
          sensing_imu_balance?: string | null
          sensing_lidar_3d?: string | null
          sensing_microphone_array?: string | null
          sensing_perception_360?: string | null
          sensing_speech_recognition?: string | null
          sensing_tactile_force?: string | null
          sensing_temperature_monitoring?: string | null
          software_framework_compatibility?: string | null
          software_industrial_support?: string | null
          software_research_education?: string | null
          software_sdk_support?: string | null
          software_service_interaction?: string | null
          software_simulation_integration?: string | null
        }
        Update: {
          computing_ai_computing?: string | null
          computing_learning_adaptation?: string | null
          computing_memory_storage?: string | null
          computing_multimodal_ai?: string | null
          computing_onboard_computing?: string | null
          computing_realtime_processing?: string | null
          connectivity_autonomous_modes?: string | null
          connectivity_fleet_integration?: string | null
          connectivity_remote_control?: string | null
          connectivity_teaching_by_demonstration?: string | null
          connectivity_voice_commands?: string | null
          connectivity_vr_control?: string | null
          connectivity_wireless?: string | null
          created_at?: string | null
          dimensions_arm_length?: string | null
          dimensions_arm_span?: string | null
          dimensions_compact_dimensions?: string | null
          dimensions_proportions?: string | null
          dimensions_standing_height?: string | null
          dimensions_thigh_length?: string | null
          dimensions_weight?: string | null
          dof_arm_dof?: string | null
          dof_body_distribution?: string | null
          dof_hand_dof?: string | null
          dof_head_neck_dof?: string | null
          dof_leg_dof?: string | null
          dof_tactile_feedback?: string | null
          dof_total_dof?: string | null
          dof_waist_torso_dof?: string | null
          id?: string
          mobility_balance_systems?: string | null
          mobility_movement_modes?: string | null
          mobility_obstacle_height?: string | null
          mobility_running_speed?: string | null
          mobility_stair_climbing?: string | null
          mobility_terrain_adaptation?: string | null
          mobility_walking_speed?: string | null
          power_actuator_type?: string | null
          power_arm_load?: string | null
          power_battery_capacity?: string | null
          power_battery_charging_specs?: string | null
          power_battery_runtime?: string | null
          power_consumption_profile?: string | null
          power_joint_torque?: string | null
          power_manipulation_rating?: string | null
          power_operating_payload?: string | null
          power_peak_torque?: string | null
          product_id?: string | null
          safety_emergency_protocols?: string | null
          safety_indoor_outdoor?: string | null
          safety_multilevel_security?: string | null
          safety_operating_conditions?: string | null
          safety_protection_level?: string | null
          safety_weather_resistance?: string | null
          sensing_audio_systems?: string | null
          sensing_cameras?: string | null
          sensing_imu_balance?: string | null
          sensing_lidar_3d?: string | null
          sensing_microphone_array?: string | null
          sensing_perception_360?: string | null
          sensing_speech_recognition?: string | null
          sensing_tactile_force?: string | null
          sensing_temperature_monitoring?: string | null
          software_framework_compatibility?: string | null
          software_industrial_support?: string | null
          software_research_education?: string | null
          software_sdk_support?: string | null
          software_service_interaction?: string | null
          software_simulation_integration?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "humanoid_robot_specifications_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      laser_cutter_specifications: {
        Row: {
          connectivity_ethernet_port: string | null
          connectivity_mobile_compatibility: string | null
          connectivity_usb_connections: string | null
          connectivity_wifi_capabilities: string | null
          control_display_languages: string | null
          control_methods: string | null
          control_os_compatibility: string | null
          control_supported_formats: string | null
          control_supported_platforms: string | null
          control_touch_panel_specs: string | null
          cooling_air_assist: string | null
          cooling_capacity: string | null
          cooling_exhaust_fan: string | null
          cooling_smoke_filtering: string | null
          created_at: string | null
          id: string
          laser_image_resolution: string | null
          laser_max_engraving_speed: string | null
          laser_output_power: string | null
          laser_processing_accuracy: string | null
          laser_speed_range: string | null
          laser_spot_size: string | null
          laser_tube_lifetime: string | null
          laser_type: string | null
          laser_wavelength: string | null
          materials_compatible_cutting: string | null
          materials_cutting_depth_by_material: string | null
          materials_engraving_materials: string | null
          materials_parameters: string | null
          product_id: string | null
          safety_automatic_locks: string | null
          safety_classification: string | null
          safety_emergency_stop: string | null
          safety_enclosed_workspace: string | null
          safety_operating_temperature: string | null
          safety_power_requirements: string | null
          safety_storage_temperature: string | null
          safety_warning_systems: string | null
          vision_accuracy: string | null
          vision_auto_passthrough: string | null
          vision_autofocus_lidar: string | null
          vision_camera_resolution: string | null
          vision_curved_3d_engraving: string | null
          vision_electric_lifting: string | null
          vision_preview_area: string | null
          work_area_size: string | null
          work_machine_dimensions: string | null
          work_max_cutting_thickness: string | null
          work_max_workpiece_height: string | null
          work_rotary_engraving_diameter: string | null
          work_table_size: string | null
          work_total_weight: string | null
        }
        Insert: {
          connectivity_ethernet_port?: string | null
          connectivity_mobile_compatibility?: string | null
          connectivity_usb_connections?: string | null
          connectivity_wifi_capabilities?: string | null
          control_display_languages?: string | null
          control_methods?: string | null
          control_os_compatibility?: string | null
          control_supported_formats?: string | null
          control_supported_platforms?: string | null
          control_touch_panel_specs?: string | null
          cooling_air_assist?: string | null
          cooling_capacity?: string | null
          cooling_exhaust_fan?: string | null
          cooling_smoke_filtering?: string | null
          created_at?: string | null
          id?: string
          laser_image_resolution?: string | null
          laser_max_engraving_speed?: string | null
          laser_output_power?: string | null
          laser_processing_accuracy?: string | null
          laser_speed_range?: string | null
          laser_spot_size?: string | null
          laser_tube_lifetime?: string | null
          laser_type?: string | null
          laser_wavelength?: string | null
          materials_compatible_cutting?: string | null
          materials_cutting_depth_by_material?: string | null
          materials_engraving_materials?: string | null
          materials_parameters?: string | null
          product_id?: string | null
          safety_automatic_locks?: string | null
          safety_classification?: string | null
          safety_emergency_stop?: string | null
          safety_enclosed_workspace?: string | null
          safety_operating_temperature?: string | null
          safety_power_requirements?: string | null
          safety_storage_temperature?: string | null
          safety_warning_systems?: string | null
          vision_accuracy?: string | null
          vision_auto_passthrough?: string | null
          vision_autofocus_lidar?: string | null
          vision_camera_resolution?: string | null
          vision_curved_3d_engraving?: string | null
          vision_electric_lifting?: string | null
          vision_preview_area?: string | null
          work_area_size?: string | null
          work_machine_dimensions?: string | null
          work_max_cutting_thickness?: string | null
          work_max_workpiece_height?: string | null
          work_rotary_engraving_diameter?: string | null
          work_table_size?: string | null
          work_total_weight?: string | null
        }
        Update: {
          connectivity_ethernet_port?: string | null
          connectivity_mobile_compatibility?: string | null
          connectivity_usb_connections?: string | null
          connectivity_wifi_capabilities?: string | null
          control_display_languages?: string | null
          control_methods?: string | null
          control_os_compatibility?: string | null
          control_supported_formats?: string | null
          control_supported_platforms?: string | null
          control_touch_panel_specs?: string | null
          cooling_air_assist?: string | null
          cooling_capacity?: string | null
          cooling_exhaust_fan?: string | null
          cooling_smoke_filtering?: string | null
          created_at?: string | null
          id?: string
          laser_image_resolution?: string | null
          laser_max_engraving_speed?: string | null
          laser_output_power?: string | null
          laser_processing_accuracy?: string | null
          laser_speed_range?: string | null
          laser_spot_size?: string | null
          laser_tube_lifetime?: string | null
          laser_type?: string | null
          laser_wavelength?: string | null
          materials_compatible_cutting?: string | null
          materials_cutting_depth_by_material?: string | null
          materials_engraving_materials?: string | null
          materials_parameters?: string | null
          product_id?: string | null
          safety_automatic_locks?: string | null
          safety_classification?: string | null
          safety_emergency_stop?: string | null
          safety_enclosed_workspace?: string | null
          safety_operating_temperature?: string | null
          safety_power_requirements?: string | null
          safety_storage_temperature?: string | null
          safety_warning_systems?: string | null
          vision_accuracy?: string | null
          vision_auto_passthrough?: string | null
          vision_autofocus_lidar?: string | null
          vision_camera_resolution?: string | null
          vision_curved_3d_engraving?: string | null
          vision_electric_lifting?: string | null
          vision_preview_area?: string | null
          work_area_size?: string | null
          work_machine_dimensions?: string | null
          work_max_cutting_thickness?: string | null
          work_max_workpiece_height?: string | null
          work_rotary_engraving_diameter?: string | null
          work_table_size?: string | null
          work_total_weight?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "laser_cutter_specifications_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      printer_specifications: {
        Row: {
          automation_auto_feed: string | null
          automation_auto_leveling: string | null
          automation_sensors: string | null
          build_volume_area: string | null
          build_volume_dimensions: string | null
          build_volume_max_length: string | null
          connectivity_ethernet: string | null
          connectivity_usb: string | null
          connectivity_wifi: string | null
          created_at: string | null
          dimensions_printer_size: string | null
          dimensions_required_space: string | null
          dimensions_weight: string | null
          id: string
          interface_control_type: string | null
          interface_display_specs: string | null
          interface_languages: string | null
          materials_cartridge_specs: string | null
          materials_supported_materials: string | null
          materials_temperature_range: string | null
          operating_humidity: string | null
          operating_temperature_range: string | null
          power_consumption: string | null
          power_frequency: string | null
          power_voltage: string | null
          printing_technology_implementation: string | null
          printing_technology_type: string | null
          product_id: string | null
          quality_control_force_sensing: string | null
          quality_control_realtime_monitoring: string | null
          quality_control_temperature_control: string | null
          resolution_dimensional_accuracy: string | null
          resolution_layer_height: string | null
          resolution_min_wall_thickness: string | null
          resolution_xy_resolution: string | null
          software_compatible_os: string | null
          software_file_formats: string | null
          software_system_requirements: string | null
          speed_material_dependent: string | null
          speed_max_speed: string | null
          speed_typical_range: string | null
        }
        Insert: {
          automation_auto_feed?: string | null
          automation_auto_leveling?: string | null
          automation_sensors?: string | null
          build_volume_area?: string | null
          build_volume_dimensions?: string | null
          build_volume_max_length?: string | null
          connectivity_ethernet?: string | null
          connectivity_usb?: string | null
          connectivity_wifi?: string | null
          created_at?: string | null
          dimensions_printer_size?: string | null
          dimensions_required_space?: string | null
          dimensions_weight?: string | null
          id?: string
          interface_control_type?: string | null
          interface_display_specs?: string | null
          interface_languages?: string | null
          materials_cartridge_specs?: string | null
          materials_supported_materials?: string | null
          materials_temperature_range?: string | null
          operating_humidity?: string | null
          operating_temperature_range?: string | null
          power_consumption?: string | null
          power_frequency?: string | null
          power_voltage?: string | null
          printing_technology_implementation?: string | null
          printing_technology_type?: string | null
          product_id?: string | null
          quality_control_force_sensing?: string | null
          quality_control_realtime_monitoring?: string | null
          quality_control_temperature_control?: string | null
          resolution_dimensional_accuracy?: string | null
          resolution_layer_height?: string | null
          resolution_min_wall_thickness?: string | null
          resolution_xy_resolution?: string | null
          software_compatible_os?: string | null
          software_file_formats?: string | null
          software_system_requirements?: string | null
          speed_material_dependent?: string | null
          speed_max_speed?: string | null
          speed_typical_range?: string | null
        }
        Update: {
          automation_auto_feed?: string | null
          automation_auto_leveling?: string | null
          automation_sensors?: string | null
          build_volume_area?: string | null
          build_volume_dimensions?: string | null
          build_volume_max_length?: string | null
          connectivity_ethernet?: string | null
          connectivity_usb?: string | null
          connectivity_wifi?: string | null
          created_at?: string | null
          dimensions_printer_size?: string | null
          dimensions_required_space?: string | null
          dimensions_weight?: string | null
          id?: string
          interface_control_type?: string | null
          interface_display_specs?: string | null
          interface_languages?: string | null
          materials_cartridge_specs?: string | null
          materials_supported_materials?: string | null
          materials_temperature_range?: string | null
          operating_humidity?: string | null
          operating_temperature_range?: string | null
          power_consumption?: string | null
          power_frequency?: string | null
          power_voltage?: string | null
          printing_technology_implementation?: string | null
          printing_technology_type?: string | null
          product_id?: string | null
          quality_control_force_sensing?: string | null
          quality_control_realtime_monitoring?: string | null
          quality_control_temperature_control?: string | null
          resolution_dimensional_accuracy?: string | null
          resolution_layer_height?: string | null
          resolution_min_wall_thickness?: string | null
          resolution_xy_resolution?: string | null
          software_compatible_os?: string | null
          software_file_formats?: string | null
          software_system_requirements?: string | null
          speed_material_dependent?: string | null
          speed_max_speed?: string | null
          speed_typical_range?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "printer_specifications_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          brand: string
          category: string
          created_at: string | null
          demo_video: string
          features: string[]
          full_description: string
          id: string
          images: string[]
          lead_time: string
          name: string
          popular: boolean | null
          power: string | null
          pricing_base: string
          pricing_with_accessories: string | null
          pricing_with_ams: string | null
          rating: number | null
          review_count: number | null
          reviews: Json | null
          shipping_cost: string
          shipping_free_threshold: string
          short_description: string
          stock_status: Database["public"]["Enums"]["stock_status"]
          type: string | null
          updated_at: string | null
        }
        Insert: {
          brand: string
          category: string
          created_at?: string | null
          demo_video: string
          features?: string[]
          full_description: string
          id?: string
          images?: string[]
          lead_time: string
          name: string
          popular?: boolean | null
          power?: string | null
          pricing_base: string
          pricing_with_accessories?: string | null
          pricing_with_ams?: string | null
          rating?: number | null
          review_count?: number | null
          reviews?: Json | null
          shipping_cost: string
          shipping_free_threshold: string
          short_description: string
          stock_status?: Database["public"]["Enums"]["stock_status"]
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          brand?: string
          category?: string
          created_at?: string | null
          demo_video?: string
          features?: string[]
          full_description?: string
          id?: string
          images?: string[]
          lead_time?: string
          name?: string
          popular?: boolean | null
          power?: string | null
          pricing_base?: string
          pricing_with_accessories?: string | null
          pricing_with_ams?: string | null
          rating?: number | null
          review_count?: number | null
          reviews?: Json | null
          shipping_cost?: string
          shipping_free_threshold?: string
          short_description?: string
          stock_status?: Database["public"]["Enums"]["stock_status"]
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      robotic_arm_specifications: {
        Row: {
          capacity_absolute_accuracy: string | null
          capacity_acceleration: string | null
          capacity_cycle_time: string | null
          capacity_joint_angular_speed: string | null
          capacity_max_payload: string | null
          capacity_max_reach: string | null
          capacity_max_tool_speed: string | null
          capacity_moment_inertia: string | null
          capacity_nominal_payload: string | null
          capacity_path_accuracy: string | null
          capacity_positioning_accuracy: string | null
          capacity_repeatability: string | null
          connectivity_analog_io: string | null
          connectivity_digital_io: string | null
          connectivity_end_effector_comm: string | null
          connectivity_end_effector_protocols: string | null
          connectivity_ethernet: string | null
          connectivity_tool_connector_io: string | null
          connectivity_usb: string | null
          connectivity_wireless: string | null
          control_drag_drop_interface: string | null
          control_gesture_vision: string | null
          control_graphical_environments: string | null
          control_mobile_app: string | null
          control_pc_software: string | null
          control_programming_languages: string | null
          control_teach_by_demonstration: string | null
          control_voice_control: string | null
          created_at: string | null
          id: string
          mechanical_axes_count: string | null
          mechanical_base_dimensions: string | null
          mechanical_construction_material: string | null
          mechanical_infinite_rotation: string | null
          mechanical_joint_range: string | null
          mechanical_manipulator_weight: string | null
          mechanical_mounting_options: string | null
          power_cleanroom_class: string | null
          power_consumption: string | null
          power_current_requirements: string | null
          power_humidity: string | null
          power_input_voltage: string | null
          power_ip_rating: string | null
          power_temperature_range: string | null
          product_id: string | null
          safety_advanced_safety_features: string | null
          safety_boundaries: string | null
          safety_collision_detection: string | null
          safety_emergency_stop: string | null
          safety_force_sensing: string | null
          safety_force_torque_limiting: string | null
          safety_safe_operating_modes: string | null
          safety_self_collision_prevention: string | null
          safety_speed_separation: string | null
          software_autonomous_programming: string | null
          software_cad_cam_integration: string | null
          software_end_effector_types: string | null
          software_multi_axis_machining: string | null
          software_pick_place_optimization: string | null
          software_simulation_3d: string | null
          software_trajectory_recording: string | null
          software_welding_assembly: string | null
        }
        Insert: {
          capacity_absolute_accuracy?: string | null
          capacity_acceleration?: string | null
          capacity_cycle_time?: string | null
          capacity_joint_angular_speed?: string | null
          capacity_max_payload?: string | null
          capacity_max_reach?: string | null
          capacity_max_tool_speed?: string | null
          capacity_moment_inertia?: string | null
          capacity_nominal_payload?: string | null
          capacity_path_accuracy?: string | null
          capacity_positioning_accuracy?: string | null
          capacity_repeatability?: string | null
          connectivity_analog_io?: string | null
          connectivity_digital_io?: string | null
          connectivity_end_effector_comm?: string | null
          connectivity_end_effector_protocols?: string | null
          connectivity_ethernet?: string | null
          connectivity_tool_connector_io?: string | null
          connectivity_usb?: string | null
          connectivity_wireless?: string | null
          control_drag_drop_interface?: string | null
          control_gesture_vision?: string | null
          control_graphical_environments?: string | null
          control_mobile_app?: string | null
          control_pc_software?: string | null
          control_programming_languages?: string | null
          control_teach_by_demonstration?: string | null
          control_voice_control?: string | null
          created_at?: string | null
          id?: string
          mechanical_axes_count?: string | null
          mechanical_base_dimensions?: string | null
          mechanical_construction_material?: string | null
          mechanical_infinite_rotation?: string | null
          mechanical_joint_range?: string | null
          mechanical_manipulator_weight?: string | null
          mechanical_mounting_options?: string | null
          power_cleanroom_class?: string | null
          power_consumption?: string | null
          power_current_requirements?: string | null
          power_humidity?: string | null
          power_input_voltage?: string | null
          power_ip_rating?: string | null
          power_temperature_range?: string | null
          product_id?: string | null
          safety_advanced_safety_features?: string | null
          safety_boundaries?: string | null
          safety_collision_detection?: string | null
          safety_emergency_stop?: string | null
          safety_force_sensing?: string | null
          safety_force_torque_limiting?: string | null
          safety_safe_operating_modes?: string | null
          safety_self_collision_prevention?: string | null
          safety_speed_separation?: string | null
          software_autonomous_programming?: string | null
          software_cad_cam_integration?: string | null
          software_end_effector_types?: string | null
          software_multi_axis_machining?: string | null
          software_pick_place_optimization?: string | null
          software_simulation_3d?: string | null
          software_trajectory_recording?: string | null
          software_welding_assembly?: string | null
        }
        Update: {
          capacity_absolute_accuracy?: string | null
          capacity_acceleration?: string | null
          capacity_cycle_time?: string | null
          capacity_joint_angular_speed?: string | null
          capacity_max_payload?: string | null
          capacity_max_reach?: string | null
          capacity_max_tool_speed?: string | null
          capacity_moment_inertia?: string | null
          capacity_nominal_payload?: string | null
          capacity_path_accuracy?: string | null
          capacity_positioning_accuracy?: string | null
          capacity_repeatability?: string | null
          connectivity_analog_io?: string | null
          connectivity_digital_io?: string | null
          connectivity_end_effector_comm?: string | null
          connectivity_end_effector_protocols?: string | null
          connectivity_ethernet?: string | null
          connectivity_tool_connector_io?: string | null
          connectivity_usb?: string | null
          connectivity_wireless?: string | null
          control_drag_drop_interface?: string | null
          control_gesture_vision?: string | null
          control_graphical_environments?: string | null
          control_mobile_app?: string | null
          control_pc_software?: string | null
          control_programming_languages?: string | null
          control_teach_by_demonstration?: string | null
          control_voice_control?: string | null
          created_at?: string | null
          id?: string
          mechanical_axes_count?: string | null
          mechanical_base_dimensions?: string | null
          mechanical_construction_material?: string | null
          mechanical_infinite_rotation?: string | null
          mechanical_joint_range?: string | null
          mechanical_manipulator_weight?: string | null
          mechanical_mounting_options?: string | null
          power_cleanroom_class?: string | null
          power_consumption?: string | null
          power_current_requirements?: string | null
          power_humidity?: string | null
          power_input_voltage?: string | null
          power_ip_rating?: string | null
          power_temperature_range?: string | null
          product_id?: string | null
          safety_advanced_safety_features?: string | null
          safety_boundaries?: string | null
          safety_collision_detection?: string | null
          safety_emergency_stop?: string | null
          safety_force_sensing?: string | null
          safety_force_torque_limiting?: string | null
          safety_safe_operating_modes?: string | null
          safety_self_collision_prevention?: string | null
          safety_speed_separation?: string | null
          software_autonomous_programming?: string | null
          software_cad_cam_integration?: string | null
          software_end_effector_types?: string | null
          software_multi_axis_machining?: string | null
          software_pick_place_optimization?: string | null
          software_simulation_3d?: string | null
          software_trajectory_recording?: string | null
          software_welding_assembly?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "robotic_arm_specifications_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      robotic_dog_specifications: {
        Row: {
          connectivity_bluetooth: string | null
          connectivity_ethernet: string | null
          connectivity_mounting_points: string | null
          connectivity_peripheral_power: string | null
          connectivity_ports: string | null
          connectivity_remote_range: string | null
          connectivity_sdk_support: string | null
          connectivity_wifi: string | null
          control_additional_modules: string | null
          control_cameras: string | null
          control_imu_sensors: string | null
          control_lidar: string | null
          control_memory: string | null
          control_movement_range: string | null
          control_processor: string | null
          control_sensor_integration: string | null
          control_torque_specs: string | null
          control_total_joints: string | null
          created_at: string | null
          dimensions_arm_payload: string | null
          dimensions_compact_dimensions: string | null
          dimensions_ground_clearance: string | null
          dimensions_moving_payload: string | null
          dimensions_static_payload: string | null
          dimensions_total_weight: string | null
          dimensions_working_dimensions: string | null
          id: string
          mobility_humidity: string | null
          mobility_max_gradient: string | null
          mobility_max_speed: string | null
          mobility_movement_modes: string | null
          mobility_obstacle_height: string | null
          mobility_stair_climbing: string | null
          mobility_surface_compatibility: string | null
          mobility_temperature_range: string | null
          mobility_typical_range: string | null
          mobility_weather_protection: string | null
          power_battery_capacity: string | null
          power_battery_hot_swap: string | null
          power_battery_runtime: string | null
          power_battery_type: string | null
          power_consumption_average: string | null
          power_consumption_charging_specs: string | null
          power_consumption_peak: string | null
          product_id: string | null
          safety_emergency_stop: string | null
          safety_failsafe_behavior: string | null
          safety_full_autonomous: string | null
          safety_manual: string | null
          safety_remote_stop: string | null
          safety_semi_autonomous: string | null
          safety_simulation_compatibility: string | null
        }
        Insert: {
          connectivity_bluetooth?: string | null
          connectivity_ethernet?: string | null
          connectivity_mounting_points?: string | null
          connectivity_peripheral_power?: string | null
          connectivity_ports?: string | null
          connectivity_remote_range?: string | null
          connectivity_sdk_support?: string | null
          connectivity_wifi?: string | null
          control_additional_modules?: string | null
          control_cameras?: string | null
          control_imu_sensors?: string | null
          control_lidar?: string | null
          control_memory?: string | null
          control_movement_range?: string | null
          control_processor?: string | null
          control_sensor_integration?: string | null
          control_torque_specs?: string | null
          control_total_joints?: string | null
          created_at?: string | null
          dimensions_arm_payload?: string | null
          dimensions_compact_dimensions?: string | null
          dimensions_ground_clearance?: string | null
          dimensions_moving_payload?: string | null
          dimensions_static_payload?: string | null
          dimensions_total_weight?: string | null
          dimensions_working_dimensions?: string | null
          id?: string
          mobility_humidity?: string | null
          mobility_max_gradient?: string | null
          mobility_max_speed?: string | null
          mobility_movement_modes?: string | null
          mobility_obstacle_height?: string | null
          mobility_stair_climbing?: string | null
          mobility_surface_compatibility?: string | null
          mobility_temperature_range?: string | null
          mobility_typical_range?: string | null
          mobility_weather_protection?: string | null
          power_battery_capacity?: string | null
          power_battery_hot_swap?: string | null
          power_battery_runtime?: string | null
          power_battery_type?: string | null
          power_consumption_average?: string | null
          power_consumption_charging_specs?: string | null
          power_consumption_peak?: string | null
          product_id?: string | null
          safety_emergency_stop?: string | null
          safety_failsafe_behavior?: string | null
          safety_full_autonomous?: string | null
          safety_manual?: string | null
          safety_remote_stop?: string | null
          safety_semi_autonomous?: string | null
          safety_simulation_compatibility?: string | null
        }
        Update: {
          connectivity_bluetooth?: string | null
          connectivity_ethernet?: string | null
          connectivity_mounting_points?: string | null
          connectivity_peripheral_power?: string | null
          connectivity_ports?: string | null
          connectivity_remote_range?: string | null
          connectivity_sdk_support?: string | null
          connectivity_wifi?: string | null
          control_additional_modules?: string | null
          control_cameras?: string | null
          control_imu_sensors?: string | null
          control_lidar?: string | null
          control_memory?: string | null
          control_movement_range?: string | null
          control_processor?: string | null
          control_sensor_integration?: string | null
          control_torque_specs?: string | null
          control_total_joints?: string | null
          created_at?: string | null
          dimensions_arm_payload?: string | null
          dimensions_compact_dimensions?: string | null
          dimensions_ground_clearance?: string | null
          dimensions_moving_payload?: string | null
          dimensions_static_payload?: string | null
          dimensions_total_weight?: string | null
          dimensions_working_dimensions?: string | null
          id?: string
          mobility_humidity?: string | null
          mobility_max_gradient?: string | null
          mobility_max_speed?: string | null
          mobility_movement_modes?: string | null
          mobility_obstacle_height?: string | null
          mobility_stair_climbing?: string | null
          mobility_surface_compatibility?: string | null
          mobility_temperature_range?: string | null
          mobility_typical_range?: string | null
          mobility_weather_protection?: string | null
          power_battery_capacity?: string | null
          power_battery_hot_swap?: string | null
          power_battery_runtime?: string | null
          power_battery_type?: string | null
          power_consumption_average?: string | null
          power_consumption_charging_specs?: string | null
          power_consumption_peak?: string | null
          product_id?: string | null
          safety_emergency_stop?: string | null
          safety_failsafe_behavior?: string | null
          safety_full_autonomous?: string | null
          safety_manual?: string | null
          safety_remote_stop?: string | null
          safety_semi_autonomous?: string | null
          safety_simulation_compatibility?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "robotic_dog_specifications_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      scanner_specifications: {
        Row: {
          accuracy_point_measurement: string | null
          accuracy_point_range: string | null
          accuracy_point_typical: string | null
          accuracy_resolution_measurement: string | null
          accuracy_resolution_output_mesh: string | null
          accuracy_resolution_point_distance: string | null
          accuracy_volumetric_base: string | null
          accuracy_volumetric_distance_coefficient: string | null
          accuracy_volumetric_formula: string | null
          advanced_auto_calibration: string | null
          advanced_error_detection_correction: string | null
          advanced_quality_assessment_tools: string | null
          advanced_realtime_vs_postprocessing: string | null
          advanced_scanning_modes: string | null
          advanced_texture_color_capture: string | null
          capture_depth_of_field: string | null
          capture_field_of_view: string | null
          capture_object_size_maximum: string | null
          capture_object_size_minimum: string | null
          capture_object_size_recommended: string | null
          capture_single_scan_range: string | null
          capture_working_distance: string | null
          compatibility_compatible_surfaces: string | null
          compatibility_limitations: string | null
          compatibility_maximum_scannable: string | null
          compatibility_processing_recommendations: string | null
          compatibility_recommended_range: string | null
          compatibility_typical_characteristics: string | null
          created_at: string | null
          hardware_cable_connectivity: string | null
          hardware_environmental_constraints: string | null
          hardware_indoor_outdoor_capabilities: string | null
          hardware_lighting_requirements: string | null
          hardware_portability_classification: string | null
          hardware_weight_dimensions: string | null
          id: string
          product_id: string | null
          software_minimum_specs: string | null
          software_mobile_compatibility: string | null
          software_operating_systems: string | null
          software_ram_gpu_cpu_requirements: string | null
          software_recommended_specs: string | null
          software_supported_file_formats: string | null
          speed_data_collection_speed: string | null
          speed_frame_rate: string | null
          speed_measurement_speed: string | null
          technology_alignment_methods: string | null
          technology_cameras_projectors: string | null
          technology_light_source: string | null
          technology_marker_support: string | null
          technology_scanning_type: string | null
          technology_tracking_capabilities: string | null
        }
        Insert: {
          accuracy_point_measurement?: string | null
          accuracy_point_range?: string | null
          accuracy_point_typical?: string | null
          accuracy_resolution_measurement?: string | null
          accuracy_resolution_output_mesh?: string | null
          accuracy_resolution_point_distance?: string | null
          accuracy_volumetric_base?: string | null
          accuracy_volumetric_distance_coefficient?: string | null
          accuracy_volumetric_formula?: string | null
          advanced_auto_calibration?: string | null
          advanced_error_detection_correction?: string | null
          advanced_quality_assessment_tools?: string | null
          advanced_realtime_vs_postprocessing?: string | null
          advanced_scanning_modes?: string | null
          advanced_texture_color_capture?: string | null
          capture_depth_of_field?: string | null
          capture_field_of_view?: string | null
          capture_object_size_maximum?: string | null
          capture_object_size_minimum?: string | null
          capture_object_size_recommended?: string | null
          capture_single_scan_range?: string | null
          capture_working_distance?: string | null
          compatibility_compatible_surfaces?: string | null
          compatibility_limitations?: string | null
          compatibility_maximum_scannable?: string | null
          compatibility_processing_recommendations?: string | null
          compatibility_recommended_range?: string | null
          compatibility_typical_characteristics?: string | null
          created_at?: string | null
          hardware_cable_connectivity?: string | null
          hardware_environmental_constraints?: string | null
          hardware_indoor_outdoor_capabilities?: string | null
          hardware_lighting_requirements?: string | null
          hardware_portability_classification?: string | null
          hardware_weight_dimensions?: string | null
          id?: string
          product_id?: string | null
          software_minimum_specs?: string | null
          software_mobile_compatibility?: string | null
          software_operating_systems?: string | null
          software_ram_gpu_cpu_requirements?: string | null
          software_recommended_specs?: string | null
          software_supported_file_formats?: string | null
          speed_data_collection_speed?: string | null
          speed_frame_rate?: string | null
          speed_measurement_speed?: string | null
          technology_alignment_methods?: string | null
          technology_cameras_projectors?: string | null
          technology_light_source?: string | null
          technology_marker_support?: string | null
          technology_scanning_type?: string | null
          technology_tracking_capabilities?: string | null
        }
        Update: {
          accuracy_point_measurement?: string | null
          accuracy_point_range?: string | null
          accuracy_point_typical?: string | null
          accuracy_resolution_measurement?: string | null
          accuracy_resolution_output_mesh?: string | null
          accuracy_resolution_point_distance?: string | null
          accuracy_volumetric_base?: string | null
          accuracy_volumetric_distance_coefficient?: string | null
          accuracy_volumetric_formula?: string | null
          advanced_auto_calibration?: string | null
          advanced_error_detection_correction?: string | null
          advanced_quality_assessment_tools?: string | null
          advanced_realtime_vs_postprocessing?: string | null
          advanced_scanning_modes?: string | null
          advanced_texture_color_capture?: string | null
          capture_depth_of_field?: string | null
          capture_field_of_view?: string | null
          capture_object_size_maximum?: string | null
          capture_object_size_minimum?: string | null
          capture_object_size_recommended?: string | null
          capture_single_scan_range?: string | null
          capture_working_distance?: string | null
          compatibility_compatible_surfaces?: string | null
          compatibility_limitations?: string | null
          compatibility_maximum_scannable?: string | null
          compatibility_processing_recommendations?: string | null
          compatibility_recommended_range?: string | null
          compatibility_typical_characteristics?: string | null
          created_at?: string | null
          hardware_cable_connectivity?: string | null
          hardware_environmental_constraints?: string | null
          hardware_indoor_outdoor_capabilities?: string | null
          hardware_lighting_requirements?: string | null
          hardware_portability_classification?: string | null
          hardware_weight_dimensions?: string | null
          id?: string
          product_id?: string | null
          software_minimum_specs?: string | null
          software_mobile_compatibility?: string | null
          software_operating_systems?: string | null
          software_ram_gpu_cpu_requirements?: string | null
          software_recommended_specs?: string | null
          software_supported_file_formats?: string | null
          speed_data_collection_speed?: string | null
          speed_frame_rate?: string | null
          speed_measurement_speed?: string | null
          technology_alignment_methods?: string | null
          technology_cameras_projectors?: string | null
          technology_light_source?: string | null
          technology_marker_support?: string | null
          technology_scanning_type?: string | null
          technology_tracking_capabilities?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scanner_specifications_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
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
