# pokemonApp 
https://PokemonAppV2.beor.repl.co
Background
  <ul> Pokemon is a well-known franchise. In the world of Pokémon, there are pokemon and Trainers. Pokemon are animals with interesting attributes and Trainers is the term commonly used for a person who catches and trains Pokémon. Usually, the goal of trainers is to catch ‘em all.</ul> 

Proposal
<ul> 
  Create an application where a trainer can create an account and have them add/remove their the pokemon they have. 
</ul> 
Views:
<ul> 
  Without logging in:
    Home
    Log in 
    Register
    Pokedex Lookup - to cassually look at the avaible pokemon 
  After logging in:
    Account - shows name and pokemon captured from user
    Trainer Lookup - shows name, age, email of all users
    TrainerPokedexlookup to add pokemon from the pokedexlist
</ul> 

Models:
<ul> 
  Pokemon: It can handle the following requests.
    //get all pokemon
    router.get("/", (req, res) => 
    // POST (New Pokemon)
    router.post("/", (req, res) => 
    //find pokemon based on pokemon name or type
    router.get("/:id", (req, res) => 
    //find pokemon based on pokemon name 
    router.get("/name=/:id", (req, res) 
  User:
    // GET (Read All Users)
    router.get("/", (req, res) => {

    // POST (New User)
    router.post("/", (req, res) => {

    // POST Log in
    router.post("/login", (req, res) => {
  
    //Post Register
    router.post("/register", (req, res) => {

    //find user by name or email
    router.get("/:id", (req, res) => {
 


    //add pokemon to your team
    router.patch("/:id", (req, res) => {
    
    })
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





![image](https://user-images.githubusercontent.com/51274827/222938011-97641fd0-b55e-453d-a7b1-48a24f983e1a.png)
![image](https://user-images.githubusercontent.com/51274827/222938047-003c1711-bb31-4bea-93fd-1fadc8f45464.png)
![image](https://user-images.githubusercontent.com/51274827/222938050-0d208ffc-e4c3-44d6-bbed-69d4ea18e5a1.png)


