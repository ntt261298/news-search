import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import '../../style/home.css';

export const HomePage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [data, setData] = useState([]);
    const [totalDocs, setTotalDocs] = useState(0);
    const [isSearchResult, setIsSearchResult] = useState(false);
    const [activePage, setActivePage] = useState(1);

    useEffect(async () =>{
        let formData = new FormData();
        formData.append('query', 'all');
        formData.append('start', 0);
        formData.append('rows', 5);
        formData.append('searching', false);

        const response = await fetch('http://127.0.0.1:5000/search', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json();
        console.log(data);
        setData(data['docs']);
        setTotalDocs(data['numFound']);
    }, [])

    const onSearchClick = async () => {
        let formData = new FormData();
        formData.append('query', query);
        formData.append('start', 0);
        formData.append('rows', 5);
        formData.append('searching', false);

        const response = await fetch('http://127.0.0.1:5000/search', {
            method: 'POST',
            body: formData,
        })
        const data = await response.json();
        console.log(data);
        setData(data['docs']);
        setTotalDocs(data['numFound']);
        setIsSearchResult(true);
    }

    const onPageChange = async (pageNumber) => {
        setActivePage(pageNumber);
        const final_query = isSearchResult ? query : 'all'
        // If results are from search action
        let formData = new FormData();
        formData.append('query', final_query);
        formData.append('start', (pageNumber - 1)*5);
        formData.append('rows', 5);
        formData.append('searching', false);

        const response = await fetch('http://127.0.0.1:5000/search', {
            method: 'POST',
            body: formData,
        })
        const data = await response.json();
        setData(data['docs']);
        setTotalDocs(data['numFound']);     
    }

    const onQueryChange = async (e) => {
        setQuery(e.target.value);
        let formData = new FormData();
        formData.append('query', e.target.value);
        formData.append('start', 0);
        formData.append('rows', 4);
        formData.append('searching', true);
        const response = await fetch('http://127.0.0.1:5000/search', {
            method: 'POST',
            body: formData,
        })
        const data = await response.json();
        console.log(data)
        setResults(data['docs']);
    }

    return (
        <div>
            <div className="back"/>
            <div className="banner">
                    <div className="content">
                        <div className="search">
                            <input 
                                type="text" placeholder="Find news..." alt=""
                                onChange={onQueryChange}    
                            />
                            <img 
                                src={require("../../assets/baseline-search-24px.svg")} alt=""
                                onClick={onSearchClick}
                            />
                        </div>
                        <div className="search-results">
                            {
                                query ? (
                                results.map(({_id, title}) => {
                                    console.log(title[0].length)
                                   const etc = title[0].length >= 60 ? '...' : '';
                                  return (
                                    <a href={`/detail/${title[0]}`}>
                                        <p  key={_id}>{`${title[0].slice(0, 60)}${etc}`}</p>
                                    </a>
                                )})
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-title">
                                        <h2>{isSearchResult ? 'Search Result' : 'All News'}</h2> {`(Total: ${totalDocs})`}
                                    </div>
                                </div>
                                {
                                    data.map(item => (
                                        <div className="col-md-12">
                                            <div className="post post-row">
                                                <a className="post-img" href={`/detail/${item.title[0]}`}><img src={require(`../../assets/${item.thumbnail[0].substr(2)}`)} alt=""/></a>
                                                <div className="post-body">
                                                    <div className="post-meta">
                                                        <a className="post-category cat-2" href="">{item.author[0]}</a>
                                                        <span className="post-date">{item.time[0]}</span>
                                                    </div>
                                                    <h3 className="post-title"><a href={`/detail/${item.title[0]}`}>{item.title[0]}</a></h3>
                                                    <p>{item.description[0]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                <div className="col-md-12">
                                    <Pagination
                                        activePage={activePage}
                                        itemsCountPerPage={5}
                                        totalItemsCount={totalDocs}
                                        pageRangeDisplayed={5}
                                        onChange={onPageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;