import Guest from "./Guest";

export default function GuestList({guests}) {
    return(
        <article className="guests">
            {guests.map((guest) => (
                <Guest key={guest.id} guest={guest} /> 
            ))}
        </article>
    );
}