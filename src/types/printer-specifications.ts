
export interface PrinterSpecifications {
  printing: {
    buildVolume: {
      dimensions: string;
      area: string;
      maxLength: string;
    };
    resolution: {
      layerHeight: string;
      xyResolution: string;
      dimensionalAccuracy: string;
      minWallThickness: string;
    };
    speed: {
      maxSpeed: string;
      typicalRange: string;
      materialDependent?: string;
    };
  };
  technology: {
    printingTechnology: {
      type: string;
      implementation: string;
    };
    materials: {
      supportedMaterials: string;
      cartridgeSpecs: string;
      temperatureRange: string;
    };
  };
  hardware: {
    dimensions: {
      printerSize: string;
      weight: string;
      requiredSpace: string;
    };
    interface: {
      controlType: string;
      displaySpecs: string;
      languages: string;
    };
    connectivity: {
      wifi: string;
      ethernet: string;
      usb: string;
    };
  };
  environment: {
    operating: {
      temperatureRange: string;
      humidity?: string;
    };
    power: {
      voltage: string;
      consumption: string;
      frequency: string;
    };
  };
  advanced: {
    automation: {
      autoLeveling: string;
      sensors: string;
      autoFeed: string;
    };
    software: {
      compatibleOS: string;
      fileFormats: string;
      systemRequirements: string;
    };
    qualityControl: {
      forceSensing: string;
      temperatureControl: string;
      realTimeMonitoring: string;
    };
  };
}
