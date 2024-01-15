import data from './data.json'

const list = document.querySelector('ul')
data.forEach((item) => {
    const li = document.createElement('li')
    li.classList.add(
        'corners',
        'flex',
        'items-center',
        'justify-between',
        'rounded-lg',
        'p-4'
    )
    li.style.setProperty('--c', item.color)
    li.style.setProperty('background', item.backgroundColor)

    const innerDiv = document.createElement('div')
    innerDiv.classList.add('flex', 'gap-4')
    innerDiv.style.setProperty('color', item.color)

    const img = document.createElement('img')
    img.src = item.icon
    img.alt = `${item.category} icon`

    const categoryText = document.createTextNode(item.category)
    innerDiv.appendChild(img)
    innerDiv.appendChild(categoryText)

    const countParagraph = document.createElement('p')
    countParagraph.classList.add('font-bold', 'text-neutral-dark-gray-blue')
    const countText = document.createTextNode(`${item.score}`)
    const slashSpan = document.createElement('span')
    slashSpan.classList.add('text-neutral-400')
    slashSpan.textContent = ' / 100'
    countParagraph.appendChild(countText)
    countParagraph.appendChild(slashSpan)

    li.appendChild(innerDiv)
    li.appendChild(countParagraph)
    list!.append(li)
})

window.addEventListener('load', () => {
    const main = document.querySelector('main')
    main!.classList.remove('hidden')
})
