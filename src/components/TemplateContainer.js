import Template from "./Template";
import {useEffect, useState} from "react";
import {convertTemplateData} from "../utils";
import {useParams} from "react-router-dom";
import * as api from '../api';

const TemplateContainer = () => {
    const [template, setTemplate] = useState();
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        if(!loading) {
            setLoading(true);
            api.Templates.getOne(params.template).then(resp => {
                setTemplate(convertTemplateData(resp.data));
            }).finally(() => setLoading(false))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.template]);

    const templateComponent = template && <Template data={template} />;

    return <div className="template-container">{loading ? <h3>Loading...</h3> : templateComponent}</div>;
};

export default TemplateContainer;