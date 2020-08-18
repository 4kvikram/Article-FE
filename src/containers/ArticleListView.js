import React, { useState, useEffect } from "react"
import Article from '../components/Article'
import axios from 'axios'
import CustomForm from '../components/Form'

const ArticleList = () => {
    const [articles, newarticles] = useState();
    useEffect(() => {
        async function getData() {
            const res = await axios.get('http://127.0.0.1:8000/api/');
            newarticles(res.data);
            console.log(res.data);
        }
        getData();
    }, []);
    return (
        <>
            <Article data={articles} />

            <br />
            <h2>Create Article</h2>
            <CustomForm btnName="Submit"></CustomForm>

        </>
    )
}

export default ArticleList;