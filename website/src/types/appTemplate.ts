export interface AppTemplate {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  category: string;
  version: string;
  status: "stable" | "beta" | "alpha";
  icon?: string;
  imageUrl?: string;
  repositoryUrl?: string;
  documentationUrl?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface AppTemplateResponse {
  data: AppTemplate[];
  success: boolean;
  message?: string;
  totalCount?: number;
}
