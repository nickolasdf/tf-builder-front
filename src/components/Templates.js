import { useState, useEffect } from "react";
import './Templates.css';
import {NavLink} from "react-router-dom";
import * as api from '../api';

const mockTemplates = [
    'bucket',
    'cloudsql',
    'test'
]

const Templates = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        api.Templates.get().then(resp => {
            setTemplates(resp.data.modules);
        })
    }, []);

    return (
        <div>
            <h3>List of available templates</h3>
            <ul className='templates-list'>
                <li className='templates-list-title'>Templates</li>
                {templates.map(template => {
                    return (
                        <li key={template}>
                            <NavLink
                                className="nav-link"
                                activeClassName='nav-link-active'
                                to={template}
                            >
                                {template}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Templates;