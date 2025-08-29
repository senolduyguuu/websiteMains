import { useQuery } from "@tanstack/react-query";
import { AppTemplateResponse } from "@/types/appTemplate";
import { appTemplateApi } from "@/services/api";

const fetchAppTemplates = async (): Promise<AppTemplateResponse> => {
  console.log("🔍 Fetching app templates from API...");

  try {
    const data = await appTemplateApi.getAll();
    console.log("✅ App templates fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("❌ Error fetching app templates:", error);
    throw error;
  }
};

export const useAppTemplates = () => {
  return useQuery({
    queryKey: ["appTemplates"],
    queryFn: fetchAppTemplates,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
