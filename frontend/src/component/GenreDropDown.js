import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import requests from '../requests'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'black',
  }),
  control: (provided) => ({
    ...provided,
  })
}

function GenreDropDown(props) {

    const [genreList, setGenreList] = useState([])

    useEffect(() => {
        async function getGenreList() {
            await axios.get(requests.getGenreList).then(rest => {
              setGenreList(rest.data.map(genre => ({value: genre.id, label: genre.name})));
            }).catch(error => {
              console.log("errorrorororr");
            });
        };

        getGenreList();
        
    }, []);


    return (
          <div>  <Select isMulti="true" options={genreList} styles = { customStyles } onChange={props.onChangeGenre}/> </div>
    )
}

export default GenreDropDown

