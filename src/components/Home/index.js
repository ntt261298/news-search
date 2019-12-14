import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import '../../style/home.css';

export const HomePage = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [totalDocs, setTotalDocs] = useState(0);
    const [isSearchResult, setIsSearchResult] = useState(false);
    const [activePage, setActivePage] = useState(1);

    useEffect(async () =>{
        let formData = new FormData();
        formData.append('query', 'all');
        formData.append('start', 0);
        formData.append('rows', 5);
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
        const query = isSearchResult ? query : 'all'
        // If results are from search action
        let formData = new FormData();
        formData.append('query', query);
        formData.append('start', (pageNumber - 1)*5);
        formData.append('rows', 5);
        const response = await fetch('http://127.0.0.1:5000/search', {
            method: 'POST',
            body: formData,
        })
        const data = await response.json();
        setData(data['docs']);
        setTotalDocs(data['numFound']);     
    }

    return (
        <div>
            <div className="back"/>
            <div className="banner">
                    <div className="content">
                        <div className="search">
                            <input 
                                type="text" placeholder="Find news..." alt=""
                                onChange={(e) => setQuery(e.target.value)}    
                            />
                            <img 
                                src={require("../../assets/baseline-search-24px.svg")} alt=""
                                onClick={onSearchClick}
                            />
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