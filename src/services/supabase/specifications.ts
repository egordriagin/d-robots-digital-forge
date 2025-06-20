
import { supabase } from "@/integrations/supabase/client";
import { 
  PrinterSpecifications,
  ScannerSpecifications,
  RoboticDogSpecifications,
  HumanoidRobotSpecifications,
  RoboticArmSpecifications,
  LaserCutterSpecifications
} from "@/types/product";

// Type definitions for database specification tables
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

export const specificationService = {
  // Printer specifications
  async getPrinterSpecs(productId: string): Promise<DatabasePrinterSpecs | null> {
    console.log(`Fetching printer specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('printer_specifications')
      .select('*')
      .eq('product_id', productId)
      .maybeSingle();

    if (error) {
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
  async getScannerSpecs(productId: string) {
    console.log(`Fetching scanner specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('scanner_specifications')
      .select('*')
      .eq('product_id', productId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching scanner specs:', error);
      throw error;
    }

    return data;
  },

  // Robotic dog specifications
  async getRoboticDogSpecs(productId: string) {
    console.log(`Fetching robotic dog specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('robotic_dog_specifications')
      .select('*')
      .eq('product_id', productId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching robotic dog specs:', error);
      throw error;
    }

    return data;
  },

  // Humanoid robot specifications
  async getHumanoidRobotSpecs(productId: string) {
    console.log(`Fetching humanoid robot specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('humanoid_robot_specifications')
      .select('*')
      .eq('product_id', productId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching humanoid robot specs:', error);
      throw error;
    }

    return data;
  },

  // Robotic arm specifications
  async getRoboticArmSpecs(productId: string) {
    console.log(`Fetching robotic arm specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('robotic_arm_specifications')
      .select('*')
      .eq('product_id', productId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching robotic arm specs:', error);
      throw error;
    }

    return data;
  },

  // Laser cutter specifications
  async getLaserCutterSpecs(productId: string) {
    console.log(`Fetching laser cutter specs for product: ${productId}`);
    const { data, error } = await supabase
      .from('laser_cutter_specifications')
      .select('*')
      .eq('product_id', productId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching laser cutter specs:', error);
      throw error;
    }

    return data;
  }
};
