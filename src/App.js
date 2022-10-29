import { useState } from 'react'
import './App.css'
import Code from './Code';
import GroupColor from './GroupColor';
import { EuiButton, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

function App() {
  const [colorDict, setColorDict] = useState(() =>
  ({
    0: { 'name': 'brand', 'colors': { 0: { 'name': 'cor-1', 'color': '#D36086', 'type': 'color' } } },
    1: { 'name': 'feedback', 'colors': { 0: { 'name': 'alert', 'color': '#ce0d0d', 'type': 'color' } } },
  })
  )

  const [newGroupName, setNewGroupName] = useState('')
  function addGroup() {
    setColorDict(prevState => ({
      ...prevState,
      [Math.floor(Math.random() * 1000)]: { 'name': newGroupName, 'colors': {} }
    }))
  }
  function removeGroup(groupIdx) {
    console.log(groupIdx, colorDict[groupIdx]['name']);
    setColorDict({})
    const colorObjCopy = structuredClone(colorDict)
    delete colorObjCopy[groupIdx]
    setColorDict(() => {return colorObjCopy})
}

  return (
    <div className="App">
      <div className="">
        <EuiFlexGroup justifyContent="spaceBetween">
          <EuiFlexItem>
            <EuiFieldText
              placeholder="Nome do grupo"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiButton
              color={'primary'}
              isDisabled={false}
              fill
              onClick={addGroup}
            >
              Criar grupo
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiHorizontalRule />
        {Object.keys(colorDict).map(groupIdx => {
          return <GroupColor removeGroup={removeGroup} key={colorDict} groupIdx={groupIdx} colorDict={colorDict} setColorDict={setColorDict} />
        })}
      </div>
      <Code colorDict={colorDict} />
    </div>
  )
}

export default App
