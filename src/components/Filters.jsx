function Filters({ search, setSearch, filterlocation, setFilterLocation, filterindustry, setFilterIndustry }) {
    return (
    <div className="filter">
    <input
    type="text"
    placeholder="Search by name"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
    
    <select
    value={filterlocation}
    onChange={(e) => setFilterLocation(e.target.value)}
    >
    <option value="">All Locations</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="Bangalore">Bangalore</option>
    <option value="Chennai">Chennai</option>
    <option value="Pune">Pune</option>
    </select>

    <select 
        value={filterindustry} 
        onChange={(e) => setFilterIndustry(e.target.value)} >
        <option value="">All Industries</option>
        <option value="IT">IT</option>
        <option value="Software">Software</option>
        <option value="Banking">Banking</option>
        <option value="Finance">Finance</option>
        <option value="Edutech">Edutech</option>
        <option value="Pharmacy">Pharmacy</option>
    </select>
    </div>
    );
}
       
export default Filters;