//Setting date input calue to cirrent date
window.addEventListener("load", () => {
    const startInput = document.getElementById("start");
    const today = new Date();
    startInput.value = today.toISOString().split("T")[0];
})

//Handling regular addition option
document.getElementById("extra").addEventListener("change", () => {
    const choice = document.getElementById("extra");
    const choiceExtra = document.getElementById("choiceExtra");
    choiceExtra.style.display = choice.checked? "inline" : "none"
    
})

//Handlign years/months select for further reading data
function timeTypeSelect() {
    const type = document.getElementById("timeSelect").value;
    return type === "years"? 12 : 2
}

//Collecting the data from the form and validation
function readData() {
    //Collecting data
    const name = document.getElementById("productName").value;
    const type = document.getElementById("productType").value;
    const interest = parseFloat(document.getElementById("interest").value.replace(",", "."));
    const asset = parseFloat(document.getElementById("asset").value.replace(",", "."));
    const start = new Date(document.getElementById("start").value);
    const time = parseInt(document.getElementById("time").value.replace(",", ".")) * timeTypeSelect();
    let monthAdd = parseFloat(document.getElementById("monthAdd").value.replace(",", "."));
    monthAdd = isNaN(monthAdd) ? 0 : monthAdd;
    //Validation
    if (isNaN(interest) || isNaN(asset) || isNaN(time) || interest < 0 || asset < 0) {
        alert("Nieprawidłowe dane!");
        return null
    }
    
    return {
        name: name,
        type: type,
        interest: interest,
        asset: asset,
        start: start,
        time: time,
        monthAdd: monthAdd
    }
}

//Calculating income
function calculateIncome() {
    const data = readData();

    const end = new Date(data.start.toISOString());
    end.setMonth(data.start.getMonth() + data.time);
    const nextDate = new Date(data.start.toDateString());
    let income = 0;
    const dates = []; const values = []; const incomes = [];
    for (let i = 0; i <= data.time; i++){
        nextDate.setMonth(nextDate.getMonth() + 1);
        income = data.asset * data.interest / 100 / 12;
        data.asset += income + data.monthAdd;

        dates.push(nextDate.toISOString().split("T")[0]);
        values.push(data.asset.toFixed(2));
        incomes.push(income.toFixed(2));

        console.log(dates[i]+"  "+"Income: "+ incomes[i] +" Result: "+values[i])
    }
    
}

document.getElementById("run").addEventListener("click", calculateIncome)