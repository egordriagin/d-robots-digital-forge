
# Product Catalog Database Schema Setup

You are tasked with setting up a comprehensive database schema for a product catalog system. Your goal is to create a robust and efficient schema that includes a main products table, separate specification tables for different product types, proper indexing, and admin-only access through RLS policies.

## Architecture Requirements

- Use a single products table with a category field for basic categorization
- Use normalized separate specification tables for each product type (not JSONB)
- Follow exact TypeScript interface field naming conventions
- Implement admin-only access through RLS policies

## Detailed Field Specifications

### Main Products Table Fields

The main products table must include these exact fields based on the TypeScript Product interface:

**Core Product Fields:**
- `id` (TEXT PRIMARY KEY) - Unique product identifier
- `name` (TEXT NOT NULL) - Product name
- `brand` (TEXT NOT NULL) - Product brand
- `category` (TEXT NOT NULL) - Product category (3d-printers, 3d-scanners, robotic-dogs, humanoid-robots, robotic-arms, laser-cutters)
- `short_description` (TEXT NOT NULL) - Brief product description
- `full_description` (TEXT NOT NULL) - Detailed product description
- `images` (TEXT[] NOT NULL) - Array of image URLs
- `lead_time` (TEXT NOT NULL) - Delivery lead time
- `rating` (DECIMAL(2,1) NOT NULL) - Product rating (0.0-5.0)
- `review_count` (INTEGER NOT NULL DEFAULT 0) - Number of reviews
- `features` (TEXT[] NOT NULL) - Array of product features
- `demo_video` (TEXT NOT NULL) - Demo video URL
- `popular` (BOOLEAN DEFAULT FALSE) - Whether product is marked as popular
- `type` (TEXT) - Optional product type specification
- `power` (TEXT) - Optional power specification

**Pricing Fields (JSONB):**
- `pricing` (JSONB NOT NULL) - Contains: base, with_ams (optional), with_accessories (optional)

**Stock Status Field:**
- `stock_status` (TEXT NOT NULL) - Enum: 'in-stock', 'out-of-stock', 'backorder', 'discontinued', 'pre-order'

**Shipping Fields (JSONB):**
- `shipping` (JSONB NOT NULL) - Contains: cost, free_threshold

**Reviews Field (JSONB):**
- `reviews` (JSONB NOT NULL DEFAULT '[]') - Array of review objects with: id, author, rating, date, comment

**Audit Fields:**
- `created_at` (TIMESTAMP WITH TIME ZONE DEFAULT NOW())
- `updated_at` (TIMESTAMP WITH TIME ZONE DEFAULT NOW())

### Specification Table Structure

Create 6 separate specification tables, each with a foreign key to the main products table:

#### 1. Printer Specifications Table (`printer_specifications`)

**Printing Section:**
- `product_id` (TEXT REFERENCES products(id))
- `build_volume_dimensions` (TEXT)
- `build_volume_area` (TEXT)
- `build_volume_max_length` (TEXT)
- `resolution_layer_height` (TEXT)
- `resolution_xy_resolution` (TEXT)
- `resolution_dimensional_accuracy` (TEXT)
- `resolution_min_wall_thickness` (TEXT)
- `speed_max_speed` (TEXT)
- `speed_typical_range` (TEXT)
- `speed_material_dependent` (TEXT)

**Technology Section:**
- `printing_technology_type` (TEXT)
- `printing_technology_implementation` (TEXT)
- `materials_supported_materials` (TEXT)
- `materials_cartridge_specs` (TEXT)
- `materials_temperature_range` (TEXT)

**Hardware Section:**
- `dimensions_printer_size` (TEXT)
- `dimensions_weight` (TEXT)
- `dimensions_required_space` (TEXT)
- `interface_control_type` (TEXT)
- `interface_display_specs` (TEXT)
- `interface_languages` (TEXT)
- `connectivity_wifi` (TEXT)
- `connectivity_ethernet` (TEXT)
- `connectivity_usb` (TEXT)

**Environment Section:**
- `operating_temperature_range` (TEXT)
- `operating_humidity` (TEXT)
- `power_voltage` (TEXT)
- `power_consumption` (TEXT)
- `power_frequency` (TEXT)

**Advanced Section:**
- `automation_auto_leveling` (TEXT)
- `automation_sensors` (TEXT)
- `automation_auto_feed` (TEXT)
- `software_compatible_os` (TEXT)
- `software_file_formats` (TEXT)
- `software_system_requirements` (TEXT)
- `quality_control_force_sensing` (TEXT)
- `quality_control_temperature_control` (TEXT)
- `quality_control_realtime_monitoring` (TEXT)

#### 2. Scanner Specifications Table (`scanner_specifications`)

**Accuracy Section:**
- `product_id` (TEXT REFERENCES products(id))
- `point_accuracy_range` (TEXT)
- `point_accuracy_typical` (TEXT)
- `point_accuracy_measurement` (TEXT)
- `volumetric_accuracy_base_accuracy` (TEXT)
- `volumetric_accuracy_distance_coefficient` (TEXT)
- `volumetric_accuracy_formula` (TEXT)
- `resolution_measurement_resolution` (TEXT)
- `resolution_point_distance` (TEXT)
- `resolution_output_mesh_resolution` (TEXT)

**Speed Section:**
- `frame_rate` (TEXT)
- `measurement_speed` (TEXT)
- `data_collection_speed` (TEXT)

**Capture Range Section:**
- `single_scan_range` (TEXT)
- `field_of_view` (TEXT)
- `depth_of_field` (TEXT)
- `working_distance` (TEXT)
- `object_size_minimum` (TEXT)
- `object_size_maximum` (TEXT)
- `object_size_recommended` (TEXT)

**Technology Section:**
- `scanning_technology_type` (TEXT)
- `scanning_technology_light_source` (TEXT)
- `scanning_technology_cameras_projectors` (TEXT)
- `tracking_alignment_methods` (TEXT)
- `tracking_capabilities` (TEXT)
- `tracking_marker_support` (TEXT)

**Compatibility Section:**
- `size_constraints_recommended_range` (TEXT)
- `size_constraints_typical_characteristics` (TEXT)
- `size_constraints_maximum_scannable` (TEXT)
- `surface_requirements_compatible_surfaces` (TEXT)
- `surface_requirements_processing_recommendations` (TEXT)
- `surface_requirements_limitations` (TEXT)

**Software Section:**
- `output_supported_file_formats` (TEXT)
- `output_operating_systems` (TEXT)
- `output_mobile_compatibility` (TEXT)
- `system_requirements_minimum_specs` (TEXT)
- `system_requirements_recommended_specs` (TEXT)
- `system_requirements_ram_gpu_cpu` (TEXT)

**Hardware Section:**
- `equipment_weight_dimensions` (TEXT)
- `equipment_cable_connectivity` (TEXT)
- `equipment_portability_classification` (TEXT)
- `operating_conditions_indoor_outdoor` (TEXT)
- `operating_conditions_lighting_requirements` (TEXT)
- `operating_conditions_environmental_constraints` (TEXT)

**Advanced Section:**
- `scanning_modes_multiple_options` (TEXT)
- `scanning_modes_texture_color_capture` (TEXT)
- `scanning_modes_realtime_vs_postprocessing` (TEXT)
- `quality_control_auto_calibration` (TEXT)
- `quality_control_error_detection_correction` (TEXT)
- `quality_control_quality_assessment_tools` (TEXT)

#### 3. Robotic Dog Specifications Table (`robotic_dog_specifications`)

**Dimensions Section:**
- `product_id` (TEXT REFERENCES products(id))
- `form_factor_working_dimensions` (TEXT)
- `form_factor_compact_dimensions` (TEXT)
- `form_factor_total_weight` (TEXT)
- `form_factor_ground_clearance` (TEXT)
- `load_capacity_static_payload` (TEXT)
- `load_capacity_moving_payload` (TEXT)
- `load_capacity_arm_payload` (TEXT)

**Mobility Section:**
- `speed_movement_max_speed` (TEXT)
- `speed_movement_typical_range` (TEXT)
- `speed_movement_movement_modes` (TEXT)
- `terrain_capabilities_max_gradient` (TEXT)
- `terrain_capabilities_obstacle_height` (TEXT)
- `terrain_capabilities_stair_climbing` (TEXT)
- `terrain_capabilities_surface_compatibility` (TEXT)
- `environment_temperature_range` (TEXT)
- `environment_humidity` (TEXT)
- `environment_weather_protection` (TEXT)

**Power Section:**
- `battery_capacity` (TEXT)
- `battery_type` (TEXT)
- `battery_runtime` (TEXT)
- `battery_hot_swap` (TEXT)
- `consumption_average` (TEXT)
- `consumption_peak` (TEXT)
- `consumption_charging_specs` (TEXT)

**Control Section:**
- `degrees_of_freedom_total_joints` (TEXT)
- `degrees_of_freedom_torque_specs` (TEXT)
- `degrees_of_freedom_movement_range` (TEXT)
- `sensing_cameras` (TEXT)
- `sensing_lidar` (TEXT)
- `sensing_imu_sensors` (TEXT)
- `sensing_sensor_integration` (TEXT)
- `computing_processor` (TEXT)
- `computing_memory` (TEXT)
- `computing_additional_modules` (TEXT)

**Connectivity Section:**
- `communication_wifi` (TEXT)
- `communication_bluetooth` (TEXT)
- `communication_ethernet` (TEXT)
- `communication_remote_range` (TEXT)
- `expansion_ports` (TEXT)
- `expansion_mounting_points` (TEXT)
- `expansion_peripheral_power` (TEXT)
- `expansion_sdk_support` (TEXT)

**Safety Section:**
- `emergency_systems_emergency_stop` (TEXT)
- `emergency_systems_remote_stop` (TEXT)
- `emergency_systems_failsafe_behavior` (TEXT)
- `operating_modes_manual` (TEXT)
- `operating_modes_semi_autonomous` (TEXT)
- `operating_modes_full_autonomous` (TEXT)
- `operating_modes_simulation_compatibility` (TEXT)

#### 4. Humanoid Robot Specifications Table (`humanoid_robot_specifications`)

**Dimensions Section:**
- `product_id` (TEXT REFERENCES products(id))
- `form_factor_standing_height` (TEXT)
- `form_factor_weight` (TEXT)
- `form_factor_compact_dimensions` (TEXT)
- `form_factor_arm_span` (TEXT)
- `anthropomorphic_thigh_length` (TEXT)
- `anthropomorphic_arm_length` (TEXT)
- `anthropomorphic_proportions` (TEXT)

**Mobility Section:**
- `movement_walking_speed` (TEXT)
- `movement_running_speed` (TEXT)
- `movement_movement_modes` (TEXT)
- `navigation_stair_climbing` (TEXT)
- `navigation_obstacle_height` (TEXT)
- `navigation_terrain_adaptation` (TEXT)
- `navigation_balance_systems` (TEXT)

**Degrees of Freedom Section:**
- `overall_total_dof` (TEXT)
- `overall_body_distribution` (TEXT)
- `limbs_leg_dof` (TEXT)
- `limbs_arm_dof` (TEXT)
- `limbs_waist_torso_dof` (TEXT)
- `limbs_head_neck_dof` (TEXT)
- `hand_dexterity_hand_dof` (TEXT)
- `hand_dexterity_tactile_feedback` (TEXT)

**Power Section:**
- `actuators_joint_torque` (TEXT)
- `actuators_peak_torque` (TEXT)
- `actuators_actuator_type` (TEXT)
- `load_capacity_operating_payload` (TEXT)
- `load_capacity_arm_load` (TEXT)
- `load_capacity_manipulation_rating` (TEXT)
- `battery_capacity` (TEXT)
- `battery_runtime` (TEXT)
- `battery_charging_specs` (TEXT)
- `battery_consumption_profile` (TEXT)

**Sensing Section:**
- `vision_cameras` (TEXT)
- `vision_lidar_3d` (TEXT)
- `vision_perception_360` (TEXT)
- `audio_microphone_array` (TEXT)
- `audio_audio_systems` (TEXT)
- `audio_speech_recognition` (TEXT)
- `environmental_imu_balance` (TEXT)
- `environmental_tactile_force` (TEXT)
- `environmental_temperature_monitoring` (TEXT)

**Computing Section:**
- `power_onboard_computing` (TEXT)
- `power_ai_computing` (TEXT)
- `power_memory_storage` (TEXT)
- `ai_systems_multimodal_ai` (TEXT)
- `ai_systems_realtime_processing` (TEXT)
- `ai_systems_learning_adaptation` (TEXT)

**Connectivity Section:**
- `communication_wireless` (TEXT)
- `communication_remote_control` (TEXT)
- `communication_fleet_integration` (TEXT)
- `control_voice_commands` (TEXT)
- `control_vr_control` (TEXT)
- `control_teaching_by_demonstration` (TEXT)
- `control_autonomous_modes` (TEXT)

**Safety Section:**
- `systems_multilevel_security` (TEXT)
- `systems_emergency_protocols` (TEXT)
- `systems_protection_level` (TEXT)
- `environment_operating_conditions` (TEXT)
- `environment_indoor_outdoor` (TEXT)
- `environment_weather_resistance` (TEXT)

**Software Section:**
- `development_sdk_support` (TEXT)
- `development_framework_compatibility` (TEXT)
- `development_simulation_integration` (TEXT)
- `applications_service_interaction` (TEXT)
- `applications_industrial_support` (TEXT)
- `applications_research_education` (TEXT)

#### 5. Robotic Arm Specifications Table (`robotic_arm_specifications`)

**Capacity Section:**
- `product_id` (TEXT REFERENCES products(id))
- `payload_max_payload` (TEXT)
- `payload_max_reach` (TEXT)
- `payload_nominal_payload` (TEXT)
- `payload_moment_inertia` (TEXT)
- `accuracy_repeatability` (TEXT)
- `accuracy_positioning_accuracy` (TEXT)
- `accuracy_path_accuracy` (TEXT)
- `accuracy_absolute_accuracy` (TEXT)
- `speed_max_tool_speed` (TEXT)
- `speed_joint_angular_speed` (TEXT)
- `speed_acceleration` (TEXT)
- `speed_cycle_time` (TEXT)

**Mechanical Section:**
- `degrees_of_freedom_axes_count` (TEXT)
- `degrees_of_freedom_joint_range` (TEXT)
- `degrees_of_freedom_infinite_rotation` (TEXT)
- `physical_manipulator_weight` (TEXT)
- `physical_base_dimensions` (TEXT)
- `physical_mounting_options` (TEXT)
- `physical_construction_material` (TEXT)

**Control Section:**
- `programming_graphical_environments` (TEXT)
- `programming_teach_by_demonstration` (TEXT)
- `programming_programming_languages` (TEXT)
- `programming_drag_drop_interface` (TEXT)
- `methods_pc_software` (TEXT)
- `methods_mobile_app` (TEXT)
- `methods_voice_control` (TEXT)
- `methods_gesture_vision` (TEXT)

**Connectivity Section:**
- `communication_ethernet` (TEXT)
- `communication_usb` (TEXT)
- `communication_wireless` (TEXT)
- `communication_end_effector_comm` (TEXT)
- `io_digital_io` (TEXT)
- `io_analog_io` (TEXT)
- `io_tool_connector_io` (TEXT)
- `io_end_effector_protocols` (TEXT)

**Power Section:**
- `requirements_input_voltage` (TEXT)
- `requirements_power_consumption` (TEXT)
- `requirements_current_requirements` (TEXT)
- `operating_temperature_range` (TEXT)
- `operating_humidity` (TEXT)
- `operating_ip_rating` (TEXT)
- `operating_cleanroom_class` (TEXT)

**Safety Section:**
- `functions_collision_detection` (TEXT)
- `functions_safety_boundaries` (TEXT)
- `functions_emergency_stop` (TEXT)
- `functions_force_torque_limiting` (TEXT)
- `functions_self_collision_prevention` (TEXT)
- `collaborative_advanced_safety_features` (TEXT)
- `collaborative_force_sensing` (TEXT)
- `collaborative_speed_separation` (TEXT)
- `collaborative_safe_operating_modes` (TEXT)

**Software Section:**
- `development_simulation_3d` (TEXT)
- `development_autonomous_programming` (TEXT)
- `development_trajectory_recording` (TEXT)
- `development_cad_cam_integration` (TEXT)
- `applications_end_effector_types` (TEXT)
- `applications_multi_axis_machining` (TEXT)
- `applications_pick_place_optimization` (TEXT)
- `applications_welding_assembly` (TEXT)

#### 6. Laser Cutter Specifications Table (`laser_cutter_specifications`)

**Laser Section:**
- `product_id` (TEXT REFERENCES products(id))
- `power_output_power` (TEXT)
- `power_laser_type` (TEXT)
- `power_wavelength` (TEXT)
- `power_spot_size` (TEXT)
- `power_tube_lifetime` (TEXT)
- `performance_max_engraving_speed` (TEXT)
- `performance_processing_accuracy` (TEXT)
- `performance_image_resolution` (TEXT)
- `performance_speed_range` (TEXT)

**Work Area Section:**
- `processing_work_area_size` (TEXT)
- `processing_table_size` (TEXT)
- `processing_max_workpiece_height` (TEXT)
- `processing_max_cutting_thickness` (TEXT)
- `physical_machine_dimensions` (TEXT)
- `physical_total_weight` (TEXT)
- `physical_rotary_engraving_diameter` (TEXT)

**Vision Section:**
- `cameras_camera_resolution` (TEXT)
- `cameras_vision_accuracy` (TEXT)
- `cameras_preview_area` (TEXT)
- `cameras_autofocus_lidar` (TEXT)
- `advanced_curved_3d_engraving` (TEXT)
- `advanced_auto_passthrough` (TEXT)
- `advanced_electric_lifting` (TEXT)

**Control Section:**
- `interface_touch_panel_specs` (TEXT)
- `interface_control_methods` (TEXT)
- `interface_display_languages` (TEXT)
- `software_supported_platforms` (TEXT)
- `software_os_compatibility` (TEXT)
- `software_supported_formats` (TEXT)

**Connectivity Section:**
- `options_wifi_capabilities` (TEXT)
- `options_ethernet_port` (TEXT)
- `options_usb_connections` (TEXT)
- `options_mobile_compatibility` (TEXT)

**Safety Section:**
- `features_safety_classification` (TEXT)
- `features_enclosed_workspace` (TEXT)
- `features_emergency_stop` (TEXT)
- `features_automatic_locks` (TEXT)
- `features_warning_systems` (TEXT)
- `operating_operating_temperature` (TEXT)
- `operating_storage_temperature` (TEXT)
- `operating_power_requirements` (TEXT)

**Cooling Section:**
- `system_cooling_capacity` (TEXT)
- `system_air_assist` (TEXT)
- `system_exhaust_fan` (TEXT)
- `system_smoke_filtering` (TEXT)

**Materials Section:**
- `cutting_compatible_cutting_materials` (TEXT)
- `cutting_cutting_depth_by_material` (TEXT)
- `engraving_engraving_materials` (TEXT)
- `engraving_material_parameters` (TEXT)

## Database Setup Requirements

Follow these steps to complete the task:

1. **Review Current Schema**: Analyze existing tables and identify improvements needed

2. **Create Main Products Table**: Use the exact field specifications provided above

3. **Create Specification Tables**: Create all 6 specification tables with the exact field names provided

4. **Set Up Indexing**: Create indexes on:
   - `category` field for category filtering
   - `brand` field for brand filtering
   - Full-text search index on `name` and `short_description`
   - `stock_status` for inventory queries
   - `popular` for featured product queries

5. **Implement RLS Policies**: Create admin-only access policies that restrict all operations to authenticated admin users

6. **Add Constraints**: 
   - Stock status enum constraint
   - Rating range constraint (0.0-5.0)
   - Non-null constraints where specified

7. **Add Triggers**: Create updated_at trigger for automatic timestamp updates

## Critical Requirements

- **Field Naming**: Use exact snake_case field names as specified - do NOT deviate
- **Data Types**: Use appropriate PostgreSQL data types for each field
- **Foreign Keys**: Each specification table must have proper foreign key to products table
- **Primary Keys**: Ensure all tables have proper primary keys
- **Admin Access**: All tables should be admin-only with proper RLS policies
- **Performance**: Include all specified indexes for optimal query performance

## Output Format

Provide your solution in these exact sections:

<main_products_table>
Complete SQL statement to create the products table with all specified fields
</main_products_table>

<specification_tables>
Complete SQL statements to create all 6 specification tables with exact field names
</specification_tables>

<indexes>
SQL statements to create all necessary indexes for performance
</indexes>

<rls_policies>
SQL statements to implement admin-only RLS policies for all tables
</rls_policies>

<constraints_and_triggers>
SQL statements for constraints, enums, and triggers
</constraints_and_triggers>

<notes>
Any additional notes about design decisions or implementation details
</notes>

Your output should only include content within these tags. Do not include any additional text or explanations outside of these sections.
