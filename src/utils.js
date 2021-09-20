export const convertTemplateData = (template) => {
    const properties = Object.entries(template?.variables?.properties);

    return {
        name: template?.name,
        fields: properties.map(property => {
            const [key, value] = property;

            return {
                label: key,
                value: value.default ?? '',
                type: value.type
            }
        })
    }
};

export const prepareTemplateData = (template) => {
    const convertedVariables = {};

    template.fields.forEach(field => {
        convertedVariables[field.label] = parseInputValueByType(field.value, field.type);
    })

    return [{
        path: template?.staticFields?.path,
        commit_message: template?.staticFields?.commit_message,
        templates: [{
            name: template.name,
            variables: convertedVariables
        }]
    }]
};

const parseInputValueByType = (value, type) => {
    switch (type) {
        case 'array':
            return value?.split(',')
        default:
            return value;
    }
};