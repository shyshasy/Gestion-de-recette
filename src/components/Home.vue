<template>
    <div class="container text-center mt-5 p-4 bg-light border rounded shadow-lg">
      <h1 class="display-4 text-warning mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
          <path d="M11 0h-6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 1h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        </svg>
        Bienvenue sur RecetteApp!
      </h1>
      <p class="lead text-dark mb-4">Découvrez, ajoutez et gérez vos recettes préférées avec une touche de fraîcheur et d'énergie.</p>
      <router-link to="/add-recipe" class="btn btn-warning btn-lg mx-2">Ajouter une Recette</router-link>
      <router-link to="/recipe-list" class="btn btn-success btn-lg mx-2">Voir Liste des Recettes</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  /* Le style spécifique est vide pour ce cas */
  </style>
  