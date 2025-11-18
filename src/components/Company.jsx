function Company({ cp }) {
    return (
    <div className="company">
    <h3>{cp.name}</h3>
    <p><b>Location:</b> {cp.location}</p>
    <p><b>Industry:</b> {cp.industry}</p>
    </div>
    );
}
    
export default Company;