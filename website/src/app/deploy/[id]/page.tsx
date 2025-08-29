import DeployDetailLayout from "@/components/deploy/deployDetailLayout";

interface DeployDetailPageProps {
  params: {
    id: string;
  };
}

const DeployDetailPage = ({ params }: DeployDetailPageProps) => {
  return <DeployDetailLayout appId={params.id} />;
};

export default DeployDetailPage;
