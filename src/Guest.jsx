
export default function Guest({guest}){
    return(
        <article className="guest" onClick={setSelectedGuest = (guest)}>
            <h2>{guest.name}</h2>
            <p>{guest.email}</p>
        </article>
    );
};