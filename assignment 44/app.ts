function make_sandwich(...items: string[]){
    console.log(`Making a sandwich with: ${items.join(', ')}.`)
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato", "ketchup");
make_sandwich("avacado", "sprouts", "mustards", "mayo");