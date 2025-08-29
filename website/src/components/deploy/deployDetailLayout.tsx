"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { appTemplateApi } from "@/services/api";
import { AppTemplate } from "@/types/appTemplate";
import AppHeader from "./AppHeader";
import AppDetails from "./AppDetails";
import AppSidebar from "./AppSidebar";

interface DeployDetailLayoutProps {
  appId: string;
}

const DeployDetailLayout = ({ appId }: DeployDetailLayoutProps) => {
  // Fetch app template data by ID
  const {
    data: appTemplateData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["appTemplate", appId],
    queryFn: () => appTemplateApi.getById(appId),
    enabled: !!appId,
  });

  // Handle both array and single object responses
  const appData = Array.isArray(appTemplateData?.data)
    ? appTemplateData.data[0]
    : appTemplateData?.data || null;

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DB5F39] mx-auto mb-4"></div>
          <p className="text-[hsl(var(--grey-200))]">
            Loading application details...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !appData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-2xl font-bold text-[hsl(var(--grey-0))] mb-2">
            Application not found
          </h3>
          <p className="text-[hsl(var(--grey-200))]">
            The application you're looking for doesn't exist or has been
            removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex items-start mx-0 md:mx-36 border-x py-8 md:py-12 border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <AppHeader appName={appData.name} description={appData.description} />

          {/* Main Content */}
          <div className="flex flex-col xl:flex-row gap-8 mt-12">
            {/* Left Column - App Details */}
            <div className="flex-1">
              <AppDetails
                appName={appData.name}
                description={appData.description}
                overview={appData.description}
                shortDescription={appData.shortDescription}
                requirements={appData.requirements}
                icon={appData.icon}
                status={appData.status}
                createdAt={appData.createdAt || appData.createdDate}
                updatedAt={appData.updatedAt || appData.lastModifiedDate}
              />
            </div>

            {/* Right Column - Sidebar */}
            <div className="xl:w-80 xl:flex-shrink-0">
              <AppSidebar
                category={appData.category}
                website={appData.documentationUrl || ""}
                repository={appData.repositoryUrl || ""}
                technologies={appData.tags || []}
                version={appData.version}
                status={appData.status}
                createdAt={appData.createdAt || appData.createdDate}
                updatedAt={appData.updatedAt || appData.lastModifiedDate}
                requirements={appData.requirements}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeployDetailLayout;
