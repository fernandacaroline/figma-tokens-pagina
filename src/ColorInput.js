import { EuiButton, EuiColorPicker, EuiFieldText, EuiFlexGroup, EuiFlexItem, useColorPickerState } from '@elastic/eui';
import React, { useEffect, useState } from 'react';

export default function ({ groupColor, setColorDict, colorDict, colorKey }) {
    if (!groupColor) {
        return (<>a</>)
    }
    // const [color, setColor] = useState()
    const [color, setColor, errors] = useColorPickerState(groupColor['color']);
    const [colorName, setColorName] = useState(groupColor['name'])
    useEffect(() => {
        setColorDict(prevState => ({
            ...prevState,
            [colorKey]: { 'name': colorName, 'color': color, 'type': 'color' }
        }))
    }, [color, colorName])

    function removeColor(colorProp) {
        const colorObjCopy = structuredClone(colorDict)
        delete colorObjCopy[colorProp]
        setColorDict(colorObjCopy)
    }

    return (
        <EuiFlexGroup justifyContent="spaceBetween">
            <EuiFlexItem>
                <EuiColorPicker onChange={setColor} color={color} />
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFieldText
                    placeholder="Nome do grupo"
                    value={colorName}
                    onChange={(e) => setColorName(e.target.value)}
                />
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiButton
                    color={'danger'}
                    isDisabled={false}
                    onClick={()=>{removeColor(colorKey)}}
                    size="s"
                >
                    Remover
                </EuiButton>
            </EuiFlexItem>
        </EuiFlexGroup>
    );
}