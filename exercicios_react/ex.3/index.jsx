import React from 'react'
import ReactDOM from 'react-dom'
import { Primeiro, Segundo } from './component'

ReactDOM.render(
    <div>
        <Primeiro value="Show!" />
        <Segundo value="Show2!" />
    </div>
, document.getElementById('app'))