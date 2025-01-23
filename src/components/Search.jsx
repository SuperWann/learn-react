import { useState } from "react";

function Search(props){
    const [search, setSearch] = useState("");

    // const changeSearch = (event) => {
    //     setSearch(event.target.value);
    //     props.searchValue(event.target.value); //Props untuk value dari input
    // }

    const changeSearch = () => {
        props.searchValue(search); //Props untuk value dari input
    };

    const searchKeydown = e => {
        if (e.key === "Enter") {
            changeSearch();
        }
    }

    return (
        <>
             <div>
                 Cari: <input onChange={e => setSearch(e.target.value)} onKeyDown={searchKeydown}/> <button onClick={changeSearch}>Cari</button> {/* ketika terdapat perubahan "onChange", menjalankan "changeSearch" yang mengambil value dari input */}
                 {/* Cari: <input onChange={changeSearch)}/> GUNAKAN INI JIKA INGIN OTOMATIS SEARCH TANPA KLIK BUTTON CARI*/} 
            </div> 
            <small>Ditemukan {props.count} data dengan keyword "{search}"</small>
        </>
    )
}

export default Search;