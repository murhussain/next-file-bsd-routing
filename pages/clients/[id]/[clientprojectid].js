import { useRouter } from 'next/router';

function SelecteClientProjectPage() {
  const router = useRouter();

  console.log(router.query);


  return (
    <div>
      <h1>Project page for a specific project for a selected Client</h1>
    </div>
  );
}

export default SelecteClientProjectPage;