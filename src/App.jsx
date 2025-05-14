import GuestList from "./GuestList";
import useQuery from "./useQuery";


export default function App() {
  const {data: guests, loading, error} = useQuery("/guests")

  if (loading) return <p>Loading...</p>;
  if (error || !guests) return <p>{error}</p>

  return (
    <>
        <h1>Guests</h1>
        <GuestList guests={guests} />
    </>
  );
}

