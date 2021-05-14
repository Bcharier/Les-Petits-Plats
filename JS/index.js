import { RecipeData } from './data.js'

const recipeData = new RecipeData()

function displaySelectedTags() {
    const selectedTagsDiv = document.querySelector('.tags')
    const selectedIngredients = recipeData.getSelectedIngredients()
    const selectedUstensils = recipeData.getSelectedUstensils()
    const selectedAppliance = recipeData.getSelectedAppliance()

    selectedTagsDiv.innerHTML = ''

    selectedIngredients.forEach((ingredient) => {
        const htmlBloc = getSelectedTagHtmlBloc(ingredient, 'tag-ingredients')
        selectedTagsDiv.append(htmlBloc)
        htmlBloc.addEventListener('click', () => {
            recipeData.removeSelectedIngredient(ingredient)
            displayRecipes()
        })
    })

    selectedAppliance.forEach((appliance) => {
        const htmlBloc = getSelectedTagHtmlBloc(appliance, 'tag-devices')
        selectedTagsDiv.append(htmlBloc)
        htmlBloc.addEventListener('click', () => {
            recipeData.removeSelectedAppliance(appliance)
            displayRecipes()
        })
    })

    selectedUstensils.forEach((ustensil) => {
        const htmlBloc = getSelectedTagHtmlBloc(ustensil, 'tag-ustensils')
        selectedTagsDiv.append(htmlBloc)
        htmlBloc.addEventListener('click', () => {
            recipeData.removeSelectedUstensil(ustensil)
            displayRecipes()
        })
    })

    function getSelectedTagHtmlBloc(text, style) {
        const htmlBloc = document
            .querySelector('.selectedTagTemplate')
            .content.firstElementChild.cloneNode(true)
        htmlBloc.classList.add(style)
        htmlBloc.innerHTML = text + ' <img src="./logo/cross.png" class="logo-cross">'
        return htmlBloc
    }
}


function displayDropdowns() {
    const dropdownIngredient = document.querySelector('.dropdown-ingredients')
    const dropdownAppliance = document.querySelector('.dropdown-devices')
    const dropdownUstensils = document.querySelector('.dropdown-ustensils')
    const ingredientNotFound = document.querySelector('.ingredient-not-found')
    const applianceNotFound = document.querySelector('.devices-not-found')
    const ustensilNotFound = document.querySelector('.ustensil-not-found')
    const filteredIngredients = recipeData.getFilteredIngredients()
    const filteredUstensils = recipeData.getFilteredUstensils()
    const filteredAppliance = recipeData.getFilteredAppliance()
    const dropdownArrowIngredient = document.querySelector(".chevron-down-ingredients")
    const dropdownArrowDevices = document.querySelector(".chevron-down-devices")
    const dropdownArrowUstensils = document.querySelector(".chevron-down-ustensils")
    const dropdownArrowUpIngredient = document.querySelector(".chevron-up-ingredients")
    const dropdownArrowUpDevices = document.querySelector(".chevron-up-devices")
    const dropdownArrowUpUstensils = document.querySelector(".chevron-up-ustensils")
    const dropdownMenuIngredient = document.querySelector('.dropdown-menu-ingredients')
    const dropdownMenuDevices = document.querySelector('.dropdown-menu-devices')
    const dropdownMenuUstensils = document.querySelector('.dropdown-menu-ustensils')
    const ingredientInput = document.querySelector('#input-ingredients')
    const deviceInput = document.querySelector('#input-devices')
    const ustensilInput = document.querySelector('#input-ustensils')

    ingredientInput.addEventListener('click', () => {
        dropdownMenuIngredient.style.display = "block"
        dropdownArrowUpIngredient.style.display = "block"
        dropdownArrowIngredient.classList.add("arrow-hidden")
    })

    deviceInput.addEventListener('click', () => {
        dropdownMenuDevices.style.display = "block"
        dropdownArrowUpDevices.style.display = "block"
        dropdownArrowDevices.classList.add("arrow-hidden")
    })

    ustensilInput.addEventListener('click', () => {
        dropdownMenuUstensils.style.display = "block"
        dropdownArrowUpUstensils.style.display = "block"
        dropdownArrowUstensils.classList.add("arrow-hidden")
    })


    dropdownArrowIngredient.addEventListener('click', () => {
        dropdownMenuIngredient.style.display = "block"
        dropdownArrowUpIngredient.style.display = "block"
        dropdownArrowIngredient.classList.add("arrow-hidden")
    })

    dropdownArrowDevices.addEventListener('click', () => {
        dropdownMenuDevices.style.display = "block"
        dropdownArrowUpDevices.style.display = "block"
        dropdownArrowDevices.classList.add("arrow-hidden")
    })

    dropdownArrowUstensils.addEventListener('click', () => {
        dropdownMenuUstensils.style.display = "block"
        dropdownArrowUpUstensils.style.display = "block"
        dropdownArrowUstensils.classList.add("arrow-hidden")
    })

    dropdownArrowUpIngredient.addEventListener('click', () => {
        dropdownArrowUpIngredient.style.display = "none"
        dropdownArrowIngredient.classList.remove("arrow-hidden")
        dropdownMenuIngredient.style.display = "none"
    })

    dropdownArrowUpDevices.addEventListener('click', () => {
        dropdownArrowUpDevices.style.display = "none"
        dropdownArrowDevices.classList.remove("arrow-hidden")
        dropdownMenuDevices.style.display = "none"
    })

    dropdownArrowUpUstensils.addEventListener('click', () => {
        dropdownArrowUpUstensils.style.display = "none"
        dropdownArrowUstensils.classList.remove("arrow-hidden")
        dropdownMenuUstensils.style.display = "none"
    })


    ingredientNotFound.textContent = ''
    ustensilNotFound.textContent = ''
    applianceNotFound.textContent = ''

    dropdownIngredient.innerHTML = ''
    dropdownAppliance.innerHTML = ''
    dropdownUstensils.innerHTML = ''

    if (filteredIngredients.length === 0)
        ingredientNotFound.textContent =
            "Il n'y a pas d'autre ingrédient disponible"
    if (filteredUstensils.length === 0)
        ustensilNotFound.textContent =
            "Il n'y a pas d'autre ustensil disponible"
    if (filteredAppliance.length === 0)
        applianceNotFound.textContent =
            "Il n'y a pas d'autre appareil disponible"

    filteredIngredients.forEach((ingredient) => {
        const htmlBloc = getDropdownHtmlBloc(ingredient)
        htmlBloc.addEventListener('click', () => onClickIngredient(ingredient))
        dropdownIngredient.append(htmlBloc)
    })

    filteredAppliance.forEach((appliance) => {
        const htmlBloc = getDropdownHtmlBloc(appliance)
        htmlBloc.addEventListener('click', () => onClickAppliance(appliance))
        dropdownAppliance.append(htmlBloc)
    })

    filteredUstensils.forEach((ustensil) => {
        const htmlBloc = getDropdownHtmlBloc(ustensil)
        htmlBloc.addEventListener('click', () => onClickUstensil(ustensil))
        dropdownUstensils.append(htmlBloc)
    })

    function getDropdownHtmlBloc(text) {
        const htmlBloc = document
            .querySelector('.dropdownItemTemplate')
            .content.firstElementChild.cloneNode(true)
        htmlBloc.textContent = text
        return htmlBloc
    }

    function onClickIngredient(ingredient) {
        recipeData.addSelectedIngredient(ingredient)
        displayRecipes()
        dropdownArrowUpIngredient.style.display = "none"
        dropdownArrowIngredient.classList.remove("arrow-hidden")
        dropdownMenuIngredient.style.display = "none"
        ingredientInput.value = ''
    }

    function onClickAppliance(appliance) {
        recipeData.addSelectedAppliance(appliance)
        displayRecipes()
        dropdownArrowUpDevices.style.display = "none"
        dropdownArrowDevices.classList.remove("arrow-hidden")
        dropdownMenuDevices.style.display = "none"
        deviceInput.value = ''
    }

    function onClickUstensil(ustensil) {
        recipeData.addSelectedUstensil(ustensil)
        displayRecipes()
        dropdownArrowUpUstensils.style.display = "none"
        dropdownArrowUstensils.classList.remove("arrow-hidden")
        dropdownMenuUstensils.style.display = "none"
        ustensilInput.value = ''
    }
}

function displayRecipes() {
    const recipeList = document.querySelector('.recipes-container')
    const notFound = document.querySelector('.message-not-found')
    const displayedRecipesList = recipeData.getFilteredRecipes()

    recipeList.innerHTML = ''
    notFound.textContent = ''

    if (displayedRecipesList.length === 0) {
        notFound.textContent =
            'Aucune recette ne correspond à votre critère… Vous pouvez chercher « tarte aux pommes », « poisson », etc.'
        return
    }

    displayedRecipesList.forEach((recipe) => {
        const recipeTemplate = document.querySelector('.recipe-template')
        const clone = recipeTemplate.content.cloneNode(true)
        const recipeTitle = clone.querySelector('.recipe-title')
        const recipeTimer = clone.querySelector('.recipe-timer')
        const recipeIngredients = clone.querySelector('.recipe-ingredients')
        const recipeDescription = clone.querySelector('.recipe-instructions')

        recipeTitle.textContent = recipe.name
        recipeTimer.innerHTML = '<img src="./logo/timer.png" class="logo-timer">' + recipe.time + ' min'
        recipeIngredients.innerHTML = recipe.ingredients
            .map(
                (ingredient) =>
                    ingredient.ingredient +
                    (ingredient?.quantity ? ' : ' + ingredient.quantity + ' ' : '') +
                    (ingredient.unit || '')
            )
            .join('<br>')
        recipeDescription.textContent = recipe.description

        recipeList.append(clone)
    })

    displayDropdowns()
    displaySelectedTags()
}

function searchBarFunction() {
    const searchBar = document.querySelector('.search-bar')
    const ingredientInput = document.querySelector('#input-ingredients')
    const applianceInput = document.querySelector('#input-devices')
    const ustensilInput = document.querySelector('#input-ustensils')

    searchBar.addEventListener('input', (e) => {
        if (e.target.value.length > 2) {
            recipeData.addRecipeTextFilter(e.target.value)
            displayRecipes()
        } else {
            recipeData.removeRecipeTextFilter()
            displayRecipes()
        }
    })

    ingredientInput.addEventListener('input', (e) => {
        recipeData.addIngredientTextFilter(e.target.value)
        displayDropdowns()
    })

    applianceInput.addEventListener('input', (e) => {
        recipeData.addApplianceTextFilter(e.target.value)
        displayDropdowns()
    })

    ustensilInput.addEventListener('input', (e) => {
        recipeData.addUstensilTextFilter(e.target.value)
        displayDropdowns()
    })
}

displayRecipes()
searchBarFunction()
