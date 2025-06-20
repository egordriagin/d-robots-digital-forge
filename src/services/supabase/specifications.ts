
import { supabase } from "@/integrations/supabase/client";

// Database type definitions for specifications
export type DatabasePrinterSpecs = {
  id: string;
  product_id: string;
  build_volume_dimensions?: string;
  build_volume_area?: string;
  build_volume_max_length?: string;
  resolution_layer_height?: string;
  resolution_xy_resolution?: string;
  resolution_dimensional_accuracy?: string;
  resolution_min_wall_thickness?: string;
  speed_max_speed?: string;
  speed_typical_range?: string;
  speed_material_dependent?: string;
  printing_technology_type?: string;
  printing_technology_implementation?: string;
  materials_supported_materials?: string;
  materials_cartridge_specs?: string;
  materials_temperature_range?: string;
  dimensions_printer_size?: string;
  dimensions_weight?: string;
  dimensions_required_space?: string;
  interface_control_type?: string;
  interface_display_specs?: string;
  interface_languages?: string;
  connectivity_wifi?: string;
  connectivity_ethernet?: string;
  connectivity_usb?: string;
  operating_temperature_range?: string;
  operating_humidity?: string;
  power_voltage?: string;
  power_consumption?: string;
  power_frequency?: string;
  automation_auto_leveling?: string;
  automation_sensors?: string;
  automation_auto_feed?: string;
  software_compatible_os?: string;
  software_file_formats?: string;
  software_system_requirements?: string;
  quality_control_force_sensing?: string;
  quality_control_temperature_control?: string;
  quality_control_realtime_monitoring?: string;
  created_at: string;
};

export type DatabaseScannerSpecs = {
  id: string;
  product_id: string;
  accuracy_point_range?: string;
  accuracy_point_typical?: string;
  accuracy_point_measurement?: string;
  accuracy_volumetric_base?: string;
  accuracy_volumetric_distance_coefficient?: string;
  accuracy_volumetric_formula?: string;
  accuracy_resolution_measurement?: string;
  accuracy_resolution_point_distance?: string;
  accuracy_resolution_output_mesh?: string;
  speed_frame_rate?: string;
  speed_measurement_speed?: string;
  speed_data_collection_speed?: string;
  capture_single_scan_range?: string;
  capture_field_of_view?: string;
  capture_depth_of_field?: string;
  capture_working_distance?: string;
  capture_object_size_minimum?: string;
  capture_object_size_maximum?: string;
  capture_object_size_recommended?: string;
  technology_scanning_type?: string;
  technology_light_source?: string;
  technology_cameras_projectors?: string;
  technology_alignment_methods?: string;
  technology_tracking_capabilities?: string;
  technology_marker_support?: string;
  compatibility_recommended_range?: string;
  compatibility_typical_characteristics?: string;
  compatibility_maximum_scannable?: string;
  compatibility_compatible_surfaces?: string;
  compatibility_processing_recommendations?: string;
  compatibility_limitations?: string;
  software_supported_file_formats?: string;
  software_operating_systems?: string;
  software_mobile_compatibility?: string;
  software_minimum_specs?: string;
  software_recommended_specs?: string;
  software_ram_gpu_cpu_requirements?: string;
  hardware_weight_dimensions?: string;
  hardware_cable_connectivity?: string;
  hardware_portability_classification?: string;
  hardware_indoor_outdoor_capabilities?: string;
  hardware_lighting_requirements?: string;
  hardware_environmental_constraints?: string;
  advanced_scanning_modes?: string;
  advanced_texture_color_capture?: string;
  advanced_realtime_vs_postprocessing?: string;
  advanced_auto_calibration?: string;
  advanced_error_detection_correction?: string;
  advanced_quality_assessment_tools?: string;
  created_at: string;
};

export type DatabaseRoboticDogSpecs = {
  id: string;
  product_id: string;
  dimensions_working_dimensions?: string;
  dimensions_compact_dimensions?: string;
  dimensions_total_weight?: string;
  dimensions_ground_clearance?: string;
  dimensions_static_payload?: string;
  dimensions_moving_payload?: string;
  dimensions_arm_payload?: string;
  mobility_max_speed?: string;
  mobility_typical_range?: string;
  mobility_movement_modes?: string;
  mobility_max_gradient?: string;
  mobility_obstacle_height?: string;
  mobility_stair_climbing?: string;
  mobility_surface_compatibility?: string;
  mobility_temperature_range?: string;
  mobility_humidity?: string;
  mobility_weather_protection?: string;
  power_battery_capacity?: string;
  power_battery_type?: string;
  power_battery_runtime?: string;
  power_battery_hot_swap?: string;
  power_consumption_average?: string;
  power_consumption_peak?: string;
  power_consumption_charging_specs?: string;
  control_total_joints?: string;
  control_torque_specs?: string;
  control_movement_range?: string;
  control_cameras?: string;
  control_lidar?: string;
  control_imu_sensors?: string;
  control_sensor_integration?: string;
  control_processor?: string;
  control_memory?: string;
  control_additional_modules?: string;
  connectivity_wifi?: string;
  connectivity_bluetooth?: string;
  connectivity_ethernet?: string;
  connectivity_remote_range?: string;
  connectivity_ports?: string;
  connectivity_mounting_points?: string;
  connectivity_peripheral_power?: string;
  connectivity_sdk_support?: string;
  safety_emergency_stop?: string;
  safety_remote_stop?: string;
  safety_failsafe_behavior?: string;
  safety_manual?: string;
  safety_semi_autonomous?: string;
  safety_full_autonomous?: string;
  safety_simulation_compatibility?: string;
  created_at: string;
};

export type DatabaseHumanoidRobotSpecs = {
  id: string;
  product_id: string;
  dimensions_standing_height?: string;
  dimensions_weight?: string;
  dimensions_compact_dimensions?: string;
  dimensions_arm_span?: string;
  dimensions_thigh_length?: string;
  dimensions_arm_length?: string;
  dimensions_proportions?: string;
  mobility_walking_speed?: string;
  mobility_running_speed?: string;
  mobility_movement_modes?: string;
  mobility_stair_climbing?: string;
  mobility_obstacle_height?: string;
  mobility_terrain_adaptation?: string;
  mobility_balance_systems?: string;
  dof_total_dof?: string;
  dof_body_distribution?: string;
  dof_leg_dof?: string;
  dof_arm_dof?: string;
  dof_waist_torso_dof?: string;
  dof_head_neck_dof?: string;
  dof_hand_dof?: string;
  dof_tactile_feedback?: string;
  power_joint_torque?: string;
  power_peak_torque?: string;
  power_actuator_type?: string;
  power_operating_payload?: string;
  power_arm_load?: string;
  power_manipulation_rating?: string;
  power_battery_capacity?: string;
  power_battery_runtime?: string;
  power_battery_charging_specs?: string;
  power_consumption_profile?: string;
  sensing_cameras?: string;
  sensing_lidar_3d?: string;
  sensing_perception_360?: string;
  sensing_microphone_array?: string;
  sensing_audio_systems?: string;
  sensing_speech_recognition?: string;
  sensing_imu_balance?: string;
  sensing_tactile_force?: string;
  sensing_temperature_monitoring?: string;
  computing_onboard_computing?: string;
  computing_ai_computing?: string;
  computing_memory_storage?: string;
  computing_multimodal_ai?: string;
  computing_realtime_processing?: string;
  computing_learning_adaptation?: string;
  connectivity_wireless?: string;
  connectivity_remote_control?: string;
  connectivity_fleet_integration?: string;
  connectivity_voice_commands?: string;
  connectivity_vr_control?: string;
  connectivity_teaching_by_demonstration?: string;
  connectivity_autonomous_modes?: string;
  safety_multilevel_security?: string;
  safety_emergency_protocols?: string;
  safety_protection_level?: string;
  safety_operating_conditions?: string;
  safety_indoor_outdoor?: string;
  safety_weather_resistance?: string;
  software_sdk_support?: string;
  software_framework_compatibility?: string;
  software_simulation_integration?: string;
  software_service_interaction?: string;
  software_industrial_support?: string;
  software_research_education?: string;
  created_at: string;
};

export type DatabaseRoboticArmSpecs = {
  id: string;
  product_id: string;
  capacity_max_payload?: string;
  capacity_max_reach?: string;
  capacity_nominal_payload?: string;
  capacity_moment_inertia?: string;
  capacity_repeatability?: string;
  capacity_positioning_accuracy?: string;
  capacity_path_accuracy?: string;
  capacity_absolute_accuracy?: string;
  capacity_max_tool_speed?: string;
  capacity_joint_angular_speed?: string;
  capacity_acceleration?: string;
  capacity_cycle_time?: string;
  mechanical_axes_count?: string;
  mechanical_joint_range?: string;
  mechanical_infinite_rotation?: string;
  mechanical_manipulator_weight?: string;
  mechanical_base_dimensions?: string;
  mechanical_mounting_options?: string;
  mechanical_construction_material?: string;
  control_graphical_environments?: string;
  control_teach_by_demonstration?: string;
  control_programming_languages?: string;
  control_drag_drop_interface?: string;
  control_pc_software?: string;
  control_mobile_app?: string;
  control_voice_control?: string;
  control_gesture_vision?: string;
  connectivity_ethernet?: string;
  connectivity_usb?: string;
  connectivity_wireless?: string;
  connectivity_end_effector_comm?: string;
  connectivity_digital_io?: string;
  connectivity_analog_io?: string;
  connectivity_tool_connector_io?: string;
  connectivity_end_effector_protocols?: string;
  power_input_voltage?: string;
  power_consumption?: string;
  power_current_requirements?: string;
  power_temperature_range?: string;
  power_humidity?: string;
  power_ip_rating?: string;
  power_cleanroom_class?: string;
  safety_collision_detection?: string;
  safety_boundaries?: string;
  safety_emergency_stop?: string;
  safety_force_torque_limiting?: string;
  safety_self_collision_prevention?: string;
  safety_advanced_safety_features?: string;
  safety_force_sensing?: string;
  safety_speed_separation?: string;
  safety_safe_operating_modes?: string;
  software_simulation_3d?: string;
  software_autonomous_programming?: string;
  software_trajectory_recording?: string;
  software_cad_cam_integration?: string;
  software_end_effector_types?: string;
  software_multi_axis_machining?: string;
  software_pick_place_optimization?: string;
  software_welding_assembly?: string;
  created_at: string;
};

export type DatabaseLaserCutterSpecs = {
  id: string;
  product_id: string;
  laser_output_power?: string;
  laser_type?: string;
  laser_wavelength?: string;
  laser_spot_size?: string;
  laser_tube_lifetime?: string;
  laser_max_engraving_speed?: string;
  laser_processing_accuracy?: string;
  laser_image_resolution?: string;
  laser_speed_range?: string;
  work_area_size?: string;
  work_table_size?: string;
  work_max_workpiece_height?: string;
  work_max_cutting_thickness?: string;
  work_machine_dimensions?: string;
  work_total_weight?: string;
  work_rotary_engraving_diameter?: string;
  vision_camera_resolution?: string;
  vision_accuracy?: string;
  vision_preview_area?: string;
  vision_autofocus_lidar?: string;
  vision_curved_3d_engraving?: string;
  vision_auto_passthrough?: string;
  vision_electric_lifting?: string;
  control_touch_panel_specs?: string;
  control_methods?: string;
  control_display_languages?: string;
  control_supported_platforms?: string;
  control_os_compatibility?: string;
  control_supported_formats?: string;
  connectivity_wifi_capabilities?: string;
  connectivity_ethernet_port?: string;
  connectivity_usb_connections?: string;
  connectivity_mobile_compatibility?: string;
  safety_classification?: string;
  safety_enclosed_workspace?: string;
  safety_emergency_stop?: string;
  safety_automatic_locks?: string;
  safety_warning_systems?: string;
  safety_operating_temperature?: string;
  safety_storage_temperature?: string;
  safety_power_requirements?: string;
  cooling_capacity?: string;
  cooling_air_assist?: string;
  cooling_exhaust_fan?: string;
  cooling_smoke_filtering?: string;
  materials_compatible_cutting?: string;
  materials_cutting_depth_by_material?: string;
  materials_engraving_materials?: string;
  materials_parameters?: string;
  created_at: string;
};

export const specificationService = {
  // Printer specifications
  async getPrinterSpecs(productId: string): Promise<DatabasePrinterSpecs | null> {
    console.log(`Fetching printer specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('printer_specifications')
      .select('*')
      .eq('product_id', productId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        console.log(`No printer specs found for product ${productId}`);
        return null;
      }
      console.error('Error fetching printer specs:', error);
      throw error;
    }

    return data;
  },

  async insertPrinterSpecs(specs: Omit<DatabasePrinterSpecs, 'id' | 'created_at'>): Promise<DatabasePrinterSpecs> {
    console.log(`Inserting printer specs for product: ${specs.product_id}`);
    const { data, error } = await supabase
      .from('printer_specifications')
      .insert(specs)
      .select()
      .single();

    if (error) {
      console.error('Error inserting printer specs:', error);
      throw error;
    }

    return data;
  },

  // Scanner specifications
  async getScannerSpecs(productId: string): Promise<DatabaseScannerSpecs | null> {
    console.log(`Fetching scanner specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('scanner_specifications')
      .select('*')
      .eq('product_id', productId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        console.log(`No scanner specs found for product ${productId}`);
        return null;
      }
      console.error('Error fetching scanner specs:', error);
      throw error;
    }

    return data;
  },

  async insertScannerSpecs(specs: Omit<DatabaseScannerSpecs, 'id' | 'created_at'>): Promise<DatabaseScannerSpecs> {
    console.log(`Inserting scanner specs for product: ${specs.product_id}`);
    const { data, error } = await supabase
      .from('scanner_specifications')
      .insert(specs)
      .select()
      .single();

    if (error) {
      console.error('Error inserting scanner specs:', error);
      throw error;
    }

    return data;
  },

  // Robotic dog specifications
  async getRoboticDogSpecs(productId: string): Promise<DatabaseRoboticDogSpecs | null> {
    console.log(`Fetching robotic dog specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('robotic_dog_specifications')
      .select('*')
      .eq('product_id', productId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        console.log(`No robotic dog specs found for product ${productId}`);
        return null;
      }
      console.error('Error fetching robotic dog specs:', error);
      throw error;
    }

    return data;
  },

  async insertRoboticDogSpecs(specs: Omit<DatabaseRoboticDogSpecs, 'id' | 'created_at'>): Promise<DatabaseRoboticDogSpecs> {
    console.log(`Inserting robotic dog specs for product: ${specs.product_id}`);
    const { data, error } = await supabase
      .from('robotic_dog_specifications')
      .insert(specs)
      .select()
      .single();

    if (error) {
      console.error('Error inserting robotic dog specs:', error);
      throw error;
    }

    return data;
  },

  // Humanoid robot specifications
  async getHumanoidRobotSpecs(productId: string): Promise<DatabaseHumanoidRobotSpecs | null> {
    console.log(`Fetching humanoid robot specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('humanoid_robot_specifications')
      .select('*')
      .eq('product_id', productId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        console.log(`No humanoid robot specs found for product ${productId}`);
        return null;
      }
      console.error('Error fetching humanoid robot specs:', error);
      throw error;
    }

    return data;
  },

  async insertHumanoidRobotSpecs(specs: Omit<DatabaseHumanoidRobotSpecs, 'id' | 'created_at'>): Promise<DatabaseHumanoidRobotSpecs> {
    console.log(`Inserting humanoid robot specs for product: ${specs.product_id}`);
    const { data, error } = await supabase
      .from('humanoid_robot_specifications')
      .insert(specs)
      .select()
      .single();

    if (error) {
      console.error('Error inserting humanoid robot specs:', error);
      throw error;
    }

    return data;
  },

  // Robotic arm specifications
  async getRoboticArmSpecs(productId: string): Promise<DatabaseRoboticArmSpecs | null> {
    console.log(`Fetching robotic arm specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('robotic_arm_specifications')
      .select('*')
      .eq('product_id', productId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        console.log(`No robotic arm specs found for product ${productId}`);
        return null;
      }
      console.error('Error fetching robotic arm specs:', error);
      throw error;
    }

    return data;
  },

  async insertRoboticArmSpecs(specs: Omit<DatabaseRoboticArmSpecs, 'id' | 'created_at'>): Promise<DatabaseRoboticArmSpecs> {
    console.log(`Inserting robotic arm specs for product: ${specs.product_id}`);
    const { data, error } = await supabase
      .from('robotic_arm_specifications')
      .insert(specs)
      .select()
      .single();

    if (error) {
      console.error('Error inserting robotic arm specs:', error);
      throw error;
    }

    return data;
  },

  // Laser cutter specifications
  async getLaserCutterSpecs(productId: string): Promise<DatabaseLaserCutterSpecs | null> {
    console.log(`Fetching laser cutter specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('laser_cutter_specifications')
      .select('*')
      .eq('product_id', productId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        console.log(`No laser cutter specs found for product ${productId}`);
        return null;
      }
      console.error('Error fetching laser cutter specs:', error);
      throw error;
    }

    return data;
  },

  async insertLaserCutterSpecs(specs: Omit<DatabaseLaserCutterSpecs, 'id' | 'created_at'>): Promise<DatabaseLaserCutterSpecs> {
    console.log(`Inserting laser cutter specs for product: ${specs.product_id}`);
    const { data, error } = await supabase
      .from('laser_cutter_specifications')
      .insert(specs)
      .select()
      .single();

    if (error) {
      console.error('Error inserting laser cutter specs:', error);
      throw error;
    }

    return data;
  }
};
