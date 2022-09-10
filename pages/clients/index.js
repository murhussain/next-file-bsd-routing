import { useRouter } from 'next/router';
import Link from 'next/link';

function ClientsPage() {
  const clients = [
    {id: "max", name: "Maximilian"},
    {id: "manu", name: "Manuel"},
  ];

  return (
    <div>
      <h2>Clients page</h2>
      <ul>
        {clients.map((item) => (
          <li key={item.id}>
            {/* <Link href={`/clients/${item.id}`}>{item.name}</Link> */}
            {/* Alternative way which next provide to avoid long string in links */}
            <Link href={{
                pathname: "clients/[id]",
                query: {id: item.id},
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;