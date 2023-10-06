
function Craetenotes(props) {
    return(
        <div id="container">
        <h1 className="note">{props.title}</h1>
        <p className="note">{props.Description}</p>
        </div>
    );
}

export default Craetenotes;