
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum for stock status
CREATE TYPE stock_status AS ENUM ('in-stock', 'out-of-stock', 'backorder', 'discontinued', 'pre-order');

-- Main products table
CREATE TABLE public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    category TEXT NOT NULL,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    images TEXT[] NOT NULL DEFAULT '{}',
    pricing_base TEXT NOT NULL,
    pricing_with_ams TEXT,
    pricing_with_accessories TEXT,
    lead_time TEXT NOT NULL,
    stock_status stock_status NOT NULL DEFAULT 'in-stock',
    rating DECIMAL(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    review_count INTEGER DEFAULT 0 CHECK (review_count >= 0),
    features TEXT[] NOT NULL DEFAULT '{}',
    shipping_cost TEXT NOT NULL,
    shipping_free_threshold TEXT NOT NULL,
    demo_video TEXT NOT NULL,
    reviews JSONB DEFAULT '[]',
    popular BOOLEAN DEFAULT false,
    type TEXT,
    power TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Printer specifications table
CREATE TABLE public.printer_specifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    -- Printing specifications
    build_volume_dimensions TEXT,
    build_volume_area TEXT,
    build_volume_max_length TEXT,
    resolution_layer_height TEXT,
    resolution_xy_resolution TEXT,
    resolution_dimensional_accuracy TEXT,
    resolution_min_wall_thickness TEXT,
    speed_max_speed TEXT,
    speed_typical_range TEXT,
    speed_material_dependent TEXT,
    -- Technology specifications
    printing_technology_type TEXT,
    printing_technology_implementation TEXT,
    materials_supported_materials TEXT,
    materials_cartridge_specs TEXT,
    materials_temperature_range TEXT,
    -- Hardware specifications
    dimensions_printer_size TEXT,
    dimensions_weight TEXT,
    dimensions_required_space TEXT,
    interface_control_type TEXT,
    interface_display_specs TEXT,
    interface_languages TEXT,
    connectivity_wifi TEXT,
    connectivity_ethernet TEXT,
    connectivity_usb TEXT,
    -- Environment specifications
    operating_temperature_range TEXT,
    operating_humidity TEXT,
    power_voltage TEXT,
    power_consumption TEXT,
    power_frequency TEXT,
    -- Advanced specifications
    automation_auto_leveling TEXT,
    automation_sensors TEXT,
    automation_auto_feed TEXT,
    software_compatible_os TEXT,
    software_file_formats TEXT,
    software_system_requirements TEXT,
    quality_control_force_sensing TEXT,
    quality_control_temperature_control TEXT,
    quality_control_realtime_monitoring TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Scanner specifications table
CREATE TABLE public.scanner_specifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    -- Accuracy specifications
    accuracy_point_range TEXT,
    accuracy_point_typical TEXT,
    accuracy_point_measurement TEXT,
    accuracy_volumetric_base TEXT,
    accuracy_volumetric_distance_coefficient TEXT,
    accuracy_volumetric_formula TEXT,
    accuracy_resolution_measurement TEXT,
    accuracy_resolution_point_distance TEXT,
    accuracy_resolution_output_mesh TEXT,
    -- Speed specifications
    speed_frame_rate TEXT,
    speed_measurement_speed TEXT,
    speed_data_collection_speed TEXT,
    -- Capture range specifications
    capture_single_scan_range TEXT,
    capture_field_of_view TEXT,
    capture_depth_of_field TEXT,
    capture_working_distance TEXT,
    capture_object_size_minimum TEXT,
    capture_object_size_maximum TEXT,
    capture_object_size_recommended TEXT,
    -- Technology specifications
    technology_scanning_type TEXT,
    technology_light_source TEXT,
    technology_cameras_projectors TEXT,
    technology_alignment_methods TEXT,
    technology_tracking_capabilities TEXT,
    technology_marker_support TEXT,
    -- Compatibility specifications
    compatibility_recommended_range TEXT,
    compatibility_typical_characteristics TEXT,
    compatibility_maximum_scannable TEXT,
    compatibility_compatible_surfaces TEXT,
    compatibility_processing_recommendations TEXT,
    compatibility_limitations TEXT,
    -- Software specifications
    software_supported_file_formats TEXT,
    software_operating_systems TEXT,
    software_mobile_compatibility TEXT,
    software_minimum_specs TEXT,
    software_recommended_specs TEXT,
    software_ram_gpu_cpu_requirements TEXT,
    -- Hardware specifications
    hardware_weight_dimensions TEXT,
    hardware_cable_connectivity TEXT,
    hardware_portability_classification TEXT,
    hardware_indoor_outdoor_capabilities TEXT,
    hardware_lighting_requirements TEXT,
    hardware_environmental_constraints TEXT,
    -- Advanced specifications
    advanced_scanning_modes TEXT,
    advanced_texture_color_capture TEXT,
    advanced_realtime_vs_postprocessing TEXT,
    advanced_auto_calibration TEXT,
    advanced_error_detection_correction TEXT,
    advanced_quality_assessment_tools TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Robotic dog specifications table
CREATE TABLE public.robotic_dog_specifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    -- Dimensions specifications
    dimensions_working_dimensions TEXT,
    dimensions_compact_dimensions TEXT,
    dimensions_total_weight TEXT,
    dimensions_ground_clearance TEXT,
    dimensions_static_payload TEXT,
    dimensions_moving_payload TEXT,
    dimensions_arm_payload TEXT,
    -- Mobility specifications
    mobility_max_speed TEXT,
    mobility_typical_range TEXT,
    mobility_movement_modes TEXT,
    mobility_max_gradient TEXT,
    mobility_obstacle_height TEXT,
    mobility_stair_climbing TEXT,
    mobility_surface_compatibility TEXT,
    mobility_temperature_range TEXT,
    mobility_humidity TEXT,
    mobility_weather_protection TEXT,
    -- Power specifications
    power_battery_capacity TEXT,
    power_battery_type TEXT,
    power_battery_runtime TEXT,
    power_battery_hot_swap TEXT,
    power_consumption_average TEXT,
    power_consumption_peak TEXT,
    power_consumption_charging_specs TEXT,
    -- Control specifications
    control_total_joints TEXT,
    control_torque_specs TEXT,
    control_movement_range TEXT,
    control_cameras TEXT,
    control_lidar TEXT,
    control_imu_sensors TEXT,
    control_sensor_integration TEXT,
    control_processor TEXT,
    control_memory TEXT,
    control_additional_modules TEXT,
    -- Connectivity specifications
    connectivity_wifi TEXT,
    connectivity_bluetooth TEXT,
    connectivity_ethernet TEXT,
    connectivity_remote_range TEXT,
    connectivity_ports TEXT,
    connectivity_mounting_points TEXT,
    connectivity_peripheral_power TEXT,
    connectivity_sdk_support TEXT,
    -- Safety specifications
    safety_emergency_stop TEXT,
    safety_remote_stop TEXT,
    safety_failsafe_behavior TEXT,
    safety_manual TEXT,
    safety_semi_autonomous TEXT,
    safety_full_autonomous TEXT,
    safety_simulation_compatibility TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Humanoid robot specifications table
CREATE TABLE public.humanoid_robot_specifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    -- Dimensions specifications
    dimensions_standing_height TEXT,
    dimensions_weight TEXT,
    dimensions_compact_dimensions TEXT,
    dimensions_arm_span TEXT,
    dimensions_thigh_length TEXT,
    dimensions_arm_length TEXT,
    dimensions_proportions TEXT,
    -- Mobility specifications
    mobility_walking_speed TEXT,
    mobility_running_speed TEXT,
    mobility_movement_modes TEXT,
    mobility_stair_climbing TEXT,
    mobility_obstacle_height TEXT,
    mobility_terrain_adaptation TEXT,
    mobility_balance_systems TEXT,
    -- Degrees of freedom specifications
    dof_total_dof TEXT,
    dof_body_distribution TEXT,
    dof_leg_dof TEXT,
    dof_arm_dof TEXT,
    dof_waist_torso_dof TEXT,
    dof_head_neck_dof TEXT,
    dof_hand_dof TEXT,
    dof_tactile_feedback TEXT,
    -- Power specifications
    power_joint_torque TEXT,
    power_peak_torque TEXT,
    power_actuator_type TEXT,
    power_operating_payload TEXT,
    power_arm_load TEXT,
    power_manipulation_rating TEXT,
    power_battery_capacity TEXT,
    power_battery_runtime TEXT,
    power_battery_charging_specs TEXT,
    power_consumption_profile TEXT,
    -- Sensing specifications
    sensing_cameras TEXT,
    sensing_lidar_3d TEXT,
    sensing_perception_360 TEXT,
    sensing_microphone_array TEXT,
    sensing_audio_systems TEXT,
    sensing_speech_recognition TEXT,
    sensing_imu_balance TEXT,
    sensing_tactile_force TEXT,
    sensing_temperature_monitoring TEXT,
    -- Computing specifications
    computing_onboard_computing TEXT,
    computing_ai_computing TEXT,
    computing_memory_storage TEXT,
    computing_multimodal_ai TEXT,
    computing_realtime_processing TEXT,
    computing_learning_adaptation TEXT,
    -- Connectivity specifications
    connectivity_wireless TEXT,
    connectivity_remote_control TEXT,
    connectivity_fleet_integration TEXT,
    connectivity_voice_commands TEXT,
    connectivity_vr_control TEXT,
    connectivity_teaching_by_demonstration TEXT,
    connectivity_autonomous_modes TEXT,
    -- Safety specifications
    safety_multilevel_security TEXT,
    safety_emergency_protocols TEXT,
    safety_protection_level TEXT,
    safety_operating_conditions TEXT,
    safety_indoor_outdoor TEXT,
    safety_weather_resistance TEXT,
    -- Software specifications
    software_sdk_support TEXT,
    software_framework_compatibility TEXT,
    software_simulation_integration TEXT,
    software_service_interaction TEXT,
    software_industrial_support TEXT,
    software_research_education TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Robotic arm specifications table
CREATE TABLE public.robotic_arm_specifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    -- Capacity specifications
    capacity_max_payload TEXT,
    capacity_max_reach TEXT,
    capacity_nominal_payload TEXT,
    capacity_moment_inertia TEXT,
    capacity_repeatability TEXT,
    capacity_positioning_accuracy TEXT,
    capacity_path_accuracy TEXT,
    capacity_absolute_accuracy TEXT,
    capacity_max_tool_speed TEXT,
    capacity_joint_angular_speed TEXT,
    capacity_acceleration TEXT,
    capacity_cycle_time TEXT,
    -- Mechanical specifications
    mechanical_axes_count TEXT,
    mechanical_joint_range TEXT,
    mechanical_infinite_rotation TEXT,
    mechanical_manipulator_weight TEXT,
    mechanical_base_dimensions TEXT,
    mechanical_mounting_options TEXT,
    mechanical_construction_material TEXT,
    -- Control specifications
    control_graphical_environments TEXT,
    control_teach_by_demonstration TEXT,
    control_programming_languages TEXT,
    control_drag_drop_interface TEXT,
    control_pc_software TEXT,
    control_mobile_app TEXT,
    control_voice_control TEXT,
    control_gesture_vision TEXT,
    -- Connectivity specifications
    connectivity_ethernet TEXT,
    connectivity_usb TEXT,
    connectivity_wireless TEXT,
    connectivity_end_effector_comm TEXT,
    connectivity_digital_io TEXT,
    connectivity_analog_io TEXT,
    connectivity_tool_connector_io TEXT,
    connectivity_end_effector_protocols TEXT,
    -- Power specifications
    power_input_voltage TEXT,
    power_consumption TEXT,
    power_current_requirements TEXT,
    power_temperature_range TEXT,
    power_humidity TEXT,
    power_ip_rating TEXT,
    power_cleanroom_class TEXT,
    -- Safety specifications
    safety_collision_detection TEXT,
    safety_boundaries TEXT,
    safety_emergency_stop TEXT,
    safety_force_torque_limiting TEXT,
    safety_self_collision_prevention TEXT,
    safety_advanced_safety_features TEXT,
    safety_force_sensing TEXT,
    safety_speed_separation TEXT,
    safety_safe_operating_modes TEXT,
    -- Software specifications
    software_simulation_3d TEXT,
    software_autonomous_programming TEXT,
    software_trajectory_recording TEXT,
    software_cad_cam_integration TEXT,
    software_end_effector_types TEXT,
    software_multi_axis_machining TEXT,
    software_pick_place_optimization TEXT,
    software_welding_assembly TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Laser cutter specifications table
CREATE TABLE public.laser_cutter_specifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    -- Laser specifications
    laser_output_power TEXT,
    laser_type TEXT,
    laser_wavelength TEXT,
    laser_spot_size TEXT,
    laser_tube_lifetime TEXT,
    laser_max_engraving_speed TEXT,
    laser_processing_accuracy TEXT,
    laser_image_resolution TEXT,
    laser_speed_range TEXT,
    -- Work area specifications
    work_area_size TEXT,
    work_table_size TEXT,
    work_max_workpiece_height TEXT,
    work_max_cutting_thickness TEXT,
    work_machine_dimensions TEXT,
    work_total_weight TEXT,
    work_rotary_engraving_diameter TEXT,
    -- Vision specifications
    vision_camera_resolution TEXT,
    vision_accuracy TEXT,
    vision_preview_area TEXT,
    vision_autofocus_lidar TEXT,
    vision_curved_3d_engraving TEXT,
    vision_auto_passthrough TEXT,
    vision_electric_lifting TEXT,
    -- Control specifications
    control_touch_panel_specs TEXT,
    control_methods TEXT,
    control_display_languages TEXT,
    control_supported_platforms TEXT,
    control_os_compatibility TEXT,
    control_supported_formats TEXT,
    -- Connectivity specifications
    connectivity_wifi_capabilities TEXT,
    connectivity_ethernet_port TEXT,
    connectivity_usb_connections TEXT,
    connectivity_mobile_compatibility TEXT,
    -- Safety specifications
    safety_classification TEXT,
    safety_enclosed_workspace TEXT,
    safety_emergency_stop TEXT,
    safety_automatic_locks TEXT,
    safety_warning_systems TEXT,
    safety_operating_temperature TEXT,
    safety_storage_temperature TEXT,
    safety_power_requirements TEXT,
    -- Cooling specifications
    cooling_capacity TEXT,
    cooling_air_assist TEXT,
    cooling_exhaust_fan TEXT,
    cooling_smoke_filtering TEXT,
    -- Materials specifications
    materials_compatible_cutting TEXT,
    materials_cutting_depth_by_material TEXT,
    materials_engraving_materials TEXT,
    materials_parameters TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_products_category ON public.products(category);
CREATE INDEX idx_products_brand ON public.products(brand);
CREATE INDEX idx_products_stock_status ON public.products(stock_status);
CREATE INDEX idx_products_popular ON public.products(popular);
CREATE INDEX idx_products_name_search ON public.products USING gin(to_tsvector('english', name));

-- Create indexes for specification tables
CREATE INDEX idx_printer_specs_product_id ON public.printer_specifications(product_id);
CREATE INDEX idx_scanner_specs_product_id ON public.scanner_specifications(product_id);
CREATE INDEX idx_robotic_dog_specs_product_id ON public.robotic_dog_specifications(product_id);
CREATE INDEX idx_humanoid_robot_specs_product_id ON public.humanoid_robot_specifications(product_id);
CREATE INDEX idx_robotic_arm_specs_product_id ON public.robotic_arm_specifications(product_id);
CREATE INDEX idx_laser_cutter_specs_product_id ON public.laser_cutter_specifications(product_id);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.printer_specifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scanner_specifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.robotic_dog_specifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.humanoid_robot_specifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.robotic_arm_specifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.laser_cutter_specifications ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access (since this is a public catalog)
-- Products are publicly readable
CREATE POLICY "Products are publicly readable" ON public.products FOR SELECT USING (true);

-- Specifications are publicly readable
CREATE POLICY "Printer specs are publicly readable" ON public.printer_specifications FOR SELECT USING (true);
CREATE POLICY "Scanner specs are publicly readable" ON public.scanner_specifications FOR SELECT USING (true);
CREATE POLICY "Robotic dog specs are publicly readable" ON public.robotic_dog_specifications FOR SELECT USING (true);
CREATE POLICY "Humanoid robot specs are publicly readable" ON public.humanoid_robot_specifications FOR SELECT USING (true);
CREATE POLICY "Robotic arm specs are publicly readable" ON public.robotic_arm_specifications FOR SELECT USING (true);
CREATE POLICY "Laser cutter specs are publicly readable" ON public.laser_cutter_specifications FOR SELECT USING (true);

-- Admin-only policies for INSERT, UPDATE, DELETE will be added later when you implement authentication
