console.log('App is connected');

let sellBtns;

// Protagonists of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    portfolio: [],
    garage: [],
    wallet: 0
}

const ken = {
    name: 'Ken',
    wardrobe: [],
    portfolio: [],
    garage: [],
    wallet: 0
}

class Career {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

const careerDescriptions = [
    {
        name: 'lawyer',
        description: 'works as an attorney of a high end law firm'
    },
    {
        name: 'software-engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'influencer',
        description: 'talk about stuff on social media and people say wow and i get paid'
    }
]
const careerIncomes = [
 8501,
 18501,
 2850,
 3850,
 4850,
 5850,
 6850
];
const careers = [];

const careerDropdown = document.getElementById('career-dropdown');

function populateCareerDropdown() {
    careerDescriptions.forEach(career => {
        const option = document.createElement('option');
        option.value = career.name;
        option.text = career.name; 
        careerDropdown.appendChild(option); 
    });
}

populateCareerDropdown();

careerDropdown.addEventListener('change', () => {
    const selectedCareerName = careerDropdown.value;
    const selectedCareer = careerDescriptions.find(career => career.name === selectedCareerName);
    
    if (selectedCareer) {
        const income = careerIncomes[randomization(careerIncomes.length)];
        barbie.career = new Career(selectedCareer.name, selectedCareer.description, income, `${selectedCareer.name}-${income}`);
        barbie.render();
    }
});

const randomization = (limit) => {
 return Math.floor(Math.random() * limit)
}


for (let i = 10 ; i > 0; i--){
 const job = careerDescriptions[randomization(careerDescriptions.length)]
 const income = careerIncomes[randomization(careerIncomes.length)];
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}


barbie.career = careers[randomization(careers.length)]

class Clothing {
    constructor(name, designer, color, type, size, price){
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

class Property {
    constructor(type, size, price, income){
        this.type = type;
        this.size = size;
        this.price = price;
        this.income = income;
    }
}

class Car {
    constructor (make, model, color, price, income) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.price = price;
    this.income = income;
    }
}

const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470 )
const redBottoms = new Clothing('Red Bottoms', 'Christian Loboutin', 'black', 'shoes', '6', 3000)
const rentalProp = new Property('Condo', '600 sq. ft.', 50000, 500)
const tesla = new Car ('Tezzy', 'Plaid', 'Pink', '50000', 150)


// Game Screen
const kenDiv = document.getElementById('ken');

kenDiv.innerHTML = `
<h1>${ken.name} Status</h1>
<h3>${ken.name}'s job is beach </h3>
<h3> Each week ${ken.name} takes home $${8000}</h3>
<h3> Currently ${ken.name} has $${ken.wallet} in their bank account</h3>
<div> <h2>Wardrobe Contains: </h2> 
<ul>${
    ken.wardrobe.map(((item, index) => {
        // let index = index + 1;
        // console.log(index);
        return `<li>
        ${ken.name} has a ${item.color} 
        ${item.name} made by ${item.designer}
        that is worth ${item.price} in size 
        ${item.size} 
        </li>
        <button class="sell-btn">Sell</button>
        `
    })).join('')
}</ul>
<div> <h2>Portfolio Contains: </h2> 
<ul>${
    ken.portfolio.map((item => {
        return `<li>
        ${ken.name} has a ${item.size} 
        ${item.type} that is worth $${item.price} and earns her an extra 
        $${item.income} weekly
        </li>`
    })).join('')
}</ul>
</div>
<div> <h2>Garage Contains: </h2> 
<ul>${
    ken.garage.map((item => {
        return `<li>
        ${ken.name} has a ${item.color} 
        ${item.make} that is worth $${item.price} and takes out
        $${item.income} per week.
        </li>`
    })).join('')
}</ul>
</div>
`


barbie.el = document.getElementById('barbie');

barbie.render = () => {
    barbie.el.innerHTML = `
    <h1>${barbie.name} Status</h1>
    <h3>${barbie.name} works as a ${barbie.career.name} </h3>
    <h3> Each week ${barbie.name} takes home $${barbie.career.income}</h3>
    <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
    <div> <h2>Wardrobe Contains: </h2> 
    <ul>${
        barbie.wardrobe.map(((item, index) => {
            // let index = index + 1;
            // console.log(index);
            return `<li>
            ${barbie.name} has a ${item.color} 
            ${item.name} made by ${item.designer}
            that is worth ${item.price} in size 
            ${item.size} 
            </li>
            <button class="sell-btn">Sell</button>
            `
        })).join('')
    }</ul>
    <div> <h2>Portfolio Contains: </h2> 
    <ul>${
        barbie.portfolio.map((item => {
            return `<li>
            ${barbie.name} has a ${item.size} 
            ${item.type} that is worth $${item.price} and earns her an extra 
            $${item.income} weekly
            </li>`
        })).join('')
    }</ul>
    </div>
    <div> <h2>Garage Contains: </h2> 
    <ul>${
        barbie.garage.map((item => {
            return `<li>
            ${barbie.name} has a ${item.color} 
            ${item.make} that is worth $${item.price} and takes out
            $${item.income} per week.
            </li>`
        })).join('')
    }</ul>
    </div>
`;
    sellBtns = document.querySelectorAll(".sell-btn");
    console.log(sellBtns);
    sellBtnListener(sellBtns);
}

barbie.render()

const birkinButton = document.getElementById('birkin');

birkinButton.addEventListener('click', ()=>{
    if(barbie.wallet >= birkin.price){
        barbie.wardrobe.push(birkin);
        barbie.wallet -= birkin.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const sellBirkinButton = document.getElementById('birkin-sell');

sellBirkinButton.addEventListener('click', ()=>{
    const index = barbie.wardrobe.indexOf(birkin);
    if (index !== -1) {
        barbie.wardrobe = barbie.wardrobe.slice(0, index).concat(barbie.wardrobe.slice(index + 1));
        barbie.wallet += birkin.price * (Math.floor(Math.random() * 1.3 + 0.7)+1)
        barbie.render();
    } else {
        alert("You do not have any Birkin items to sell!")
    }
})

const rbButton = document.getElementById('red-bottoms');

rbButton.addEventListener('click', ()=>{
    if(barbie.wallet >= redBottoms.price){
        barbie.wardrobe.push(redBottoms);
        barbie.wallet -= redBottoms.price;
        barbie.render();
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const sellRbButton = document.getElementById('rb-sell');

sellRbButton.addEventListener('click', () => {
    const index = barbie.wardrobe.indexOf(redBottoms);
    if (index !== -1) {
        barbie.wardrobe = barbie.wardrobe.slice(0, index).concat(barbie.wardrobe.slice(index + 1));
        barbie.wallet += redBottoms.price * (Math.floor(Math.random() * 1.3 + 0.7)+1)
        barbie.render();
    } else {
        alert("You do not have any Red Bottom items to sell!");
    }
});

const rentalButton = document.getElementById('rental');

rentalButton.addEventListener('click', ()=>{
    if(barbie.wallet >= rentalProp.price){
        barbie.portfolio.push(rentalProp);
        barbie.wallet -= rentalProp.price;
        barbie.career.income += rentalProp.income
        barbie.render();
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const sellRentalButton = document.getElementById('rental-sell');

sellRentalButton.addEventListener('click', ()=>{
    if(barbie.portfolio.includes(rentalProp)){
        barbie.portfolio.pop(rentalProp)
        barbie.wallet += rentalProp.price * (Math.floor(Math.random() * 1.3 + 0.7)+1)
        barbie.career.income -= rentalProp.income
        barbie.render();
    } else {
        alert("You do not have any Portfolio items to sell!")
    }
})

const workButton = document.getElementById('work');
let isCooldownActive = false;

workButton.addEventListener('click', () => {
    if (isCooldownActive) {
        return; // returning that its active below is the code if its true button is gonna be disabled.
    }

    workButton.disabled = true;
    isCooldownActive = true;

    // render still in here to refresh the whole income
    barbie.wallet += barbie.career.income;
    barbie.render();

    let cooldownDuration = 2; // CD COOLDOWN is 2 sec
    workButton.textContent = `Cooldown: ${cooldownDuration} seconds`;

    const countdownInterval = setInterval(() => {
        cooldownDuration--;
        if (cooldownDuration <= 0) { // text less then or equal to 0 seconds will enable the button
            clearInterval(countdownInterval);
            workButton.textContent = 'Work';
            workButton.disabled = false;
            isCooldownActive = false;
        } else {
            workButton.textContent = `Cooldown: ${cooldownDuration} seconds`; // displayes text context of seconds left
        }
    }, 1000); // every 1 sec
});

function sellBtnListener(buttons) {
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", ()=> {            
            sellItem(index)
        })
    })
}

const tezzyButton = document.getElementById('tezzy');

tezzyButton.addEventListener('click', ()=>{
    if(barbie.wallet >= tesla.price){
        barbie.garage.push(tesla);
        barbie.wallet -= tesla.price;
        barbie.career.income -= tesla.income;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

function sellItem(itemIdx) {
    
    // calculate sell price
    
    const randomMultiplier = Math.floor(Math.random() * 1.3 + 0.7) + 1;
    const earnings = barbie.wardrobe[itemIdx].price * randomMultiplier;
    barbie.wallet += earnings;

    // remove item from wardrobe
    barbie.wardrobe.splice(barbie.wardrobe[itemIdx],1);
    console.log(barbie.wardrobe);
    
    barbie.render();

}