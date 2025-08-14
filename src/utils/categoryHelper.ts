const categoryToSpecTableMap: Record<string, string> = {
  '3d-printers': 'printer_specifications',
  '3d-scanners': 'scanner_specifications',
  'humanoid-robots': 'humanoid_robot_specifications',
  'laser-cutters': 'laser_cutter_specifications',
  'robotic-arms': 'robotic_arm_specifications',
  'robotic-dogs': 'robotic_dog_specifications',
};

export const getSpecTableName = (category: string): string | null => {
  return categoryToSpecTableMap[category] || null;
};
