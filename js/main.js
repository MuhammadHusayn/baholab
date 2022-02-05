const design_criteria = [
	"Loyiha o'z maqsadiga mos keladimi?",
	"Sayt taassurotlari",
	"Foydalanish qulayligi",
	"Sayt dizayni bir xil uslubga mos keladimi?",
	"Dekompozitsiya (semantik qismlarga bo'linish)",
	"Tushunish osonmi? Oddiylik",
	"Harakatga chaqiruvchilar elementlar mavjudmi?",
	"Rang sxemasi",
]

const frontend_criteria = [
	"Semantikiga mos kod yozilgan",
	"Sifatli va tartibli kod yozilgan",
	"Dastur barcha qurilmalarga moslashtirilgan",
	"Saytdagi animatsiyalar silliq harakat qilishi",
	"Formalarda validatsiya ishlatilishi",
	"Ma'lumotlarning to'g'ri render bo'lishi",
	"Loyiha arxitekturasi",
	"Loyihaning topshiriqqa mos kelishi"
]

const backend_criteria = [
	"Kodlar tartibli yozilganligi",
	"To'g'ri file strukturasidan foydalanilganligi",
	"Ma'lumotlar ombori arxitekturasi to'g'ri shakllantirilganligi",
	"Xavfsizlik",
	"Validatsiya qismi",
	"Qidiruv, filter, sort(tartiblash) qismlari to'gri ishlashi",
	"Loyihaning topshiriqqa mos kelishi",
]

let frontendTotalScore = 0
let backendTotalScore = 0
let designTotalScore = 0

let dPoint = (30 / design_criteria.length) | 0
let fPoint = (30 / frontend_criteria.length) | 0
let bPoint = (30 / backend_criteria.length) | 0

let criterias = 0



designButton.onclick = () => {
	designCardsList.innerHTML = ''
	for(let element of design_criteria) {
		designCardsList.innerHTML += `
		<li class="card_item">
            <label class="card_item_title" for="asd">${element}</label>
            <label class="switch">
                <input onclick="incrementDesignScore(this, ${dPoint})" id="asd" type="checkbox">
                <span class="slider round"></span>
            </label>
        </li>
		`
	}
}

frontendButton.onclick = () => {
	frontendCardsList.innerHTML = ''
	for(let element of frontend_criteria) {
		frontendCardsList.innerHTML += `
		<li class="card_item">
            <label class="card_item_title" for="asd">${element}</label>
            <label class="switch">
                <input onclick="incrementFrontendScore(this, ${fPoint})" id="asd" type="checkbox">
                <span class="slider round"></span>
            </label>
        </li>
		`
	}
}

backendButton.onclick = () => {
	backendCardsList.innerHTML = ''
	for(let element of backend_criteria) {
		backendCardsList.innerHTML += `
		<li class="card_item">
            <label class="card_item_title" for="asd">${element}</label>
            <label class="switch">
                <input onclick="incrementBackendScore(this, ${bPoint})" id="asd" type="checkbox">
                <span class="slider round"></span>
            </label>
        </li>
		`
	}
}


function incrementDesignScore (input, score) {
	if(input.checked) {
		designTotalScore += score
		criterias++
	} else {
		designTotalScore -= score
		criterias--
	}
	visualScore()
}
function incrementFrontendScore (input, score) {
	if(input.checked) {
		frontendTotalScore += score
		criterias++
	} else {
		frontendTotalScore -= score
		criterias--
	}
	visualScore()
}
function incrementBackendScore (input, score) {
	if(input.checked) {
		backendTotalScore += score
		criterias++
	} else {
		backendTotalScore -= score
		criterias--
	}
	visualScore()
}

function visualScore () {
	let str = ''
	let dL = designTotalScore / dPoint
	let fL = frontendTotalScore / fPoint
	let bL = backendTotalScore / bPoint

	for(let i = 0; i < dL; i++) {
		str += str.endsWith('+') || str == '' ? dPoint : '+' + dPoint
	}

	for(let i = 0; i < fL; i++) {
		str += str.endsWith('+') || str == '' ? fPoint : '+' + fPoint
	}

	for(let i = 0; i < bL; i++) {
		str += str.endsWith('+') || str == '' ? bPoint : '+' + bPoint
	}

	numbers.innerHTML = str
	criteriaLength.textContent = criterias
	sumResult.textContent = designTotalScore + frontendTotalScore + backendTotalScore
}