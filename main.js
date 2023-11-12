let box_right = document.querySelector(".box_right")
let dialogEdit = document.querySelector(".dialogEdit")
let editName = document.querySelector(".editName")
let editEmail = document.querySelector(".editEmail")
let btnEdit = document.querySelector(".btnEdit")
let crNew = document.querySelector(".crNew")
let dialogAdd = document.querySelector(".dialogAdd")
let titleAdd = document.querySelector(".titleAdd")
let txtAdd = document.querySelector(".txtAdd")
let btnAdd = document.querySelector(".btnAdd")
let btnCancel = document.querySelector(".btnCancel")
let btnSave = document.querySelector(".btnSave")
let dialogAddx = document.querySelector(".dialogAddx")


dialogAddx.onclick = () => {
    dialogAdd.close()
}
btnSave.onclick = () => {
    let newUser = {
        id: new Date(),
        title: titleAdd.value,
        txt: txtAdd.value,
        complete: false
    }
    data.push(newUser)
    titleAdd.value = ""
    txtAdd.value = ""
    dialogAdd.close()
    get()
}

btnAdd.onclick = () => {
    dialogAdd.showModal()
}
btnCancel.onclick = () => {
    dialogAdd.close()
}



let data = [
    {
        id: 1,
        title: "The first task tittle",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet euismod nulla.",
        complete: false
    },
    {
        id: 2,
        title: "The first task tittle",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet euismod nulla.",
        complete: false
    },
    {
        id: 3,
        title: "The first task tittle",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet euismod nulla.",
        complete: false
    },
    {
        id: 4,
        title: "The first task tittle",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet euismod nulla.",
        complete: false
    }
]



//get
function get() {
    box_right.innerHTML = ""
    data.forEach((elem) => {

        let cards = document.createElement("div")
        cards.classList.add("cards")


        let fortitle = document.createElement("h3")
        fortitle.innerHTML = elem.title
        fortitle.classList.add("fortitle")

        let fortxt = document.createElement("h5")
        fortxt.innerHTML = elem.txt
        fortxt.classList.add("fortxt")


        let editBtn = document.createElement("i")
        editBtn.className = "fa-solid fa-pen"
        editBtn.classList.add("editBtn")
        editBtn.onclick = () => {
            editUser(elem.id)
        }



        let btnDel = document.createElement("i")
        btnDel.className = "fa-solid fa-trash"
        btnDel.classList.add("btnDel")
        btnDel.onclick = () => {
            delUser(elem.id)
        }


        // complete

        let check = document.createElement("input")
        check.type = "checkbox"
        check.checked = elem.complete
        check.classList.add("check")
        check.onclick = () => {
            completeuser(elem.id)
        }

        if (elem.complete) {
            fortitle.style.textDecoration = "line-through"
            fortitle.style.color = "black"
        }




        cards.append(fortitle, fortxt, editBtn, btnDel, check)
        box_right.appendChild(cards)
    })
}
get()



// complete
function completeuser(id) {
    data = data.map((elem) => {
        if (elem.id == id) {
            elem.complete = !elem.complete
        }
        return elem
    })
    get();
}




// btnDel
function delUser(id) {
    data = data.filter((elem) => {
        return elem.id != id
    })
    get()
}



//edit
let idx
btnEdit.onclick = () => {
    dialogEdit.close()
}
function editUser(id) {
    dialogEdit.showModal()
    let user = data.find((elem) => elem.id == id)
    editName.value = user.title
    editEmail.value = user.txt
    idx = user.id
}
btnEdit.onclick = () => {
    data = data.map((elem) => {
        if (elem.id == idx) {
            elem.title = editName.value
            elem.txt = editEmail.value
        }
        return elem
    })
    get()
    dialogEdit.close()
}


