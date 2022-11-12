# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

languages = Language.create([{language_name: "French", country: "Algeria", flag: "https://flagsworld.org/img/cflags/algeria-flag.png"}, 
    {language_name: "Kirundi", country: "Burundi", flag: "https://flagsworld.org/img/cflags/burundi-flag.png"}, 
    {language_name: "Arabic", country: "Comoros", flag: "https://flagsworld.org/img/cflags/comoros-flag.png"},
     {language_name: "English", country: "Ghana", flag: "https://flagsworld.org/img/cflags/ghana-flag.png"}])


tutors = Tutor.create([{name: "Gilbert", country: "Kenya", city: "Maralal", lessons: 200}, 
    {name: "Ajay", country: "India", city: "Bangladesh", lessons: 1000}, 
{name: 'Fish guy', country: 'USA', city: 'san francisco', lessons: 500}, {
    name: 'John doe', country: 'France', city: 'mexico', lessons: 700
}])
