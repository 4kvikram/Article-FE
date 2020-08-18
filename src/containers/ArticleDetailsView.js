import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Card } from 'antd';
import { useParams } from "react-router-dom";
import CustomForm from '../components/Form'
const ArticleDetailsList = () => {
    const { articleID } = useParams();
    const [articles, newarticles] = useState({ title: "", description: "", content: "" });

    useEffect(() => {
        async function getData() {
            //const articleID = this.props.match.params.articleID;
            //const articleID = 2;
            const res = await axios.get(`http://127.0.0.1:8000/api/${articleID}`);
            newarticles(res.data);
            console.log('=====================', res.data);
        }
        getData()
    }, []);

    async function deleteArticle() {
        const res = await axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
        console.log("delete res :", res)
    }
    return (
        <>
            <Card title={articles.title}
            >
                {articles.description}
            </Card>
            <br />
            <CustomForm btnName="Update" data={articles} ></CustomForm>
            <form onSubmit={(e) => {
                deleteArticle();
                e.preventDefault();
            }}>
                <Button type="danger" htmlType="submit">
                    Delete
          </Button>
            </form>
        </>
    )
}
export default ArticleDetailsList;