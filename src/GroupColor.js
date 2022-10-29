import { EuiButton, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule } from '@elastic/eui';
import React, { useEffect, useState } from 'react';
import ColorInput from './ColorInput';

export default function ({ colorDict, setColorDict, groupIdx, removeGroup }) {
	const [colorGroupObj, setcolorGroupObj] = useState(colorDict[groupIdx]['colors'])
	const [groupName, setgroupName] = useState(colorDict[groupIdx]['name'])
	useEffect(() => {
		console.log({ groupName });
		setColorDict(prevState => ({
			...prevState,
			[groupIdx]: { 'name': groupName, 'colors': colorGroupObj }
		}))
	}, [colorGroupObj, groupName])

	function addColor() {
		var a = structuredClone(colorGroupObj);
		const len = Object.keys(colorGroupObj).length
		a[len] = { 'name': `cor-${len + 1}`, 'color': '#e2e', 'type': 'color' }
		setcolorGroupObj(() => a)
	}

	return (
		<div >
			<EuiFlexGroup>
				<EuiFlexItem grow={false}>
					<EuiFieldText
						placeholder="Nome do grupo"
						value={groupName}
						onChange={(e) => setgroupName(e.target.value)}
						compressed={true}
					/>
				</EuiFlexItem>
				<EuiFlexItem grow={false}>
					<EuiButton
						color={'danger'}
						isDisabled={false}
						onClick={()=>{removeGroup(groupIdx)}}
						size="s"
					>
						Remover grupo
					</EuiButton>
				</EuiFlexItem>
				<EuiFlexItem grow={false} style={{'marginLeft': 'auto'}}>
					<EuiButton
						color={'primary'}
						isDisabled={false}
						fill
						onClick={addColor}
						size="s"
					>
						Adicionar cor
					</EuiButton>
				</EuiFlexItem>
			</EuiFlexGroup>
			<br />
			{Object.keys(colorGroupObj).map(colorKey => {
				return <ColorInput key={colorKey} colorDict={colorGroupObj} setColorDict={setcolorGroupObj} groupColor={colorGroupObj[colorKey]} colorKey={colorKey} />
			})}
			<EuiHorizontalRule />
		</div>
	);
}