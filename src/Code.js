import React, { useEffect, useState } from 'react';
import { EuiCodeBlock } from '@elastic/eui';

var finalColorsObj = {}

function Code({ colorDict }) {

  finalColorsObj = {}
  for (let parentIdx of Object.keys(colorDict)) {
    finalColorsObj[colorDict[parentIdx]['name']] = {}
    for (let colorIdx of Object.keys(colorDict[parentIdx]['colors'])) {
      var colorObj = colorDict[parentIdx]['colors'][colorIdx]
      finalColorsObj[colorDict[parentIdx]['name']][colorObj['name']] = { 'color': colorObj['color'], 'type': 'color' }
    }
  }

  return (
    <EuiCodeBlock language="json" overflowHeight={300} isCopyable isVirtualized>
      {JSON.stringify(finalColorsObj, null, 2)}
    </EuiCodeBlock>
  )
}

export default Code
