import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  function LoadProjectHandler() {
    //  Load an new screen just for a Specific project
    // router.push('/clients/max/projectA');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query:{id: 'max', clientprojectid: 'projectA'},
    });
  }

  function BackHandler() {
    router.replace('/clients');
  }

  return (
    <div>
      <h2>The projects for the selected client</h2>
      <button onClick={LoadProjectHandler}>Load a Project</button>
      <button onClick={BackHandler}>Go Back</button>
    </div>
  );
}

export default ClientProjectsPage;