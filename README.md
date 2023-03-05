# pokemonApp 
https://PokemonAppV2.beor.repl.co
<ul></ul> 
Background
  <ul> Pokemon is a well-known franchise. In the world of Pokémon, there are pokemon and Trainers. Pokemon are animals with interesting attributes and Trainers is the term commonly used for a person who catches and trains Pokémon. Usually, the goal of trainers is to catch ‘em all.</ul> 

Proposal
<ul> 
  Create an application where a trainer can create an account and have them add/remove their the pokemon they have. 
</ul> 
Views:
<ul> 
  Without logging in:
   <ul>  
     <li>Home</li>
     <li> Log in 
     <li> Register</li>
     <li> Pokedex Lookup - to cassually look at the avaible pokemon </li>
     </ul> 
  After logging in:
  <ul> 
    <li>Account - shows name and pokemon captured from user</li>
    <li>Trainer Lookup - shows name, age, email of all users</li>
    <li>TrainerPokedexlookup to add pokemon from the pokedexlist</li>
   </ul> 
</ul> 

Application Behavior:
<ul>  The application will not load pages Account, Trainer lookup, TrainerPokedexlookup without loggin in. If going to those views without loggin in (session (username="")) will result in a redirect to home page and an alert.

User can log in and create account.
Once logged in user's information can load onto the account link. they can add pokemon in the trianer pokedex link, remove pokemon on thier account link and view the trainer list.
</ul> 
It incorporate all the below components/technologies:
<ul> 
  <li> SPA (Single Page Application)</li>
  <li> Node w/Express</li>
  <li> MongoDB for storage</li>
  <li> AngularJS for the front-end.</li>
</ul> 


