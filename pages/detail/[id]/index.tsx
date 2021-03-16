import { useRouter } from "next/router";

export default function Detail() {
  const { query } = useRouter();
  /* const { query : { id : name } } = useRouter(); */
  return (
    <div>
      <h1>Details: {query.id}</h1>
    </div>
  );
}
