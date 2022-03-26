

export const handleShowCreateForm = (e) => {
    const TodosBtnSymbol = document.querySelector('.Todos__Button--symbol')
    const checkBoxParagrahs = document.querySelectorAll('.checkbox-todos')
    const Paragrahs = document.querySelectorAll('.Todos__Work--content')
    const CreateBtn = document.querySelector('.Todos__Create')

    if (TodosBtnSymbol.classList.contains('animateRotateClose')) {
        setTimeout(() => {
            TodosBtnSymbol.style.transform = 'rotate(0)'
        }, 200)
        TodosBtnSymbol.classList.remove('animateRotateClose')
        TodosBtnSymbol.classList.add('animateRotateOpen')
        Object.assign(CreateBtn.style, {
            opacity: 0,
            visibility: 'hidden',
        })
        return
    }

    TodosBtnSymbol.classList.add('animateRotateClose')
    setTimeout(() => {
        TodosBtnSymbol.style.transform = 'rotate(0)'
    }, 200)
    TodosBtnSymbol.classList.remove('animateRotateOpen')

    Object.assign(CreateBtn.style, {
        opacity: 1,
        visibility: 'visible',
    })
    checkBoxParagrahs.forEach((checkBoxParagrah, index) => {
        checkBoxParagrah.onchange = () => {
            if (Paragrahs[index].classList.contains('pChecked')) {
                Paragrahs[index].classList.remove('pChecked')

                Paragrahs[index].style.color = '#000'
                return
            }

            Paragrahs[index].classList.add('pChecked')
            Paragrahs[index].style.color = 'rgb(158, 158, 167)'





        }
    })
}
