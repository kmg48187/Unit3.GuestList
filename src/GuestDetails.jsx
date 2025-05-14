export default function Guest({guest}){
    return(
        <article className="guest">
            <h2>Name: {guest.name}</h2>
            <p>Email: {guest.email}</p>
        </article>
    );
};