use serde::{Serialize, Deserialize};
use serde_json::Error;

#[derive(Serialize, Deserialize)]
struct Person {
    age: usize,
    place: String,
}

pub fn test() -> Result<String, Error> {
    let person = Person {
        age: 12,
        place: String::from("Ranst"),
    };
    
    serde_json::to_string_pretty(&person)
}