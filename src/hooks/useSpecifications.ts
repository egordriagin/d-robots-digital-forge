
import { useQuery } from "@tanstack/react-query";
import { specificationService } from "@/services/supabase/specifications";
import { 
  transformDatabasePrinterSpecs, 
  transformDatabaseScannerSpecs, 
  transformDatabaseRoboticDogSpecs,
  transformDatabaseHumanoidRobotSpecs,
  transformDatabaseRoboticArmSpecs,
  transformDatabaseLaserCutterSpecs
} from "@/utils/specificationTransformers";

export const usePrinterSpecs = (productId: string) => {
  return useQuery({
    queryKey: ['printer-specs', productId],
    queryFn: async () => {
      const dbSpecs = await specificationService.getPrinterSpecs(productId);
      return dbSpecs ? transformDatabasePrinterSpecs(dbSpecs) : null;
    },
    enabled: !!productId,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useScannerSpecs = (productId: string) => {
  return useQuery({
    queryKey: ['scanner-specs', productId],
    queryFn: async () => {
      const dbSpecs = await specificationService.getScannerSpecs(productId);
      return dbSpecs ? transformDatabaseScannerSpecs(dbSpecs) : null;
    },
    enabled: !!productId,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useRoboticDogSpecs = (productId: string) => {
  return useQuery({
    queryKey: ['robotic-dog-specs', productId],
    queryFn: async () => {
      const dbSpecs = await specificationService.getRoboticDogSpecs(productId);
      return dbSpecs ? transformDatabaseRoboticDogSpecs(dbSpecs) : null;
    },
    enabled: !!productId,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useHumanoidRobotSpecs = (productId: string) => {
  return useQuery({
    queryKey: ['humanoid-robot-specs', productId],
    queryFn: async () => {
      const dbSpecs = await specificationService.getHumanoidRobotSpecs(productId);
      return dbSpecs ? transformDatabaseHumanoidRobotSpecs(dbSpecs) : null;
    },
    enabled: !!productId,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useRoboticArmSpecs = (productId: string) => {
  return useQuery({
    queryKey: ['robotic-arm-specs', productId],
    queryFn: async () => {
      const dbSpecs = await specificationService.getRoboticArmSpecs(productId);
      return dbSpecs ? transformDatabaseRoboticArmSpecs(dbSpecs) : null;
    },
    enabled: !!productId,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useLaserCutterSpecs = (productId: string) => {
  return useQuery({
    queryKey: ['laser-cutter-specs', productId],
    queryFn: async () => {
      const dbSpecs = await specificationService.getLaserCutterSpecs(productId);
      return dbSpecs ? transformDatabaseLaserCutterSpecs(dbSpecs) : null;
    },
    enabled: !!productId,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};
