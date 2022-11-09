 


let convert = document.querySelector('#convert-btn')

convert.addEventListener('click', () => {
    console.log("hi");
    let word = document.querySelector('.naming_conversion input').value
    document.querySelector('#camel-case').innerHTML = camelCase(word)
    document.querySelector('#pascal-case').innerHTML = pascalCase(word)
    document.querySelector('#snake-case').innerHTML = snakeCase(word)
    document.querySelector('#screaming-snake-case').innerHTML = screamingSnakeCase(word)
    document.querySelector('#kebab-case').innerHTML = kebabCase(word)
    document.querySelector('#screaming-kebab-case').innerHTML = screamingKebabCase(word)

})

const camelCase = (word) => {
    let a = word.toLowerCase().split(' ')
    a = a.map((str) => ( str.charAt(0).toUpperCase() + str.slice(1)))
    let text = a.join('');
    return text.charAt(0).toLowerCase()+text.slice(1)
}

const pascalCase = (word) => {
    let a = word.toLowerCase().split(' ')
    a = a.map((str) => ( str.charAt(0).toUpperCase() + str.slice(1)))
    return a.join('');
}

const snakeCase = (word) =>{
    let a = word.toLowerCase().split(' ')
    return a.join('_');
}

const screamingSnakeCase = (word) =>{
    return snakeCase(word).toUpperCase();
} 

const kebabCase = (word) =>{
    let a = word.toLowerCase().split(' ')
    return a.join('-');
}

const screamingKebabCase = (word) =>{
    return kebabCase(word).toUpperCase();
} 


