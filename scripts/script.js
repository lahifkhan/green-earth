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

                       
                            <button class="btn bg-[#15803D] text-white rounded-3xl">Add to Cart</button>

                        

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