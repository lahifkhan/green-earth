console.log("connected");

const removeActiveClass = () =>{
    const allCategoryBtn = document.querySelectorAll(".cat-btn");

    for(const cat of allCategoryBtn){
        cat.classList.remove("bg-[#15803D]","text-white");
    }

}

const loadCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
}

// load category wise tree 
const loadCategoryTree =(id)=>{
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => {
         displayCategoryTree(data.plants);
         removeActiveClass();
         const catBtn = document.getElementById(`category-${id}`);
         catBtn.classList.add("bg-[#15803D]","text-white");


    }
);
}
 
// load all plants 
const loadAllPlants =()=>{
    
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data=> displayCategoryTree(data.plants));

}
loadAllPlants();

const handleAllTreeActv =()=>{
    removeActiveClass();
    document.getElementById("all-tree-0").classList.add("bg-[#15803D]","text-white");
}


// add to cart
let addToCart = [];

let totalPrice = Number(document.getElementById("total-price").innerText)

const loadAddToCart =(e) =>{
    // console.log(e.target.parentNode.childNodes[5].childNodes[3].childNodes[1].innerText);
    const id = e.target.parentNode.id;
    const name = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    const price = Number(e.target.parentNode.childNodes[5].childNodes[3].childNodes[1].innerText);
    totalPrice= totalPrice+price;
    alert(`${name} has been added to the cart`);
    addToCart.push(
        {
            id:id,
            name:name,
            price: price
        }
    )
    showAddToCart(addToCart);
    
}


// show add to cart
const showAddToCart =(carts) =>{



    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML="";
    if(carts.length ===0){
        document.getElementById("total-price-container").classList.add("hidden");
        return;
    }
    carts.forEach(cart =>{
        const cartBox = document.createElement("div");
        cartBox.innerHTML=`
             <div class="cart flex justify-between items-center space-y-2 mt-2 bg-[#F0FDF4] p-2">
              <div class="">
                <p class="font-bold">${cart.name}</p>
                <p class="text-[#1f2937]">৳${cart.price} x 1</p>
              </div>
              <div>
                <button onclick="handleCartDelete(${cart.id})" >❌</button>
              </div>
            </div>
        `
        cartContainer.append(cartBox);
    })
    document.getElementById("total-price-container").classList.remove("hidden");
    document.getElementById("total-price").innerText=totalPrice;
}

// handleCartDelete

const handleCartDelete =(id) =>{
    console.log(id);

    const newFillterCart = addToCart.filter(cart => cart.id !=id);
    addToCart=newFillterCart;

    let newTotalPrice =0;
    addToCart.forEach(cart=>{
        newTotalPrice += Number(cart.price);
    });

    totalPrice=newTotalPrice;

    showAddToCart(addToCart);
    console.log(newTotalPrice);
    console.log(addToCart);
}


// display category wise tree
const displayCategoryTree = (trees) =>{
    const treeCardContainer = document.getElementById("tree-card-container");
    treeCardContainer.innerHTML="";
    trees.forEach(tree => {
        const treeCard = document.createElement("div");
        treeCard.innerHTML=`
            <div id="${tree.id}" class ="tree-card flex flex-col justify-between h-full space-y-3 bg-white p-3 rounded-md">
                        <div class="w-full h-48 overflow-hidden">
                            <img class=" object-cover h-full w-full rounded-md" src="${tree.image}" alt="">

                        </div>

                        <div class="space-y-1">
                            <h1 class="font-bold">${tree.name}</h1>
                            <p>${tree.description}</p>
                        </div>

                        <div class="flex justify-between items-center">
                            <button class="btn bg-[#DCFCE7] rounded-2xl text-[#15803D]">${tree.category}</button>
                            <p class="font-bold">৳<span>${tree.price}</span></p>
                        </div>

                       
                            <button onclick="loadAddToCart(event)" class="btn bg-[#15803D] text-white rounded-3xl">Add to Cart</button>

                        

                    </div>

        
        `;
        treeCardContainer.append(treeCard);
    })

}

const displayCategories =(categories) =>{
    console.log(categories);
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML="";

    categories.forEach(cat => {
        const category = document.createElement("div");
        category.innerHTML=`
            <button id="category-${cat.id}" onclick="loadCategoryTree(${cat.id})" class="cat-btn text-center md:text-left cursor-pointer hover:bg-[#15803D] hover:text-white p-1 w-full">${cat.category_name}</button>
        `;

        categoriesContainer.append(category);
        
    });


}




loadCategories();

