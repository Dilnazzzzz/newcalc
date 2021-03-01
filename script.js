const skill = document.getElementsByClassName("skills");
const name = document.getElementById("name");
const age = document.getElementsByName("age");
const rep = document.getElementsByClassName("rep");
const education = document.getElementById("education");
const family = document.getElementById("family");
const button = document.getElementById('button');
const start_bid = document.getElementById("bid");
const letter = document.getElementById("letter")

const calculate = () => {
    let groom_name = name.value 
    let price = Number(start_bid.value) 
    let love_letter = letter.value;
    if (groom_name.length > 0 && price > 0) { 
        price = price * Number(education.value); 
        price = price * Number(family.value); 
        price = getCheckboxValuesReduce(skill, price);
        price = getCheckboxValuesForLoop(rep, getRadioValue(age, price));
        console.log(price);
        
        let person = { 
            first_name: groom_name,
            final_price: price,
            letter: love_letter,
            
        }
        document.getElementById("result").innerHTML = `Your final price for ${person.first_name} is ${person.final_price}, this love letter was left for you:"${person.letter}"`; 
    }
    else {
        alert(`You must insert the groom's name and the starting bid`)
    }
}


const getCheckboxValuesReduce = (html_collection, price) => { 
    let list = Array.from(html_collection)  
    let result = list.reduce((price, item) => {  
        if (item.checked) {
            return price + Number(item.value)   
        }
    },price)
    return result;
}

const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

const getCheckboxValuesForLoop = (html_collection, price) => { 
	for (let i=0; i < html_collection.length; i++) {  
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
		}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
		}
	}
	return price;
}


button.addEventListener("click", calculate);




