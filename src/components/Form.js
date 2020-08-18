import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const CustomForm = (props) => {
    const { articleID } = useParams();
    //const [form] = Form.useForm();
    const [formData, newFormData] = useState({
        id: 0,
        title: "",
        content: "",
        description: "",
    });



    const eventHandlar = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        let name = event.target.name;
        let value = event.target.value;
        newFormData((priv) => {
            return {
                ...priv,
                [name]: value
            }
        });
    }
    async function senddata() {
        const res = await axios.post('http://127.0.0.1:8000/api/', formData);
        console.log(res);
    }
    async function updateData() {
        const res = await axios.put(`http://127.0.0.1:8000/api/${articleID}/`, formData);
        console.log(res);
    }
    const submitForm = () => {
        //console.log(formData);
        if (articleID) {
            updateData();
            console.log('sending....')
        }
        else { senddata(); console.log('updating....') }


    }
    return (
        <>
            <Form>
                <Form.Item label="Title">
                    <Input
                        placeholder="Title"
                        name='title'
                        onChange={eventHandlar}
                        value={formData.title}
                    />
                </Form.Item>
                <Form.Item label="Description">
                    <Input
                        placeholder="Description"
                        name='description'
                        onChange={eventHandlar}
                        value={formData.description}
                    />
                </Form.Item>
                <Form.Item label="Content">
                    <Input
                        placeholder="Content"
                        name='content'
                        onChange={eventHandlar}
                        value={formData.content}
                    />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" type="submit" onClick={submitForm}>{props.btnName}</Button>
                </Form.Item>

            </Form>
        </>
    );
};

export default CustomForm;