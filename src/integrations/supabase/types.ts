export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      orders: {
        Row: {
          id: string;
          created_at: string;
          package_id: string;
          customer_name: string;
          phone_number: string;
          status: "pending" | "success" | "failed";
          payhero_order_id: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          package_id: string;
          customer_name: string;
          phone_number: string;
          status?: "pending" | "success" | "failed";
          payhero_order_id?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          package_id?: string;
          customer_name?: string;
          phone_number?: string;
          status?: "pending" | "success" | "failed";
          payhero_order_id?: string | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
