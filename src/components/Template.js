import {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import * as api from '../api';
import "./Template.css";
import {prepareTemplateData} from "../utils";

const initialTemplate = {
    fields: [],
    staticFields: {
        path: '',
        commit_message: ''
    },
    name: '',
};

const Template = ({ data }) => {
    const history = useHistory();
    const [template, setTemplate] = useState(initialTemplate);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if(data) {
            setTemplate({
                ...initialTemplate,
                ...data,
            });
        }
    }, [data]);

    const handleChangeDynamicField = (index) => (event) => {
        const { value } = event.target;
        template.fields[index].value = value;

        setTemplate({
            ...template,
            fields: template.fields
        });
    };

    const handleChangeStaticField = (event) => {
        const { value, name } = event.target;

        setTemplate({
            ...template,
            staticFields: {
                ...template.staticFields,
                [name]: value
            }
        })
    };

    const handleClickCancel = () => {
        history.push('/');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitting(true);

        api.Templates.send(prepareTemplateData(template))
            .then((resp) => {
                history.push('/');
            })
            .catch(() => setSubmitting(false))
    };

    return (
        <div>
            <h3 className='template-title'>{template.name}</h3>
            <form onSubmit={handleSubmit}>
                <div className='template-form-row'>
                    <div className='template-label-section'>
                        <span>Path</span>
                    </div>

                    <div className='template-input-section'>
                        <input onChange={handleChangeStaticField} name='path' className="template-input" />
                    </div>
                </div>
                <div className='template-form-row'>
                    <div className='template-label-section'>
                        <span>Commit message</span>
                    </div>

                    <div className='template-input-section'>
                        <input onChange={handleChangeStaticField} name='commit_message' className="template-input" />
                    </div>
                </div>
                {template.fields.map((field, index) => {
                    return (
                        <div key={field.label} className='template-form-row'>
                            <div className='template-label-section'>
                                <span>{field.label}</span>
                            </div>

                            <div className='template-input-section'>
                                <input onChange={handleChangeDynamicField(index)} name={field.label} className="template-input" />
                            </div>
                        </div>
                    )
                })}
                <div className='template-actions'>
                    <button type='submit' disabled={submitting}>Submit</button>
                    <button type='button' onClick={handleClickCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default Template;