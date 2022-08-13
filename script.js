console.log("hello from React")

let url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
let tbody = document.querySelector("tbody")
let details = document.getElementById("info-wrapper")
let input = document.querySelector("input")

function getTableData(tableData) {
    for (let i = 0; i < tableData.length; i++) {
        let displayTableData = tableData[i]
        let tr = document.createElement("tr")
        tr.classList.add("data-row")
        tr.innerHTML = ` <td class="column1">${displayTableData.id}</td>
                  <td class="column2">${displayTableData.firstName}</td>
                  <td class="column3">${displayTableData.lastName}</td>
                  <td class="column4">${displayTableData.email}</td>
                  <td class="column5">${displayTableData.phone}</td>`
        tbody.append(tr)
    }


    function onclickHandler(e) {
        details.lastChild.innerHTML = '';

        for (let i = 0; i < tableData.length; i++) {
            let displayTableData = tableData[i]
            if (displayTableData.id == e.target.parentNode.children[0].innerHTML) {

                console.log(displayTableData)
                let infocontent = document.createElement("div")
                infocontent.id = "info-content"
                infocontent.innerHTML = ` 
                <div><b>User selected:</b> ${displayTableData.firstName} ${displayTableData.lastName}</div>
                <div> <b>Description: </b>
                 <textarea cols="50" rows="5" readonly> ${displayTableData.description}</textarea>
                </div>
               <div><b>Address:</b> ${displayTableData.address.streetAddress}</div>
                <div><b>City:</b> ${displayTableData.address.city}</div>
                <div><b>State:</b> ${displayTableData.address.state}</div>
                <div><b>Zip:</b> ${displayTableData.address.zip}</div>`
                details.append(infocontent)

                let allRows = document.querySelectorAll("tr")
                for (let i = 0; i < allRows.length; i++) {
                    allRows[i].classList.remove("active")
                }
                e.target.parentNode.classList.add("active")
            }
        }
    }

   tbody.addEventListener('click', onclickHandler)
    
}

let tableData = []


$.ajax({
    method: 'GET',
    url: "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",
    success: function (data) {
        console.log(data)
        tableData = data,
            getTableData(tableData)
    },
    error: function (error) {
        console.log(error)
    }
})

