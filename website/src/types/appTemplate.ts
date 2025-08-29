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
  requirements?: string[];
  createdAt?: string;
  updatedAt?: string;
  createdDate?: string;
  lastModifiedDate?: string;
  createdById?: string | null;
  lastModifiedById?: string | null;
  error?: string | null;
}

export interface AppTemplateResponse {
  data: AppTemplate[];
  success: boolean;
  message?: string;
  totalCount?: number;
}
