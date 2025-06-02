import { toast } from "sonner";

// Static class to handle API notifications
export class ApiNotification {
  static error(message: string, error: unknown) {
    // Convert error to string if it's an Error object
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    toast.error(message, {
      description: errorMessage,
      duration: 5000,
    });
  }

  static success(message: string) {
    toast.success(message, {
      duration: 3000,
    });
  }

  static info(message: string) {
    toast.info(message, {
      duration: 3000,
    });
  }
}
