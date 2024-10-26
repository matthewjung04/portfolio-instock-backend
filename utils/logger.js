const getFormattedDate = () => {
  return new Date().toISOString();
};

const logToFile = (filename, message) => {
  // Optional: You can implement file logging here using fs if needed
  // For now, we'll just use console
  console.log(`[${filename}] ${message}`);
};

const logger = {
  error: (message, error = null) => {
    const logMessage = {
      level: 'error',
      timestamp: getFormattedDate(),
      service: 'warehouse-service',
      message: message,
      error: error?.toString()
    };
    
    console.error(JSON.stringify(logMessage));
    logToFile('error.log', JSON.stringify(logMessage));
  },
  info: (message) => {
    const logMessage = {
      level: 'info',
      timestamp: getFormattedDate(),
      service: 'warehouse-service',
      message: message
    };

    console.log(JSON.stringify(logMessage));
    logToFile('combined.log', JSON.stringify(logMessage));
  }
};

const loggerInventory = {
  error: (message, error = null) => {
    const logMessage = {
      level: 'error',
      timestamp: getFormattedDate(),
      service: 'inventory-service',
      message: message,
      error: error?.toString()
    };

    console.error(JSON.stringify(logMessage));
    logToFile('error.log', JSON.stringify(logMessage));
  },
  info: (message) => {
    const logMessage = {
      level: 'info',
      timestamp: getFormattedDate(),
      service: 'inventory-service',
      message: message
    };

    console.log(JSON.stringify(logMessage));
    logToFile('combined.log', JSON.stringify(logMessage));
  }
};

// Add console logging for non-production environments
if (process.env.NODE_ENV !== "production") {
  const originalLoggerError = logger.error;
  const originalLoggerInfo = logger.info;
  const originalLoggerInventoryError = loggerInventory.error;
  const originalLoggerInventoryInfo = loggerInventory.info;

  logger.error = (message, error = null) => {
    console.error(`[warehouse-service] ERROR: ${message}`, error);
    originalLoggerError(message, error);
  };

  logger.info = (message) => {
    console.log(`[warehouse-service] INFO: ${message}`);
    originalLoggerInfo(message);
  };

  loggerInventory.error = (message, error = null) => {
    console.error(`[inventory-service] ERROR: ${message}`, error);
    originalLoggerInventoryError(message, error);
  };

  loggerInventory.info = (message) => {
    console.log(`[inventory-service] INFO: ${message}`);
    originalLoggerInventoryInfo(message);
  };
}

export default { logger, loggerInventory };