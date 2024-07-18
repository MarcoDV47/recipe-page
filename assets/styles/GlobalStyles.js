import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {
    --primary: hsl(14, 45%, 36%);
    --primary-2: hsl(332, 51%, 32%);

    --neutral: hsl(0, 0%, 100%);
    --neutral-2: hsl(330, 100%, 98%);
    --neutral-3: hsl(30, 54%, 90%);
    --neutral-4: hsl(30, 18%, 87%);
    --neutral-5: hsl(30, 10%, 34%);
    --neutral-6: hsl(24, 5%, 18%);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--neutral-3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Outfit", sans-serif;
    min-height: 100vh;
}

section {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    background-color: var(--neutral);
    margin: 3em;
    border-radius: 20px;
    width: 500px;
    padding: 1.5em;
}

nav {
    background-color: var(--neutral);
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    margin: auto auto;
    padding: 5px;
    border-radius: 5px;
}

header img {
    display: block;
    height: 210px;
    border-radius: 15px;
    margin: 0 auto 1em;
}

header h1 {
    margin-bottom: .5em;
}

p {
    margin-bottom: 2em;
    color: var(--neutral-5)
}

h1, h2 {
    font-family: 'Young Serif', serif;
    font-weight: 400;
}

h2, h3 {
    margin-bottom: .5em;
}

h2{
    color: var(--primary);
}

h3 {
    font-family: "Outfit", sans-serif;
    color: var(--primary-2);
}

ul, ol {
    list-style-position: inside;
    margin-left: .5em;
    margin-bottom: 2em;
}

li {
    color: var(--neutral-5);
    margin-bottom: .5em;
}

li::marker{
    color: var(--primary);
    font-weight: bold;
}

hr {
    margin-top: 1em;
    margin-bottom: 1.5em;
    border: 1px solid var(--neutral-4);
}

table {
    border-collapse: collapse;
    margin-bottom: 2em;
}

td:last-child {
    font-weight: bold;
    color: var(--primary);
    padding-left: 15em;   
}

th, td {
    padding: 5px;
}

tr {
    border-bottom: 1px solid var(--neutral-4);
}

@media(max-width:600px) {

    nav {
        justify-content: space-around;  
    }

    header img {
        max-width: 100vw;
        border-radius: 0;
    }

    section { 
        width: 100vw;
        margin: 0;
        padding: 0;
        border-radius: 0;
    }

    h1, h2, p, li { 
        padding-inline: 1em;
    }

    p, { 
        margin-right: 1.5em;
    }

    h1 {
        font-size: 2em;
        color: var(--neutral-6)
    }

    table {
        margin-left: 1em;
    }

    td:last-child {
        padding-left: 35vw;   
    }

    @media(min-width:425px) {

        td:last-child {
            padding-left: 50vw;   
        }

    }
}
`

export default GlobalStyle;