let index = document.querySelector('#index')
let whereToBe = document.querySelector('#whereToBe')
let painLevel = document.querySelector('#painLevel')

let howlongEar = document.querySelector('#howlongEar')
let howlongLip = document.querySelector('#howlongLip')
let howlongBody = document.querySelector('#howlongBody')

let earlobe = document.querySelector('#earlobe')
let earconch = document.querySelector('#earconch')
let eartragus = document.querySelector('#eartragus')

let liptongue = document.querySelector('#liptongue')
let lipangel = document.querySelector('#lipangel')
let lipdahlia = document.querySelector('#lipdahlia')

let bdydermal = document.querySelector('#bdydermal')
let bdysurface = document.querySelector('#bdysurface')
let bdynavel = document.querySelector('#bdynavel')



let btnindex = document.querySelector('#btnindex')

let whereToBeear = document.querySelector('#whereToBeear')
let whereToBelip = document.querySelector('#whereToBelip')
let whereToBebdy = document.querySelector('#whereToBebdy')

let painLevellow = document.querySelector('#painLevellow')
let painLevelmid = document.querySelector('#painLevelmid')
let painLevelhigh = document.querySelector('#painLevelhigh')

let howlongEar_low = document.querySelector('#howlongEar_low')
let howlongEar_mid = document.querySelector('#howlongEar_mid')
let howlongEar_high = document.querySelector('#howlongEar_high')

let howlongLip_low = document.querySelector('#howlongLip_low')
let howlongLip_mid = document.querySelector('#howlongLip_mid')
let howlongLip_high = document.querySelector('#howlongLip_high')

let howlongBody_low = document.querySelector('#howlongBody_low')
let howlongBody_mid = document.querySelector('#howlongBody_mid')
let howlongBody_high = document.querySelector('#howlongBody_high')









let code = '123'

let arr =
    [
        whereToBe, painLevel,
        howlongEar, howlongLip, howlongBody,
        earlobe, earconch, eartragus,
        liptongue, lipangel, lipdahlia,
        bdydermal, bdysurface, bdynavel,
    ]
arr.forEach((v, h) => {
    v.style.display = 'none'
})

arr.push(index)

btnindex.addEventListener('click', function () {
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    whereToBe.style.display = 'block'
})


whereToBeear.addEventListener('click', function () {
    code = 'ear'
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    painLevel.style.display = 'block'
})

whereToBelip.addEventListener('click', function () {
    code = 'lip'
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    painLevel.style.display = 'block'
})

whereToBebdy.addEventListener('click', function () {
    code = 'bdy'
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    painLevel.style.display = 'block'
})

painLevellow.addEventListener('click', function () {
    if (code == 'ear') {
        arr.forEach((v, h) => {
            v.style.display = 'none'
        })
        howlongEar.style.display = 'block'
    } else if (code == 'lip') {
        arr.forEach((v, h) => {
            v.style.display = 'none'
        })
        howlongLip.style.display = 'block'
    } else if (code == 'bdy') {
        arr.forEach((v, h) => {
            v.style.display = 'none'
        })
        howlongBody.style.display = 'block'
    }
})
painLevelmid.addEventListener('click', function () {
    if (code == 'ear') {
        arr.forEach((v, h) => {
            v.style.display = 'none'
        })
        howlongEar.style.display = 'block'
    } else if (code == 'lip') {
        arr.forEach((v, h) => {
            v.style.display = 'none'
        })
        howlongLip.style.display = 'block'
    } else if (code == 'bdy') {
        arr.forEach((v, h) => {
            v.style.display = 'none'
        })
        howlongBody.style.display = 'block'
    }
})
painLevelhigh.addEventListener('click', function () {
    if (code == 'ear') {
        arr.forEach((v, h) => {
            v.style.display = 'none'
        })
        howlongEar.style.display = 'block'
    } else if (code == 'lip') {
        arr.forEach((v, h) => {
            v.style.display = 'none'
        })
        howlongLip.style.display = 'block'
    } else if (code == 'bdy') {
        arr.forEach((v, h) => {
            v.style.display = 'none'
        })
        howlongBody.style.display = 'block'
    }
})


howlongEar_low.addEventListener('click', function () {
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    earlobe.style.display = 'block'
})
howlongEar_mid.addEventListener('click', function () {
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    earconch.style.display = 'block'
})
howlongEar_high.addEventListener('click', function () {
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    eartragus.style.display = 'block'
})


howlongLip_low.addEventListener('click', function () {
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    liptongue.style.display = 'block'
})
howlongLip_mid.addEventListener('click', function () {
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    lipangel.style.display = 'block'
})
howlongLip_high.addEventListener('click', function () {
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    lipdahlia.style.display = 'block'
})



howlongBody_low.addEventListener('click', function () {
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    bdydermal.style.display = 'block'
})
howlongBody_mid.addEventListener('click', function () {
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    bdysurface.style.display = 'block'
})
howlongBody_high.addEventListener('click', function () {
    arr.forEach((v, h) => {
        v.style.display = 'none'
    })
    bdynavel.style.display = 'block'
})



















