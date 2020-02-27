function сreateTags(tagName) {
	const myTag = document.createElement(tagName)
	return myTag
}

function createTable(elem, quantTr, quantTd, className) {
	for (let i = 0; i < quantTr; i++) {
		let tr = document.createElement("tr")
		for (j = 0; j < quantTd; j++) {
			let td = document.createElement("td")
			tr.appendChild(td)
			td.classList.add(className)
		}
		elem.appendChild(tr)
	}
}

function createMarkup() {
	const main = document.body.appendChild(сreateTags("main"))
	const table = main.appendChild(сreateTags("table"))
	const thead = table.appendChild(сreateTags("thead"))
	const tbody = table.appendChild(сreateTags("tbody"))
	createTable(thead, 1, 2, "tableHead")
	createTable(tbody, 10, 2, "Tablebody")
	setTimeout(() => {
		main.remove()
	}, 90000)
}

function createDataArrHead() {
	const headArr = ["Array method", "Mutatable"]
	return headArr
}

function createDataArrBody() {
	const bodyArr = ["filter ", "false", "map", "false", "reverse", "true", "push", "true",
		"includes", "false", "slice", "false", "find", "false", "concat", "false", "pop", "true", "some", "false"
	]
	return bodyArr
}

function addTextInTable(targetArr, className) {
	const tableElem = document.querySelectorAll(className)
	for (let i = 0; i < tableElem.length; i++) {
		tableElem[i].innerText = targetArr[i]
		if (tableElem[i].innerText === "true") {
			tableElem[i].classList.add("tableBodySecond")
			tableElem[i - 1].classList.add("tableBodySecond")
		} else if (tableElem[i].innerText === "false") {
			tableElem[i].classList.add("tableBodyfourth")
			tableElem[i - 1].classList.add("tableBodyfourth")
		}
	}
	return tableElem
}

function classToggle(className, newClassName) {
	const tableElem = document.querySelectorAll(className)
	for (let i = 0; i < tableElem.length; i++) {
		tableElem[i].classList.toggle(newClassName)
	}
}

function main() {
	createMarkup()
	addTextInTable(createDataArrHead(), ".tableHead")
	addTextInTable(createDataArrBody(), ".Tablebody")
	setInterval(() => classToggle(".tableBodySecond", "tableBodyThird"), 3000)
	setTimeout(() => classToggle(".tableBodyThird", "tableBodyFifth"), 5000)
	setTimeout(() => classToggle(".tableBodyThird", "tableBodyFifth"), 15000)
}

main()