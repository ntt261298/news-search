import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Parser from 'html-react-parser';
import '../../style/home.css';

export const DetailPage = (props) => {
    const [data, setData] = useState([]);

    useEffect(async () =>{
        const title = props.match.params.title;
        let formData = new FormData();
        formData.append('query', 'lao');
        formData.append('start', 0);
        formData.append('rows', 1);
        const response = await fetch('http://127.0.0.1:5000/search', {
            method: 'POST',
            body: formData,
        })
        const data = await response.json();
        setData(data['docs']);
    }, [])

    return (
        <div>
            <div className="section">
                <div className="container">
                    {
                        data.map(item => (
                            <Fragment>
                                <div className="row">
                                    <a style={{margin: '0 auto', marginBottom: '20px'}} className="post-img" href={`/detail/${item.title[0]}`}><img src={require(`../../assets/${item.thumbnail[0].substr(2)}`)} alt=""/></a>
                                </div>
                                <div className="row">
                                    <div className="post-meta" style={{margin: '0 auto', marginBottom: '20px'}}>
                                        <a style={{padding: '0 20px'}} className="post-category cat-2" href="">{item.author[0]}</a>
                                        <span className="post-date">{item.time[0]}</span>
                                    </div>
                                </div>
                                <h3 className="post-title"><a href={`/detail/${item.title[0]}`}>{item.title[0]}</a></h3>
                                <p>{item.description[0]}</p>  
                                {Parser(item.content[0])}    
                            </Fragment>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default withRouter(DetailPage);