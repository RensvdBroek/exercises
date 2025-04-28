const userProfile = {
    name: "Alice",
    age: 25,
    isStudent: true
}

userProfile.age = (userProfile.age + 1)
userProfile.hobby = "Pizza eten"
delete userProfile.isStudent

console.log(userProfile)