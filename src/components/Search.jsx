import { useState } from "react";

function Search(props){
    const [search, setSearch] = useState("");

    const changeSearch = (event) => {
        setSearch(event.target.value);
        props.searchValue(event.target.value);
    };

    return (
        <>
             <div>
                 Cari: <input onChange={changeSearch} /> {/*ketika terdapat perubahan "onChange", menjalankan "changeSearch" yang mengambil value dari input */}
            </div> 
            <small>Ditemukan 0 data dengan keyword {search}</small>
        </>
    )
}

export default Search;