export type NotificationTypeT = "success" | "info" | "warning" | "error";

export interface NotificationState {
  type: NotificationTypeT | null; // Allow for null when there is no notification
  message: string;
  description: string;
}