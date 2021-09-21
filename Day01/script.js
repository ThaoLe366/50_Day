const panels= document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        console.log(123)
        removeActiveList();
        panel.classList.add('active')

    })
})

const removeActiveList=()=>{
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}