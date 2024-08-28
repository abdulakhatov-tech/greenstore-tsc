// types/index.ts
export interface EmailT {
  email: string;
}

export interface SubscriptionResponse {
  extraMessage?: string;
  message?: string;
}

export interface ErrorResponse {
  message: string;
}
