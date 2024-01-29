import React from 'react'
import { Text } from 'react-native'

function App() {
    const jsxComponent = <Text>JSX é uma forma default
        escrever trecho de código em JS por meio
        de tags semelhantes ao HTML!
    </Text>
    return jsxComponent
}

/** 
    export default function () {
        return <Text>Arrow Function!</Text>
    }

    export default () => {
        return <Text>Simplificação 1</Text>
    }

    export default () => <Text>Simplificação 2</Text>
*/


export default App