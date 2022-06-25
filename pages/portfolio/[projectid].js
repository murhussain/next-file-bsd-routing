import { useRouter } from 'next/router';

function PortfolioProjectDetail() {
  const router = useRouter();

  console.log(router.pathname);
  
  // send a request to some backend server to fetch the piece of
  // with an id of router.query.projectid
  console.log(router.query);

  return (
    <div>
      <h2>Protfolio Detail page</h2>
    </div>
  );
}

export default PortfolioProjectDetail;