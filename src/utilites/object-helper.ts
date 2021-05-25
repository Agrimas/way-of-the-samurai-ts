export const updateObjectInArray = (array: any, objPropName: any, elementParam: any, newObjectProps: any) => {
    return array.map((element: any) => {
        if (element[objPropName] === elementParam) {
            return {...element, ...newObjectProps};
        }
        return element;
    })
}