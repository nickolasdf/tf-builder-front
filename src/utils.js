export const convertTemplateData = (template) => {
    const properties = Object.entries(template?.variables?.properties);

    return {
        name: template?.name,
        fields: properties.map(property => {
            const [key, value] = property;

            return {
                label: key,
                value: value.default ?? ''
            }
        })
    }
};

export const prepareTemplateData = (template) => {
    const convertedVariables = {};

    template.fields.forEach(field => {
        convertedVariables[field.label] = field.value
    })

    return {
        templates: [{
            name: template.name,
            variables: convertedVariables
        }]
    }
};