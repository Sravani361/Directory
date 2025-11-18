import { useEffect, useState } from 'react';
import Company from './components/Company';
import Filters from './components/Filters';

function App() {

    const [companies, setCompanies] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [filterlocation, setFilterLocation] = useState("");
    const [filterindustry, setFilterIndustry] = useState("");
    const [currentpage, setCurrentPage] = useState(1);
    const Companiesperpage = 4;

    useEffect(() => {
      fetch("/companies.json")
      .then((res) => res.json())
      .then((data) => { 
        setCompanies(data)
        setFiltered(data)});
    }, []);

    useEffect(() => {
      let data = companies;
  
      if (search) {
        data = data.filter((cp) =>
          cp.name.toLowerCase().includes(search.toLowerCase())
        );
      }
  
      if (filterlocation) {
        data = data.filter((cp) => cp.location === filterlocation);
      }
  
      if (filterindustry) {
        data = data.filter((cp) => cp.industry === filterindustry);
      }
  
      setFiltered(data);
      setCurrentPage(1);
    }, [search, filterlocation, filterindustry, companies]);

    const Last = currentpage * Companiesperpage;
    const First = Last - Companiesperpage;
    const current = filtered.slice(First, Last);
    const total = Math.floor(filtered.length / Companiesperpage) + 1;

    return (
      <div className="container">
      <h1>Companies Directory</h1>
      <Filters
        search={search}
        setSearch={setSearch}
        filterlocation={filterlocation}
        setFilterLocation={setFilterLocation}
        filterindustry={filterindustry}
        setFilterIndustry={setFilterIndustry}
      />
        <div className="companylist">
          {current.map((c) => (
          <Company key={c.id} cp={c} />
          ))}
        </div>

        <div className="pagination">
            <button
              disabled={currentpage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}>
              Prev
            </button>

            <span>
              Page {currentpage} of {total}
            </span>

            <button
              disabled={currentpage === total}
              onClick={() => setCurrentPage((p) => p + 1)}>
              Next
            </button>
         </div>
      </div>
    );
}

export default App;
